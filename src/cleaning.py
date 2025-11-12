import pandas as pd
import numpy as np




# csv = "../data/raw_orders.csv"

def main(df: pd.DataFrame) -> pd.DataFrame:
    df = clean_strings(df)
    df = parse_cost(df)
    df = string_change(df)
    df = signup_order(df)
    df = truthy_falsy(df)
  
    return df


def clean_strings(df: pd.DataFrame) -> pd.DataFrame:
    df = df.dropna(subset=["order_id", "order_date"]).copy()
    
    df["discount"] = (
        df["discount"]
        .replace({"—": np.nan, "N/A": np.nan, "": np.nan})
        .fillna("0")
    )
    
    for col in ["country", "state", "city", "currency", "payment_method"]:
        df[col] = (
            df[col]
            .astype(str)
            .str.strip()
            .str.lower()
            .replace({"—": np.nan, "": np.nan})
        )
    
    return df



# money
def parse_money(s: pd.Series) -> pd.Series:
    s = s.astype(str).str.strip()
    s = (s.str.replace(r'(?i)\busd|eur|gbp|\$|€|£', '', regex=True)
           .str.replace(r'(?i)free|calculated at checkout', '', regex=True)
           .str.replace(',', '.', regex=False)
           .str.replace(r'\s+', '', regex=True))
    return pd.to_numeric(s, errors="coerce")

# Parse Cost
def parse_cost(df: pd.DataFrame) -> pd.DataFrame:
    df["unit_price_num"] = parse_money(df["unit_price"])
    df["shipping_cost_num"] = parse_money(df["shipping_cost"])
    df["total_num"] = parse_money(df["total"])
    return df


# String Changes
def string_change(df: pd.DataFrame) -> pd.DataFrame:
    word_to_int = {"one": 1, "two": 2, "three": 3, "ten": 10}
    
    q = df["quantity"].astype(str).str.strip().str.lower()
    q = q.replace(word_to_int)
    q = q.str.replace(r'%', '', regex=True)
    q = q.replace({"": np.nan, "—": np.nan})
    q = pd.to_numeric(q, errors="coerce")
    
    df["quantity_num"] = q
    return df



def signup_order(df: pd.DataFrame) -> pd.DataFrame:
    df["signup_dt"] = pd.to_datetime(df["signup_date"], errors="coerce")

    df["order_dt"]  = pd.to_datetime(df["order_date"],  errors="coerce")
    return df

def truthy_falsy(df: pd.DataFrame) -> pd.DataFrame:

    truthy = {"1","true","yes","y","t"}
    falsy  = {"0","false","no","n","f"}

    s = df["is_first_order"].astype(str).str.strip().str.lower()
    df["is_first_order_bool"] = np.where(s.isin(truthy), True,
        np.where(s.isin(falsy), False, np.nan))
    df["unit_price_log"] = np.log1p(df["unit_price_num"].clip(lower=0))
    return df




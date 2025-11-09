import pandas as pd
import numpy as np


# What you likely need to tweak in your notebook

# Order of operations: do strings → money → quantities → dates → booleans →
# key drops → features → validate → write. Keep derived stuff at the end.

# No globals: each step should take a DataFrame in, return a DataFrame out.
# One small coordinator does read/run/write.

# Finish each function: keep truthy/falsy sets inside the boolean step; return the result;
# avoid stray lines running outside functions.

# Assertions with messages: your two asserts are great—add friendly messages and a couple more
# (keys non-null, numeric dtypes correct).

# Tiny logs: after each step, print shape deltas and key counts changed (e.g., “discount: 101 null → 0”).


csv = "../data/raw_orders.csv"

def main(csv: str):
    df = pd.read_csv(csv)
    df = clean_strings(df)
    df = parse_cost(df)
    df = parse_quantity(df)
    df = parse_dates(df)
    df = parse_booleans(df)
    validate(df)
    write(df)


def df_description(csv):
    df = df.dropna(subset=["order_id", "order_date"])
    df["discount"] = df["discount"].replace({"—": np.nan, "N/A": np.nan, "": np.nan})
    df["discount"] = df["discount"].fillna("0")

    for col in ["country", "state", "city", "currency", "payment_method"]:
        df[col] = (
            df[col]
            .astype(str)
            .str.strip()
            .str.lower()
            .replace({"—": np.nan, "": np.nan})
    )


# money
def parse_money(s: pd.Series) -> pd.Series:
    s = s.astype(str).str.strip()
    s = (s.str.replace(r'(?i)\busd|eur|gbp|\$|€|£', '', regex=True)
           .str.replace(r'(?i)free|calculated at checkout', '', regex=True)
           .str.replace(',', '.', regex=False)
           .str.replace(r'\s+', '', regex=True))
    return pd.to_numeric(s, errors="coerce")

# Parse Cost
def parse_cost(csv):
    df["unit_price_num"] = parse_money(df["unit_price"])
    df["shipping_cost_num"] = parse_money(df["shipping_cost"])
    df["total_num"] = parse_money(df["total"])


# String Changes
def string_change(csv):

    word_to_int = {"one":1, "two":2, "three":3, "ten":10}
    q = df["quantity"].astype(str).str.strip().str.lower()
    q = q.replace(word_to_int)
    q = q.str.replace(r'%', '', regex=True)
    q = q.replace({"": np.nan, "—": np.nan})
    pd.to_numeric(..., errors="coerce")



def signup_order(csv):
    df["signup_dt"] = pd.to_datetime(df["signup_date"], errors="coerce")

    df["order_dt"]  = pd.to_datetime(df["order_date"],  errors="coerce")


def truthy_falsy(csv):

    truthy = {"1","true","yes","y","t"}
    falsy  = {"0","false","no","n","f"}

s = df["is_first_order"].astype(str).str.strip().str.lower()
df["is_first_order_bool"] = np.where(s.isin(truthy), True,
                               np.where(s.isin(falsy), False, np.nan))


assert df["order_id"].isna().sum() == 0
assert df["unit_price_num"].dtype.kind in "fi"






df["unit_price_log"] = np.log1p(df["unit_price_num"].clip(lower=0))


def clean_func():

    df_clean = df.copy()
    df_clean.to_csv("../data/processed/clean_orders.csv", index=False)

main(csv)
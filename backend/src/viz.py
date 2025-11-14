import matplotlib.pyplot as plt
import seaborn as sns


# def main(clean_csv: str):





def hist_plot():
    sns.histplot(df["unit_price_num"].dropna(), bins=30, kde=True)
    plt.title("Unit Price Distribution")
    plt.xlabel("Unit Price"); plt.ylabel("Count")
    plt.tight_layout(); plt.show()


def scatter_plot():
    sns.scatterplot(data=df, x="unit_price_num", y="total_num", alpha=0.5)
    plt.title("Total vs Unit Price")
    plt.tight_layout(); plt.show()


def top_categories():

    top_cats = (
        df.groupby("category", dropna=False)["total_num"]
        .mean()
        .sort_values(ascending=False)
        .head(10)
        .reset_index())
    
    sns.barplot(data=top_cats, x="category", y="total_num")
    plt.title("Avg Total by Category")
    plt.xticks(rotation=30, ha="right")
    plt.tight_layout(); plt.show()



def month_orders():

    orders_by_month = (
        df.dropna(subset=["order_dt"])
        .assign(month=lambda d: d["order_dt"].dt.to_period("M"))
        .groupby("month")["total_num"]
        .sum()
        .sort_index())
    orders_by_month.plot(kind="line")
    plt.title("Monthly Revenue")
    plt.xlabel("Month"); plt.ylabel("Revenue")
    plt.tight_layout(); plt.show()


# main()
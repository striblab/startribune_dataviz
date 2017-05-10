import pandas as pd

a = pd.read_csv("inventory_neqeq.csv")
b = pd.read_csv("realtorsCity_ForDataViz.csv")
b = b.dropna(axis=1)
merged = a.merge(b, on='GEOID')
merged.to_csv("merged.csv", index=False)
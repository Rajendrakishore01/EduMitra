from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

print("MONGO_URI =", os.getenv("MONGO_URI"))
print("DB_NAME =", os.getenv("DB_NAME"))

client = MongoClient(os.getenv("MONGO_URI"))

db = client[os.getenv("DB_NAME")]

users_collection = db["users"]
resources_collection = db["resources"]
opportunities_collection = db["opportunities"]
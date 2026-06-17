from fastapi import APIRouter
from models import UserRegister, UserLogin
from database import users_collection
from passlib.context import CryptContext

router = APIRouter()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

@router.post("/register")
def register(user: UserRegister):

    existing = users_collection.find_one({"email": user.email})

    if existing:
        return {"message": "User already exists"}

    hashed_password = pwd_context.hash(user.password)

    users_collection.insert_one({
        "name": user.name,
        "email": user.email,
        "password": hashed_password
    })

    return {"message": "Registration Successful"}

@router.post("/login")
def login(user: UserLogin):

    db_user = users_collection.find_one({"email": user.email})

    if not db_user:
        return {"message": "User not found"}

    if not pwd_context.verify(user.password, db_user["password"]):
        return {"message": "Invalid password"}

    return {
        "message": "Login Successful",
        "user": db_user["name"]
    }
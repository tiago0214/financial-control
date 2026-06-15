from pydantic import BaseModel, Field

class UserInput(BaseModel):
    name: str = Field(..., min_length=3)
    email: str = Field(..., min_length=3)
    password: str = Field(..., min_length=3) 
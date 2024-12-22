from pydantic import BaseModel
from typing import Optional

class TaskBase(BaseModel):
    title: str
    description: Optional[str] = None
    priority: int
    completed: bool = False

class TaskCreate(TaskBase):
    pass  # Inherits fields from TaskBase

class TaskResponse(TaskBase):
    id: int

    class Config:
        orm_mode = True  # Required to convert ORM objects to JSON

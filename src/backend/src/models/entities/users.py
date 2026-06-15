from sqlalchemy import Table, Column, String, Integer
from src.models.settings.metadata import metadata

Users = Table(
    "users",
    metadata,
    Column("id", Integer,primary_key=True),
    Column("name", String, nullable=False),
    Column("email", String, nullable=False, unique=True),
    Column("password", String, nullable=False)
)
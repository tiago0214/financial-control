import pytest
from .users_repository import UsersRepository

@pytest.mark.asyncio
@pytest.mark.skip(reason="Insert in the db")
async def test_insert_user():
    user = {
        "name": "TestUser",
        "email": "test@test.com",
        "password_hash": "senha_segura"
    }

    repo = UsersRepository()

    await repo.insert_user(user)

@pytest.mark.asyncio
async def test_get_user_by_name():
    repo = UsersRepository()

    result = await repo.get_user_by_name("TestUser")

    print(result)
import pytest
from .register_user import RegisterUser

class UserRepositoryMock:
    def __init__(self):
        self.insert_user_data = {}

    async def insert_user(self, user_data: dict):
        self.insert_user_data["user_data"] = user_data

@pytest.mark.asyncio
async def test_register_user():
    user_repository = UserRepositoryMock()
    user_register = RegisterUser(user_repository)

    user_data = {
        "name": "Tiago",
        "email": "test@tt.com",
        "password": "123123123",
    }

    response = await user_register.register_user(user_data)

    assert response["count"] == 1
    assert response["type"] == "USERS"
    assert response["data"] == user_data

    assert user_repository.insert_user_data["user_data"] == user_data

@pytest.mark.asyncio
async def test_register_invalid_user_name():
    user_repository = UserRepositoryMock()
    user_register = RegisterUser(user_repository)

    invalid_user_data = {
        "name": "Ti",
        "email": "test@tt.com",
        "password": "123123123",
    }

    with pytest.raises(Exception) as excinfo:
        await user_register.register_user(invalid_user_data)

    assert str(excinfo.value) == "O nome deve ter mais que 3 characteres!"
    assert user_repository.insert_user_data == {}

@pytest.mark.asyncio
async def test_register_invalid_user_email():
    user_repository = UserRepositoryMock()
    user_register = RegisterUser(user_repository)

    invalid_user_data = {
        "name": "Tiago",
        "email": None,
        "password": "123123123",
    }

    with pytest.raises(Exception) as excinfo:
        await user_register.register_user(invalid_user_data)

    assert str(excinfo.value) == "O email é o obrigatório!"
    assert user_repository.insert_user_data == {}
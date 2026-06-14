import pytest
from .find_user import FindUser

class UserRepositoryMock:
    def __init__(self):
        self.get_user_by_name_data = {}

    async def get_user_by_name(self, user_name: dict) -> list[dict]:
        self.get_user_by_name_data["user_name"] = user_name

        return [{"user_name": "Olá"},{"user_name": "mundo"}]

@pytest.mark.asyncio 
async def test_get_user_by_name():
    user_repository = UserRepositoryMock()
    find_user = FindUser(user_repository)

    user_name = "tiago"

    response = await find_user.get_user_by_name(user_name)

    assert user_repository.get_user_by_name_data["user_name"] == user_name

    assert response["type"] == "USERS"
    assert response["count"] == 2
    assert "data" in response

    assert isinstance(response["data"], list)
    assert isinstance(response["data"][0], dict)

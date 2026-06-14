from src.models.repository.interfaces.users_repository import UsersRepositoryInterface
from .interfaces.find_user import FindUserInterface

class FindUser(FindUserInterface):
    def __init__(self, users_repository: UsersRepositoryInterface) -> None:
        self.users_repository = users_repository

    async def get_user_by_name(self, user_name: str) -> dict:
        users = await self.users_repository.get_user_by_name(user_name)

        return {
            "type" : "USERS",
            "count" : len(users),
            "data": users
        }
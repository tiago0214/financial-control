from src.models.repository.interfaces.users_repository import UsersRepositoryInterface

class FindUser:
    def __init__(self, users_repository: UsersRepositoryInterface) -> None:
        self.users_repository = users_repository

    async def get_user_by_name(self, user_name: str) -> dict:
        users = await self.users_repository.get_user_by_name(user_name)

        return {
            "type" : "USER",
            "count" : len(users),
            "data": users
        }
from src.models.repository.interfaces.users_repository import UsersRepositoryInterface

class RegisterUser:
    def __init__(self, users_repository: UsersRepositoryInterface) -> None:
        self.users_repository = users_repository

    async def register_user(self, user_data: dict) -> dict:
        self.__validate_user_data(user_data)
        await self.__register_user(user_data)
        return self.__format_response(user_data)

    def __validate_user_data(self, user_data: dict) -> None:
        user_name = user_data["name"]
        password = user_data["password"]
        email = user_data["email"]

        if user_name.length < 3:
            raise Exception("O nome deve ter mais que 3 characteres!")
        
        if password.length < 6:
            raise Exception("A senha deve ter mais que 6 characteres!")
        
        if email is None:
            raise Exception("O email é o obrigatório!")
        
    async def __register_user(self, user_data: dict) -> None:
        await self.users_repository.insert_user(user_data) 

    async def __format_response(self, user_data: dict) -> dict:
        return {
            "type": "USER",
            "count": 1,
            "data": user_data
        }
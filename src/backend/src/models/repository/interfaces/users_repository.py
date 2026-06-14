from abc import ABC, abstractmethod

class UsersRepositoryInterface(ABC):
    @abstractmethod
    async def insert_user(self, user_infos: dict) -> None: pass

    @abstractmethod
    async def get_user_by_name(self, user_name): pass
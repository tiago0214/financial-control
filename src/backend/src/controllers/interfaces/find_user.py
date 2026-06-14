from abc import ABC, abstractmethod

class FindUserInterface(ABC):
    @abstractmethod
    async def get_user_by_name(self, user_name: str) -> dict: pass
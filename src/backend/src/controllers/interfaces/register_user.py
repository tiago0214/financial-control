from abc import ABC, abstractmethod

class RegisterUserInterface(ABC):
    @abstractmethod
    async def register_user(self, user_data: dict) -> dict: pass
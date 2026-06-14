from src.controllers.interfaces.register_user import RegisterUserInterface
from .http_types.http_request import HttpRequest
from .http_types.http_response import HttpResponse

class RegisterUserView:
    def __init__(self, controller: RegisterUserInterface) -> None:
        self.controller = controller

    async def handle_register_user(self, http_request: HttpRequest) -> HttpResponse:
        user_data = http_request.body
        reponse = await self.controller.register_user(user_data)

        return HttpResponse(
            status_code= 201,
            body= reponse
        )
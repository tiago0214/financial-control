from src.controllers.interfaces.find_user import FindUserInterface
from .http_types.http_request import HttpRequest
from .http_types.http_response import HttpResponse

class FindUserView:
    def __init__(self, controller: FindUserInterface):
        self.controller = controller

    async def handle_get_user_by_name(self, http_request: HttpRequest) -> HttpResponse:
        user_name = http_request.path_params["name"]
        response = await self.controller.get_user_by_name(user_name)

        return HttpResponse(
            status_code=200,
            body=response
        )
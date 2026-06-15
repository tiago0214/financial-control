from fastapi import APIRouter
from fastapi.responses import JSONResponse
from src.views.http_types.http_request import HttpRequest
from src.validators.register_user_validator import UserInput

from src.main.composer.find_user_composer import find_user_composer
from src.main.composer.register_user_composer import register_user_composer

users_routes = APIRouter(tags=["Usuários"])

@users_routes.post("/users")
async def create_user(body:UserInput):
    http_request = HttpRequest(body=dict(body))
    register_user = register_user_composer()

    response = await register_user.handle_register_user(http_request)

    return JSONResponse(
        content= response.body,
        status_code=response.status_code
    )

@users_routes.get("/users/{name}")
async def get_user_by_name(name: str):
    http_request = HttpRequest(path_params={"name": name})
    find_user = find_user_composer()

    response = await find_user.handle_get_user_by_name(http_request)

    return JSONResponse(
        content=response.body,
        status_code=response.status_code
    )
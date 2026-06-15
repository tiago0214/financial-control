from src.controllers.register_user import RegisterUser
from src.models.repository.users_repository import UsersRepository
from src.views.register_user_view import RegisterUserView

def register_user_composer():
    model = UsersRepository()
    controller = RegisterUser(model)
    view = RegisterUserView(controller)

    return view
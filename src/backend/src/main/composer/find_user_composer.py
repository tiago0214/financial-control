from src.controllers.find_user import FindUser
from src.models.repository.users_repository import UsersRepository
from src.views.find_user_view import FindUserView

def find_user_composer():
    model = UsersRepository()
    controller = FindUser(model)
    view = FindUserView(controller)

    return view
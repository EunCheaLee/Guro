from django.urls import path
from . import views

urlpatterns = [
    # views.hello가 api다.(요청)
    path("emp/", views.employees, name="employees"),
    path("emp/<str:name>", views.employee_delete, name="employee_delete"),
]
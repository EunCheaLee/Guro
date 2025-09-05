from django.http import HttpResponse
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .models import Employee
from .serializers import EmployeeSerializer

# Create your views here.
# def hello(request):
#     return HttpResponse("Hello World!")

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def employees(request):
    if request.method == 'GET':
        infos = Employee.objects.all()  # json 구조
        # 몽고db의 문법과 유사하다.
        return Response(EmployeeSerializer(infos, many=True).data)
    resp = request.data
    serializer = EmployeeSerializer(data=resp)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['Delete'])
@permission_classes([AllowAny])
def employee_delete(request, name):   # request: 주소 자리, pk: 파라미터 자리
    emp = get_object_or_404(Employee, name=name)
    emp.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
from django.contrib import admin

from app.models import Employee


# Register your models here.
@admin.register(Employee)
class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'age', 'job', 'language', 'pay')
    ordering = ("-id",) # 최신 등록이 맨 위로 올라가게 만든다. 날짜를 역순으로 만든다.
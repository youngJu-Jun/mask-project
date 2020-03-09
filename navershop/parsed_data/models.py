# parsed_data/models.py
from django.db import models

class naverData(models.Model):
    title = models.CharField(max_length=200) #일단 모두 CharField로 설정 해둠 수정 필요
    price = models.CharField(max_length=200) #파싱되는 정보와 저장되는 정보 수정 필요
    review = models.CharField(max_length=200)
    buy_num = models.CharField(max_length=200)

# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
import bs4
import pandas as pd
import os
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "navershop.settings")
import django
django.setup()
from parsed_data.models import naverData

t_list = []
n_list = []
r_list = []
p_list = []

def parse_naver():

    keyword = "kf94"
    driver = webdriver.Chrome("/usr/local/bin/chromedriver") #크롬 드라이버 경로 설정
    driver.get('https://search.shopping.naver.com/search/all.nhn?where=all&frm=NVSCTAB&query={}'.format(keyword))

    item_source = bs4.BeautifulSoup(driver.page_source, 'lxml')
    item_list = item_source.find_all('div', class_='info')

    for item in item_list[4:]:
        title = item.find('a').text.replace('\n', '')
        price = item.find('span', class_='num').text
        if item.find_all('a', class_='graph'):
            review = item.find_all('a', class_='graph')[0].text
            if len(item.find_all('a', class_='graph')) == 2:
                buy_num = item.find_all('a', class_='graph')[1].text
            else:
                buy_num = '없음'

        t_list.append(title)
        p_list.append(price)
        r_list.append(review.replace('리뷰',''))
        n_list.append(buy_num.replace('구매건수',''))

    data = pd.DataFrame({'상품명':t_list, '가격':p_list, '리뷰수':r_list, '구매건수':n_list})
    print (data)
    data.to_csv("./mask.csv")
    return data

if __name__=='__main__':
    naver_data_dict = parse_naver()
    for t, p in naver_data_dict.items():
        naverData(title=t, price=p).save()

update products set extend = JSON_REPLACE(extend,'$.img_for_recommend','/himo/qinglv_recomend.png') where id = 28397;
update products set extend = JSON_REPLACE(extend,'$.img_for_recommend','/himo/guimi_recomend.png') where id = 28398;
update products set extend = JSON_REPLACE(extend,'$.img_for_recommend','/himo/jiehundengji_recomend.png') where id = 25462;
update products set extend = '{"host": "https:\/\/cdn.haimati.cn", "samples": [], "explanation_text": [], "service_item_set": {}, "people_num_config": [{"id": 1, "name": "清愈拍摄人数", "max_num": 4, "min_num": 1}, {"id": 2, "name": "清愈拍摄宠物数量", "max_num": 2, "min_num": 1}], "product_explanation": {"img": "", "name": ""}}' where id = 8566;
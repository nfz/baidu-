import requests
import time

with open("/Users/baidu/Documents/new/v_cuiyang02-1/b2b/b2bspyter/商品词文本.txt", "r") as f:
    for line in f.readlines():
        line = line.strip('\n')
        ss=requests.get('http://www.baidu.com/s?wd='+line+"别名")
        aa=ss.text
        x=0
        strstr2=""
        i=0
        str1=""
        if aa.find("<div class=\"op_exactqa_s_answer c-color-t",x)>0:
            zz=aa.find("<div class=\"op_exactqa_s_answer c-color-t",x)
            while aa[zz+83+i]!=">":
                i=i+1
            while aa[zz+84+i].isspace()|aa[zz+84+i].encode('UTF-8').isalpha()|(aa[zz+84+i]=="、"):
                i=i+1
                # print(aa[zz+84+i])
                # print(aa[zz+84+i])
            while aa[zz+84+i]!="<":
                str1=str1+aa[zz+84+i]
                i=i+1
            # print(str1)
        fo = open("/Users/baidu/Documents/new/v_cuiyang02-1/b2b/b2bspyter/商品词文本别名写入.txt", "a")
        str1 = str1.replace('\t',"")
        str1 = str1.replace('\n',"")
        str1 = str1.replace(" ","")
        seq=line+'\t'+str1
        print(seq)
        fo.writelines(seq+'\n')
        fo.close()
        time.sleep(0.1)

     
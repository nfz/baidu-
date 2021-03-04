import requests
import time

with open("/Users/baidu/Desktop/github/baidu-/商品词文本.txt", "r") as f:
    for line in f.readlines():
        line = line.strip('\n')
        ss=requests.get('http://www.baidu.com/s?wd='+line)
        aa=ss.text
        x=0
        strstr2=""
        while aa.find("<a target=\"_blank\" class=\"c-font-medium inc_rs_a\" title=\"",x)>0:
            x=aa.find("<a target=\"_blank\" class=\"c-font-medium inc_rs_a\" title=\"",x)
            zz=x
            x=x+1
            i=0
            strstr=""
            while aa[zz+57+i]!="\"":
                strstr=strstr+aa[zz+57+i]
                i=i+1
            # print(strstr)
            strstr2=strstr2+'\t'+strstr
            # print(strstr2)
        fo = open("/Users/baidu/Desktop/github/baidu-/商品词文本写入.txt", "a")
        seq=line+'\t'+strstr2
        print(seq)
        fo.writelines(seq+'\n')
        fo.close()
        time.sleep(0.2)
var btn = document.createElement("button");
btn.id = "mtbtn"
btn.innerText = "复制";
var cccc = document.getElementsByClassName("sm-main fd-clr")[0];
cccc.appendChild(btn)

btn.onclick = function() { copyHandle(strlist); }

function copyHandle(content) {
    document.getElementById("mtbtn").zIndex = 999;
    let copy = (e) => {
        e.preventDefault()
        e.clipboardData.setData('text/plain', content)
        alert('复制成功')
        document.removeEventListener('copy', copy)
    }
    document.addEventListener('copy', copy)
    document.execCommand("Copy");
}
var strlist = "";
for (var i = 1; i < 9; i++) {
    var str = "";
    try {
        str=document.querySelector("#render-engine-page-container > div > div.space-common-sn > div > div.sm-widget-list > div > div:nth-child(" + i + ")  > div > div.sm-widget-title > label").innerText;
    } catch (error) {

    }
    try {
        str = document.querySelector("#render-engine-page-container > div > div.space-common-sn > div > div.sm-widget-list > div > div:nth-child(2) > div:nth-child(" + i + ") > div.sm-widget-title > label").innerText;
    } catch (error2) {
        strlist = strlist + "分类"
        i = i + 9999
    }
    

    str = str.replace(":", "");
    var aa = document.createElement("aa");
    aa.innerHTML = str;
    document.body.appendChild(aa);
    strlist = strlist + str + "\t"
    console.log(str);
}

function delHtmlTag(str) { return str.replace(/<[^>]+>/g, ""); }













var strlist = "";
for (var i = 1; i < 9; i++) {
    var str = "";
    try {
        str=document.querySelector("#render-engine-page-container > div > div.space-common-sn > div > div.sm-widget-list > div > div:nth-child(" + i + ")  > div > div.sm-widget-title > label").innerText;
    } catch (error) {

    }
    

    str = str.replace(":", "");
    var aa = document.createElement("aa");
    aa.innerHTML = str;
    document.body.appendChild(aa);
    strlist = strlist + str + "\t"
    console.log(str);
}









return (function() { var strlist = ""; for (var i = 1; i < 9; i++) { var str = ""; try { str = document.querySelector("#render-engine-page-container > div > div.space-common-sn > div > div.sm-widget-list > div > div:nth-child(2) > div:nth-child(" + i + ") > div.sm-widget-title > label").innerText; } catch (error) { };str = str.replace(":", "");strlist = strlist + str + "\t" } return strlist; })()
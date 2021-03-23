var btn = document.createElement("button");
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
btn.id = "mtbtn"
btn.innerText = "生成结果";
btn1.id = "mtbtn1"
btn1.innerText = "相关性弱/不相关";
btn2.id = "mtbtn2"
btn2.innerText = "重复";
btn3.id = "mtbtn3"
btn3.innerText = "宽泛";
btn4.id = "mtbtn4"
btn4.innerText = "表述不明";

var cccc = document.getElementsByClassName("sj-bread-container")[0];
cccc.appendChild(btn)
cccc.appendChild(btn1)
cccc.appendChild(btn2)
cccc.appendChild(btn3)
cccc.appendChild(btn4)
btn.onclick = function() { srtlistrunction(); }
btn1.onclick = function() { alert(); }
btn2.onclick = function() { alert(); }
btn3.onclick = function() { alert(); }
btn4.onclick = function() { alert(); }
var query = ""
var badbrandvalue = 0
var brandvalue = 0
var badbranddemo = ""
var badparametervalue = 0
var parameterlvaue = 0
var badparameterdemo = ""
var strlist = ""
var errorpercentage = 0
var myArray = new Array()
var myArrayvalue = new Array()
    // var impurityNumList = new Array()
var impurityType = 1
var impurityNumList = {};


function csscss() {
    btn1.style = "background-color: #409EFF;width:110px;height: 40px;color: #fff"
    btn3.style = "background-color: #409EFF;width:110px;height: 40px;color: #fff";
    btn2.style = "background-color: #409EFF;width:110px;height: 40px;color: #fff";
    btn4.style = "background-color: #409EFF;width:110px;height: 40px;color: #fff";

    btn1.onmouseenter = function() {
        btn1.style = "background-color:#c00000;width:110px;height: 40px;color: #fff"
    }
    btn3.onmouseenter = function() {
        btn3.style = "background-color:rgb(225 194 5);width:110px;height: 40px;color: #fff"
    }
    btn2.onmouseenter = function() {
        btn2.style = "background-color:rgb(0 48 255);width:110px;height: 40px;color: #fff"
    }
    btn4.onmouseenter = function() {
        btn4.style = "background-color:rgb(0 255 15);width:110px;height: 40px;color: #fff"
    }
    btn1.onmouseleave = function() {
        btn1.style = "background-color: #ff00005e;width:110px;height: 40px;color: #fff"
    }
    btn3.onmouseleave = function() {
        btn3.style = "background-color: #e8ff005e;width:110px;height: 40px;color: #fff"
    }
    btn2.onmouseleave = function() {
        btn2.style = "background-color: #0030ff5e;width:110px;height: 40px;color: #fff"
    }
    btn4.onmouseleave = function() {
        btn4.style = "background-color: #00ff0f5e;width:110px;height: 40px;color: #fff"
    }
}


function srtlistrunction() {
    var lsbadbranddemo = badbranddemo.substr(0, badbranddemo.length - 1);
    if (badparametervalue == 0) {
        strlist = badbrandvalue + '\t' + brandvalue + '\t' + lsbadbranddemo + '\t' + badparametervalue + '\t' + parameterlvaue + '\t' + '\t'
    } else {
        strlist = badbrandvalue + '\t' + brandvalue + '\t' + lsbadbranddemo + '\t' + badparametervalue + '\t' + parameterlvaue + '\t' + '\t'
        for (var x2 = 1; x2 < myArray.length; x2++) {
            if (myArrayvalue[x2].length == 0) {
                console.log(0)
            } else {
                var str11 = myArrayvalue[x2].substr(0, myArrayvalue[x2].length - 1) + ";"
                    //console.log(myArray[x2])
                    //console.log(myArrayvalue[x2])
                strlist = strlist + myArray[x2] + str11;
            }

        }
        strlist = strlist.substr(0, strlist.length - 1);
    }
    strlist = strlist + '\t'
    for (var x9 in impurityNumList) {
        console.log(x9)
        strlist = strlist + impurityNumList[x9]
    }

    copyHandle(strlist);
}

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
try {
    var buttonclassname2 = document.getElementsByClassName("s-filter-suggest s-filter-suggest-fold")
    buttonclassname2[0].className = "s-filter-suggest"
} catch (error) {}
try {
    var buttonclassname = document.getElementsByClassName("sj-filter-category has-more")
    buttonclassname[0].className = "sj-filter-category has-more expand"
} catch (error) {}
try {
    //有收起选项参数表
    var sslenth = document.querySelector("#app > div.slot-wrapper > div > div > div.s-container.is-wide > div.filter-wrap > div > div.s-filter-suggest > div.s-fold-wrap > div > div > table > tbody > tr.sj-filter-category.has-more.expand > td.sj-filter-word > div").children.length
    repchildren(sslenth, 0)
    var sumsum = document.createElement('span')
    sumsum.innerText = sslenth
    brandvalue = sslenth
    var sslenth2 = document.getElementsByClassName("sj-filter-name")[0]
        // sslenth2.appendChild(sumsum)
    var ss3 = document.querySelector("#app > div.slot-wrapper > div > div > div.s-container.is-wide > div.filter-wrap > div > div.s-filter-suggest > div.s-fold-wrap > div > div > table > tbody").children.length
    var sum3 = 0
    for (var x = 2; x < ss3 + 1; x++) {
        var sum2 = document.querySelector("#app > div.slot-wrapper > div > div > div.s-container.is-wide > div.filter-wrap > div > div.s-filter-suggest > div.s-fold-wrap > div > div > table > tbody > tr:nth-child(" + x + ") > td.sj-filter-word > div").children.length
        sum3 = sum3 + sum2
        var arrayvalue = document.querySelector("#app > div.slot-wrapper > div > div > div.s-container.is-wide > div.filter-wrap > div > div.s-filter-suggest > div.s-fold-wrap > div > div > table > tbody > tr:nth-child(" + x + ") > td.sj-filter-name").innerText
            // console.log(arrayvalue)
        myArray[x - 1] = (arrayvalue)
        myArrayvalue[x - 1] = ""
            // console.log(myArray)
        repchildren(sum2, x - 1)
    }
    var sumbutton2 = document.createElement('span')
    sumbutton2.innerText = sum3
    parameterlvaue = sum3
    var sslenth3 = document.getElementsByClassName("sj-filter-name")[1]
        // sslenth3.appendChild(sumbutton2)
} catch (error) {
    var pinpaisum4 = document.querySelector("#app > div.slot-wrapper > div > div > div.s-container.is-wide > div.filter-wrap > div > div.s-filter-suggest > div.s-fold-wrap > div > div > table > tbody > tr:nth-child(1) > td.sj-filter-word > div").children.length
    repchildren(pinpaisum4, 0)
    var sumbutton4 = document.createElement('span')
    sumbutton4.innerText = pinpaisum4
    brandvalue = pinpaisum4
    var sslenth4 = document.getElementsByClassName("sj-filter-name")[0]
        // sslenth4.appendChild(sumbutton4)
    try {
        var newlength = document.querySelector("#app > div.slot-wrapper > div > div > div.s-container.is-wide > div.filter-wrap > div > div.s-filter-suggest > div.s-fold-wrap > div > div > table > tbody").children.length
        var sum6 = 0
        for (var x3 = 2; x3 < newlength + 1; x3++) {
            var pinpaisum5 = document.querySelector("#app > div.slot-wrapper > div > div > div.s-container.is-wide > div.filter-wrap > div > div.s-filter-suggest > div.s-fold-wrap > div > div > table > tbody > tr:nth-child(" + x3 + ") > td.sj-filter-word > div").children.length
            sum6 = sum6 + pinpaisum5
            var arrayvalue2 = document.querySelector("#app > div.slot-wrapper > div > div > div.s-container.is-wide > div.filter-wrap > div > div.s-filter-suggest > div.s-fold-wrap > div > div > table > tbody > tr:nth-child(2) > td.sj-filter-name").innerText

            myArray[x3 - 1] = (arrayvalue2)
            myArrayvalue[x3 - 1] = ""
                // console.log(myArray)
            repchildren(pinpaisum5, x3 - 1)
        }
        var sumbutton7 = document.createElement('span')
        sumbutton7.innerText = sum6
        parameterlvaue = sum6
        var sslenth7 = document.getElementsByClassName("sj-filter-name")[1]
            // sslenth7.appendChild(sumbutton7)
    } catch (error2) {
        // console.log(0)
    }
}

function repchildren(sslenth5, xxx) {
    for (var x5 = sslenth5; x5 > 0; x5--) {
        var lx10 = document.getElementsByClassName("sj-filter-word-wrap")[xxx]
        var texttext = document.getElementsByClassName("sj-filter-word-wrap")[xxx].children[0].innerText
        var sumbutton9 = document.createElement('span')
        sumbutton9.innerText = texttext
        var testvalue = lx10.attributes[0].name
        sumbutton9.setAttribute(testvalue, '')
        sumbutton9.className = "sj-filter-item"
        lx10.removeChild(lx10.children[0])
        lx10.appendChild(sumbutton9)　
        sumbutton9.addEventListener("click", function() {
            clickclick(event.target, xxx);
        });
    }
}

function clickclick(sumbutton9, xxx) {
    // console.log(xxx)
    var impurityNumList9999 = {};
    var parentparent = sumbutton9.parentNode.parentNode.parentNode;
    var txttxt222 = str(sumbutton9.innerText);
    var index = [].indexOf.call(parentparent.parentNode.querySelectorAll(parentparent.tagName), parentparent)
    if (sumbutton9.style['text-decoration'] == "line-through") {
        sumbutton9.style['text-decoration'] = ""
        sumbutton9.style.color = ""

        // console.log(myArray + "ok")
        // console.log(myArray)
        if (xxx == 0) {
            badbrandvalue = badbrandvalue - 1
            badbranddemo = badbranddemo.replace(sumbutton9.innerText + "、", "")

        } else {
            badparametervalue = badparametervalue - 1
            myArrayvalue[index] = myArrayvalue[index].replace(sumbutton9.innerText + "、", "")
            delete impurityNumList.txttxt222
        }
        //console.log(myArrayvalue[index])
        // console.log("品牌错误:" + badbrandvalue)
        // console.log("参数错误:" + badparametervalue)
    } else {
        sumbutton9.style['text-decoration'] = "line-through"
        sumbutton9.style.color = "red"
            // console.log(sumbutton9)
        if (xxx == 0) {
            badbrandvalue = badbrandvalue + 1
            badbranddemo = badbranddemo + sumbutton9.innerText + "、"
                // 

        } else {
            badparametervalue = badparametervalue + 1
            myArrayvalue[index] = myArrayvalue[index] + sumbutton9.innerText + "、"
            console.log(sumbutton9.innerText)

            impurityNumList9999 = { str { txttxt222 }: str { impurityType } }
            console.log(impurityNumList)
        }
        //console.log(myArrayvalue[index])
        // console.log("品牌错误:" + badbrandvalue)
        // console.log("参数错误:" + badparametervalue)
    }
}
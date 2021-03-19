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
    var sslenth2 = document.getElementsByClassName("sj-filter-name")[0]
    sslenth2.appendChild(sumsum)
    var ss3 = document.querySelector("#app > div.slot-wrapper > div > div > div.s-container.is-wide > div.filter-wrap > div > div.s-filter-suggest > div.s-fold-wrap > div > div > table > tbody").children.length
    var sum3 = 0
    for (var x = 2; x < ss3 + 1; x++) {
        var sum2 = document.querySelector("#app > div.slot-wrapper > div > div > div.s-container.is-wide > div.filter-wrap > div > div.s-filter-suggest > div.s-fold-wrap > div > div > table > tbody > tr:nth-child(" + x + ") > td.sj-filter-word > div").children.length
        sum3 = sum3 + sum2
        repchildren(sum2, x - 1)
    }
    var sumbutton2 = document.createElement('span')
    sumbutton2.innerText = sum3
    var sslenth3 = document.getElementsByClassName("sj-filter-name")[1]
    sslenth3.appendChild(sumbutton2)
} catch (error) {
    var pinpaisum4 = document.querySelector("#app > div.slot-wrapper > div > div > div.s-container.is-wide > div.filter-wrap > div > div.s-filter-suggest > div.s-fold-wrap > div > div > table > tbody > tr:nth-child(1) > td.sj-filter-word > div").children.length
    var sumbutton4 = document.createElement('span')
    sumbutton4.innerText = pinpaisum4
    var sslenth4 = document.getElementsByClassName("sj-filter-name")[0]
    sslenth4.appendChild(sumbutton4)
    try {
        var newlength = document.querySelector("#app > div.slot-wrapper > div > div > div.s-container.is-wide > div.filter-wrap > div > div.s-filter-suggest > div.s-fold-wrap > div > div > table > tbody").children.length
        var sum6 = 0
        for (var x3 = 2; x3 < newlength + 1; x3++) {
            var pinpaisum5 = document.querySelector("#app > div.slot-wrapper > div > div > div.s-container.is-wide > div.filter-wrap > div > div.s-filter-suggest > div.s-fold-wrap > div > div > table > tbody > tr:nth-child(" + x3 + ") > td.sj-filter-word > div").children.length
            sum6 = sum6 + pinpaisum5
            console.log(sum6)
        }
        var sumbutton7 = document.createElement('span')
        sumbutton7.innerText = sum6
        var sslenth7 = document.getElementsByClassName("sj-filter-name")[1]
        sslenth7.appendChild(sumbutton7)
    } catch (error2) {
        console.log(0)
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
            clickclick(event.target);
        });
    }
}

function clickclick(sumbutton9) {
    if (sumbutton9.style['text-decoration'] == "line-through") {
        sumbutton9.style['text-decoration'] = ""
        sumbutton9.style.color = ""
    } else {
        sumbutton9.style['text-decoration'] = "line-through"
        sumbutton9.style.color = "red"
    }
}
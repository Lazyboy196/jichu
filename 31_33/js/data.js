var Data = {};
//如何获取数据,并加装
Data.getDate = function () {
    var regionNum = region.getAttribute("data-inputNum");
    var productNum = product.getAttribute("data-inputNum");
    var rcheck = region.querySelectorAll("[type=checkbox]:checked");
    var pcheck = product.querySelectorAll("[type=checkbox]:checked");
    if (regionNum == rcheck.length && pcheck.length == productNum) {
        return sourceData;
    } else {
        return Data.data(rcheck, pcheck);
    }
};

Data.data = function (rcheck, pcheck) {
    var k = 0;
    var d = [];
    var data = [];
    for (var i = 0; i < sourceData.length; i++) {
        for (var j = 0; j < rcheck.length; j++) {
            if (sourceData[i].region == rcheck[j].value) {
                d[k++] = sourceData[i];
            }
        }
    }
    k = 0;
    for (var i = 0; i < pcheck.length; i++) {
        for (var j = 0; j < d.length; j++) {
            if (pcheck[i].value == d[j].product) {
                data[k++] = d[j];
            }
        }
    }
    //返回数据
    return data;
};
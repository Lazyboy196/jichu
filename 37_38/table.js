var region = document.getElementById("region-select");
var product = document.getElementById("product-select");
var table = document.getElementById("table-wrapper");

//初始化渲染所有数据
(function init() {
    var data = getDate("all", "all");
    //渲染表格
    newTable(data);
})();

//地区的变化监听
region.addEventListener("change", function () {
    var r = region.value;
    var p = product.value;
    //根据select选项获取数据
    var data = getDate(r, p);
    //渲染新的表格
    newTable(data);
});

//商品的变化监听
product.addEventListener("change", function () {
    var p = product.value;
    var r = region.value;
    //根据select选项获取数据
    var data = getDate(r, p);
    //渲染新的表格
    newTable(data);
});

//根据select选项获取数据
function getDate(region, product) {
    var data = [];
    var j = 0;
    if (region == "all") {
        if (product == "all") {
            return sourceData;
        } else {
            for (var i = 0; i < sourceData.length; i++) {
                if (sourceData[i].product == product) {
                    data[j++] = sourceData[i];
                }
            }
        }
    } else {
        if (product == "all") {
            for (var i = 0; i < sourceData.length; i++) {
                if (sourceData[i].region == region) {
                    data[j++] = sourceData[i];
                }
            }
        } else {
            for (var i = 0; i < sourceData.length; i++) {
                if (sourceData[i].region == region && sourceData[i].product == product) {
                    data[j++] = sourceData[i];
                }
            }
        }
    }
    //返回数据
    return data;
}

//渲染新的表格
function newTable(data) {
    var html = '';
    //遍历数据
    html += '<thead><th>商品</th><th>地区</th>';
    for (var k = 1; k <= 12; k++) {
        html += '<th>' + k + '月</th>';
    }
    html += '</thead>';
    for (var i = 0; i < data.length; i++) {
        //输出每一行的表格HTML内容
        html += '<tbody><tr>';
        html += '<td>' + data[i].product + '</td>';
        html += '<td>' + data[i].region + '</td>';
        for (var j = 0; j < data[i].sale.length; j++) {
            html += '<td>' + data[i].sale[j] + '</td>';
        }
        html += '</tr></tbody>';
    }
    //把生成的HTML内容赋给table-wrapper
    table.innerHTML = html;
}
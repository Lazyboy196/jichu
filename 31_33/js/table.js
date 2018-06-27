//渲染新的表格
var Table = {};
Table.newTable = function (data) {
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
    tableBox.innerHTML = html;
};
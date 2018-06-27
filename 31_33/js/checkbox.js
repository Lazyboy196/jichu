//生成一组CheckBox
var Checkbox = {};
Checkbox.createCheckBox = function (box, options) {
    //生成多选组
    for (var i = 0; i < options.length; i++) {
        var input = document.createElement("input");
        for (v in options[i]) {
            input[v] = options[i][v];
        }
        var span = document.createElement("span");
        span.textContent = input.value;
        box.append(input);
        box.append(span);
        box.setAttribute("data-inputNum", options.length);
    }
    //给盒子添加监听事件
    box.addEventListener("change", function (e) {
        var e = e || window.event;
        var t = e.target;
        var nodeName = t.nodeName.toLowerCase();
        var type = t.type;
        if (nodeName == "input" && type == "checkbox") {
            var data = Data.getDate();
            Table.newTable(data);
        }
    });
};
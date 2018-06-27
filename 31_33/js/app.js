var region = document.getElementById("region");
var product = document.getElementById("product");
var tableBox = document.getElementById("table-wrapper");

(function init() {
    // 创建城市多选组
    Checkbox.createCheckBox(region, [{
        value: "华南",
        type: "checkbox",
        name: "region"
    }, {
        value: "华东",
        type: "checkbox",
        name: "region"
    }, {
        value: "华北",
        type: "checkbox",
        name: "region"
    }]);

    // 创建类型多选组
    Checkbox.createCheckBox(product, [{
        value: "手机",
        type: "checkbox",
        name: "product"
    }, {
        value: "笔记本",
        type: "checkbox",
        name: "product"
    }, {
        value: "智能音箱",
        type: "checkbox",
        name: "product"
    }]);
})();
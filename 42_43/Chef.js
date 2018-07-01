// 厨师类，继承自职员
var Chef=function (){
    this.foods=0;
};
extend(Staff,Chef);

// 完成一次工作：烹饪出菜品
Chef.prototype.cooking=function () {
    this.doWork();
    this.foods++;
};
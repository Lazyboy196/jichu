// 服务员类，继承自职员
var function Waiter(){
    //上菜次数
    this.serving=0;
    //点餐次数
    this.order=0;
};
extend(Staff,Chef);

// 完成一次工作：如果参数是个数组，则记录客人点菜，如果参数不是数组则是上菜行为
Chef.prototype.work=function (obj) {
    this.doWork();
    if(obj.isArray){
        //点餐
        console.log("点餐");
    } else {
        //上菜
        console.log("上菜");
    }
};
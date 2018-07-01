// 餐厅类  属性：金钱，座位数量、职员列表  方法：招聘职员，解雇职员
function Restaurant(money,seatNum) {
    //金钱
    this.money=money?money:0;
    //座位数量
    this.seatNum=seatNum?seatNum:0;
    //职员
    this.staffList=[];
}

//招聘职员
Restaurant.prototype.recruitStaff=function (staff) {
    this.staffList.push(staff);
};

//解雇职员
Restaurant.prototype.dismissalStaff=function (id) {
    if (this.staffList.length<=0){
        return "没有员工！";
    }
    for (var i = 0; i <this.staffList.length ; i++) {
        if(Number(this.staffList[i].id)==Number(id)){
            this.staffList.splice(i,1);
            return "删除成功";
        }
    }
    return "删除失败!";
};
// 职员类  属性：ID，姓名，工资,工作次数   方法：完成一次工作
function Staff(staffInfo){
    //工作次数
    this._workNum=0;
    this.name=staffInfo.name;
    this.id=staffInfo.id;
    //工资
    this.salary=staffInfo.salary;
}

// 方法：完成一次工作
Staff.prototype.doWork=function () {
    this._workNum++;
};
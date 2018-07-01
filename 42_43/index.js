//继承方法  f 父类， c 子类
function extend(f,c) {
    function k(){}
    k.prototype=f.prototype;
    var k1=new k;
    k1.constructor=c;
    c.prototype=k1;
}

//餐厅本金1000，座位10个
var restaurant=new Restaurant(1000,10);
var recruit=document.getElementById("recruit");
var dismissal=document.getElementById("dismissal");
var delId=document.getElementById("delId");
var staffId=document.getElementById("staffId");
var staffName=document.getElementById("staffName");
var salary=document.getElementById("salary");
var info=document.getElementById("info");

recruit.addEventListener("click",function () {
    var staffInfo={};
    staffInfo.id=staffId.value;
    staffInfo.salary=salary.value;
    staffInfo.name=staffName.value;
    var staff=new Staff(staffInfo);
    restaurant.recruitStaff(staff);
    StaffTable();
});


dismissal.addEventListener("click",function () {
    var id=delId.value;
    restaurant.dismissalStaff(id);
    StaffTable();
});

var staffTable=document.getElementById("staffTable");

function StaffTable() {
    var html='';
    if (restaurant.staffList.length<=0){
        html='<td class="all-td" colspan="3">暂时没有职工哦</td>';
        staffTable.innerHTML=html;
        return;
    }
    for (var i = 0; i <restaurant.staffList.length ; i++) {
        html+='<tr>'+
            '<td>'+restaurant.staffList[i].id+'</td>'+
            '<td>'+restaurant.staffList[i].name+'</td>'+
            '<td>'+restaurant.staffList[i].salary+'</td>'+
            '</tr>';
    }
    staffTable.innerHTML=html;
}

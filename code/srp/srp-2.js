orgChart = {
 
  addNewEmployee: function(){
    var employeeDetail = this.getEmployeeDetail();
    employeeDetail.on("complete", function(employee){
 
      var managerSelector = this.selectManager(employee);
      managerSelector.on("complete", function(employee){
        employee.save();
      });
 
    });
  },
 
  // ...
}

orgChart = {
 
  addNewEmployee: function(){
    var employeeDetail = this.getEmployeeDetail();
    employeeDetail.on("complete", function(employee){
 
      var managerSelector = this.selectManager(employee);
      managerSelector.on("save", function(employee){
        employee.save();
      });
 
    });
  },
 
  // ...
}

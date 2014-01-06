var orgChart = {
 
  addNewEmployee: function(){
    var employeeDetail = this.getEmployeeDetail();
    employeeDetail.on("complete", function(employee){
      this.selectManager(employee);
    }, this);
  },

  selectManager: function(employee){
    var managerSelector = this.selectManager(employee);
    managerSelector.on("complete", function(employee){
      this.saveEmployee(employee);
    }, this);
  },

  saveEmployee: function(employee){
    employee.save();
  }
 
  // ...
}

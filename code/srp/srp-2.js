var orgChart = {
 
  addNewEmployee: function(){
    var employeeDetail = this.getEmployeeDetailForm();
    employeeDetail.on("complete", function(employee){
      this.selectManager(employee);
    }, this);
  },

  selectManager: function(employee){
    var managerSelector = this.getSelectManagerForm(employee);
    managerSelector.on("complete", function(employee){
      this.saveEmployee(employee);
    }, this);
  },

  saveEmployee: function(employee){
    employee.save();
  }
 
  // ...
}

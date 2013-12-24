var orgChart = {
 
  addNewEmployee: function(){
    var that = this;
 
    var employeeDetail = this.getEmployeeDetail();
    employeeDetail.on("complete", function(employee){
 
      var managerSelector = that.selectManager(employee);
      managerSelector.on("save", function(employee){
        employee.save();
      });
 
    });
  },
 
  getEmployeeDetail: function(){
    var form = new EmployeeDetailForm();
    form.render();
    $("#wizard").html(form.el);
    return form;
  },
 
  selectManager: function(employee){
    var form = new SelectManagerForm({
      model: employee
    });
    form.render();
    $("#wizard").html(form.el);
    return form;
  }
};

// implementation details for EmployeeDetailForm go here
 
// implementation details for SelectManagerForm go here
 
// implementation details for Employee model go here

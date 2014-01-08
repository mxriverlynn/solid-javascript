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
  },
 
  getEmployeeDetailForm: function(){
    var form = new EmployeeDetailForm();
    form.render();
    $("#wizard").html(form.el);
    return form;
  },
 
  getSelectManagerForm: function(employee){
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

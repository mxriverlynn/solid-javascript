// employeeViews.js
// ----------------
define(["registry"], function(registry){
  var employee = someEmployee;

  var viewRegistry = new Registry();
  viewRegistry.register("show", showEmployee);
  viewRegistry.register("edit", editEmployee);

  function showEmployee(employee){
    var view = new ShowEmployeeForm({
      model: employee
    });
    view.render();
    $("#wizard").html(view.$el);
  }

  function editEmployee(employee){
    var form = new EditEmployeeForm({
      model: employee
    });
    form.render();
    $("#wizard").html(form.$el);
  }
}

// createDestroyEmployees.js
// ------------------------
define(["employeeViews"], function(employeeViews){
  viewRegistry.register("create", createEmployee);
  viewRegistry.register("destroy", destroyEmployee);

  function createEmployee(employee){
    var form = new CreateEmployeeForm({
      model: employee
    });
    form.render();
    $("#wizard").html(form.$el);
  }

  function destroyEmployee(employee){
    var form = new DestroyEmployeeForm({
      model: employee
    });
    form.render();
    $("#wizard").html(form.$el);
  }
});

// executeEmployees.js
// -------------------
define(["employeeViews"], function(employeeViews){

  var command = someLogicToFigureOutWhatToDo();
  var fn = employeeViews.getValue(command);
  fn();

});

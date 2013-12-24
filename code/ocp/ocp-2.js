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


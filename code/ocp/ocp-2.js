var viewRegistry = new Registry();
viewRegistry.register("view", showEmployee);
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

var employee = someEmployee;
var action = "view";
var fn = viewRegistry.getValue(action);
fn(employee);

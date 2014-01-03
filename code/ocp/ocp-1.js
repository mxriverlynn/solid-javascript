var employee = someEmployee;
var action = "view";

switch (action) {
  case "view": 
    showEmployee(someEmployee);
    break;

  case "edit": 
    editEmployee(someEmployee);
    break;
}

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

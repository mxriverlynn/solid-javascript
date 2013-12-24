var EmployeeInfoForm = Backbone.View.extend({
  events: {
    "click .next": "nextClicked"
  },
 
  nextClicked: function(e){
    e.preventDefault();
 
    var data = {
      name: this.$(".name").val(),
      email: this.$(".email").val()
    };
 
    var employee = new Employee(data);
 
    this.selectManager(employee);
  },
 
  selectManager: function(employee){
    var view = new SelectManagerForm({
      model: employee
    });
    view.render();
    $(".wizard").show(view.el);
  },
 
  // ...
  render: function(){ ... }
  // ... etc
});
 
SelectManagerForm = Backbone.View.extend({
  events: {
    "click .save": "saveClicked"
  },
 
  saveClicked: function(e){
    e.preventDefault();
 
    var managerId = this.$(".manager").val();
    this.model.set({managerId: managerId});
 
    this.model.save();
    // do something to close the wizard and move on  
  },
 
  // ...
  render: function() { ... }
  // ... etc
});

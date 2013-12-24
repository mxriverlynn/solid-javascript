function Registry(defaultValue){
  this._defaultValue = defaultValue;
  this._values = Object.create(null);
}

Registry.prototype.register = function(name, value){
  this._values[name] = value;
};

Registry.prototype.getValue = function(name){
  var value;
  if (Object.prototype.hasOwnProperty.call(this._values, name)){
    value = this._values[name];
  } else {
    value = this._defaultValue;
  }
  return value;
};

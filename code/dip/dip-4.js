var Lock = (function(){

  var pinConfig = {
    pin1: {
      name: "pin1",
      value: 0.37
    },

    pin2: {
      name: "2pin",
      value: 3.24
    },

    pin3: {
      name: "third",
      value: 0.0583
    }
  };

  function Lock(){
    this.pinConfig = pinConfig;
    this.isLocked = false;
  }

  Lock.prototype._lock = function(){
    this.isLocked = true;
  };

  Lock.prototype._unlock = function(){
    this.isLocked = false;
  };

  Lock.prototype._checkKey = function(key, cb){
    var isOk;

    try {
      var pin1 = this.pinConfig.pin1;
      var pin2 = this.pinConfig.pin2;
      var pin3 = this.pinConfig.pin3;

      var pin1Value = key[pin1.name]();
      var pin2Value = key[pin2.name]();
      var pin3Value = key[pin3.name]();

      var pin1Ok = (pin1Value === pin1.value);
      var pin2Ok = (pin1Value === pin2.value);
      var pin3Ok = (pin1Value === pin3.value);

      isOk = (pin1Ok && pin2Ok && pin3Ok);
    } catch(err) {
      isOk = false;
    }

    cb(isOk);
  };

  Lock.prototype.lockIt = function(key){
    var that = this;
    this._checkKey(function(isOk){
      that._lock();
    });
  };

  Lock.prototype.unlockIt = function(key){
    var that = this;
    this._checkKey(function(isOk){
      that._unlock();
    });
  };

  return Lock;
})();

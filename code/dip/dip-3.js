var key = {
  pin1: function(){
    return 0.37;
  },

  "2pin": function(){
    return 3.24;
  },

  pin3: function(){
    return 0.0583;
  }
};

var lock = new Lock();

lock.lockIt(key);
lock.unlockIt(key);

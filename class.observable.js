/**
 * mixin Class.Observable
 *
 *    var Person = Class.create(Class.Observable, {
 *      initialize: function(name){ this.name = name }
 *    })
 *
 *    var jdd = new Person('John');
 *
 *    jdd.observe(':say', console.log);
 *    jdd.fire(':say');
 *
 **/
 
// with corrections by John David Dalton and juanbond
(function(){
  function getElement(object){
    return (object._eventElement = object._eventElement || 
        (document.body || document.documentElement)
          .appendChild(new Element('div')));
  }
  Class.Observable = {
    observe: function(eventName, handler) {
      getElement(this).observe(eventName, handler);
      return this;
    },
    stopObserving: function(eventName, handler) {
      getElement(this).stopObserving(eventName, handler);
      return this;
    },
    fire: function(eventName, memo) {
      getElement(this).fire(eventName, memo);
      return this;
    }
  }
})();
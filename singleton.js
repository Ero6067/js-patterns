const Singleton = (function() {
  let instance;

  function createInstance() {
    const obj = new Object({name: 'Tim'});
    return obj;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      } else {
        console.log('Instance already created') //Optional line for testing
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);  //true
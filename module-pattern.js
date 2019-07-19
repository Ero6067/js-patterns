// Basic structure 

// (function() {
//      Declare private vars and functions

//   return {
//      Declare public var and functions
//   }
// })();

// STANDARD MODULE PATTERN
const UICtrl = (function() {
  let _text = 'Hello World';

  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = _text;
  }

  return {
    callChangeText: function() {
      changeText();
      console.log(_text);
    }
  }
})();

UICtrl.callChangeText();

// REVEALING MODULE PATTERN
const ItemCtrl = (function() {
  let _data = [];

  function add(item) {
    _data.push(item);
    console.log('Item Added');
  }

  function get(id)  {
    return _data.find(item => {
      return item.id === id;
    });
  }
  return {
    //exposes the methods as public
    add: add,
    get: get
  }
})();

ItemCtrl.add({id: 1, name: 'John'});
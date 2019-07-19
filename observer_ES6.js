const message = document.getElementById('display');

class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    if (this.observers.includes(fn)) {
      message.innerHTML = (`You are already subbed to ${fn.name}`);
    } else{
      this.observers.push(fn);
      message.innerHTML = (`You are now subbed to ${fn.name}`);
    };
  }
  unsubscribe(fn) {
    // Filter out form the list whatever matched the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
    this.observers = this.observers.filter(function(item) {
      if(item !== fn) {
        return item;
      }
    });
    message.innerHTML = (`You are now unsubscribed from ${fn.name}`);
  }

  fire() {
    this.observers.forEach(function(item) {
      item.call();
    });
  }
}

const click = new EventObserver();

//* Event Listeners
document.querySelector('.sub-ms').addEventListener('click', 
function() {
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', 
function() {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', 
function() {
  click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', 
function() {
  click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', 
function() {
  click.fire();
});

// Click Handler
const getCurMilliseconds = function() {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
  message.innerHTML = (`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = function() {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
  message.innerHTML = (`Current Seconds: ${new Date().getSeconds()}`);
}

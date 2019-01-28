/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Whenever a function is in the global scope the value of this will be the window object
* 2. Whenever a method is called, the object before that is this.
* 3. Whenever a constructor function is used this refers to the time the object is created and returned by the constructor function
* 4. Whenever the call or apply method is used this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

  function name() {
    'use strict'
    console.log(this);
  }

  name();


// code example for Window Binding

// Principle 2

const intern = {
  name: 'Joe',
  job: 'coffee maker',
  make: function() {
    console.log(`${this.name} goes to the ${this.job}`);
  }
}

intern.make();

// code example for Implicit Binding

// Principle 3

function Habitat(zookeeper) {
  this.zookeeper = 'zookeper';
  this.food = 'steak';
  this.action = function() {
    console.log(`${this.zookeeper} feeds him a ${this.food}`);
  }
}

const zoo = new Habitat('tiger');

const jungle = new Habitat('ape');

zoo.action();
jungle.action();

// code example for New Binding

// Principle 4

const foodSpot = {
  name: 'Burger King'
}

const foodItems = ['whooper', 'fries', 'drink'];

function foodOrder(foodItems) {
  'use strict';
  console.log(`I am trying to place an order at ${this.name} which will include a ${this.foodItems}`);
}

foodOrder.call(foodSpot, foodItems);

// code example for Explicit Binding

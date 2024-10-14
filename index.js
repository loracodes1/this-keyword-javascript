// this is a keyword that refers to the object that is executing the current function. Its value can change based on how the function is called.

//1.Global Context

// When you use this outside any function, it refers to the global object (in browsers, that's the windoclear


console.log(this); // In the browser, this logs the Window object

// 2. Inside an Object Method

// When you use this inside a method of an object, it refers to that object.

const cat = {
    name: 'Whiskers',
    meow: function() {
        console.log(this.name + ' says Meow!');
    }
};

cat.meow(); // Output: Whiskers says Meow!

// 3.Inside a Constructor Function

// When you create an object using a constructor function, this refers to the new object being created.

function Car(brand) {
    this.brand = brand; // `this` refers to the new Car object
}

const myCar = new Car('Toyota');
console.log(myCar.brand); // Output: Toyota


// 4. In Event Handlers

// When a function is used as an event handler, this refers to the element that triggered the event.
<button id="myButton">Click me</button>

<script>
document.getElementById('myButton').addEventListener('click', function() {
    console.log(this); // Output: <button>Click me</button>
});
</script>

//5. Using Arrow Functions

// Arrow functions do not have their own this. Instead, they inherit this from the surrounding context.
const obj = {
    value: 100,
    regularFunction: function() {
        console.log(this.value); // This refers to obj
    },
    arrowFunction: () => {
        console.log(this.value); // This does NOT refer to obj
    }
};

obj.regularFunction(); // Output: 100
obj.arrowFunction();   // Output: undefined (or the global context)


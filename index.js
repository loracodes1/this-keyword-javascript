// this is a keyword that refers to the object that is executing the current function. Its value can change based on how the function is called.

//1.Global Context

// When you use this outside any function, it refers to the global object (in browsers, that's the windoclear


console.log(this); // In the browser, this logs the Window object

// Inside an Object Method

// When you use this inside a method of an object, it refers to that object.

const cat = {
    name: 'Whiskers',
    meow: function() {
        console.log(this.name + ' says Meow!');
    }
};

cat.meow(); // Output: Whiskers says Meow!

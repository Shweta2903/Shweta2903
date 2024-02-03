// Problem-1 Rectangle Object

// Create a rectangle object with length and width properties
// Create two methods area and perimeter, that will return the area and perimeter of the rectangle

let rectangle = {
  length : 20,
  width: 40,
  perimeter: function(){
    return 2 * (this.length + this.width);
  },
  area: function(){
    return this.length * this.width;
  }
}
console.log(rectangle.perimeter()); 
console.log(rectangle.area()); 

/*### **Products Cart Object**

- Given an input of products in the below format (Name Quantity Price)
- Input

```
["Rice", "Dal", "Salt"]
[2, 3, 1]
[60, 50, 20]

```

- Create an object with the key `data` which is an array of objects with the format `{name: "Rice", quantity: 2, price: 60}`
- The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)
- Sample output for the above case `290`*/

let name = ["Rice", "Dal", "Salt", "Sugar"];
let qty = [2, 3, 1, 5];
let price = [60, 50, 20, 40];

let product = {
  data : [],
  addProduct: function(name, qty, price){
      let obj = {
    name: name,
    quantity : qty,
    price : price
  }
  this.data.push(obj);
  },
  total: function(){
    let sum = 0;
    for(let i = 0; i < this.data.length; i++){
      let current = this.data[i];
      sum = sum + (current.quantity*current.price);
    }
    return sum;
  }
  };

for(let i = 0; i <name.length; i++){
 product.addProduct(name[i], qty[i], price[i])
}
console.log(product.data);
console.log(product.total());



















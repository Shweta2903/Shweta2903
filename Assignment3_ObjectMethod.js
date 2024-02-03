// Sales Total
// Write a function called calculateSalesTotals()
// which returns an array with new two new keys (sale and total). The key 'sale' equals the calculated sale price based on the original price and the discount. The key 'total' equals the computed total based on stock, the original price and the discount. The default value would be 0.0.


var sales = [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];


function calculateSalesTotals(){
  for(let i = 0; i < sales.length; i++){
    let current_obj = sales[i];
    if(current_obj.discount > 0){
    current_obj.sale = current_obj.original - (current_obj.discount*current_obj.original);
        }else{
          current_obj.sale = current_obj.original;
        }
    current_obj.total = current_obj.sale * current_obj.stock;
  }
}
calculateSalesTotals();
console.log(sales);

/*
Output:

[
  {
    item: 'PS4 Pro',
    stock: 3,
    original: 399.99,
    sale: 399.99,
    total: 1199.97
  },
  {
    item: 'Xbox One X',
    stock: 1,
    original: 499.99,
    discount: 0.1,
    sale: 449.991,
    total: 449.991
  },
  {
    item: 'Nintendo Switch',
    stock: 4,
    original: 299.99,
    sale: 299.99,
    total: 1199.96
  },
  {
    item: 'PS2 Console',
    stock: 1,
    original: 299.99,
    discount: 0.8,
    sale: 59.99799999999999,
    total: 59.99799999999999
  },
  {
    item: 'Nintendo 64',
    stock: 2,
    original: 199.99,
    discount: 0.65,
    sale: 69.9965,
    total: 139.993
  }
]
*/
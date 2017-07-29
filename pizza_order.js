var orderCount = 0;

function takeOrder(topping, crustType) {
console.log('Order: ' + crustType + ' crust topped with ' + topping);
 orderCount = orderCount + 1;
}

function getSubTotal(itemCount) {
 return itemCount * 7.5;
}
function getTax(){
 
 return getSubTotal(orderCount) * 0.06;
}
function getTotal(){
 return getSubTotal(orderCount) + getTax();
 }
 function getConvertNaira(){
   return getSubTotal(orderCount) * 325;
 }
 function getTaxNaira(){
   return getConvertNaira() * 0.06;
 }
 function getTotalNaira(){
   return getConvertNaira() + getTaxNaira ();
 }
takeOrder('bacon', 'thin');
takeOrder('pepperoni', 'regular');
takeOrder('pesto', 'thin');
console.log('number of pizzas order = ', orderCount, 'pizzas');
console.log('price of the ordered without VAT', orderCount, 'pizzas  =', '$'+getSubTotal(orderCount));
// to convert the price of pizza from dollar to naira
console.log("The price of pizza without VAT in naira", getConvertNaira()+'(NGN)');
console.log('The tax out of your =', orderCount, 'pizzas sale = ','$'+ getTax());
// to print tax in naira.
console.log('Tax in naira =', getTaxNaira()+'(NGN)');
//to print the pizza amount plus tax(vat)
console.log('Pizza price =', '$'+ getTotal());
console.log("Price of Pizza in naira =", getTotalNaira()+'(NGN)');
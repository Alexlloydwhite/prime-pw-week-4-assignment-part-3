console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
function addItem( item ){
  console.log( 'in addItem:', item );
  basket.push ( item );
  return true;
}
console.log( `Basket is: ${basket}` );
console.log( 'Adding Kumquats:', addItem('Kumquats') );
console.log( `Basket is now: ${basket}`);
console.log( 'Adding Comte Cheese:', addItem('Comte Cheese') );
console.log( `Basket is now: ${basket}`);
console.log( 'Adding French Bread:', addItem('French Bread') );
console.log( `Basket is now: ${basket}`);
console.log( 'Adding Preserved Quince:', addItem('Preserved Quince') );
console.log( `Basket is now: ${basket}`);
console.log( 'Adding White Burgundy Wine:', addItem('White Burgundy Wine') );
console.log( `Basket is now: ${basket}`);

console.log( '***** Looping Thru The Basket Array *****' );

function listItems( array ){
  console.log ( 'in listItems:', array );
  for (let item of basket){
    console.log(item);
  }
}
console.log( `Basket is: ${basket}`);
listItems( basket );

console.log( '***** Reseting Basket Array *****' );
function empty ( array ){
  console.log('in empty:', array);
  array.length = 0;
  return array;
}
console.log( `Basket is: ${basket}` );
console.log( 'Emptying array:', empty(basket) );
console.log( `Basket is now: ${basket}` );

console.log( '***** Stretch Goals: Using Functions in Other Functions!' );
// const maxItems = 5;
// function isFull( array ){
//   console.log( 'in isFull:', array );
//   if ( array.length < maxItems ){
//     return false;
//   } else if ( array.length >= maxItems ){
//     return true;
//   }
// }
console.log( 'The basket is empty so this should return false:', isFull(basket) );

console.log( '***** Stretch Goals: Using Array Built-In Functions!' );

basket.push('apple', 'orange', 'lemon', 'cheese');
console.log('basket is:',basket);

function removeItem(item){
  console.log('inremoveItem:', item);
  let index = basket.indexOf(item);
  if (index>=0){
    basket.splice(index,1);
    return item;
  } else {
    return null;
  }
}

console.log('grape not in basket so this should return null;', removeItem('grape'));
console.log('basket is now:',basket);
console.log('removed:',removeItem('lemon'));
console.log('basket is now:',basket);
console.log('removed:',removeItem('apple'));
console.log('basket is now:',basket);

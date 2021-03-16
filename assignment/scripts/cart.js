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
  for (i=0; i < array.length; i++){
    console.log( array[i] );
  }
}

console.log( `Basket is: ${basket}`);
listItems( basket );

console.log( '***** Reseting Basket Array *****' );

function empty ( array ){
  console.log( 'in empty:', array);
  array.length = 0;
}

console.log( `Basket is: ${basket}`);
empty(basket);
console.log( `Basket is now: ${basket}`);

// Create a function called empty. It should:
//
// reset the basket to an empty array

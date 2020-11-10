'use strict';

function logger(){
  console.log('My name is Jake')
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges){
  console.log(apples,oranges);
  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

console.log(`I made a ${fruitProcessor(2,5)}`)

/*
Using JavaScript in your browser only, you will listen for the form's submit event; when the form is submitted, you will:
-Get the value of the input text element.  
-You should be expecting a variable number of arrays typed into the input separated by commas:  For example: [3,0,1,2,4], [1,2,8,15], [6,3,10,25,29]
-All array elements should be whole numbers (negative and 0 are allowed), no decimals. 
-Each array should have at least one element that is a whole number (negative and 0 are allowed), no decimals. 
-You can ignore any extra commas for example, inputting: [3,0,1,2,4], [1,2,8,15], [6,3,10,25,29], 
-There should be at least one array inputted. 
-You will then return a single array that has all the values from the arrays inputted sorted from lowest to highest number.  For example:  If our input was: [3,0,1,2,4], [1,2,8,15], [6,3,10,25,29] You would return:  [0,1,1,2,2,3,3,4,6,8,10,15,25,29]
-Add a list item to the #results list of result of the sort you have just completed. You will alternate the class for each list item using the classes is-green and is-red (described below), starting with is-green first.
-If the user does not have a value for the input when they submit, you should not continue processing and instead should inform them of an error somehow.
*/

function numbeRray(array) {
  try {
    array = JSON.parse(array);
  } catch (e) {
    return alert('Invalid input.');
  }
  if (!Array.isArray(array)) {
    return alert('Not array.');
  }
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number' || isNaN(array[i])) {
      return alert('Element inside array is not valid');
    }
  }
}

function testJSON(data) {
  if (typeof data !== 'string') {
    alert('Input is wrong');
  }
  try {
    var json = JSON.parse(data);
    return typeof json === 'object';
  } catch (error) {
    alert('Input is wrong');
  }
}

function isFloat(num) {
  return typeof num === 'number' && !Number.isInteger(num);
}

let formElement = document.getElementById('form');
let list = document.getElementById('list');
let index = 1;

formElement.onsubmit = (e) => {
  e.preventDefault();
  console.log('called');
  const form = new FormData(e.target);
  let arrayData = form.get('arrays');
  if (!arrayData) {
    alert('Please input the data !');
  }
  arrayData = arrayData.trim();
  if (arrayData[arrayData.length - 1] === ',') {
    arrayData = arrayData.substring(0, arrayData.length - 1);
  }
  arrayData = arrayData.split('],[').join(',');
  arrayData = arrayData.substring(1, arrayData.length - 1);
  arrayData = arrayData.split(',');
  arrayData = arrayData.map((el) => Number(el));
  arrayData = arrayData.join(',');
  arrayData = '[' + arrayData + ']';
  testJSON(arrayData);
  arrayData = JSON.parse(arrayData);
  if (!arrayData.some((el) => el > 0)) {
    return alert('Invalid Input');
  }
  if (arrayData.some((el) => isFloat(el) === true)) {
    return alert('Invalid Input');
  }
  arrayData = arrayData.sort((element1, element2) => element1 - element2);
  let listItem = document.createElement('li');
  listItem.innerHTML = '[' + arrayData + ']';
  index % 2 != 0
    ? (listItem.className = 'is-green')
    : (listItem.className = 'is-red');
  index++;
  list.appendChild(listItem);
};

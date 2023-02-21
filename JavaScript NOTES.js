const menu = {
  _meal: '',
  
  get mealToCheck() {
    if (typeof meal === 'string')
    {
  return this._meal;
    }
    else
    {
  console.log('ERROR!!')
    }
  },
  
  set mealToCheck(meal) {
    if (typeof meal === 'string')
    {
      this._meal = meal;
    }
    else 
    {
      console.log('Please enter the correct format.')
    }
  },
  
  _price: 0,
   
  get priceCheck() { 
    if (typeof price === 'number')
    {
  return this._price;
    }
    else
    {
  console.log('ERROR!!')
    }
  },
  
  set priceCheck(price) {
    if (typeof price === 'number')
    {
      this._price = price;
    }
    else 
    {
      console.log('Please enter the correct format.')
    }
  },
  
  get todaysSpecial () {
    if(this._meal && this._price)
    {
      console.log(`Today\'s Special is ${this._meal} for $${this._price}!`)
    }
    else 
    {
      console.log('Meal or price was not set correctly!')
    }
  }
  
  }
  
  
  let meal = menu._meal = 'Spaghetti';
  let price = menu._price = 2;
  
  menu.todaysSpecial
  
  
  
  
  
  
  
  
  
  
  //CHECKS IF FUNCTION IS WORKING
  
  const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
  let checkA = val + 2; 
  let checkB = func(val);
  if(checkA = checkB)
  {
    return checkA
  }
  else
  {
    return 'inconsistent results'
  }
  }
  
  console.log(checkConsistentOutput(addTwo, 5));
  
  const addTwo = num => {
    return num + 2;
  }
  
  const checkConsistentOutput = (func, val) => {
  let checkA = val + 2; 
  let checkB = func(val);
  if(checkA = checkB)
  {
    return checkA
  }
  else
  {
    return 'inconsistent results'
  }
  }
  
  console.log(checkConsistentOutput(addTwo, 5));
  
  
  
  
  
  
  
  // Introduction to Iterators // 
  const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
  
  artists.forEach(artist => {
    console.log(artist + ' is one of my favorite artists.');
  });
  
  const numbers = [1, 2, 3, 4, 5];
  
  const squareNumbers = numbers.map(number => {
    return number * number;
  });
  
  console.log(squareNumbers);
  
  const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
  
  const onlyNumbers = things.filter(thing => {
    return typeof thing === 'number';
  });
  
  console.log(onlyNumbers);
  
  
  
  
  
  
  const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
  
  // Iterate over fruits below
  
  fruits.forEach(fruits => console.log(`I want to eat a ${fruits}`))
  
  
  
  
  
  
  
  //MAP METHOD //
  const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
  
  // Create the secretMessage array below
  const secretMessage = animals.map(animals => animals[0]);
  
  console.log(secretMessage.join(''));
  
  const bigNumbers = [100, 200, 300, 400, 500];
  
  // Create the smallNumbers array below
  const smallNumbers = bigNumbers.map(bigNumbers => bigNumbers/100)
  
  
  
  
  
  
  
  // FILTER METHOD // 
  const randomNumbers = [375, 200, 3.14, 7, 13, 852];
  
  // Call .filter() on randomNumbers below
  const smallNumbers = randomNumbers.filter(num => {
    return num < 250;
  })
  
  const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
  
  
  // Call .filter() on favoriteWords below
  
  const longFavoriteWords = favoriteWords.filter(word => {
    return word.length > 7;
  })
  
  
  
  
  
  
  
  // The .findIndex() Method
  const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
  
  const foundAnimal = animals.findIndex(animal => {
    return animal === 'elephant';
  });
  
  const startsWithS = animals.findIndex(animal => {
    return animal[0] === 's' //animal[0] looks at the first letter of each animal
  })
  
  
  
  
  
  //The .reduce() Method
  const newNumbers = [1, 3, 5, 7];
  
  const newSum = newNumbers.reduce((accumulator, currentValue) => {
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return accumulator + currentValue;
  }, 10);
  
  console.log(newSum);
  
  
  
  
  
  //SOME STUFF I DONT EVEN KNOW WHATS GOING ON 
  const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
  
  // Something is missing in the method call below
  
  console.log(words.some((word) => {
    return word.length < 6;
  }));
  
  // Use filter to create a new array
  const interestingWords = words.filter(words => { return words.length > 5})
  
  
  // Make sure to uncomment the code below and fix the incorrect code before running it
  
  console.log(interestingWords.every((word) => { return word.length > 5 }));
  
  
  
  
  
  
  // REVIEW OVER MULTIPLE METHODS
  
  
  const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];
  
  const nums = [1, 50, 75, 200, 350, 525, 1000];
  
  //  Choose a method that will return undefined
  cities.forEach(city => console.log('Have you visited ' + city + '?'));
  
  // Choose a method that will return a new array
  const longCities = cities.filter(city => city.length > 7);
  
  // Choose a method that will return a single value
  const word = cities.reduce((acc, currVal) => {
    return acc + currVal[0]
  }, "C");
  
  console.log(word)
  
  // Choose a method that will return a new array
  const smallerNums = nums.map(num => num - 5);
  
  // Choose a method that will return a boolean value
  nums.every(num => num < 0);
  
  
  
  
  // THE SOME METHOD RETURNS BOOLEAN VALUE
  // Calling .every() on an existing array returns a boolean value.
  
  function isSumBigger(number1, number2, total) {
      sum = number1 + number2,
      (sum > total)  ? true : false; }
    
    // Should return true
    console.log('isSumBigger(1, 3, 2) returns: ' + isSumBigger(1, 3, 2));
    
    // Should return false
    console.log('isSumBigger(1, 3, 5) returns: ' + isSumBigger(1, 3, 5));
  
  
  
  
    // EXAMPLE OF USING ARRAYS AND FOR LOOPS
  
    const reverseArray = arr => {
      let reversed = [];
      for (let i = arr.length - 1; i >= 0; i--) {
          reversed.push(arr[i]);
      }
      return reversed
  }
  /*
  // Alternate solutions:
  
  // Using the .unshift() method
  const reverseArray = arr => {
      let reversed = [];
      for (let i = 0; i < arr.length; i++) {
          reversed.unshift(arr[i]);
      }
      return reversed
  }
  
  // As a function declaration:
  function reverseArray(arr) {
      let reversed = [];
      for (let i = arr.length - 1; i >= 0; i--) {
          reversed.push(arr[i]);
      }
      return reversed
  }
  */
  
  const sentence = ['sense.','make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence)); 
  
  
  
  //THIS IS THE FOR LOOP - CREATING ANOTHER ARRAY
  
  
  // Write your code here:
  
  const convertToBaby = animals => { 
      const babyAnimals = [];
         for (let i = 0; i < animals.length; i++) {
               babyAnimals.push('baby ' + animals[i]);
         }
         return babyAnimals } 
   
   
   
   
   
   
   // When you're ready to test your code, uncomment the below and run:
   
   const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
   
   console.log(convertToBaby(animals)) 
   
   
  
  
  
  
  
  
  // TYPE OF FOR AND WHILE LOOPS
  const numbers = [5, 3, 9, 30];
  
  const smallestPowerOfTwo = arr => {
        let results = [];
  // The 'outer' for loop - loops through each element in the array
        
        for (let i = 0; i < arr.length; i++) {
              number = arr[i];
  
  // The 'inner' while loop - searches for smallest power of 2 greater than the given number
              j = 1;
              while (j < number) {
                    j = j * 2;
              }
              results.push(j);
        }
        return results
  }
  
  console.log(smallestPowerOfTwo(numbers)) 
  // Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]
  
  
  
  
  
  
  
  //FUNCTION TO UPPERCASE ALL THE THIGNS IN AN ARRAY
  
  const shoutGreetings = arr => arr.map(word => word.toUpperCase() + '!');
  
  /*
  // As a function declaration AND using a loop:
  function shoutGreetings(arr) {
      let shoutArray = []
      for(let i = 0; i<arr.length; i++){
          shoutArray.push(arr[i].toUpperCase() + '!')
      }
      return shoutArray
  }
  */
  const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo']
  
  console.log(shoutGreetings(greetings))
  
  
  
  
  
  
  //SOME WITCHCRAFT SORTING SHIT. 
  
  const sortYears = arr => arr.sort((x, y) => y - x);
  
  /*
  // As a function declaration AND using a named function:
  
  function sortYears(arr) {
        const checkYears = (year1, year2) => year2 - year1
        return arr.sort(checkYears)
  }
  */
  
  const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]
  
  console.log(sortYears(years))
  
  
  // SORTING BY 2 PARAMETERS TO MAKE SURE ONE IS GREATER THAN THE OTHER
  
  const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];
  
  // Write your code here:
  const sortSpeciesByTeeth = arr => arr.sort((shark,shark2) => shark.numTeeth > shark2.numTeeth)
  
  
  console.log(sortSpeciesByTeeth(speciesArray))
  
  // Should print:
  // [ { speciesName: 'human', numTeeth: 32 },
  //   { speciesName: 'dog', numTeeth: 42 },
  //   { speciesName: 'shark', numTeeth: 50 },
  //   { speciesName: 'alligator', numTeeth: 80 } ]
  
  
  
  
  
  // THIS MAKES SENSE ... THE ARRAY HAS TWO PARAMETERS, NAME AND SOURCE.  TO CALL UPON THE SOURCE
  // TO CHECK INPUT, MUST CALL THE ARRAY, AND THEN THE PARAMETER OF ARRAY.  
  // ARRAY = food (in this instance) AND .source IS THE PARAMETER
  
  const isTheDinnerVegan = arr => arr.every(food => food.source === 'plant');
  
  /*
  // Alternate solution:
  // Using a function declaration, loop, and helper function:
  function isTheDinnerVegan(arr) {
        const isVegan = (food) => {
              if (food.source === 'plant') {
                    return true;
              }
              return false;
        }
        for(let i = 0; i<arr.length; i++){
              if (!isVegan(arr[i])){
                    return false 
              }
        }
        return true
  }
  */
  
  const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];
  
  console.log(isTheDinnerVegan(dinner))
  
  
  
  
  
  
  
  // FACTORY CREATION EXAMPLE // 
  
  const dogFactory = (name, breed, weight) => {
      return {
          _name: name,
          _breed: breed,
          _weight: weight,
          get name() {
              return this._name;
          },
          set name(newName) {
              this._name = newName;
          },
          get breed() {
              return this._breed;
          },
          set breed(newBreed) {
              this._breed = newBreed;
          },
          get weight() {
              return this._weight;
          },
          set weight(newWeight) {
              this._weight = newWeight;
          },
          bark() {
              return 'ruff! ruff!'
          },
          eatTooManyTreats() {
              this._weight++
          }
      }
  }
  
  /*
  // Solution to checkpoint 1:
  const dogFactory = (name, breed, weight) => {
        return {
              name: name,
              breed: breed,
              weight: weight
        }
  }
  
  // Solution to checkpoint 2:
  const dogFactory = (name, breed, weight) => {
        return {
              _name: name,
              _breed: breed,
              _weight: weight,
              get name() {
                    return this._name;
              },
              set name(newName) {
                    this._name = newName;
              },
              get breed() {
                    return this._breed;
              },
              set breed(newBreed) {
                    this._breed = newBreed;
              },
              get weight() {
                    return this._weight;
              },
              set weight(newWeight) {
                    this._weight = newWeight;
              }
        }
  }
  
  
  
  
  
  // HOW TO REMOVE THINGS FROM ARRAYS
   arr[i].join('') + ' Company: 
  */
  
  
  
  
  
  /*JAVASCRIPT NOTES

HTML creates the skeleton of a webpage, but JavaScript introduces interactivity

The <script> element has an opening and closing tag. You can embed JavaScript code inbetween the opening and closing <script> tags.

You link to external JavaScript files with the src attribute in the opening <script> tag.

By default, scripts are loaded and executed as soon as the HTML parser encounters them in the HTML file, the HTML parser waits to load the entire script before from proceeding to parse the rest of the page elements.

The defer attribute ensures that the entire HTML file has been parsed before the script is executed.

The async attribute will allow the HTML parser to continue parsing as the script is being downloaded, but will execute immediately after it has been downloaded.
*/


// HOW TO CHANGE HTML ELEMENTS via JAVASCRIPT //

document.body.innerHTML = '<h2>This is a heading</h2>'; 

document.querySelector('h1').innerHTML = 'Most popular Harry Potter characters';

document.getElementById('fourth').innerHTML = 'Professor Snape';

document.getElementsByClassName('slytherin')[0].innerHTML = 'Salazar Slytherin'

document.getElementsByTagName('li')[0].innerHTML = 'Dobby'

document.querySelector('body').style.backgroundColor = '#201F2E'; // querySelector chooses the element that we are changing.  style represenets the style.  backgroundColor is obviously for the background

document.querySelector('.heading').style.fontFamily = 'Roboto';


let first = document.body.children[0];  // SETS THE VARIABLE TO THE BODY'S CHILD FIRST ELEMENT... THE HEADER
first.parentNode.style.backgroundColor = 'beige' // SETS THE BACKGROUND COLOR OF THE PARENT OF THE FIRST VARIABLE TO BEIGE.  INSTEAD OF GOING DOWN LIKE THE CHILD COMMAND DOES, IT GOES UP TO THE PARENT
first.innerHTML = 'BROWN BEARS ARE AWESOME!' // CHANGES THE HEADER OF THE FIRST VARIABLE


// Creates a new LI and stores it in a variable
let newAttraction = document.createElement('li')

//assigns vespa as the li "id"
newAttraction.id = 'vespa'

//Updates what is typed in the innerHTML of the LI
newAttraction.innerHTML = 'Rent a Vespa'

//appends newAttraction element to the italy-attractions list
document.getElementById('italy-attractions').appendChild(newAttraction);



// assigns to a variable what we are trying to remove
let elementToRemove = document.getElementById('vespa');

//removes the entire child named vespa from italy attractions
document.getElementById('italy-attractions').removeChild(elementToRemove)


// how to assign and edit the buttons via java script

let element = document.querySelector('button');

function turnButtonRed(){
  // Add code to turn button red
  element.style.backgroundColor = 'red'
  element.style.color = 'white'
  element.innerHTML = 'Red Button'
}

element.onclick = turnButtonRed;



/* Review
In this lesson, you manipulated a webpage structure by leveraging the Document Object Model (DOM) interface in JavaScript.

Let’s review what we learned:

The document keyword grants access to the root of the DOM in JavaScript.
The DOM Interface allows you to select a specific element with CSS selectors by using the .querySelector() method.
You can access an element directly by its ID with the .getElementById() method which returns a single element.
You can access an array of elements with the .getElementsByClassName() and .getElementsByTagName() methods, then call a single element by referencing its placement in the array.
The .innerHTML and .style properties allow you to modify an element by changing its contents or style respectively.
You can create, append, and remove elements by using the .createElement(),.appendChild() and .removeChild() methods respectively.
The .onclick property can add interactivity to a DOM element based on a click event.
The .children property returns a list of an element’s children and the .parentNode property returns the element’s closest connected node in the direction towards the root. */
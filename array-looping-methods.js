const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

    const students = [
      {
        id: '11ce',
        first_name: 'Dall',
        last_name: 'Puckring',
      },
      {
        id: '2958',
        first_name: 'Margarete',
        last_name: 'Brandi',
      },
      {
        id: '565a',
        first_name: 'Bendicty',
        last_name: 'Woodage',
      },
      {
        id: '3a16',
        first_name: 'Micki',
        last_name: 'Mattes',
      },
      {
        id: 'f396',
        first_name: 'Flory',
        last_name: 'Gladeche',
      },
      {
        id: 'de5f',
        first_name: 'Jamill',
        last_name: 'Emilien',
      },
      {
        id: '54cb',
        first_name: 'Brett',
        last_name: 'Aizikowitz',
      },
      {
        id: '9135',
        first_name: 'Lorry',
        last_name: 'Smallman',
      },
      {
        id: '978f',
        first_name: 'Gilly',
        last_name: 'Flott',
      },
    ];

    const people = [
      {
        birthday: 'April 22, 1993',
        names: {
          first: 'Keith',
          last: 'Buckley'
        }
      },
      {
        birthday: 'January 3, 1975',
        names: {
          first: 'Larry',
          last: 'Heep'
        }
      },
      {
        birthday: 'February 12, 1944',
        names: {
          first: 'Linda',
          last: 'Bermeer'
        }
      }
    ];


    const buns = ['egg', 'wonder', 'brioche'];

    const meats = {
      beyond: 10,
      beef: 5,
      pork: 7
    };

    const prices = {
      hotDog: 453,
      burger: 765,
      sausage: 634,
      corn: 234,
    };

    const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

    const feedback = [
      { comment: 'Love the burgs', rating: 4 },
      { comment: 'Horrible Service', rating: 2 },
      { comment: 'Smoothies are great, liked the burger too', rating: 5 },
      { comment: 'Ambiance needs work', rating: 3 },
      { comment: 'I DONT LIKE BURGERS', rating: 1 },
    ];

    const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];

    const inventory = [
      { type: 'shirt', price: 4000 },
      { type: 'pants', price: 4532 },
      { type: 'socks', price: 234 },
      { type: 'shirt', price: 2343 },
      { type: 'pants', price: 2343 },
      { type: 'socks', price: 542 },
      { type: 'pants', price: 123 },
    ];

    // ------------------------------------------------------------

    function logTopping(topping, index, originalArray) {
      const nextTopping = originalArray[index + 1];
      const prevTopping = originalArray[index - 1];
        // log the topping
        console.log(topping);
        // log the previous topping if there is one
        prevTopping ? console.log(prevTopping) : null;
        // log the next topping if there is one
        nextTopping ? console.log(nextTopping) : null;

        // if its the last item in array, say googd bye
        index === originalArray.lenght - 1 
        ? console.log('Goodbye') 
        : console.log('Getting the next Topping');

        // toppings.forEach(topping => {
        //   console.log(topping);
        // })
        
        // index === originalArray.lenght && console.log('Goodbye')
        console.log('-------🍕-------');
    }

    toppings.forEach(logTopping);

    // Map, Filter, Reduce

    // Map

    console.clear();

    function addArms(face) {
      return `👋 ${face} 👋`;  
    }

    const toys = faces.map(addArms);
    console.log(toys);

    function subasify(name) {
      return `${name} Subašić`
    }
    
    function capitalize(word) {
      return `${word[0].toUpperCase()}${word.slice(1)}`;
    }

    const fullNames = ['josip', 'diana blažić', 'milla']
    .map(capitalize)
    .map(subasify);
    console.log(fullNames);

    const orderTotalsWithTax = orderTotals.map(total => total * 1.13);
    console.log(orderTotalsWithTax);

    const cleanPeople = people.map(function (person) {
      // timestamp 
      const birthday = new Date(person.birthday).getTime();
      // now timestamp
      const now = Date.now();
      // figure out how old they are
      const age = Math.floor((now - birthday) / 31536000000);
      console.log(age)
      // return their full name and bday in an object
      return {
        age: age,
        name: `${person.names.first} ${person.names.last}`,
      }
    });

    console.table(cleanPeople);

    // Filter, find and High Order Functions

    const over40 = cleanPeople.filter(person => person.age > 40);
      console.table(over40);

      if (over40.length) {
        console.log('There are some people over 40');
      }

      function findById(id) {
        return function isStudent(student) {
          return student.id === id;
        }
      }

      function findByProp(prop, propWeAreLookingFor) {
        return function isStudent(student) {
          return student[prop] === propWeAreLookingFor;
        }
      }
      
      const student = students.find(findByProp('id', '565a'));
      console.log(student);

      // Reduce

      console.clear();
      
      function tallyNumbers(tally, currentTotal) {
        console.log(`The current tally is ${tally}`);
        console.log(`The current total is ${currentTotal}`);
        console.log('--------------');
        // return the current tally PLUS the amount of this order
        return tally + currentTotal;
      }

      const allOrders = orderTotals.reduce(tallyNumbers, 0);
      
      function inventoryReducer(totals, item) {
        console.log(`Looping over ${item.type}`);
        // increment the type by 1
        totals[item.type] = totals[item.type] + 1 || 1;
        // return the totals, so the next loop can use it 
        return totals;
      }
      const inventoryCounts = inventory.reduce(inventoryReducer, {});
      console.log(inventoryCounts);

      const totalInventoryPrice = inventory.reduce((acc, item) => acc +
      item.price, 0);
      
      console.log(totalInventoryPrice);
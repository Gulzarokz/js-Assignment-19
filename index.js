//41:while loops
// for loops
//A for loop is an iteration methods it is best used when you know the number of iterations ahead.

// while loops 
//A while loop is an iteration methods it is best used when you don't know the number of iterations ahead.

// for (var i = 0; i <10; i++) {
//     console.log(i);
    
// };

// var i = 0 establishes a counter.
// i <= 3 says the loop is to keep running as long as i is less than or equal to 3. Since i is
// assigned 0 initially, the loop will run 4 times.
// i++ increments i on each iteration

// on while loop

// let i = 0;
// while(i < 20) {
//     console.log(i);
//     i++;
    
// }

// A while loop does the same thing, but it's organized differently. Only the middle term,
// how long to keep the loop going, is inside the parentheses. The counter is defined before the
// first line of the while block. The counter is updated within the code that executes when the
// loop runs.



//chapter no 42: do...while loops
//Do while loops
//Do while loop is the variant of while loop. The loop will execute block once before checking 
// the conditio is true. Then it will repeate loop as long as the conditio is true.

// do{
//     console.log("This is body of do while loop");
    
// }
// while(condition);

// simple program on do while loop

// var i = 0;
// do{
//     console.log(i);
//     i++;
    
// }while(i <= 10)

// The differences between the two types of loops:
// Instead of while, the keyword do leads off the statement.
// The while clause, including the loop-limiting code inside the parentheses, moves to the
// bottom—after the closing curly bracket.
// Note that the while clause ends with a semicolon.
// Functionally, the difference between a while loop and a do...while loop is that it's
// possible to code a while stat

// ...............Node............................................
// do...while loop executes the code inside the curly brackets before it gets to the
// loop-limiter at the bottom, it always executes that code at least once, no matter what the looplimiter
//  var i = 0;
// const teams = ["Chiefs", "Bees", "Tigers", "Bears"];
// do { 
//     if(teams[i] === "Tigers") {
//       alert("Tigers found!" + i + "in the array");
//       break;
//       }
//       i++;
//  }while (i < teams.length);

 const  i = 0;
 const animals = ["horse", "ox", "cow", "pig", "duck"];
do {
  if (animals[i] === "pig") {
    alert("Found it!");
    break;
  }
  i++;
} while (i < animals.length);
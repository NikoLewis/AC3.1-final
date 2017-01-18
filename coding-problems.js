
/////
//Solve each of the following problems. Replace each empty function with your correct solution.
/////

/////
//#1
//Write a function called `sumArray` that takes in an array (that could contain any type of data) and returns a sum of the numbers in the array.

function sumArray(array){
  var sum = 0
  for(var i = 0; i < array.length; i++){
    if( typeof array[i] === 'number'){
      sum += array[i]
    }
  }
  return sum;
}

// sumArray([1,'art', 2, true])//3


/////
//#2
//Write a function called `sumAll` that takes in any amount of numbers (not in an array), and returns a sum of all of the numbers

function sumAll(num){
  sum = 0
  for(var i = 0; i < arguments.length; i++){
    sum += arguments[i]
  }
  return sum
}

// sumAll(1,2,3,4,5)//15

/////
//#3
// Write a function called 'squaredTimesTen' that takes in array (that could contain any type of data), squares the numbers and multiples them by 10, and returns a new array of those numbers

function squaredTimesTen(array){
  var result = [];
  for(var i = 0; i < array.length; i++){
    // var new = (array[i]*array[i]) * 10
    if(typeof array[i] === "number"){
      result.push((array[i]*array[i]) * 10);
    }
  }
  return result;
}


/////
//#4
//Write a function called 'highLow' that takes in an array of numbers and returns an object with both the highest and lowest number from the array


function highLow(array){
  var obj = {};
  var highest = array[0];
  var lowest = array[0];
  for( var i = 0; i < array.length; i++){
    if( array[i] < lowest){
      lowest = array[i];
    }else if( array[i] > highest){
      highest = array[i];
    }
  }
obj.high = highest;
obj.low = lowest;
return obj;

}
/////
//#5
//Write a function called `indexMap` that takes in an array of numbers and returns a new array with each of the original numbers multiplied by their array index.
function indexMap(array){
  var result = [];
  for(var i = 0 ; i < array.length; i++){
    result.push(array[i] * i);
  }
return result;
}
/////
//#6
//Write a function `oddNumStrs` that receives an array of strings and numbers and returns an array that only contains the strings from the original array that have an odd number of letters.
function oddNumStrs(array){
  var result = [];
  for(var i = 0; i < array.length; i++){
    if(typeof array[i] === 'string'){
      if(array[i].length % 2 != 0){
        result.push(array[i]);
      }
    }
  }
  return result;
}

/////
//#7
//Note: there is no test for this function
//Given the below code, write a function called 'changeBearPig' that will change the word 'Dog' to 'ManBearPig':


`<html>
    <head>
        <script src="index.js" defer></script>
    </head>
    <body>
		<div>
      <p class="text1">Cat</p>
			<p id="text1" class="text1">Dog</p>
      <h1 id="text2" class="text2">Bear</h1>
		</div>
    </body>
</html>`

function changeBearPig(){
  //document.getElementById('test1').appendChild('ManBearPig');
  document.getElementById('test1').innerHTML('ManBearPig');
}

/////
//#8
//write a function called `halfsies` that takes in an array of numbers.
//For each number in the array, if the number is in the first half of the array, divide it by ten
//if the number in the second half of the array, multiply it by ten.
//If it's exactly in the middle, leave the number alone. You should return a new array.

//** my testing went nuts during this question and never started working again, I didn't have time ot reattempt this one before I had to leave for my appointment. the rest of the questions were checked in repl and I linked to the save repls





/////
//#9
//Write a function called `leet` that takes in a string and returns a new string that replaces all e's with 3's, l's with 1's, and t's with 7's

function leet (string){
  var result = [];
  var split = string.split('');
  console.log(split)
  for(var i = 0; i < split.length; i++){
    console.log(split[i])
    if(split[i] == 'e'){
      result.push('3');
    }else if(split[i] == 'l'){
      result.push('1');
    }else if(split[i] == 't'){
      result.push('7')
    }else{
      result.push(split[i])
    }


  }

  return result.join('')

}

leet('leet test')// working(tested in repl) https://repl.it/FNQK/1

/////
//#10
//Write a constructor function called `Song` for creating 'Song' objects
//Each song should have an artist, title, and year property
//as well as a 'play' prototype method that should return a string that says 'Now playing' with the name and artist of the song

function Song(artist, title, year){
  this.artist = artist;
  this.title = title;
  this.year = year;
}


Song.prototype.play = function () {
  return 'Now playing '+ this.title+' '+this.artist
}

 var song1 = new Song('The Baha Men', 'Who Let The Dogs Out?', 1996);

 song1.play(); // 'Now playing Who Let The Dogs Out? The Baha Men'
 //working(tested in repl) https://repl.it/FNQb/2

/////
//#11
//Write a constructor function called `Album` for creating 'Album' objects.
//Each album should have an artist, title, and year property, and an array to hold songs (which should initially start out empty).
//It should also have an `addSong` prototype method that takes in a song object as an argument, and adds it to the album's song array.
//Lastly, it should have a 'tracklist' prototype method that should return a single string with a title of all of the songs, separated by a comma and a space

function Album(artist, title, year){
  this.artist = artist;
  this.title = title;
  this.year = year;
  this.songs = []
}


Album.prototype.addSong = function (song) {

  this.songs.push(song);
}
Album.prototype.tracklist = function () {
  return "" + this.songs.join(', ') + ""
}


var album1 = new Album('Childish Gambino', 'Awaken, My Love!', 2016);

  album1.addSong('Awaken, My Love!')
  album1.addSong('Me and Your Mama')

  album1.tracklist()// 'Awaken, My Love!, Me and Your Mama'
  ////working(tested in repl) https://repl.it/FNR1/2


// };

/////
//#12

//Write a function called 'oddsAndEvens' that takes in an array of numbers and returns an object with a count of the number of odd and even numbers in the original array

function oddsAndEvens(array, obj = {}){
  obj.odds = 0;
  obj.evens = 0;

  for( var i = 0; i < array.length; i++){


    if(array[i] % 2 === 0){
      obj.evens += 1;
    }else{
      obj.odds +=1
    }
  }
  return obj
}

oddsAndEvens([1, 2, 3, 4, 5]);//{odds: 3, evens: 2}
 ////working(tested in repl) https://repl.it/FNTM/1

/////
//#13
//Write a function called 'palindrome' that takes in a string and returns true if it's a palindrome, and false if not
//(a palindrome is a word that reads the same both backwards and forwards)
//Do NOT use the built in .reverse method
// const palindrome = () => null;

function palindrome(string){
  var array = [];
  var split = string.split('');

  for( var i = 0; i < string.length; i++){
  array.push(split.splice(split.length-1,1))
  }


  if(array.join('') === string){
    return true
  }else{
    return false
  }

}

palindrome('airplane')

////working(tested in repl) https://repl.it/FNUO/1

/////
//#14
//Write a function called 'anagram' that takes in two strings and returns true if they are anagrams of each other, and false if not
//(an anagram is a pair of words or sentences that can both be made by rearranging the same set of letters)
//Do NOT use the built in .sort method
// const anagram = () => null;













//Ignore this:
module.exports = {
  sumArray,
  sumAll,
  squaredTimesTen,
  highLow,
  indexMap,
  oddNumStrs,
  leet,
  oddsAndEvens,
  palindrome,
  anagram,
  Song,
  Album
};

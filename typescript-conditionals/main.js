'use strict';
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
function startsWithJ(string) {
  if (string.charAt(0) == 'J') {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrinkAndDrive(person) {
  return false;
}
function categorizeAcidity(pH) {
  if (pH == 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}
function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko' || 'wakko':
      console.log("We're the warner brothers!");
      break;
    case 'dot':
      console.log("I'm cute~");
      break;
    default:
      console.log('Goodnight everybody!');
  }
}
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      console.log('Speed');
      break;
    case 'comedy':
      console.log('How to lose a guy in 10 days');
      break;
    case 'horror':
      console.log('Hell Fest');
      break;
    case 'drama':
      console.log('Kids');
      break;
    case 'musical':
      console.log('High School Musical');
      break;
    case 'sci-fi':
      console.log('Annihilation');
      break;
    default:
      console.log(
        'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi'
      );
  }
}

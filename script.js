'use strict';
//015

// Selecting elements
// # is for ID. dot. is for class
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
// selecting score 0
const score1El = document.getElementById('score--1'); //selecting score 1
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
// another way to do it for just the ID. choose the method you prefer.
const diceEl = document.querySelector('.dice'); // slecting the dice
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
// we are declaring these empty variables outside so we are able to use them anywhere in the document. we assign their value inside init.scoping. will go over in the next lecture
let scores, currentScore, activePlayer, playing;

//starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');

  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player1El.classList.remove('player--active');
  //   document
  //     .querySelector(`.player--${activePlayer}`)
  //     .classList.remove('player--winner');
  player0El.classList.add('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // if active player is 0 then we want the new active player to be 1, else 0.
  currentScore = 0;
  // change active player using toggle method. will add the class if its not there and if it is remove it.
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
// these are numbers. JS will convert them to strings to display them.

// hide dice
// create hidden class in CSS style sheet then add it to diceEl.
diceEl.classList.remove('hidden');

//016

// Rolling dice functionality. Random dice roll
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. generating random dice roll. 1-6
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //2. display dice. show png
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; // this will load the png images corresponding the dice roll. the pngs are in the dice class. so dice- then it will take the dice variable we scored and show its png

    // check for rolled 1: if true, switch to next player.
    if (dice !== 1) {
      // if not 1, add dice to current score
      currentScore += dice; // same as currentscore = currentscore + dice.
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;

      // current0El.textContent = currentScore; //this way will only change player 1. the above way, line 44 will do it dynamically for any player.
    } else {
      // change text to 0, switch player then set score to 0.
      switchPlayer();
    }
  }
});
// 017
// how to switch to next player
// create + variable and set it at 0 for player 0 and 1 for player 1. this allows us to keep track of who is activley playing. did this above- activePlayer

//018
// hold current score. pressing the hold button will add the current points to the total score. when score reaches 100 player wins.

btnHold.addEventListener('click', function () {
  if (playing) {
    // add current score to active players score
    scores[activePlayer] += currentScore;
    // score of the active player += the current score. eg.
    // scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //check score is >= 100
    if (scores[activePlayer] >= 100) {
      //finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      // remove player active
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //switch to next player
      switchPlayer();
    }
  }
});
// resetting game. my attempt no teacher
btnNew.addEventListener('click', init);
const test = false;
const test2 = false;
// reset the total score
// we will create a new function with the scores const that has all the starter values and also the code we wrote above for btn new. we will create a new function called init.
///dkjnkdfn
// test

//dsfsdfs
//nvnvkjnv
///lknnlknaks
//dssdsdsd

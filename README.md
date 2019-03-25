
# Canvas Challenges

Adapted with ❤ from GA Chicago's [original lab](https://git.generalassemb.ly/wdi-14-chi-cc-5/canvas-lab).

If you want to use Canvas for Project 1, this will be some great practice for you!


## *READ THIS ENTIRE THING CAREFULLY BEFORE STARTING*


## 1. Checkerboard


* On a canvas, make a checkerboard, 800x800. You know, standard. Red and black. This might involve making a couple for loops and (maybe) functions but definitely _a couple of commits._  Remember, don't try to solve it all at once.  Draw 1 sqaure.  Then a row of alternating squares. 

* You won't be able to see it because of the squares, but give your canvas a background color in the css.  Whatever you want, just not the literal CSS color strings `"red"`, `"purple"`, `"green"`, `"white"`, or `"black"` 

* Commit.  Remember, make your commit messages [concise](https://www.google.com/search?q=concise&oq=concise&aqs=chrome..69i57j69i65j0l4.854j1j7&sourceid=chrome&ie=UTF-8).

* How'd you do it?  Did you write a few lines of code like `ctx.somethingOrOther()` inside a nested `for` loop?  Great.  Now, put that logic in a function called something like `makeSquare`, and call that function in your loop instead.  If you already did this, great.

* Actually, we're going to need to be able to know the state of these squares for several reasons in the future.  So create a Square class.

### Note: Comments 

Hey are you commenting??? 

Do you have any comments on your answer for number 1? 

If not, this is your one get out of jail free card, as long as you go back right now and add a few and make another commit.

and from now on:
    **include COMMENTS above pieces of code that do a thing**
    ...or else.

---

## 2. Colors!!!

Do the following:

#### USER STORIES:

* When I press the g key the "red" squares turn green
* When I press the p key the "red" squares turn purple
* When I press the r key the "red" squares go back to red

and:

* When i press the w key the black squares turn white
* When i press the b key the white squares turn black

and also:

* At any time, pressing enter resets the checkerboard to the original colors
* This section's answers should be one listener with some kind of logic to figure out which key was pressed, **not 6 listeners.**
* Use anonymous callback(s), not named function(s)

### Remember:

* Be modular: use functions. especailly any task you find yourself repeating, no matter how small
* Be **absolutely obsessive** about your indentation
* Name things carefully. Function/method names are almost always verbs and properties are almost always other parts of speech, usually nouns occasionally adjective/structured numeric
* #2 might be several commits

---
 
## 3. The Ball

3a. Make a very small chartreuse ball. It should be an object with some position/size properties methods to paint and move itself fairly quickly.

3b. Make listeners (put them in the global scope) on the arrow keys to move the chartreuse ball around based on user input (by calling methods in the object)

# BONUS

Anything below this is completely BONUS! If you got this far, take a second to celebrate! 

### Bonus Ball Goals

3c. As the ball quickly moves around the canvas, it should "erase" the checkerboard squares, by which I mean restoring the canvas to its original background-color. 

---

> Intermission: if you got this far, you're doing amazing!

---

3d. Make a button in the html below the canvas to reset checkerboard to red and black with the ball in the starting square. 

> hint: this could involve calling the function you made in a previous question, amongst other things.

3e. Make a small red div in the html below the canvas that hides the ball 

* you're committing right?

#### 3f. Hiding the ball should also stop the "erasing" of the squares

* All of the color-changing functionality from #2 should still be working
* #3 should be several commits even without optional parts.
 
You're commenting your code right?  Please tell me you are. 

If you did all of that without committing, I don't know ya.

---

## Super Bonus: The Next Level!

Did you get this far? Wow!

---

## 4. Make the ball's movement be powered by animation and altered by key events.

Use [`requestAnimationFrame()`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) to make the chartreuse ball have a state-based user-controlled movement.  Meaning: instead of the user directly moving the object, the object is moved by the animation frame and the user can just tap arrow keys to change the direction (by updating some data about which direction it's moving (or not) in the object's properties).  coommmiiiitttttt.

#### 4a. Make it so that the animation frame runs (only one frame should ever be running at any time), when you start moving the ball, and stops when you press Enter (reset).

#### 4b. If you didn't already, make it so that the ball moves while keys are being held down and stops when all keys are released.


## 5. Secret Round: 

After the squares are **all** "erased," a couple of objects should appear (of any size/shape/location that makes you happy), that the chartreuse ball cannot go through and must go around. resolve the issue of what the ball does (die?, nothing, it just can't go through them?, gets special powers?, moves them at half the speed it would otherwise move?) when it hits the object as you wish. How many commits that time?

## 5. Make sure you're being a good programmer

Look back over this entire lab and see if there's any way you could have been more DRY and modular. If something besides a listeners or a DOM elements and or the animation function(s) is defined in the global scope—why? Is there a good reason? Is your code well-organized? Refactor to address these things, maintaining functionality, and commit for each improvement. 

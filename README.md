# myVillage
A registry that gives moms full tummies, sleep, alone time, emotional support, mental health, and stress management.

This project was created for EECS 394, Spring 2017.
Developers:  Dylan McCann, Joseph Sevirini, Junwon Jang, Rohan Mehta, Shin Lee, Vijeta Gupta,

## Project Status
[Describe what we implemented/what it does here]
[pictures are cool]

The myVillage application allows a the creation of a village, a social structure where a mother (or another admin acting for her) can post tasks (better word needed) that she needs (wants?) help with. Villagers can signup for these tasks, or instead give money to help the mother have a 'serve provider' (babysitter, nanny, etc.) accomplish that task instead.

Actions that users take are only visible to other people in their village. You can create a new village on the registration page. The villageID can be found on the settings page. The villageID is used during the registration process so that other people can join an already existing village. Note that all admins should select the 'Mother' option on the landing page. Note that currently each user can only be associated with a single village.

## Setup
### Needed tools
(say to install git/ionic/whatever-else) (probably simplified version of https://www.cs.northwestern.edu/academics/courses/394/ionic-setup-tips.php)

### Running the app locally
Go to directory where you want the myVillage project directory to be located.

Run to clone the project `git clone git@github.com:eecs394-s17/MyVillage.git`

Move into project directory `cd ./MyVillage`

Install needed components `npm install`

Now we need to make some changes to the program configuration so that it uses the correct APIs/services.

### System Requirements
- Ionic 2.0+

### Required API Keys

### Setting up Firebase
(How to insert API keys into program)
(looks like it's just firebaseConfig in app.module.ts)
Basically, follow instructions at https://firebase.google.com/docs/web/setup up to the code snippet (beef this section way up).

### Setting up Ionic Authentication
(How to insert API keys into program)
(looks like it's just 'app_id' in app.module.ts)
Basically, follow instructions at http://docs.ionic.io/setup.html (beef this section up)

## Setting up payments integration
(Dylan needs to write this)

## Deploy app
(ionic serve / whatever else, again probably simplified version of https://www.cs.northwestern.edu/academics/courses/394/ionic-setup-tips.php)

## Known Bugs and TODO
(what are our known bugs and what are the future steps for building this project out)

BUG: Differentiation of user privileges between Mothers and Villagers happens on the front-end, should be implemented on backend for better security

TODO: some further type of authentication before another mother can join an already-existing village (right now it is too easy to get admin status)


## Viewing and editing code
If you are new to coding, we'd recommend installing a text editor on your computer. Atom, Sublime Text 2, or TextWrangler all seem to work pretty well. This basically color codes different tags and lines of code based on the type of file you are editing, which makes it way easier to write new code.

## security

## Using Ionic View

## Adding additional code
This app was built using the Ionic 2 Framework combined with AngularJS and Firebase.
Ionic is well documented, so you can learn about a lot of the components on their website: https://ionicframework.com/docs/components/.
We've also found that nearly every problem we encountered was discussed somewhere on StackExchange,
so turn to that for coding help.
A cool sample app that demonstrates a lot of the features available through Ionic can be viewed here:
https://github.com/ionic-team/ionic-conference-app.

## Other useful tutorials
HTML/CSS: https://www.codecademy.com/learn/learn-html-css
JS: https://www.codecademy.com/learn/javascript
Angular: https://angular.io/docs/ts/latest/tutorial/s
Ionic 2: https://www.joshmorony.com/beginners-guide-to-getting-started-with-ionic-2/

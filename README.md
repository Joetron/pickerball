## Table of Contents

- [Purpose](#purpose)
- [Pickerball](#pickerball)

## Purpose

Pickerball is a refactor of an older React app. This version is updated to use creat-react-app, react-redux, react-router, react-boostrap, es6 syntax, axios, and redux-promise. The Google App Engine is used for the back end(the original used Microsoft Azure). I've found the Google App Engine very convenient for building out simple back end endpoints and it is free if you do not go beyond your quota. 

This app is an experiment using the technologies listed above. Unit tests have been left out for now due to the amount of refactoring involved due to the learning process.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The API_KEY for the back end has permission only for my sites.

## Pickerball

Pickerball is designed to allow users to choose Powerball numbers using various algorithms. 

The gap algorithm bases the picks on the average gap size for the lowest to highest gaps between picks. Randomness is added by arranging the gaps in random order, as well as applying randomness to the gap lengths based off of their standard deviation (it is all done on the back end).  

The random algorithm will use random numbers from random.org, currently this is not implemente yet and it just uses the Java Random class. When implemented it will be on the back end and no update here will be needed.

Other pick generator algorithms that may be added are; hot or cold numbers, mean numbers, modal numbers, lucky numbers, etc...

The backend provides the endpoints for generating picks based on the algorithm. The backend will be updated to do nightly tasks to retrieve random numbers from random.org as well as biweekly tasks to retrieve new Powerball numbers and update the data used for the number generators.

This app is a work in progress, not all features are currently implemented.

Work that needs to be done:
* Label for currenr generator and count.
* Refactor page design, perhaps use BootStrap OffCanvas for the sidebar, at the very least try to make the body position itself better so it is not under the sidebar when it does not have to be.
* Homepage, use current Homepage as Generator page
* Stats component (not even sure what I am putting in here yet, but I would like to use d3)
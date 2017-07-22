## Table of Contents

- [Purpose](#purpose)
- [Pickerball](#pickerball)

## Purpose

Pickerball is a refactor of an older React app. This version is updated to use creat-react-app, react-redux, react-router, react-boostrap, es6 syntax, and the Google App Engine (the original used Microsoft Azure).

This app is an experiment in responsive design, as well as experimenting in creation of a full stack framework level app using modern technologies. There have been some lessons learned already and even at this point it could use some refactoring. However, I plan to apply most of my lessons learned to my next app, which will be a generic framework level app that can be used for various other projects. The next app will also go back to implementing unit tests, which were bypassed this time so I could have more time for exploration.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The API_KEY for the back end has permission only for my sites.

## Pickerball

Pickerball is designed to allow users to choose Powerball numbers using various algorithms. At the time I created the original app, Powerball was at an all time high.

The original algorithm I used was a gap algorithm that bases the picks on what you would normally expect for the lowest to highest gap size to be between picks. It does not increase the odds of winning, it just gives the user a choice of how to pick I personally would never choose 1, 2, 3, 4, 5 as my numbere even though the odds of winning are the same.

The backend provides the endpoints for generating picks based on the algorithm. The backend will be updated to do nightly tasks to retrieve random numbers from random.org as well as biweekly tasks to retrieve new Powerball numbers and update the data used for the number generators.

This app is a work in progress, not all features are currently implemented.

Work that needs to be done:
* Back end tasks for retrieving past numbers and random numbers
* Back end endpoints refactored to use data from tasks
* Front end logic filter for start and end date
* Stats component (not even sure what I am putting in here yet, but I would like to use d3)
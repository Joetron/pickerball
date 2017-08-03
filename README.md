## Table of Contents

- [Purpose](#purpose)
- [Pickerball](#pickerball)
- [Next Steps](#next-steps)

## Purpose

Pickerball is a refactor of an older version that was created when I was new to React. This version is updated to use creat-react-app, react-redux, react-router, react-boostrap, es6 syntax, axios, and redux-promise. The Google App Engine is used for the back end(the original used Microsoft Azure). I've found the Google App Engine very convenient for building out simple back end endpoints and it is free. 

As of this update I am taking a Udemy course on React with Redux and thought this would be a good way to apply that knowledge without just copying the course material. The old version of the Pickerball app seemed like a good candidate as it was intended to be a full website (though incomplete). I learned React Router on my own and am at the point in the course where it teaches React Router, we'll see how good I did, but it seems good so far.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The API_KEY for the back end has permission only for my sites.

## Pickerball

Pickerball is designed to allow users to choose Powerball numbers using various algorithms. 

The gap algorithm bases the picks on the average gap size for the lowest to highest gaps between picks. Randomness is added by arranging the gaps in random order, as well as applying randomness to the gap lengths based off of their standard deviation. All this is done on the back end, because it is SO COOL I have to keep it a secret! Ok, not really...  

The random algorithm will use random numbers from random.org, currently this is not implemented and it just uses the Java Random class. When implemented it will be on the back end and no update here will be needed.

## Next Steps
Next steps will be too build out an actual landing page and put the number generator on another page. I also would like to add a stats page to peruse the stats that can be extracted for the past numbers. 

Other pick generator algorithms that may be added are; hot or cold numbers, mean numbers, modal numbers, lucky numbers, etc...

The backend will be updated to do nightly tasks to retrieve random numbers from random.org as well as biweekly tasks to retrieve new Powerball numbers and update the data used for the number generators.

# Admin Dashboard

## Table of Contents

- [Instructions](#instructions)
- [properties](#properties)
- [References](#References)
- [ChallengeList](#Challenge-List)
- [Name](#MyName)

## Instructions

### To run the project

1. make sure to install npm
2. go to https://cors-anywhere.herokuapp.com/corsdemo to activate the server
   click "Request temporary access to demo sever" button
3. npm run

=========================================================

## properties

### first I handle cors problem to can access to API

### using redux to ad app wide state

### react-router to make pages && usNavigate hook to navigate && Navigate to navigate when no path

### using aysnc await and fetch to get API data content

### when I get API I edit it and add an ID to it to make key more convenient

### make re-usable components to make sure that my code not redundant

### to remove ad I am used filter array method to return new array to avoid reference values pointer

### when I update ad

- first I get the index of the ad in ads array by (findIndex) method
- get the ad itself by array zero based with the index that I get
- copy the existing ad and override property that I need by (spread operator)
- copy ads array by (spread operator)
- update ads array based on the ad index
- that's all to avoid mutate the original state and avoid pointer

### to add new add I am used spread operator and add new ad

=========================================================

## References

(https://stackoverflow.com/questions/36878255/allow-access-control-allow-origin-header-using-html5-fetch-api)

(https://firebase.google.com/docs/auth/web/phone-auth?authuser=0)

=========================================================

# Challenge-List

- [x] Full Authentication using Firebase && Login using mobile verification.
- [x] List screen ads
- [x] Update existing screen ads
- [x] Delete existing screen ads
- [x] Create new screen ads

## Make sure

- [x] You’re using Redux to handle the app state
- [x] You’re creating suitable and well-styled user interface/experience
- [x] You’re including readme file to the task files which describes your choices
      and code documentation

## What do we love?

- [x] Well documented code
- [x] Clean code design which can be easily human readable
- [ ] Writing testing scripts which makes the code can be easily evaluated
- [x] Git micro commits to describe coding steps

=========================================================

# MyName

## Hussein Kamal Abd El-Hameed.

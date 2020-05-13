# Bingemasters
![Build Status](https://travis-ci.org/joemccann/dillinger.svg)

See the (temporary) live demo: https://bingemasters-host.web.app/
#### *Authentication is down at the moment*

### Main Menu & Login
![](bingemasters-main.gif)

### Gameplay & Leaderboard Posting
![](bingemasters-gameplay.gif)

## Description:

Bingemasters is an actor guessing game built on the MERN (Mongo, Express, React, Node.js) stack, where an image of an actor appears on the screen and players attempt to correctly identify the actor. 

The goal of the game is to obtain the highest streak/score by consecutively answering correctly within the time limit. In addition, having a high streak allows the user to post to the leaderboard.

Do you have what it takes to become the ultimate Bingemaster?

## Motivation:
As [Developer Pete](https://github.com/codymccoderson) remarks:

> "The motivation for this came from a similar game that my friends and I play on WhatsApp. Someone on the chat will post two actor names and a year. Whoever responds quickest with the correct movie both actors were involved in gets to drop the next clue. This game is an early prototype based on this idea."

## Main Features:

- Easy and Hard modes, in which users can play by selecting multiple choice options or correctly typing out the actors’ names, respectively. 

- Global leaderboard with user-inputted names and rankings based on streaks in descending order.

- Passport Google User authentication; Only logged in users can view the leaderboard.

- Embedded RESTful API to handle GET and POSTs of streaks into a Mongo database.

- Tracks a users’ logged in status through cookie sessions.

- ~~Modal pop-ups based on click events.~~


## Technology:

Bingemasters also uses a number of open sources projects to work properly:

- Front-End:
  - HTML
  - CSS
  - JS
  - React

- Back-End:
  - Node.js
  - Express
  - MongoDB

- Notable Node Modules | Libraries
  - Axios
  - Cookie-Session
  - Http-Proxy-Middleware
  - Mongoose
  - Passport
  - Passport Google OAuth 2.0
  - React-Modal
  - React-Redux
  - React-Dom
  - React-Router-Dom
  - React-Redux
  - Redux-Thunk
  - Styled-Components

- API:
  - TMDB
    - https://developers.themoviedb.org/3/getting-started/introduction

## Installation

Install the dependencies and devDependencies and start the server.

Back-End
```sh
$ npm i
```

Front-End
```sh
$ cd client
$ npm i
```

Have two separate terminals open...
At the folder's top level directory:

Back-End
```sh
$ npm run dev
```

Front-End
```sh
$ cd client
$ npm start
```

### *App will only work on the client-side - There are secret files missing (This was intentional)*

## Roadmaps:

- Transition to React Native for Mobile release.
- Refactor Passport.js (Google strategy) for less messy code.
- Refactor modal behaviors.
- Other TOP SECRET features.

## Development Repos: 
Front-End: https://github.com/codymccoderson/bingemasters-mini/tree/newbackgroundswag/src

Back-End: https://github.com/codymccoderson/bingemasters-backend

## Developers:

Front-End aka 'Style God: https://github.com/codymccoderson

Back-End: https://github.com/TheCaptainFalcon

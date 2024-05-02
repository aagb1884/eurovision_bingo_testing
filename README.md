# Eurovision Bingo

I built this React JS app in my spare time during my CodeClan course over the course of a week before Eurovision 2023. It's a Bingo game that gives you six random Eurovision cliches/tropes as buttons, with a view to pressing all six buttons down and then clicking the Bingo button for your reward.

This repo is for me to practice continuous integration using Git Hub Actions and Cypress.

## How to Play Eurovision Bingo

You can play the app [here](https://andrewblair.co.uk/apps/eurovision-bingo).

(I initially used [Surge for the hosting](https://gist.github.com/ebectar/6b44cf75f63df629d2fe9e0e46bb1dec) before moving it to my own website)

On a desktop, if you hover over 'How does this work then?' the following text appears:

- Every time you click 'Get New Card' or refresh the page, you get six new Eurovision cliches.
- Every time you see or hear one of your cliches on screen during Eurovision, click it.
- The aim is to click all six.
- When you have got all six, make sure the sound is on on your device and click 'Bingo'.
- Play as many times as you want.
- To remove this message either move or click away from it.

If you're on a touch-screen device then if you click on 'How does this work then?' the message appears, and if you click somewhere else the text will disappear.

As you have probably worked out, the text describes how the app works. 

### Future Development

- I need to clean up the code (it was refactored to a single page app quite late in the day, meaning a few files are no longer being used).
- I would like to disable the 'Bingo' button until you have clicked all six of your Bingo card buttons (DONE)
- I hope to add a little ticker tape animation when you click 'Bingo' (DONE)
- I could add a backend so that people could save their scores (highest scores being the shortest time between getting a new Bingo card and clicking 'Bingo')

## Eurovision Bingo Code

The initial version was quite wet code, but I've been working on it when adding it to my website and then [turning it into a mobile app](https://github.com/aagb1884/EuroBingoAppExpo).

[iOS version](https://apps.apple.com/pl/app/eurovision-bingo/id6479647899)
[Android version](https://play.google.com/store/apps/details?id=com.aagb1884.eurovision_bingo)

Adding testing has also made me tweak the code so different buttons have different classNames (iterating through numbers based on their index) so I don't have to just press all the main buttons at once when testing. The mobile version also helped me work out different features, specifically the state governing whether the Bingo button was active.

## CSS

I looked up things like text and button CSS designs and adapted them to my needs. For example, the 'EUROVISION BINGO' header came from [this codepen.io animation](https://codepen.io/alvarotrigo/pen/PoKMyNO) which I found via [this blog](https://alvarotrigo.com/blog/css-text-animations/).

The hover glow effect on the bingo card buttons came from [here](https://codepen.io/kocsten/pen/rggjXp) which I found via [this list](https://dev.to/webdeasy/top-20-css-buttons-animations-f41).

## React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). To run it you will need to use npm start as described below.

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# eurovision_bingo_testing
# eurovision_bingo_testing

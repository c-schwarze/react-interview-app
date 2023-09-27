# Instructions

This is a shell for a simple Calculator app, bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Your task is to fill out the functionality based on the following requirements:

## Initial state

1. When the app is launched (or the page refreshed), the calculator's state should be cleared.
2. If the current state of the calculator is empty, any button click other than a digit is ignored.

## Display

1. The display should show the current state of the calculator, listing each item in the state in order from first (on the left) to most recent (on the right).
2. If the state is empty, show a "0".

## AC button

1. Clicking the AC button should clear the calculator state and reset the display to "0".


## Digit buttons

When a digit button is clicked:
1. If the calculator state is empty, add a new number item to the state.
2. If the most recent item in the state is a number, add the digit clicked onto the number (e.g. clicking "8" and then "9" should result in the number "89").
3. If the most recent item in the state is an operator, create a new number item in the state.

## Decimal (".") button

When the decimal button is clicked:
1. If the last value already has a decimal, ignore the click.
2. If the last item is an operator, create a new number with a leading 0 in the state.

## +/- button
When the +/- button is clicked:
1. If the most recent state item is a number, negate that number (add or remove - as necessary).
2. Clicking this button when the most recent state item is anything else should be ignored.


## Operator buttons
The %, +, -, X, and ÷ buttons are all considered operators. When an operator is clicked:

1. If the most recent state item is a number, add a new operator item to the state.
2. If the most recent state item is another operator, replace the most recent item with the operator that was clicked.


## = button

When the = button is clicked, calculate the result of the arithmetical expression defined by the state.

1. All operators are executed in order, regardless of the operation being performed.
2. The "%" operator is shorthand for dividing by 100.
3. The result of the calculation is stored as a number item in the state.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

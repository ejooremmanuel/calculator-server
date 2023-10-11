# Calculator API and React App

This project consists of a Calculator API implemented with Express and Node.js, along with a React app that interacts with the API to perform basic mathematical calculations.

## Features

- Authentication
- Basic mathematical operations (addition, subtraction, multiplication, division).
- History of calculations.
- User-friendly web interface for performing calculations.

## Technologies

### Express and Node.js API

- [Express.js](https://expressjs.com/): A Node.js web application framework for building the API.
- [Node.js](https://nodejs.org/): A JavaScript runtime environment for executing server-side code.
- [Mathjs](https://https://mathjs.org/): A library for mathematical calculations
- [Morgan](https://www.npmjs.com/package/morgan): A HTTP request logger middleware.
- [CORS](https://www.npmjs.com/package/cors): A middleware for enabling Cross-Origin Resource Sharing.

### React App

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Axios](https://axios-http.com/): A promise-based HTTP client for making API requests.
- [React Router](https://reactrouter.com/): A routing library for navigation within the app.
- [Tailwind](https://tailwindcss.com/): A popular CSS framework for styling the app.

## API Endpoints

- [API Documentation](https://documenter.getpostman.com/view/15961401/2s9YJhyLqE): Postman

- `POST /calculate`: Calculate a mathematical expression and return the result.

- `GET /calculate`: Get calculation history.

- `DELETE /calculate/123456`: Delete a calculation.

- `DELETE /calculate`: Delete all calculations for a user.

## Running the app locally

- Clone the repository
  [API](https://github.com/ejooremmanuel/calculator-server)

- RUN `npm ci` to install required dependencies

- RUN `npm run dev` to start the server

- RUN `npm run test` for unit tests

## Starting the react app locally

- Clone the repository
  [API](https://github.com/ejooremmanuel/calculator-client)

- RUN `npm ci` to install required dependencies

- RUN `npm run start` to start the react app

- RUN `npm run test` for unit tests

## Further guide


https://github.com/ejooremmanuel/calculator-server/assets/55317332/144b2960-967f-4721-b58f-17ce76460a6f



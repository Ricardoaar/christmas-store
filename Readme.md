# Super Store

<h3 style="color:#dc6565">
Important: API IS MOCKED DUE TO ERROR 500 IN FAKE STORE D:
</h3>

[Deployed on heroku!](https://super-store-rra.herokuapp.com/)

This is a customizable and extensible store. It is made with React and Redux and using SSR strategy.

## To run locally:

### Create a .env file in the root folder with the following variables:

```bash
cp .env.example .env
```

Setup the variables in the .env file

```env
ENV=development
PORT=3000
```

### Install dependencies

#### Yarn:

```bash
 yarn
 ```

#### npm

```bash
npm install
```

And that's it! Just run

```bash
yarn dev
```

If you want to test the production build, run

```bash
yarn build
```

and change your .env file to

```

ENV=production
```

## To run tests:

```bash
yarn test
```

## Run a specific test

```bash
yarn test  'test name'
```

## Run lint and prettier

```bash
yarn lint
yarn prettier
```

## Technologies used

- React
- Redux
- Express
- React Router
- Sass
- Jest

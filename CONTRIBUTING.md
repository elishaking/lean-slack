## Description

LeanSlack API

# Contributing Guide

Thanks for taking time to contribute.

## Setup

### Requirements

These are some of the software required to run this application:

- Nodejs `(>= 10.x.x)`
- Yarn `(>= 1.x.x)`
- MongoDB

### Installation

These are the steps to get the app up and running

- Set up the environment variables:

  ```sh
  cp .env.example .env
  ```

- Setup the components (mongodb) and populate
  the `.env` file appropriately.

- Install dependencies
  ```sh
  yarn install
  ```

## Running the app

```bash
# dev/watch mode
$ yarn start:dev

# production mode
$ yarn start
```

## Building the app

```bash
$ yarn build
```

## Test

```bash
$ yarn test
```

- Checkout `package.json` for other helpful scripts.

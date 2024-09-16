## job_listing_back

An application for listing jobs

# Description

_job_listing_back_ is the backend application for the Job Listing application which provides access to job postings. This application also helps to apply for jobs.

# Table of Contents

- [Documentation](#documentation)
- [Setup](#setup)
    - [Dependencies](#dependencies)
    - [Getting Started](#getting-started)
    - [Environment Variables](#environment-variables)
    - [Database and ORM](#database-and-orm)
    - [Docker](#run-the-service-using-docker)
- [Testing](#testing)
- [Prototype](#prototype)
- [Contribute](#contribute)
- [Deployment](#deployment)
- [License](#license)
- [Technical Charts](#technical-charts)

## Documentation

[Link to Documentation]()

## Setup

### Dependencies

- [NodeJS](https://github.com/nodejs/node) - A JavaScript runtime environment
- [Express](https://github.com/expressjs/express) - A web application framework for NodeJS
- [MongoDB](https://github.com/mongodb/mongo) - MongoDB is a document database designed for ease of application development and scaling
- [Mongoose](https://mongoosejs.com/) - Mongoose provides a straight-forward, schema-based solution to model your application data

### Getting Started

Follow these steps to set up the project in development mode

- Install [Nodejs](https://nodejs.org/en/download/)
- Install and setup [MongoDB](https://www.mongodb.com/try/download/community)
- Clone the repository by running the command
  ```
  git clone https://github.com/BettyKamula/job_listing_back.git
  ```
- Run the command below to enter the application's directory

  ```
  cd job_listing_back
  ```

- Install the application's dependencies by running the command
  ```
  yarn install
  ```
- Create a .env file in the root of your directory using the .env.example file in the repository
- Setup the database and migrations
- Start the application by running
  ```
  yarn run start:dev
  ```
  The application should now be running at http://127.0.0.1:5000


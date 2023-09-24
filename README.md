# NoSQL Social Network API

## Description
This is a NoSQL social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. The API is built using Node.js and Express.js for routing, a MongoDB database, and the Mongoose ODM. 

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Video](#video)
* [License](#license)
* [Questions](#questions)  
  
## Installation
- `MongoDB`: [6.1.0](https://www.npmjs.com/package/mongodb)
- `Mongoose`: [7.5.2](https://www.npmjs.com/package/mongoose)
- `Node.JS`: [16.20.2](https://nodejs.org/en/blog/release/v16.18.1/)
- `Express`: [4.18.2](https://www.npmjs.com/package/express)
- `Insomnia`: [Download](https://insomnia.rest/download)

## Usage
Use the following commands at the root of the project to get started:
1. Run the command `npm i` to install dependencies.
2. Enter `npm start` or `node server.js` command to start the server. 
3. Once connected to localhost, you should see a message indicating the API server is running. 
4. Use Insomnia to open http://localhost:3001 and test API `GET` routes for users and thoughts.
5. Test API `POST`, `PUT`, and `DELETE` routes to perform create, update, and delete operations in the database.

## Video
The following walkthrough videos demonstrate the functionality of the social media API:
1. The first video demonstrates how to start the application's server.

https://github.com/suzyhan/

<figure class="video_container">
  <video controls="true" allowfullscreen="true" poster="path/to/poster_image.png" muted="" loop="" autoplay="">
    <source src="assets/" type="video/mp4">
  </video>
</figure>

2. The second video demonstrates the API routes being tested in Insomnia:
- `GET` routes for all users and all thoughts
- `GET` routes for a single user and a single thought
- `POST`, `PUT`, and `DELETE` routes for users and thoughts
- `POST` and `DELETE` routes for a user's friend list
- `POST` and `DELETE` routes for reactions to thoughts

https://github.com/suzyhan/

<figure class="video_container">
  <video controls="true" allowfullscreen="true" poster="path/to/poster_image.png" muted="" loop="" autoplay="">
    <source src="assets/" type="video/mp4">
  </video>
</figure>

## License
None

## Questions
Please email me with any questions or visit my GitHub profile using the links provided below.
* GitHub: [suzyhan](https://github.com/suzyhan)
* Email: [suzyahan@gmail.com](mailto:suzyahan@gmail.com)
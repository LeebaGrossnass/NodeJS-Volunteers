# Node.js Volunteer Coordination System API

This project is an API built using Node.js and MongoDB, facilitate coordination between volunteers and help seekers by managing and organizing volunteer responses to requests for assistance.
<br>
The system includes three main screens:
<br>
a list of open help requests with filtering options by location, status, and priority ,detailed view of a specific help request and a volunteer screen for existing and new volunteers, including updating request status and registering new volunteers. 
<br>
The data is stored in MongoDB. 
<br>
The project follows REST principles, with a layered architecture: a DB layer for data retrieval, a business logic layer for data processing, and an API layer for client interaction.

- [Installation](#installation)
  
## Installation

1. Clone the repository: git clone https://github.com/ChayaEisenberg/NodeJS-project.git
2. Install the dependencies: npm install
3. Configure the environment variables by creating a .env file based on the provided .env .
4. Set up the database by running the necessary migrations and seeds.

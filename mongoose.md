<h2>Introduction to MongoDB</h2>

<h3>Overview</h3>
MongoDB is a popular NoSQL database that stores data in a document-oriented format. It's known for its scalability, flexibility, and performance, making it suitable for various types of applications.

<h3>Key Features of MongoDB</h3>

- Document-Oriented: Data is stored in flexible JSON-like documents called BSON.
- Dynamic Schema: Supports dynamic schema for easy data storage and retrieval.
- High Scalability: Allows horizontal scaling by distributing data across multiple servers.
- Query Language: Provides a rich query language for data retrieval and manipulation.

<h2>Object-Relational Mapping (ORM)</h2>
<h3>Overview</h3>
ORM is a programming technique used to map objects from an application to tables in a relational database. It simplifies database interaction by converting data between incompatible types in programming languages and databases.

<h3>Benefits of ORM</h3>

- Abstraction of Database Complexity: Hides database-specific details from application code.
- Simplified CRUD Operations: Provides methods for creating, reading, updating, and deleting data.
- Object-Oriented Approach: Allows developers to work with objects instead of raw SQL queries.

<h2>Mongoose: Object Data Modeling (ODM) Library for MongoDB</h2>
<h3>Overview</h3>
Mongoose is an ODM library for MongoDB in Node.js, offering a schema-based solution to model application data.

<h4>Core Features of Mongoose</h4>

- Schema Definition: Defines data models with defined properties and data types.
- Middleware Support: Allows pre and post-processing of data before and after operations.
- Query Building: Provides methods for CRUD operations and advanced querying.
- Validation: Offers built-in validators for data validation.

**Getting Started with Mongoose:**

- **Installation:** Install Mongoose via npm or yarn.

  npm install mongoose

- **Connecting to MongoDB:** Set up a connection to your MongoDB database.

        const mongoose = require('mongoose');
        mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

<h2>Distinctions Between RDBMS and NoSQL Databases</h2>

<h3>RDBMS (Relational Database Management Systems)</h3>

- Structured Data Storage: Stores data in tables with a predefined schema.
- SQL Query Language: Uses SQL for querying and manipulation.
- ACID Properties: Enforces Atomicity, Consistency, Isolation, Durability for data integrity.
- Relationships: Supports complex relationships between tables.

<h3>NoSQL Databases</h3>

- Flexible Data Storage: Stores data in flexible formats like documents, key-value pairs, or wide-column stores.
- Query Languages Vary: NoSQL databases use different query languages (e.g., MongoDB's BSON).
- Scalability and Performance: Offers scalability and high performance, suitable for large volumes of unstructured data.
- Lack of ACID Properties: Emphasizes eventual consistency and scalability over strict consistency models.

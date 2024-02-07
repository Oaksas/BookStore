```markdown
# Bookstore API

Bookstore API is a RESTful API built with Node.js, Express, Sequelize, and PostgreSQL.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Usage](#usage)
  - [Starting the Server](#starting-the-server)
  - [API Endpoints](#api-endpoints)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Oaksas/bookstore
   cd bookstore
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a PostgreSQL database and update the `.env` file with your database credentials.

4. Run database migrations:

   ```bash
   npx sequelize-cli db:migrate
   ```

### Configuration

Update the `.env` file with your database configuration:

```env
DB_DIALECT=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_DATABASE=bookstore
```

## Project Structure

The project follows a standard MVC (Model-View-Controller) structure with additional folders for services, repositories, and entities.

```
src/
|-- controllers/
|-- entities/
|-- repositories/
|-- routes/
|-- services/
|-- .env
|-- app.ts
|-- index.ts
|-- ...
```

- `controllers`: Contains the route handlers for each endpoint.
- `entities`: Database models using Sequelize.
- `repositories`: Database interaction layer.
- `routes`: Express route definitions.
- `services`: Business logic layer.

## Usage

### Starting the Server

```bash
npm start
```

The server will be running on `http://localhost:3000`.
## API Endpoints

### Users

- **Create User:**
  - Endpoint: `POST /users`
  - Request Body:
    ```json
    {
      "username": "example_user",
      "password": "secure_password"
    }
    ```

- **Login User:**
  - Endpoint: `POST /users/login`
  - Request Body:
    ```json
    {
      "username": "example_user",
      "password": "secure_password"
    }
    ```

- **Get User:**
  - Endpoint: `GET /users/:userId`

- **Update User:**
  - Endpoint: `PUT /users/:userId`
  - Request Body:
    ```json
    {
      "username": "new_username"
    }
    ```

- **Delete User:**
  - Endpoint: `DELETE /users/:userId`

### Orders

- **Create Order:**
  - Endpoint: `POST /orders`
  - Request Body:
    ```json
    {
      "customerId": 1,
      "bookId": 2,
      "quantity": 3
    }
    ```
  - Note: The user must have enough points to place the order.

- **Get Order:**
  - Endpoint: `GET /orders/:orderId`


- **Cancel Order:**
  - Endpoint: `DELETE /orders/:orderId`

  - Note: The user must have enough points to place the order.

### Books

- **Create Book:**
  - Endpoint: `POST /books`
  - Request Body:
    ```json
    {
      "title": "Example Book",
      "author": "John Doe",
      "price": 19.99
    }
    ```

- **Get Book:**
  - Endpoint: `GET /books/:bookId`

- **Update Book:**
  - Endpoint: `PUT /books/:bookId`
  - Request Body:
    ```json
    {
      "title": "Updated Title",
      "author": "Updated Author",
      "price": 24.99
    }
    ```

- **Delete Book:**
  - Endpoint: `DELETE /books/:bookId`


## Documentation

API documentation can be found in the [docs](./docs) folder.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
```

Make sure to add detailed information about your API endpoints, expected request and response formats, and any other relevant details in the [docs](./docs) folder or elsewhere in the project structure. Update the configuration section with accurate instructions for setting up and configuring the project locally.
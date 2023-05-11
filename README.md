

# Docker JSON CRUD

This repository contains a simple Node.js application that provides CRUD operations for JSON data using Docker. The application uses Express.js for the server and implements basic routes to interact with a JSON file.

## Prerequisites

- Node.js and npm should be installed on your machine.
- Docker should be installed and running.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/docker-json-crud.git
   ```

2. Navigate to the project directory:

   ```bash
   cd docker-json-crud
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The server will be running at [http://localhost:8000](http://localhost:8000).

## Routes

- `GET /customers`: Returns the collection of customer records.
- `GET /customers/:id`: Returns a single customer record based on the provided ID.
- `GET /customers/:id/orders`: Returns the collection of orders for a given customer ID.
- `GET /customers/:customerId/orders/:orderId`: Returns a single order record based on the provided customer and order IDs.

## JSON Data

The application uses the following JSON data structure:

```json
{
  "customers": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@gmail.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@yahoo.com"
    },
    {
      "id": 3,
      "name": "Mike Johnson",
      "email": "mike@outlook.com"
    }
  ],
  "orders": [
    {
      "id": 1,
      "customerId": 1,
      "product": "iPhone",
      "quantity": 2
    },
    {
      "id": 2,
      "customerId": 1,
      "product": "MacBook Pro",
      "quantity": 1
    },
    {
      "id": 3,
      "customerId": 2,
      "product": "iPad",
      "quantity": 3
    },
    {
      "id": 4,
      "customerId": 3,
      "product": "Samsung Galaxy",
      "quantity": 1
    }
  ]
}
```


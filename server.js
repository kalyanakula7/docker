const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000
app.use(cors());

const fs = require('fs');

// Route to return the collection of customer records
app.get('/customers', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    const jsonData = JSON.parse(data);
    const customers = jsonData.customers;
    console.log(customers)
    res.json(customers);
  });
});

// Route to return a single customer record based on the provided ID
app.get('/customers/:id', (req, res) => {
  const customerId = parseInt(req.params.id);
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    const jsonData = JSON.parse(data);
    const customers = jsonData.customers;
    const customer = customers.find((c) => c.id === customerId);
    if (!customer) {
      res.status(404).send('Customer not found');
      return;
    }
    res.json(customer);
  });
});

// Route to return the collection of orders for a given customer ID
app.get('/customers/:id/orders', (req, res) => {
  const customerId = parseInt(req.params.id);
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    const jsonData = JSON.parse(data);
    const orders = jsonData.orders;
    const customerOrders = orders.filter((o) => o.customerId === customerId);
    res.json(customerOrders);
  });
});

// Route to return a single order record based on the provided customer and order IDs
app.get('/customers/:customerId/orders/:orderId', (req, res) => {
  const customerId = parseInt(req.params.customerId);
  const orderId = parseInt(req.params.orderId);
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    const jsonData = JSON.parse(data);
    const orders = jsonData.orders;
    const order = orders.find((o) => o.customerId === customerId && o.id === orderId);
    if (!order) {
      res.status(404).send('Order not found');
      return;
    }
    res.json(order);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


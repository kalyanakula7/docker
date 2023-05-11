const baseUrl = 'http://localhost:8000'; // Update with your server URL

// Function to display data on the page
const displayData = (data, containerId) => {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // Clear previous content

  if (data?.length === 0 || !data) {
    container.textContent = 'No data available.';
    return;
  }

  if (!Array.isArray(data)) {
    data = [data]; // Convert single object to array for consistency
  }
console.log(data)

  const table = document.createElement('table');
  table.classList.add('data-table');

  const headers = Object.keys(data[0]);
  const headerRow = document.createElement('tr');
  headers.forEach((header) => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  data.forEach((item) => {
    const row = document.createElement('tr');
    headers.forEach((header) => {
      const cell = document.createElement('td');
      cell.textContent = item[header];
      row.appendChild(cell);
    });
    table.appendChild(row);
  });

  container.appendChild(table);
};

// Function to fetch data from the server
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Function to handle button click and fetch customers
const fetchCustomers = () => {
  const url = `${baseUrl}/customers`;
  fetchData(url).then((data) => {
    displayData(data, 'customers-container');
  });
};

// Function to handle button click and fetch a single customer
const fetchSingleCustomer = () => {
  const customerId = document.getElementById('customer-id').value;
  const url = `${baseUrl}/customers/${customerId}`;
  fetchData(url).then((data) => {
    displayData(data, 'customer-container');
  });
};

// Function to handle button click and fetch customer orders
const fetchCustomerOrders = () => {
  const customerId = document.getElementById('customer-id-orders').value;
  const url = `${baseUrl}/customers/${customerId}/orders`;
  fetchData(url).then((data) => {
    displayData(data, 'customer-orders-container');
  });
};

// Function to handle button click and fetch a single order
const fetchSingleOrder = () => {
  const customerId = document.getElementById('customer-id-order').value;
  const orderId = document.getElementById('order-id').value;
  const url = `${baseUrl}/customers/${customerId}/orders/${orderId}`;
  fetchData(url).then((data) => {
    displayData(data, 'order-container');
  });
};

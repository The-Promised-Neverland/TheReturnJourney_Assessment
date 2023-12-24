# Backend Assessment - TheReturnJourney

## Overview

This project is my submission for the backend developer position at TheReturnJourney.


## Project Structure
The project is structured into distinct directories, each aligned with a specific question or task in the assessment. Here's a concise overview:

Q1: Unique Array Manipulation
Q2: Merged Car Properties
Q3: Logical Operations - Common Elements Between Two Arrays
Q4: RESTful API Development with Middlewares and Testing

## Installation

1. Run `npm install` to install all necessary libraries and dependencies.

## Testing

### **Before testing, switch to the test profile in .env file.**

Run the corresponding command to test.

### Q1 - Unique Array : `npm run testQ1`

### Q2 - Merged Car Props : `npm run testQ2`

### Q3 - Common Elements Between Two Arrays : `npm run testQ3`

### Q4 - RESTful API : `npm run testQ4`


## Running the Server for Q4 RESTful API

To start the server, use the following command: `npm start`

## API Endpoints

- **Endpoint:** `/api/products/`
- **Method:** GET
- **Description:** Get all products.
- **Example Response:**
  ```javascript
  [
    {
      "id": 1,
      "name": "Smartphone",
      "brand": "TechGuru",
      "price": 499.99,
      "currentStock": 50,
      "reviews": 4,
      "description": "A high-end smartphone with the latest features."
    },
    // ... other products
  ]
  ```

- **Endpoint:** `/api/products/:id`
- **Method:** GET
- **Description:** Get a specific product by ID.
- **Example Response:** Retrieving product with id: 1
  ```javascript
    {
      "id": 1,
      "name": "Smartphone",
      "brand": "TechGuru",
      "price": 499.99,
      "currentStock": 50,
      "reviews": 4,
      "description": "A high-end smartphone with the latest features."
    }
    ```


- **Endpoint:** `/api/products/:id`
- **Method:** PUT
- **Description:** Update specific product by ID.
- **Example Request:** Updating product with id: 1
    ```javascript
    {
      "name": "Updated Product",
      "brand": "BrandUpdated",
      "price": 599.99,
      "currentStock": 15,
      "reviews": 4,
      "description": "An updated product with new features." 
    }
    ``` 
- **Example Response:**
    ```javascript 
    {
        "message": "Product updated successfully"
    }
    ```

    
- **Endpoint:** `/api/products/:id`
- **Method:** DELETE
- **Description:** Delete specific product by ID.
- **Example Response:**
    ```javascript 
    {
        "message": "Product deleted successfully"
    }
    ```


- **Endpoint:** `/api/products/`
- **Method:** POST
- **Description:** Create new product.
- **Example Request:** Sending productDetails inside body as JSON
    ```javascript
    {
      "name": "New product",
      "brand": "New brand",
      "price": 599.99,
      "currentStock": 15,
      "reviews": 4,
      "description": "New product description." 
    }
    ``` 
- **Example Response:**
    ```javascript 
    {
        "message": "Product created successfully"
    }
    ```

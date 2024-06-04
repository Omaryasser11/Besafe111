import React from 'react';
import CustomerBill from './CustomerBill';

const BillPage = () => {
    // Example customer object
    const customer = {
        name: "John Doe",
        email: "john@example.com",
        // Add more customer details as needed
    };

    // Example items array (for multiple items)
    const itemsArray = [
        { name: "Golden Package", price: 500 },
        { name: "Sliver package", price: 300 },
        // Add more items as needed
    ];

    // Example item object (for a single item)
    const singleItem = {
        name: "Golden package",
        price: 500,
        // Add more item details as needed
    };

    return (
        <div className='col-12 mainPage' >
     
            {/* Pass items as an array */}
            <CustomerBill customer={customer} items={singleItem} />

            {/* Pass single item as an object */}
            {/* <CustomerBill customer={customer} items={singleItem} /> */}
        </div>
    );
};

export default BillPage;

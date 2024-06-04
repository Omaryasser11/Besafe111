
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import "../Table.scss"
import CustomerBill from '../../CompentsAdmin/CustomerBill/CustomerBill'
const MyTableComponent = () => {
    const [showCustomerBill, setShowCustomerBill] = useState(false);
    const [selectedBillData, setSelectedBillData] = useState(null);

    const handleBillClick = (billData) => {
        setSelectedBillData(billData);
        setShowCustomerBill(true);
    };

    const handleExitCustomerBill = () => {
        setSelectedBillData(null);
        setShowCustomerBill(false);
    };


    // Sample data for demonstration
    const data = [
        { id: 1, name: 'Golden', price: 1500, Number: 1, amount: 1500 },
        { id: 1, name: 'Silver', price: 1200, Number: 10, amount: 12000 },
        { id: 1, name: 'Perimeum', price: 950, Number: 15, amount: 14250 },

    ];

    // Render CustomerBill component if showCustomerBill is true
    if (showCustomerBill && selectedBillData) {
        return (
            <div className='col-12'>
                <CustomerBill customer={selectedBillData.customer} items={selectedBillData.items} />
                <button onClick={handleExitCustomerBill}>Exit</button>
            </div>
        );
    }

    return (
        <div className='col-12'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Pakage Name</th>
                        <th>price</th>
                        <th>Number</th>
                        <th>Amount</th>


                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.Number}</td>
                            <td>{item.amount} Egp</td>


                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default MyTableComponent;










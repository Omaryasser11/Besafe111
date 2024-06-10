import React, { useEffect, useState } from "react";
import "./ItemCardPage.scss"; // Import SCSS file for styling
import useGetPackages from "../../../hooks/admin/package/useGetPackages";
import useAddPackage from "../../../hooks/admin/package/useAddPackage";
import useRemovePackage from "../../../hooks/admin/package/useRemovePackage";

const ItemCardPage = () => {
  const { getPackages, data } = useGetPackages();
  const { addPackage, success: addingPackageSuccess } = useAddPackage();
  const { removePackage, success: removingPackageSuccess } = useRemovePackage();
  const token = localStorage.getItem("authToken");

  useEffect(() => {
    getPackages(token);
  }, []);

  useEffect(() => {
    if (data) setItems(data);
  }, [data]);

  // State to manage items
  const [items, setItems] = useState();

  // State to manage visibility of items
  const [showItems, setShowItems] = useState(true);

  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    sessions: "",
    feeRate: "",
  });

  // Function to toggle visibility of items
  const toggleItemsVisibility = () => {
    setShowItems(!showItems);
  };

  // Function to handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission (adding new item)
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: items.length + 1, // Generate unique ID
      ...formData,
    };
    setItems([...items, newItem]);
    addPackage(formData, token);
    setFormData({
      name: "",
      description: "",
      price: "",
      sessions: "",
      feeRate: "",
    });
  };

  // Function to handle item removal
  const handleRemoveItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    removePackage(token, id);
  };

  return (
    <div className="item-card-page mainPage col-12">
      <h1>Item Available</h1>
      <div className="toggle-button">
        {showItems ? (
          <button onClick={toggleItemsVisibility}>Hide Items</button>
        ) : (
          <button onClick={toggleItemsVisibility}>Show Items</button>
        )}
      </div>
      {showItems ? (
        <div className="item-list">
          {items &&
            items.map((item) => (
              <div className="item-card" key={item.id}>
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>{item.price}$</p>
                  <p>Sessions: {item.sessions}</p>
                  <p>Fee Rate: {item.feeRate}</p>
                </div>
                <div className="item-actions">
                  <button onClick={() => handleRemoveItem(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="item-form">
          <h2>Add New Item</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Item Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Item Description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="price"
              placeholder="Item Price"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
            <input
              type="number"
              name="sessions"
              placeholder="Sessions Number"
              value={formData.sessions}
              onChange={handleInputChange}
              required
            />
            <input
              type="number"
              name="feeRate"
              placeholder="Fee Rate"
              value={formData.feeRate}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Add Item</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ItemCardPage;

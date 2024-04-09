import React, { useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ReducerContext from "./ReducerContext";

function CheckoutFormModal({ open, onClose }) {
  const dialog = useRef(null);
  const ctx = useContext(ReducerContext);
  const [formData, setFormData] = useState({
    cityName: "",
    lastName: "",
    email: "",
    street: "",
    postalCode: "",
    city: "",
  });

  useEffect(() => {
    const currentDialog = dialog.current;
    if (open) {
      currentDialog.showModal();
    } else {
      currentDialog.close();
    }
  }, [open]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Define or obtain the items variable here
    // Assuming ctx.items is the correct data structure for items
    fetch("https://localhost:3000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order: {
          items: ctx.items, // Ensure this matches your backend's expected structure
          customers: formData, // Ensure this matches your backend's expected structure
        },
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Order submitted successfully");
          // Optionally clear form data or perform other actions
          setFormData({
            cityName: "",
            lastName: "",
            email: "",
            street: "",
            postalCode: "",
            city: "",
          });
          onClose();
        } else {
          console.error("Failed to submit order");
          // Optionally handle errors, e.g., show a message to the user
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Optionally handle network errors, e.g., show a message to the user
      });
  };

  return createPortal(
    <dialog ref={dialog} onClose={onClose} className="modal">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="cityName"
          value={formData.cityName}
          onChange={handleInputChange}
          placeholder="City Name"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleInputChange}
          placeholder="Street"
        />
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleInputChange}
          placeholder="Postal Code"
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          placeholder="City"
        />
        <button type="submit">Submit</button>
      </form>
    </dialog>,
    document.body
  );
}

export default CheckoutFormModal;

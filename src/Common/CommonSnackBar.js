import React, { useState } from "react";
import "../Screens/CSS/CommonSnackBar.css"; 

const CustomAlert = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  };

  return visible ? (
    <div className="custom-alert">
      <div className="custom-alert-content">
        <p>{message}</p>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  ) : null;
};

export default CustomAlert;

import React, { useEffect, useState } from "react";
import "../CSS/dropdown.css";

const Dropdown = ({ placeholder, items }) => {
  // manage states using usestate hooks
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setselectedValue] = useState(null);

  // handling state on page loading
  useEffect(() => {
    const handler = () => setShowMenu(false);
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });
  // handler functions

  //function to handle click event 
  const handleInputClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };
  // function to show selected value
  const getDisplay = () => {
    if (selectedValue) return selectedValue;
    return placeholder;
  };
  //changing state to selected value in dropdown list
  const onItemClick = (item) => {
    setselectedValue(item);
  };
  //checking if the item is selected
  const isSelected = (item) => {
    if (!selectedValue) {
      return false;
    }

    return selectedValue === item;
  };

  return (
    <div>
      <h2> Should you use a Dropdown ?</h2>
      <div className="dropdown-container">
        <div onClick={handleInputClick} className="dropdown-input">
          <div className="dropdown-selected-value">{getDisplay()}</div>

          <div className="dropdown-tools">
              <i className="fa-solid fa-angle-down"></i>
          </div>
                                                    
        </div>
        {showMenu && (
          <div className="dropdown-menu">
            {items.map((item) => (
              <div
                onClick={() => onItemClick(item)}
                key={item}
                className={`dropdown-item ${isSelected(item) && "selected"}`}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;

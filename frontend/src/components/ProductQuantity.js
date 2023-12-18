import React, { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

function ProductQuantity() {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity <= 1) {
      setQuantity(0);
    } else {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="quantity">
      <i>
        <AiOutlineCaretDown
          onClick={decrementQuantity}
          className="iconSpacing"
        />
      </i>
      {quantity}
      <i>
        <AiOutlineCaretUp onClick={incrementQuantity} className="iconSpacing" />
      </i>
    </div>
  );
}

export default ProductQuantity;

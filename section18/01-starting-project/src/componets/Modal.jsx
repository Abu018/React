import React, { useContext, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ReducerContext from "./ReducerContext.jsx";
import NoItems from "./NoItems.jsx";
import CheckoutFormModal from "./CheckOutFormModal.jsx";

function Modal({ open, onClose }) {
  const dialog = useRef(null);
  const ctx = useContext(ReducerContext);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const currentDialog = dialog.current;
    if (open) {
      currentDialog.showModal();
    } else {
      currentDialog.close();
    }
  }, [open]);

  const handleInc = (id) => {
    ctx.incrementQuantity(id);
  };

  const handleCheckOut = () => {
    setShowForm(true);
  };

  return createPortal(
    <dialog ref={dialog} onClose={onClose} className="modal">
      {open && !showForm && ctx.items.length > 0 && (
        <>
          {ctx.items.map((item, index) => (
            <div key={index} className="item-container">
              <div className="item-info">
                <p>Selected Name: {item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.price}</p>
                <p>Description: {item.description}</p>
              </div>
              <div className="button-container">
                <button onClick={() => ctx.decrementQuantity(item.id)}>
                  -
                </button>
                <button onClick={() => handleInc(item.id)}>+</button>
              </div>
            </div>
          ))}
          <button onClick={handleCheckOut}>Check Out</button>
        </>
      )}
      {open && showForm && (
        <CheckoutFormModal open={showForm} onClose={() => setShowForm(false)} />
      )}

      {open && ctx.items.length === 0 && <NoItems />}
    </dialog>,
    document.body
  );
}

export default Modal;

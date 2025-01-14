import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, name } = item;
        return (
          <article key={id} className="grocery-item">
            <p className="title">{name}</p>
            <div className="btn-container">
              <button className="edit-btn">
                <FaEdit onClick={() => editItem(id)} />
              </button>
              <button className="delete-btn">
                <FaTrash onClick={() => removeItem(id)} />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;

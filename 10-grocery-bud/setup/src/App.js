import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id == id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.name);
  };

  const removeItem = (id) => {
    showAlert(true, "item has been removed", "danger");
    const newList = list.map((item) => item.id !== id);
    setList(newList);
  };

  const clearList = (e) => {
    showAlert(true, "empty list", "danger");
    setList([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "please enter item", "danger");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id == editID) {
            return { ...list, name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "item has been edited", "success");
    } else {
      const newItem = { id: new Date().getTime().toString(), name };
      setList([...list, newItem]);
      showAlert(true, "item added to the list", "success");
      setName("");
    }
  };
  const showAlert = (show = false, msg = "", type = "") => {
    return setAlert({ show, msg, type });
  };

  return (
    <>
      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}
          <h3>grocery bud</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="e.g. milk"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? "edit" : "submit"}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="grocery-container">
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button type="submit" className="clear-btn" onClick={clearList}>
              clear items
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default App;

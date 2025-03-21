import { useState } from 'react';

export default function TodoForm(props) {
  props.onSubmit;

  const [newItem, setNewItem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === '') return;

    props.onSubmit(newItem);

    setNewItem('');
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="form-add-item"
      >
        <div className="form-row">
          <label htmlFor="item-input" />
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item-input"
            placeholder="New item"
          ></input>
        </div>
        <button className="btn">Add item</button>
      </form>
    </>
  );
}

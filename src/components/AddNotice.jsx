import uuid from "react-uuid";
import { useState } from "react";

const AddNotice = ({ setNotice }) => {
  const [message, setMessage] = useState("");
  const handleNotice = (e) => {
    e.preventDefault();

    setNotice((notices) => [...notices, { id: uuid(), message }]);
    setMessage("");
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };
  return (
    <form onSubmit={handleNotice}>
      <div>
        <input
          type="text"
          value={message}
          onChange={handleChangeMessage}
          name="insert-notice"
          id="insert-notice"
          placeholder="নোটিস লিখুন এখানে..."
          className="w-full px-4 py-3 text-black"
        />
      </div>
      <button
        type="submit"
        className="border rounded-sm px-4 py-2 font-semibold mt-2"
      >
        Create
      </button>
    </form>
  );
};

export default AddNotice;

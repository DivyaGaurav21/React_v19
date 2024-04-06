import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";


function CreateCustomer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const dispatch = useDispatch();

  function handleClick() {
    if(!fullName || !nationalId) return;
    dispatch(createCustomer(fullName, nationalId));
  }

  return (
    <div>
      <h2 className="text">Create new customer</h2>
      <div className="inputs">
        <div>
          <label className="text">Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label className="text">National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleClick} className="btn">Create new customer</button>
      </div>
    </div>
  );
}

export default CreateCustomer;
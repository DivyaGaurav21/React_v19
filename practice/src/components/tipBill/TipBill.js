import React, { useState } from "react";

const TipBill = () => {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = (bill * ((percentage1 + percentage2) / 2)) / 100;

  function resetHandler() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service ?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service ?
      </SelectPercentage>
      {bill && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={resetHandler} />
        </>
      )}
    </div>
  );
};

function BillInput({ bill, setBill }) {
  return (
    <div>
      <label>How much was the Bill ?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dis-SatisFied (0%)</option>
        <option value="5">It was OK (5%}</option>
        <option value="10">It was Good (10%)</option>
        <option value="20">Absolutely Best (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      you pay {bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

export default TipBill;

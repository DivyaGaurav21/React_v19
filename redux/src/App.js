import React from "react";
import CreateCustomer from "./components/OldRedux/features/customers/CreateCustomer";
import Customer from "./components/OldRedux/features/customers/Customer";
import BalanceDisplay from "./components/OldRedux/features/accounts/BalanceDisplay";
import AccountOperations from "./components/OldRedux/features/accounts/AccountOperations";
import { useSelector } from "react-redux";

const App = () => {
  const fullName = useSelector((store) => store.customer.fullName);
  return (
    <div className="m-auto">
      <h1 className="text">🏦 The React-Redux Bank ⚛️</h1>
      {fullName === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
};

export default App;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");

  const dispatch = useDispatch();
  const {
    balance,
    loan: currentLoan,
    loanPurpose: currentLoanPurpose,
  } = useSelector((store) => store.account);
  // console.log(account);

  console.log(balance);

  function handleDeposit() {
    if (!depositAmount) return;
    dispatch(deposit(depositAmount));
    setDepositAmount("");
  }
  function handleWithdrawal() {
    if (!withdrawalAmount) return;
    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount("");
  }
  function handleRequestLoan() {
    if (!loanAmount || !loanPurpose) return;
    dispatch(requestLoan(loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
  }
  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <div>
      <h2 className="text">Your account operations</h2>
      <div className="inputs">
        <div>
          <label className="text">Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />

          <button onClick={handleDeposit} className="btn">
            Deposit {depositAmount}
          </button>
        </div>

        <div>
          <label className="text">Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal} className="btn">
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          <label className="text">Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan} className="btn">
            Request loan
          </button>
        </div>

        {currentLoan > 0 && (
          <div>
            <span className="text">
              Pay back ${currentLoan} ({currentLoanPurpose}) 
            </span>
            <button onClick={handlePayLoan} className="btn">
              Pay loan
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountOperations;

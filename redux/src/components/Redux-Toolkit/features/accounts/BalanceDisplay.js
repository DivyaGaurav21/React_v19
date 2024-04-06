import { useSelector } from "react-redux";

function formatCurrency(value) {
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
    }).format(value);
  }
  
  
  function BalanceDisplay() {

   const totalBalance =  useSelector(store => store.account.balance)

    return <div className="balance text-yellow-500">{formatCurrency(totalBalance)}</div>;
  }
  
  export default BalanceDisplay;
import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer.fullName);

  return <h2 className="text-yellow-600 font-bold">👋 Welcome, <span className="text-slate-800 font-extrabold text-xl">{customer}</span></h2>;
}

export default Customer;

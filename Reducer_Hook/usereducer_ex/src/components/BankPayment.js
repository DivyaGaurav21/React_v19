import React, { useReducer } from 'react'

const initialState = {
    balance: 0,
    loan: 0,
    isActive: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'openAccount':
            return {
                ...state,
                balance: 500,
                isActive: true
            }
        case 'deposite':
            return {
                ...state,
                balance: state.balance + action.payload
            }
        case 'withdraw':
            if (state.balance <= 0) {
                return state;
            }
            return {
                ...state,
                balance: state.balance - action.payload
            }
        case "requestLoan":
            if (state.loan > 0) {
                return state;
            }
            return {
                ...state,
                balance: state.balance + action.payload,
                loan: action.payload
            }
        case "payLoan":
            if (state.loan > 0) {
                return {
                    ...state,
                    balance: state.balance - state.loan,
                    loan: 0
                }
            }
            return state;
        case "closeAccount":
            if (state.loan > 0 || state.balance !== 0) return state;
            return initialState;
        default:
            throw new Error("Unknown Action")
    }

}


const BankPayment = () => {
    const [{ balance, loan, isActive }, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>useReducer Bank Account</h1>
            <p>Balance : {balance}</p>
            <p>Loan : {loan}</p>
            <p>
                <button onClick={() => dispatch({ type: 'openAccount' })} disabled={isActive}>Open Account</button>
            </p>
            <p>
                <button onClick={() => dispatch({ type: 'deposite', payload: 150 })} disabled={!isActive}>Deposite 150</button>
            </p>
            <p>
                <button onClick={() => dispatch({ type: 'withdraw', payload: 50 })} disabled={!isActive}>Withdraw 50</button>
            </p>
            <p>
                <button onClick={() => dispatch({ type: 'requestLoan', payload: 5000 })} disabled={!isActive}>Request a loan of 5000</button>
            </p>
            <p>
                <button onClick={() => dispatch({ type: 'payLoan' })} disabled={!isActive}>Pay Loan</button>
            </p>
            <p>
                <button onClick={() => dispatch({ type: 'closeAccount' })} disabled={!isActive}>Close Account</button>
            </p>
        </div>
    )
}

export default BankPayment
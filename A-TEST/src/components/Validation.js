import React, { useState } from 'react';
import '../index.css';

const Validation = ({ setValidate }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [userNameError, setUserNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        if (e.target.value.match(/[^\w\s]/)) {
            setUserNameError('Username should not have special characters');
        } else {
            setUserNameError('');
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!e.target.value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
            setEmailError('Please enter a valid email');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (!e.target.value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
            setPasswordError('Password must contain at least 8 characters, one letter, one number, and one special character.');
        } else {
            setPasswordError('');
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
            alert('Please fill all fields');
            return;
        }
        setValidate(false);
    };

    return (
        <div className="form-container">
            <form onSubmit={submitHandler}>
                <label>UserName</label>
                <input type='text' value={username} onChange={handleUsernameChange} />
                {userNameError && <span>{userNameError}</span>}
                <label>Email</label>
                <input type='text' value={email} onChange={handleEmailChange} />
                {emailError && <span>{emailError}</span>}
                <label>Password</label>
                <input type="password" value={password} onChange={handlePasswordChange} />
                {passwordError && <span>{passwordError}</span>}
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Validation;

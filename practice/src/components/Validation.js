import React, { useState } from 'react';

const Validation = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [userNameError, setUserNameError] = useState(''); //setUserNamerError("name is not legal")
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
        const user = { username, email, password };
        // localStorage.setItem('USER', JSON.stringify(user));
        alert(user.username);
        setUsername("");
        setEmail("");
        setPassword("");
    };


    return (
        <div>
            <h1 className>  Sign up for an account  </h1>
            <form onSubmit={submitHandler}>

                <div>
                    <label htmlFor="username"> Username</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        autoComplete="username"
                        required
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Username"
                    />
                    {userNameError && <span >{userNameError}</span>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Email"
                    />
                    {emailError && <span>{emailError}</span>}
                </div>
                <div>
                    <label htmlFor="password"> Password </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Password"
                    />
                    {passwordError && <span>{passwordError}</span>}
                </div>

                <button type='submit' className='btn' >Submit Form</button>
            </form>
        </div>
    );
};

export default Validation;


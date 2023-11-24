// import React, { useState } from 'react'

// const App = () => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const [userNameError, setUserNameError] = useState('')
//     const [emailError, setEmaiError] = useState('')
//     const [passwordError, setPasswordError] = useState('')



//     const handleUsernameChange = (e) => {
//         setUsername(e.target.value);
//         if (e.target.value.match()) {
//             setUserNameError('user name shouldnot have specia char')
//         } else {
//             setUserNameError('');
//         }
//     }
//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//         if (e.target.value.match("^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$")) {
//             setEmaiError('please Enter a valid email')
//         } else {
//             setEmaiError('');
//         }
//     }
//     const handlePasswordChange = (e) => {
//         setPassword(e.target.value);
//         if (e.target.value.match("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$")) {
//             setPasswordError('please Enter a valid email')
//         } else {
//             setPasswordError('');
//         }
//     }

//     const submitHandler = (e) => {
//         e.preventDefault();
//         if (username || email || password) {
//             alert('Please fill all fields')
//             return;
//         }
//         alert('form submit succcess')

//     }



//     return (
//         <div>
//             <form onSubmit={submitHandler}>
//                 <label>UserName</label>
//                 <input type='text' value={username} onChange={handleUsernameChange} />
//                 {userNameError && <span>{userNameError}</span>}
//                 <label>Email</label>
//                 <input type='text' value={email} onChange={handleEmailChange} />
//                 {emailError && <span>{emailError}</span>}
//                 <label>Password</label>
//                 <input type="password" value={password} onChange={handlePasswordChange} />
//                 {passwordError && <span>{passwordError}</span>}
//                 <button type='submit'>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default App

// ---------------------------------------------------------------------//


import React, { useState } from 'react'
import InfiniteScroll from './components/InfiniteScroll'
import Validation from './components/Validation'

const App = () => {
    const [validate, setValidate] = useState(true);
    // const [login, setLogin] = useState(true);
    // const [logout, setLogout] = useState(false);
    return (
        <div>
            {validate && <Validation setValidate={setValidate} />}
            {!validate && <InfiniteScroll setValidate={setValidate} />}
        </div>
    )
}

export default App
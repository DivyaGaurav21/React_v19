// ProfilePage.js
import React from 'react';
import { useUserAuth } from '../context/UserContextProvider';

const Profile = () => {
    const { user, logout } = useUserAuth();

    if (!user) {
        return <div>Please sign in to view your profile.</div>;
    }

    return (
        <div>
            <h2>Profile Page</h2>
            <div>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
            </div>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Profile;

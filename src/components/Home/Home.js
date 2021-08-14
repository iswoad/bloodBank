import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to blood bank</h1>
            <button >
                <Link to = "/dashboard">Log In</Link>
            </button>
        </div>
    );
};

export default Home;
/* Login.jsx */
"use client";
import React from 'react';
import './login.css'; // Import CSS module for styling
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Login = () => {
    const router = useRouter(); // Initialize useRouter

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add authentication logic here

        // Redirect to the calculator page after successful login
        router.push('/calculator');
    };

    return (
        <div className="container"> {/* Apply CSS class for centering */}
            <div className="form"> {/* Apply CSS class for styling form */}
                <h1 className="heading">Welcome back!</h1>
                <p className="description">Please enter your details:</p>
                <form onSubmit={handleSubmit}>
                    <div className="inputContainer"> {/* Apply CSS class for styling input container */}
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" className="input" />
                    </div>
                    <div className="inputContainer"> {/* Apply CSS class for styling input container */}
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" className="input" />
                    </div>
                    <button type="submit" className="button">Login</button> {/* Apply CSS class for styling button */}
                </form>
                <p className="signUp">Don't have an account? <Link href="/register">Sign Up</Link></p> {/* Apply CSS class for styling sign up paragraph */}
            </div>
        </div>
    );
};

export default Login;

// pages/register.js
"use client";
import React from 'react';
import styles from '../styles/register.module.css'; // Import CSS module for styling

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
  };

  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" placeholder="Name" className={styles.input} />
        <input type="email" placeholder="Email" className={styles.input} />
        <input type="password" placeholder="Password" className={styles.input} />
        <button type="submit" className={styles.button}>Register</button>
      </form>
    </div>
  );
};

export default Register;

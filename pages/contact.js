import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    setName('');
    setEmail('');
    setPhone('');
    setDesc('');

    const data = { name, email, phone, desc };
    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        alert('contact submitted successfully');
      });
  };

  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setName(e.target.value);
    } else if (e.target.name == 'email') {
      setEmail(e.target.value);
    } else if (e.target.name == 'phone') {
      setPhone(e.target.value);
    } else if (e.target.name == 'desc') {
      setDesc(e.target.value);
    }
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [desc, setDesc] = useState('');

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor='name' className={styles.formLabel}>
            Name
          </label>
          <input
            type='text'
            name='name'
            onChange={handleChange}
            className={styles.input}
            id='name'
            value={name}
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor='email' className={styles.formLabel}>
            Email address
          </label>
          <input
            type='email'
            name='email'
            className={styles.input}
            id='email'
            onChange={handleChange}
            value={email}
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor='desc' className={styles.formLabel}>
            Elaborate your concern
          </label>
          <textarea
            type='text'
            className={styles.input}
            name='desc'
            id='desc'
            onChange={handleChange}
            value={desc}
          />
        </div>
        <div className={styles.mb3}>
          <label className={styles.formLabel} htmlFor='phone'>
            Phone
          </label>
          <input
            type='text'
            className={styles.input}
            id='phone'
            onChange={handleChange}
            name='phone'
            value={phone}
          />
        </div>
        <button type='submit' className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

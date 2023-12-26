import React, {useState} from 'react';
import axios from 'axios';
// import cors from 'cors';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone_number: '',
        department: '',
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://tired-dove-sneakers.cyclic.app/register', formData)
        .then(response => {
            console.log(response);
            console.log(response.data);
        })
        .catch(error => console.log(error));
        console.log(formData);
    }

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={handleChange} required  placeholder='Name' />
                <input type="email" name="email" onChange={handleChange} required  placeholder='Email' />
                <input type="password" name="password" onChange={handleChange} required  placeholder='password' />
                <input type="tel" name="phone_number" onChange={handleChange} required  placeholder='phone number' />
                <select name="department" onChange={handleChange} required>
                    <option value="">Select Department</option>
                    <option value="covid">covid</option>
                    <option value="parking">parking</option>
                    <option value="maintenance">maintenance</option>
                </select>
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signup;
import React, {useState} from 'react';
import axios from 'axios';

const Login  = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://tired-dove-sneakers.cyclic.app/login', formData)
        .then(response => {
            localStorage.setItem('token', response.data.token);
            console.log(response);
            console.log(response.data);
        })
        .catch(error => console.log(error));
        console.log(formData);
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" onChange={handleChange} required  placeholder='Email' />
                <input type="password" name="password" onChange={handleChange} required  placeholder='password' />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;
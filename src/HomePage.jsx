import React, {useState, useEffect} from 'react';

const HomePage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedCategory, setCategory] = useState('');
    const [notices, setNotices] = useState([]);

    const authenticateUser = () => {
        var token = localStorage.getItem('token'); 
        console.log(token);
    }

    const fetchNotices = async(category) => {
        try{

        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>HomePage</h1>
        </div>
    )
}
export default HomePage;

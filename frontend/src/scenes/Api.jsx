import React, { useState, useEffect} from 'react';
import axios from 'axios';

function ProfileCard({ user }) {
    return (
      <div className="card">
        <h2>{user.name}</h2>
        <img className='profile-pic' src="logo1.png" alt="" onClick = {() => alert('test')}/>
        <p><b>Phone</b>: {user.phone}</p>
        <p><b>Email</b>: {user.email}</p>
      </div>
    );
  }

function ApiData() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => setUsers(response.data))
        .catch(error => console.log(error));
    }, []);

    return (
        <div className='user-list'>
            <h1>User List</h1>
            <div className='card-container'>
                {users.map(user => (
                    <ProfileCard key={user.id} user={user}/>
                ))}
            </div>
        </div>
    )
                }

function API() {
    return (
        <ApiData />
    )
}

export default API;
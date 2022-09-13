import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from './Users';

const Get = () => {
    const [users, setUsers] = useContext(UserContext);
    const { id } = useParams();

    const user = users.filter((user) => user.id != id);
    return (
        <div>
            <h1>User ID: {user[0].id}</h1>
            <h1>Name: {user[0].name}</h1>
            <h1>profession: {user[0].profession}</h1>
            <h3>Age: {user[0].age}</h3>
            <Link to='/'>
                <Button variant='primary'>Home</Button>
            </Link>
        </div>
    );
};

export default Get;
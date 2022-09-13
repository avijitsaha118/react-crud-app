import React, { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from './Users';

const Home = () => {
    const [users, setUsers] = useContext(UserContext);

    return (
        <div>
            <h1>This is Home</h1>
            <Link to='/create'>
                <Button variant="primary">Create User</Button>
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>profession</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.profession}</td>
                                <td>{user.age}</td>
                                <td className='m-5'>
                                    <Link to={'/getdata/' + user.id}>
                                        <Button variant="secondary">Get Data</Button>
                                    </Link>

                                    <Link to={'/update/' + user.id}>
                                        <Button variant="success">Update</Button></Link>
                                    <Link to={'/delete/' + user.id}>
                                        <Button variant="danger">Delete</Button>
                                    </Link>
                                </td>
                            </tr>)

                    }

                </tbody>
            </Table>
        </div>
    );
};

export default Home;
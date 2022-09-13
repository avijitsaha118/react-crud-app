import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from './Users';

const Delete = () => {
    const [users, setUsers] = useContext(UserContext);
    const { id } = useParams();

    const deleteUser = (id) => {

        const user = users.filter((user) => user.id != id);
        setUsers(user)
    }

    return (
        <div>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure? </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Please Think Again!</p>
                </Modal.Body>

                <Modal.Footer>
                    <Link to='/'>
                        <Button variant="secondary">Close</Button>
                        <Button onClick={() => deleteUser(id)} variant="danger">Delete</Button>
                    </Link>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
};

export default Delete;
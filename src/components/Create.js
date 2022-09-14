import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from './Users';

const Create = () => {
    const [users, setUsers] = useContext(UserContext);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');
    const [age, setAge] = useState('');

    const handleCreateID = e => {
        setId(e.target.value);
    }

    const handleCreateName = e => {
        setName(e.target.value);
    }

    const handleCreateProfession = e => {
        setProfession(e.target.value);
    }

    const handleCreateAge = e => {
        setAge(e.target.value);
    }

    const handleSubmitForm = e => {
        e.preventDefault();
        setUsers([...users, { id: id, name: name, profession: profession, age: age }])

    }

    return (
        <div>
            <Form onSubmit={handleSubmitForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="number"
                        name='id' value={id} onChange={handleCreateID}
                        placeholder="Enter ID" />
                    <Form.Text className="text-muted">
                        Please Enter a valid ID.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                        name='name' value={name} onChange={handleCreateName}
                        placeholder="Enter your full name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Profession</Form.Label>
                    <Form.Control type="text"
                        name='profession' value={profession} onChange={handleCreateProfession}
                        placeholder="Profession" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text"
                        name='age' value={age} onChange={handleCreateAge}
                        placeholder="Age" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Link to='/home'>
                    <Button variant="primary" type="submit">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
};

export default Create;
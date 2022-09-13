import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from './Users';

const Update = () => {
    const [users, setUsers] = useContext(UserContext);
    const { id } = useParams();
    const user = users.filter((user) => user.id == id);


    const [name, setName] = useState(user[0].name);
    const [profession, setProfession] = useState(user[0].profession);
    const [age, setAge] = useState(user[0].age);

    const handleUpdateName = e => {
        setName(e.target.value);
        const updatedName = name;
        user[0].name = updatedName;
    }
    const handleUpdateProfession = e => {
        setProfession(e.target.value);
        const updatedProfession = profession;
        user[0].profession = updatedProfession;
    }
    const handleUpdateAge = e => {
        setAge(e.target.value);
        const updatedAge = age;
        user[0].age = updatedAge;
    }

    const handleUpdateForm = e => {
        e.preventDefault();
        setUsers([...users]);

    }

    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ID no: {user[0].id}</Form.Label>
                    <Form.Control type="number"
                        name='id' value={id}
                        placeholder={user[0].id} />
                    <Form.Text className="text-muted">
                        Please Enter a valid ID.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                        name='name' value={name} onChange={handleUpdateName}
                        placeholder={user[0].name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Profession</Form.Label>
                    <Form.Control type="text"
                        name='profession' value={profession} onChange={handleUpdateProfession}
                        placeholder={user[0].profession} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number"
                        name='age' value={age} onChange={handleUpdateAge}
                        placeholder={user[0].age} />
                </Form.Group>
                <Link to='/'>
                    <Button onSubmit={() => handleUpdateForm} variant="primary" type="submit">
                        Submit
                    </Button>

                    <Button variant="primary" type="submit">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
};

export default Update;
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import mybooks from "./data";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Edit() {
    const [title, setTitle] = useState('');
    const [page, setPage] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();

    var index = mybooks.map(function (e) { return e.id; }).indexOf(id)

    const handelSubmit = (e) => {
        e.preventDefault();
        let a = mybooks[index]

        a.title = title
        a.page = page

        history('/')
    }

    useEffect(() => {
        setTitle(localStorage.getItem('title'))
        setPage(localStorage.getItem('page'))
        setId(localStorage.getItem('id'))

    }, [])
    return (
        < div >
            <Form>
                <Form.Group>
                    <Form.Control value={title}
                        onChange={e => setTitle(e.target.value)}
                        type="text" placeholder="Enter title" />
                </Form.Group>
                <Form.Group>
                    <Form.Control value={page}
                        onChange={e => setPage(e.target.value)}
                        type="text" placeholder="Enter page" />
                </Form.Group>
                <Button
                    onClick={e => handelSubmit(e)}
                    variant="primary" type="submit" size="lg">Update</Button>

                <Link to='/'>
                    <Button variant="warning" size="lg">Home</Button>
                </Link>
            </Form>
        </div >
    )
}

export default Edit
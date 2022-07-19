import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom'
import mybooks from './data'
import { v4 as uuid } from 'uuid'

function Create() {

    let history = useNavigate()

    const [title, setTitle] = useState('')
    const [page, setPage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const uid = uuid()
        let bid = uid.slice(0, 8)

        let a = title, b = page
        mybooks.push({ id: bid, title: a, page: b })

        history('/');
    }

    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Control
                        onChange={e => setTitle(e.target.value)}
                        type="text"
                        placeholder="Enter Title" required />
                </Form.Group>

                <Form.Group>
                    <Form.Control
                        onChange={e => setPage(e.target.value)}
                        type="text"
                        placeholder="Enter Page" required />
                </Form.Group>

                <Button variant="warning" size="lg"
                    onClick={e => handleSubmit(e)}>
                    Create new book
                </Button>

                <Link to='/'>
                    <Button variant="info" size="lg">
                        Back to Home
                    </Button>
                </Link>
            </Form>
        </div>
    )
}

export default Create
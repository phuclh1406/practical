import React from 'react'
import { Button, Table } from 'react-bootstrap'
import mybooks from './data'
import { Link, useNavigate } from 'react-router-dom'


function Index() {
    let history = useNavigate()
    function deleteItem(id) {
        var index = mybooks.map(function (e) {
            return e.id
        }).indexOf(id)

        mybooks.splice(index, 1)

        history('/')
    }

    function setDatatoStorage(_id, _title, _page) {
        localStorage.setItem('id', _id)
        localStorage.setItem('title', _title)
        localStorage.setItem('page', _page)
    }

    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Page</th>
                        <th>View Details</th>
                        <th>Update Action</th>
                        <th>Delete Action</th>
                    </tr>
                </thead>
                <tbody>
                    {mybooks.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.title}</td>
                                <td>{item.page}</td>
                                <td>
                                    <Link to={'/details'}>
                                        <Button onClick={e => setDatatoStorage(item.id, item.title, item.page)}>View</Button>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={'/edit'}>
                                        <Button onClick={e => setDatatoStorage(item.id, item.title, item.page)}>View</Button>
                                    </Link>
                                </td>
                                <td><Button
                                    onClick={e => deleteItem(item.id)}>
                                    Delete
                                </Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <Link to='/Create'>
                <Button variant="warning" size="lg">Create</Button>
            </Link>
        </div >
    )
}

export default Index
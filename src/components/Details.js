import React from 'react'
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

function Details() {
    let a = localStorage.getItem('id')
    let b = localStorage.getItem('title')
    let c = localStorage.getItem('page')
console.log(c)
    return (
        <div>
            <div>
                <label>
                    ID: {a}
                </label>
            </div>
            <div>
                <label>
                    Title: {b}
                </label>
            </div>
            <div>
                <label>
                    Page: {c}
                </label>
            </div>
            <div>
                <Link to='/'>
                    <Button variant="warning size="lg>Home</Button>
                </Link>
            </div>
        </div>
    )
}

export default Details
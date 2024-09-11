/*
React Bootstrap
The most popular front-end framework, rebuilt for React.

Give ready made component instaed of all bootstrap class

The best way to consume React-Bootstrap is via the npm package which you can install with 
npm (or yarn if you prefer).

React-Bootstrap is a complete re-implementation of the Bootstrap components using React. 
It has no dependency on either bootstrap.js or jQuery. If you have React setup and 
React-Bootstrap installed, you have everything you need.

Methods and events using jQuery is done imperatively by directly manipulating the DOM. 
In contrast, React uses updates to the state to update the virtual DOM. In this way, 
React-Bootstrap provides a more reliable solution by incorporating Bootstrap 
functionality into React's virtual DOM. Below are a few examples of how React-Bootstrap 
components differ from Bootstrap.


npm install react-bootstrap bootstrap


https://react-bootstrap.netlify.app/docs/getting-started/introduction 

*/

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

import Carousel from 'react-bootstrap/Carousel';


function React_bootstrap() {
    return (
        <>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button>{' '}
            <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button>{' '}
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>




            <hr />

            <Button variant="outline-primary">Primary</Button>{' '}
            <Button variant="outline-secondary">Secondary</Button>{' '}
            <Button variant="outline-success">Success</Button>{' '}
            <Button variant="outline-warning">Warning</Button>{' '}
            <Button variant="outline-danger">Danger</Button>{' '}
            <Button variant="outline-info">Info</Button>{' '}
            <Button variant="outline-light">Light</Button>{' '}
            <Button variant="outline-dark">Dark</Button>

            <hr />

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_191d5592880%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_191d5592880%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <hr />




            <Alert variant="primary">
                This is a Primary alert—check it out!
            </Alert>

            <hr />

            {
                [ 'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'light',
                    'dark'].map((value,index,arr)=>{
                        return(
                            <Alert variant={value}>
                                This is a Primary alert—check it out!
                            </Alert>
                        )
                    })
            }

            <hr />



            <hr />



            <Container>
                <Row>
                    <Col>1 of 3</Col>
                    <Col xs={6}>2 of 3 (wider)</Col>
                    <Col>3 of 3</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col xs={5}>2 of 3 (wider)</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </>
    )
}

export default React_bootstrap
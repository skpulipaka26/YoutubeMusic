import React from 'react';

import { Container, Navbar, Image, Form, FormControl } from 'react-bootstrap';

import logo from '../assets/logo.png';

const Layout = (props) => ({
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>
                        <Image src={logo} fluid style={{ width: '50px' }} />
                    </Navbar.Brand>
                    <Form inline style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{ width: '80%' }} />
                    </Form>
                </Navbar>
                <main>
                    <Container>
                        {props.children}
                    </Container>
                </main>
            </div>
        );
    }
});

export default Layout;
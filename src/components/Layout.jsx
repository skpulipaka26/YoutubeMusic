import React from 'react';

import { Container, Navbar, Image } from 'react-bootstrap';

import AutoComplete from '../containers/AutoComplete';

import logo from '../assets/logo.png';

const Layout = (props) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand>
                    <Image src={logo} fluid style={{ width: '50px' }} />
                </Navbar.Brand>
                <AutoComplete></AutoComplete>
            </Navbar>
            <main>
                <Container>
                    {props.children}
                </Container>
            </main>
            <div style={{ position: 'fixed', bottom: 0, width: '100vw', backgroundColor: '#343a40', color: 'white' }}>
            </div>
        </div >
    );
};

export default Layout;
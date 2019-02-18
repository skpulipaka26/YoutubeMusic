import React from 'react';

import { Link } from 'react-router-dom';

import { Container, Navbar, Image } from 'react-bootstrap';

import AutoComplete from '../containers/AutoComplete';

import logo from '../assets/logo.png';
import Player from '../containers/Player';

const Layout = (props) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand>
                    <Link to="/">
                        <Image src={logo} fluid style={{ width: '50px' }} />
                    </Link>
                </Navbar.Brand>
                <AutoComplete></AutoComplete>
            </Navbar>
            <main style={{ marginBottom: '50px' }}>
                <Container>
                    {props.children}
                </Container>
            </main>
            <footer style={{
                backgroundColor: 'white',
                position: 'fixed',
                bottom: '0px',
                width: '100vw'
            }}>
                < Container fluid="true">
                    <Player />
                </Container>
            </footer>
        </div >
    );
};

export default Layout;
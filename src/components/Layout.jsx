import React from 'react';

import { Container, Navbar, Image } from 'react-bootstrap';

import AutoComplete from '../containers/AutoComplete';

import logo from '../assets/logo.png';
import Player from '../containers/Player';

const Layout = (props) => ({
    render() {
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
                <footer style={{ position: 'fixed', bottom: 0, width: '100vw', backgroundColor: '#343a40', padding: '0.5rem 0', color: 'white' }}>
                    <Player />
                </footer>
            </div >
        );
    }
});

export default Layout;
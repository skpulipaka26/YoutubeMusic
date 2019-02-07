import React from 'react';

import { Container, Navbar, Image } from 'react-bootstrap';

import AutoComplete from '../containers/AutoComplete';

import logo from '../assets/logo.png';

const Layout = (props) => ({
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
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
            </div>
        );
    }
});

export default Layout;
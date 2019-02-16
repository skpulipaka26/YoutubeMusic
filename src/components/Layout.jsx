import React from 'react';

import { Container, Navbar, Image } from 'react-bootstrap';

import AutoComplete from '../containers/AutoComplete';

import logo from '../assets/logo.png';
// import Player from '../containers/Player';
// import Playlist from '../containers/Playlist';
// import Player from '../containers/Player';

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
                    {/* <Player /> */}
                    {props.children}
                </Container>
            </main>
            {/* <footer className="fixed-bottom">
                < Container fluid="true">
                    <Playlist />
                </Container>
            </footer> */}
        </div >
    );
};

export default Layout;
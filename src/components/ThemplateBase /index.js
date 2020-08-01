import React from 'react';
import Footer from '../Footer';
import HeaderWinx from '../HeaderWinx';
import LogoWinx from '../LogoWinx';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../styles/index.css';

const Main = styled.main`
    font-size: 16rem;
    background-color: #141414;
    color: var(--white);
    flex:1;
    padding-top:50px;
    padding-left: 5%;
    padding-right: 5%;
    h1{
        font-size: 25rem;
        font-weight: bold;
    }
    

`;

function ThemplateBase(props) {
    return(
        <>
        <HeaderWinx>

            <Link to='/'>
                <LogoWinx/>
            </Link>
        </HeaderWinx>
        <Main>
            {props.children}
        </Main>
        <Footer/>
        </>
    )
};

export default ThemplateBase;


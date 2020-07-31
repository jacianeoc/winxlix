import React from 'react';
import HeaderWinx from '../../components/HeaderWinx';
import ButtonWinx from '../../components/ButtonWinx';
import LogoWinx from '../../components/LogoWinx';
import Footer from '../../components/Footer';
import BannerMain from '../../components/BannerMain';
import dadosIniciais from '../../data/dados_iniciais.json';
import Carousel from '../../components/Carousel';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div  style={{background: "#141414"}} >
      <HeaderWinx>

        <Link to="/">
          <LogoWinx />
        </Link>

        <ButtonWinx as={Link} to='/register/Video'> Novo Video
        </ButtonWinx>

      </HeaderWinx>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />
      <Footer></Footer>
    </div>
  );
}

export default Home;




import React from 'react';
import ThemplateBase from '../../../components/ThemplateBase ';
import { Link } from 'react-router-dom';


function RegisterVideo (){
    return(

        <ThemplateBase>
        <h1>CADASTRAR VIDEO</h1>
        <Link to='/register/Category'> Registar Categoria</Link>
        </ThemplateBase>
        
    ); 
};

export default RegisterVideo;

import React from 'react';
import ThemplateBase from '../../../components/ThemplateBase ';
import { Link } from 'react-router-dom';


function RegisterCategory (){
    return(

        <ThemplateBase>
        <h1>Nova Categoria</h1>
        <Link to='/'> home</Link>
        </ThemplateBase>
        
    ); 
};

export default RegisterCategory;

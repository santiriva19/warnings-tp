import React from 'react';
import '../../assets/style.css';
import Fondo from '../../assets/img/fondoInicio4.jpg';
import Logo from '../../assets/img/tplogomini.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

export default function ModalLogin  ()
{
    return(
        <div style ={styles.cuerpo}>
                <img style = {{width : 35, height : 35, margin : '2%'}} src={Logo}/>

                <div className = "containerComplement" style={styles.container}>
                    <FontAwesomeIcon style = {{marginBottom : '4%'}} icon={faLock} size="3x" color="#8F2A92"/>
                    <h2 className = "textos" >Sólo personal autorizado</h2>
                    <input placeholder = "CCMS" type = "text" className="customInputs"/>
                    <input style = {{marginTop:'4%'}} placeholder = "Password" type = "password" className="customInputs"/>
                    <a href="/dashboard"><button className="customButtons" >Ingresar</button></a>
                </div>
        </div>
        
    );
}

const styles = {
    
    cuerpo : 
    {
        display: 'flex',
        width : '100%',
        height : '100vh',
        backgroundImage : 'url('+Fondo+')',
        backgroundSize : 'cover',
    },
    container : {
        display: 'flex',
        flexDirection : 'column',
        justifyContent: 'center',
        alignItems : 'center',
        backgroundColor : '#EAEAEA',
        
    },
    customInputs:{
        fontFamily : 'quicksand', 
        textAlign : 'center',
    },
  }

  


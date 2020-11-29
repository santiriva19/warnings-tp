import React from 'react';
import { Component } from 'react';
import './TypeOfAlerts.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faWineBottle } from '@fortawesome/free-solid-svg-icons'
// import { fausb } from '@fortawesome/free-solid-svg-icons'
import { fasPencilAlt } from '@fortawesome/free-solid-svg-icons'


class AlertsPopUp extends Component {
    render ( ) {
        return (
            <div >
                <div style ={styles.body}> 
                    <div style ={styles.header}>
                        <FontAwesomeIcon 
                            icon = {faInfoCircle} size="4x" color="#8F2A92"
                            style = {{width : '100%'}}
                        />
                        <h2 style={{color: '#575757', textAlign: 'center'}}>Tipo de alertas...</h2>
                    </div>        
                    <div style ={styles.container}>
                        <FontAwesomeIcon icon={faMobile} size="3x" color="#8F2A92" />
                        <p >Smat Phones</p>

                    </div>
                    <div style ={styles.container} >
                        <FontAwesomeIcon icon={faBook} size="3x" color="#8F2A92" />
                        <p>Libros o cuadernos</p>

                    </div>
                    <div style ={styles.container} >
                        <FontAwesomeIcon icon={faWineBottle} size="3x" color="#8F2A92"/>
                        <p>Envases no transparentes</p>

                    </div>
                    <div style ={styles.container} >
                    {/* <FontAwesomeIcon icon={fausb} size="3x" color="#8F2A92"/> */}
                        <p>USBs</p>

                    </div>
                    <div style ={styles.container} >
                    {/* <FontAwesomeIcon icon={ fasPencilAlt } size="3x" color="#8F2A92"/> */}
                        <p>Lapicero </p>

                    </div>
                    <div style = {{display: 'flex', justifyContent: 'center'}}>
                        <button style = {styles.button} > Salir
                            {/*change displey from flex to none by DOM  */} 
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

// <i class="fas fa-pencil-alt"></i>

const styles = {
    header : 
    {
        display: 'flex',
        flexDirection: 'column',
    },
    body : 
    {
        display: 'flex',
        flexDirection : 'column',
        width : '30%',
        height : '100vh',
        border: 'solid 2px gray'
    },
    container : 
    {
        display: 'flex',
        // justifyContent: 'space-Evenly',
        width: '100%',
        alignItems : 'center',       
        // textDecoration: 'underline',
        margin: '30px 0 0 54px',
    },

  }

export default AlertsPopUp;

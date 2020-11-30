import React from 'react';
import { Component } from 'react';
import './Registro.css'

class Registro extends Component {

    render ( ) {
        return (
            <div style ={styles.ppTable} >
                <table className='Registros'>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>CCMS</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>TIpo de Alerta</th>
                        <th>Anexos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const styles = {
    ppTable : 
    {
        display: 'flex',
        justifyContent: 'center',
        margin: 20
    },
}

export default Registro;

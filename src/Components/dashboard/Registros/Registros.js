import React from 'react';
import { Component } from 'react';
import './Registro.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

class Registro extends Component {

    render ( ) {
        return (
            <div>
                <div className='registros'>
                    <h2>Registros</h2>
                    <hr />
                </div>
                <div>
                    <label style={{marginLeft:"50px"}}> 
                        <FontAwesomeIcon 
                            icon = {faFilter} 
                            size="2px"
                            color="#535353"
                        />
                        Filtrar por: 
                    </label>
                    <div className="filterbtns">
                        <input type="date" name="name" placeholder="Fecha" />
                        <select >
                            <option value="" disabled selected>Tipo de Alerta</option>
                        </select>
                    </div>
                </div>
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

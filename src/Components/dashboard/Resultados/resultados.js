import React from 'react';
import './Resultados.css';
import '../../../assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 
{ 
    faUsb,
} from '@fortawesome/free-brands-svg-icons'
import { faInfoCircle, 
    faMobile,
    faBook,
    faTintSlash,
    faPencilAlt
} from '@fortawesome/free-solid-svg-icons'


class Boxes extends React.Component {

    constructor() {
        super();
        this.state = {
            info: [
                {
                    icon: faMobile,
                    rate: '35%',
                    alertName: 'Smart phone'
                },
                {
                    icon: faBook,
                    rate: '3%',
                    alertName: 'Books'
                },
                {
                    icon: faTintSlash,
                    rate: '30%',
                    alertName: 'Envaces'
                },
                {
                    icon: faUsb,
                    rate: '7%',
                    alertName: 'USB'
                },
                {
                    icon: faPencilAlt,
                    rate: '25%',
                    alertName: 'Lapiceros'
                }
            ]
        }

        this.apiInfo()
    }

    apiInfo() {
        fetch('')
            .then(res => {
                return res.json();
            })
            .then(dataList => {
                this.setState({
                    info: dataList
                })

            })
    }

    boxCointainer(props) {
        return (
            <div className = "col">
                <div className="box">
                    <div className="contIconBoxAndTextPerBox">
                        <div className="contIconBox">
                            <FontAwesomeIcon icon={props.icon} className = "iconBoxes" size="4x" color="#454545" />
                        </div>
                        <div className="contTextPerBox">
                            <p className="textoBoxesPer"> {props.rate} </p>

                        </div>
                    </div>
                
                    <div className="contTextBox">
                        <p className="textoBoxes"> {props.alertName} </p>
                    </div>
                
                </div>
            </div>
            
        )
    }


    render() {
        return (
            <div className="row">
                {this.state.info.map(alert => (
                    <div className = "col">{this.boxCointainer(alert)}</div>
                ))}
            </div>
        )
    }
}

export default Boxes;

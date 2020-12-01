import React from 'react';
import './resBoxes.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUsb } from '@fortawesome/free-brands-svg-icons';
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
                    icon: "",
                    rate: '20%',
                    alertName: 'USB'
                },
                {
                    icon: faBook,
                    rate: '20%',
                    alertName: 'Libros o cuadernos'
                },
                {
                    icon: faTintSlash,
                    rate: '80%',
                    alertName: 'Envases no transparentes'
                },
                {
                    icon: faPencilAlt,
                    rate: '60%',
                    alertName: 'Lapicero'
                },
                {
                    icon: faMobile,
                    rate: '10%',
                    alertName: 'Smat Phones'
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
            <div className="box">
                 <FontAwesomeIcon icon={props.icon} size="4x" color="#8F2A92" />
                <h2><strong> {props.rate} </strong></h2>
                <h3> {props.alertName} </h3>
            </div>
        )
    }


    render() {
        return (
            <div>
                <div className='Resultados'>
                    <h2>Resultados</h2>
                    <hr />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around'}}>
                    {this.state.info.map(alert => (
                        <div >{this.boxCointainer(alert)}</div>
                    ))}
                </div>
            </div>
        )
    }
}


export default Boxes;

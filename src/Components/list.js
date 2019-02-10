import React, { Component } from 'react';
import './List.css';
import './../Fonts/fontawesome/css/all.css';
import img  from './tri.png';

class List extends Component {
    state={
        name:'',
        color:'',
        price:'',
        check: false,
        error: false,
        data: this.props.data,
        isOpen: false
    };
    
    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleChecked = e => {
        if (e.target.checked === true) {
            this.setState({
                [e.target.name]: true
            })
        } else {
            this.setState({
                [e.target.name]: false
            })
        }
    }

    handleClickRequest = e => {
        (this.state.isOpen === false)
        ? this.setState({
            ...this.state,
            isOpen: true,
            error: false

        })
        : this.setState({
            ...this.state,
            isOpen: false,
            error: false
        })
    }

    handleClickErase = e => {
        this.setState({
            ...this.state,
            name:'',
            color:'',
            price:'',
            check: false,
            error: false
        })
    }

    handleClick = e => {
        if (this.state.name !== '' & this.state.color !=='' & this.state.price !=='') {
            this.setState({
                ...this.state,
                data: [...this.state.data,
                    {name: this.state.name,
                    color: this.state.color,
                    price: '$'+parseFloat(this.state.price).toFixed(2),
                    check:this.state.check
                    }
                ],
                name:'',
                color:'',
                price:'',
                check: false,
                error: false,
                isOpen: false
            })
        } else {
            this.setState({
                error: true
            })
        }
    }

    handleDelete = e => {
            let i = e.target.getAttribute('index');
            let arr=(this.state.data.slice(0));
            arr.splice(i,1);
            this.setState({
                data: arr
            })
            this.forceUpdate();
    } 

    render(){
        let {isOpen} = this.state;
        let disp;
        (isOpen === false) ? disp = { display: 'none'} : disp = { display: 'flex'}; 

        return(
            <div className='wrapper'>
                <div className='button button_open' onClick={this.handleClickRequest}>Добавить</div>
                <div className='container'>
                    <table className='table'>
                        <thead>
                            <tr className='table-head'>
                                <th className='table-name'>Наименование</th>
                                <th className='table-color'>Цвет</th>
                                <th className='table-price'>Цена</th>
                                <th className='head-check'><div>Наличие</div><input type="checkbox" name="" id="" checked={false} readOnly className='tab-check'/></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.data.map(elem =>
                                <tr key={this.state.data.indexOf(elem)} className='table-row' >    
                                    <td className='table-cell'>
                                        <div className='tab-block'>{elem.name}<div className='table-block'><img src={img} alt='triangle' className='pic'/></div></div>
                                        </td>
                                    <td className='table-cell'>
                                        <div className='tab-block'>{elem.color}<div className='table-block'><img src={img} alt='triangle' className='pic'/></div></div>
                                    </td>
                                    <td className='table-price'>
                                        <div className='tab-block'>{elem.price}<div className='table-block_own'><img src={img} alt='triangle' className='pic'/></div></div>
                                    </td>
                                    <td className='table-check'>
                                        <input type="checkbox" name="" id="" checked={elem.check} readOnly/>
                                        <div name='del' >
                                            <div className='del-icon'>
                                                <i className='fa fa-minus-circle icon' aria-hidden="true" index={this.state.data.indexOf(elem)} onClick={this.handleDelete}></i>
                                            </div>
                                        </div>
                                    </td>
                                </tr> 
                            )
                            }
                        </tbody>
                    </table>
                    <div className='add' style={disp}>
                        <div className='close' onClick={this.handleClickRequest}><i className="fa fa-times-circle icon" aria-hidden="true"></i></div>
                        <h3 className='add_title'>Добавление товара</h3>
                        <div className='row'>
                            <span className='text'>Наименование</span>
                            <input type="text"
                            placeholder='Наименование товара'
                            name = 'name'
                            onChange={this.handleChange}
                            value={this.state.name}
                            className='input'
                            />
                        </div>
                        <div className='row'>
                            <span className='text'>Цвет</span>
                            <input type="text" 
                            placeholder='Цвет'
                            name='color'
                            onChange={this.handleChange}
                            value={this.state.color}
                            className='input'
                            />
                        </div>
                        <div className='row'>
                            <span className='text'>Цена</span>
                            <input type="number"
                            placeholder='Цена'
                            name='price'
                            onChange={this.handleChange}
                            className='input input_price'
                            value={this.state.price}
                            />
                        </div>
                        <div className='row'>
                            <span className='text'>Наличие</span>
                            <input type="checkbox" 
                            name='check' 
                            onChange={this.handleChecked}
                            className='checkbox'
                            checked={this.state.check}
                            />
                        </div>
                        <div className='button-block'>
                            <div className='button' onClick={this.handleClick}>Добавить</div>
                            <div className='button button_add' onClick={this.handleClickErase}>Сброс</div>
                        </div>
                        {(this.state.error === true) && 
                            <div className='error'>
                                Не все поля заполнены !
                            </div>}
                    </div>
                </div>
            </div>
        )
    }
}
export default List;
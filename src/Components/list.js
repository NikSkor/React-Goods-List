import React, { Component } from 'react';
import './List.css';
import './../Fonts/fontawesome/css/all.css';
import img  from './tri.png';

const baseState = [{
    name:'Плюмбус', 
    color:'Синий',
    price:'$10.00', 
    check: false
},
{
    name:'Портальная пушка', 
    color:'Зелёный',
    price:'$666.00', 
    check: false
},
{
    name:'Степлер', 
    color:'Чёрный',
    price:'$1.00', 
    check: false
},
{
    name:'Чипсы', 
    color:'Жёлтый',
    price:'$15.00', 
    check: false
}]
class List extends Component {
    state={
        name:'',
        color:'',
        price:'',
        check: false,
        error: false,
        data: baseState,
        isOpen: true

    };

    
    handleChange = e => {
        console.log(e.target);
        // if (e.keyCode > 48 && e.keyCode < 57) {
        //     this.setState({
        //         [e.target.name] : e.target.value
        //     })
        // }
        this.setState({
            [e.target.name] : e.target.value
        })
        // console.log(e.target);
        // if (e.target.name ==='name' || e.target.name === 'color') {
 
        //     this.setState({
        //         [e.target.name] : e.target.value
        //     })

            
        //         }
        // console.log(e.target.name);
        if (e.target.name==='price') {
            
            if (e.target.keyCode > 48 || e.target.keyCode < 57) {
                console.log('Hgj');
                // e.target.preventDefault();
                this.setState({
                    [e.target.name] : e.target.value
                })
            } 
                // e.preventDefault();
            
        } 

    }
    handleChecked = e => {
        console.log(e.target.checked);
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
        e.preventDefault();
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
        e.preventDefault();
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
        e.preventDefault();
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
        e.preventDefault();
        
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
            <div className="wrapper">
                <div className='button button_open' onClick={this.handleClickRequest}>Добавить</div>
                <div className="container">
                    <table className='table'>
                        <tr className='table-head'>
                            <th className='table-name'>Наименование</th>
                            <th className='table-color'>Цвет</th>
                            <th className='table-price'>Цена</th>
                            <th className='head-check'><div>Наличие</div><input type="checkbox" name="" id="" checked={false} readOnly className='tab-check'/></th>
                        </tr>
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
                                <div name='del' index={this.state.data.indexOf(elem)} onClick={this.handleDelete}>
                                    <div className="del-icon">
                                        <i class='fa fa-minus-circle icon' aria-hidden="true"></i>
                                    </div>
                                </div>
                            </td>
                        </tr> 
                        )

                        }
                    </table>
                    <div className="add" style={disp}>
                        <div className="close" onClick={this.handleClickRequest}><i class="fa fa-times-circle icon" aria-hidden="true"></i></div>
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
                            <input type="text"
                            placeholder='Цена'
                            name='price'
                            onChange={this.handleChange}
                            className='input'
                            value={this.state.price}
                            />
                        </div>
                        <div className='row'>
                            <span className='text'>Наличие</span>
                            <input type="checkbox" 
                            name="check" 
                            onChange={this.handleChecked}
                            className='checkbox'
                            checked={this.state.check}
                            />
                        </div>
                        
                        <div className="button-block">
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
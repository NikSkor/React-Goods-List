import React, { Component } from 'react';
import style from './List.module.css';

class List extends Component {
    state={
        name:'',
        color:'',
        price:'',
        check: false,
        error: false,
        data:[]
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
        // console.log(e.target);
        // if (e.target.name ==='name' || e.target.name === 'color') {
        //     if ((e.target.keyCode < 48 || e.target.keyCode > 57) && (e.target.keyCode < 96 || e.target.keyCode > 105 )) {
        //         e.preventDefault(); 
        //     } else {
        //         this.setState({
        //             [e.target.name] : e.target.value
        //         })
        //     }}
        // } else if (e.target.name==='price') {
        //     if ((e.keyCode > 48 && e.keyCode < 57) && (e.keyCode > 96 && e.keyCode < 105 )) {
        //         e.preventDefault();
        //     } else {
        //         this.setState({
        //             [e.target.name] : e.target.value
        //         })
        //     }
        // } 

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
    handleClick = e => {
        e.preventDefault();
        if (this.state.name !== '' & this.state.color !=='' & this.state.price !=='') {
            this.setState({
                ...this.state,
                data: [...this.state.data,
                    {name: this.state.name,
                    color: this.state.color,
                    price: this.state.price,
                    check:this.state.check
                    }
                ],
                name:'',
                color:'',
                price:'',
                check: false,
                error: false
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


        return(
            <div className="wrapper">
                <div className="button-block">
                    <div className={style.button}>Добавить</div>
                </div>
                <div className="container">
                    <table className={style.table}>
                        <tr>
                            <th>Наименование</th>
                            <th>Цвет</th>
                            <th>Цена</th>
                            <th>Наличие</th>
                        </tr>
                        {
                            this.state.data.map(elem =>
                        <tr key={this.state.data.indexOf(elem)} >    
                            <td>{elem.name}</td>
                            <td>{elem.color}</td>
                            <td>{elem.price}</td>
                            <td>
                                <input type="checkbox" name="" id="" checked={elem.check} readOnly/>
                                <div name='del' index={this.state.data.indexOf(elem)} onClick={this.handleDelete}>X</div>
                            </td>
                        </tr> 
                        )

                        }
                    </table>
                    <div className="add">
                        <p>Добавление товара</p>
                        <p>
                            <span>Наименование</span>
                            <input type="text"
                            placeholder='Наименование товара'
                            name = 'name'
                            onChange={this.handleChange}
                            value={this.state.name}
                            />
                        </p>
                        <p>
                            <span>Цвет</span>
                            <input type="text" 
                            placeholder='Цвет'
                            name='color'
                            onChange={this.handleChange}
                            value={this.state.color}
                            />
                        </p>
                        <p>
                            <span>Цена</span>
                            <input type="text"
                            placeholder='Цена'
                            name='price'
                            onChange={this.handleChange}
                            value={this.state.price}
                            />
                        </p>
                        <p>
                            <span>Наличие</span>
                            <input type="checkbox" name="check" id="" onChange={this.handleChecked}/>
                        </p>
                        

                        <div className={style.button} onClick={this.handleClick}>Добавить</div>
                        {(this.state.error === true) && 
                            <span>
                                Не все поля заполнены !
                            </span>}
                        
                    </div>
                </div>

            </div>
            
            
        )
    }
}
export default List;
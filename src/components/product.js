import React from 'react';
import './product.css';

export default class Product extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isCompare: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(product){
        this.setState(state => ({
            isCompare: !state.isCompare
        }))
        const prod = product;
        this.props.onClick(prod, this.state.isCompare)
    }
    
    render(){
        return (
            <div className="Product">
                <div className="Hover">
                    <img src={this.props.product.image} alt={this.props.product.image}/>
                    <div className="Middle">
                        <div className="hoverBtn">
                            <button className="Btn" onClick={() => this.handleClick(this.props.product)}>{this.state.isCompare ? 'Remove' : 'Compare'}</button>
                        </div>
                    </div>
                </div>
                <p>{this.props.product.name}</p>
                <p>{this.props.product.shortDescrip}</p>
                <p>${this.props.product.price}</p>
                <p>{this.props.product.condition}</p>
            </div>
        )
    }
}
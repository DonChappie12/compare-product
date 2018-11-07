import React from 'react';
import './product.css';
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';


export default class Product extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isCompare: false,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(state => ({
            isCompare: !state.isCompare
        }))
    }
    
    render(){
        // const prodCompare = this.state.compare;
        // let button;
        // if(prodCompare === false){
        //     button = <button className="Btn" onClick={() => this.handleClick()}>Compare</button>
        // }else{
        //     button = <button className="Btn" onClick={() => this.handleClick()}>Remove</button>
        // }
        return (
            <div className="Product">
                {/* <Card>
                    <div className="cardImg">
                    </div>
                    <CardImg src={img} alt={img} />
                    <CardBody>
                        <CardTitle>{this.props.product.name}</CardTitle>
                        <CardSubtitle>${this.props.product.price}</CardSubtitle>
                        <CardText>{this.props.product.shortDescrip}</CardText>
                        <Button>Compare</Button>
                    </CardBody>
                </Card> */}
                <div className="Hover">
                    <img src={this.props.product.image} alt={this.props.product.image}/>
                    <div className="Middle">
                        <div className="hoverBtn">
                            {/* {button} */}
                            <button className="Btn" onClick={this.handleClick}>{this.state.isCompare ? 'Remove' : 'Compare'}</button>
                        </div>
                    </div>
                </div>
                <p>{this.props.product.name}</p>
                <p>{this.props.product.shortDescrip}</p>
                <p>${this.props.product.price}</p>
                <p>{this.props.product.condition}</p>
                {/* <button>More info</button> */}
            </div>
        )
    }
}
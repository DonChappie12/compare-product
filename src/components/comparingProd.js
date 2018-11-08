import React from 'react';
import './comparingProd.css'

export default class ComparingProd extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         compareArr: [],
    //         nextId: 0
    //     }
    // }

    render(){
        return(
            <div className="Compare">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                        {/* {
                            this.props.compareArr.map((productCompare)=>{
                                <th id={productCompare.id} key={productCompare.id}>{productCompare.name}</th>
                            })
                        } */}
                            <th>{this.props.products[0].name}</th>
                            <th>{this.props.products[1].name}</th>
                            <th>{this.props.products[2].name}</th>
                            <th>{this.props.products[3].name}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Price</th>
                            {/* <td>${this.props.products[0].price}</td>
                            <td>${this.props.products[1].price}</td>
                            <td>${this.props.products[2].price}</td>
                            <td>${this.props.products[3].price}</td> */}
                        </tr>
                        <tr>
                            <th>Description</th>
                            {/* <td>{this.props.products[0].description}</td>
                            <td>{this.props.products[1].description}</td>
                            <td>{this.props.products[2].description}</td>
                            <td>{this.props.products[3].description}</td> */}
                        </tr>
                        <tr>
                            <th>Manufactured Location</th>
                            {/* <td>{this.props.products[0].manufactured}</td>
                            <td>{this.props.products[1].manufactured}</td>
                            <td>{this.props.products[2].manufactured}</td>
                            <td>{this.props.products[3].manufactured}</td> */}
                        </tr>
                        <tr>
                            <th>Condition</th>
                            {/* <td>{this.props.products[0].condition}</td>
                            <td>{this.props.products[1].condition}</td>
                            <td>{this.props.products[2].condition}</td>
                            <td>{this.props.products[3].condition}</td> */}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
import React from 'react';
import './comparingProd.css'

export default class ComparingProd extends React.Component{

    render(){
        return(
            <div className="Compare">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            {
                                this.props.compare.map((productCompare)=>{
                                    return <th id={productCompare.id} key={productCompare.id}>{productCompare.name}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Price</th>
                            {
                                this.props.compare.map((productCompare)=>{
                                    return <td key={productCompare.id}>${productCompare.price}</td>
                                })
                            }
                        </tr>
                        <tr>
                            <th>Description</th>
                            {
                                this.props.compare.map((productCompare)=>{
                                    return <td key={productCompare.id}>{productCompare.description}</td>
                                })
                            }
                        </tr>
                        <tr>
                            <th>Manufactured Location</th>
                            {
                                this.props.compare.map((productCompare)=>{
                                    return <td key={productCompare.id}>{productCompare.manufactured}</td>
                                })
                            }
                        </tr>
                        <tr>
                            <th>Condition</th>
                            {
                                this.props.compare.map((productCompare)=>{
                                    return <td key={productCompare.id}>{productCompare.condition}</td>
                                })
                            }
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
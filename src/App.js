import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Product from './components/product';
import ComparingProd from './components/comparingProd';

import xbox from '../src/imgs/xbox_one_x.jpg';
import iphone from '../src/imgs/iPhone_XS_Max.jpg';
import canon from '../src/imgs/canon_70D.jpg';
import macbook from '../src/imgs/macbook_air.jpg';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [
        {id: 0, name: "iPhone XS Max", price: 1500, shortDescrip: "512GB", description: "iPhone XS comes in three capacities: 64GB, 256GB, and 512GB. The term “GB” stands for gigabytes. The more gigabytes you have, the more content you can store on your iPhone, such as apps, games, photos, HD videos, music, and movies.", manufactured: "Cupertino, CA", condition: "New", image: iphone},
        {id: 1, name: "Xbox One X", price: 500, shortDescrip: "1TB, 4K", description: "ksjbdvaisbdfv", manufactured: "Redmond, WA", condition: "Mint", image: xbox},
        {id: 2, name: "Canon 70D DSLR", price: 1650, shortDescrip: "20.2MP", description: "sjbvosubav", manufactured: "Tokyo, Japan", condition: "Used", image: canon},
        {id: 3, name: "MacBook Air", price: 1400, shortDescrip: "13-inch", description: "ouadbsvosuABVAOLBIDF", manufactured: "Cupertino, CA", condition: "Refurbished", image: macbook}
      ],
        compareArr: [],
        nextId: 0
    }
    this.addToCompare = this.addToCompare.bind(this);
  }

  addToCompare(prod, compared){

    let pr = this.state.compareArr;
    if(compared === false){
      pr.push(prod)
      this.setState({
        compareArr: pr
      })
    }else{
      for(var i=0; i<pr.length; i++){
        if(prod.id === pr[i].id){
          pr.splice(i,1)
          this.setState({
            // compareArr: this.state.compareArr.splice(i, 1)
            compareArr: pr
          })
        }
      }
    }

    console.log(pr)
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <ul>
          {
            this.state.products.map((product)=>{
              return <Product onClick={this.addToCompare} product={product} key={product.id} />
            })
          }
        </ul>
        <ComparingProd products={this.state.products} compare={this.state.compareArr}/>
      </div>
    );
  }
}

export default App;
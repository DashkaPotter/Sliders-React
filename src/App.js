import {data} from "./data";
import {dataTwo} from "./dataTwo";
import { useState } from "react";
import "./App.css";

function App(){

  const [product, setProduct] = useState(0);
  const [productTwo, setProductTwo] = useState(0)
  const {id,name,image,description} = data[product];
  const {idTwo,nameTwo,imageTwo,descriptionTwo} = dataTwo[productTwo];


  
  

  const previousProduct = () =>{setProduct((product => {
    product--;
    if(product<0){
      return data.length -1;
    }
    return product;
  }))}
  
  const nextProduct = () => {
    setProduct((product => {
      product ++;
      if(
        product > data.length-1
      ){
        product =0;
      }
      return product;
    }))
  }


  const previousProductTwo = () =>{setProductTwo((productTwo => {
    productTwo--;
    if(productTwo<0){
      return dataTwo.length -1;
    }
    return productTwo;
  }))}
  
  const nextProductTwo = () => {
    setProductTwo((productTwo => {
      productTwo ++;
      if(
        productTwo > dataTwo.length-1
      ){
        productTwo =0;
      }
      return productTwo;
    }))
  }





  return(
    <div key={id}>
      <div className="section1">
      <div className="container">
        <h1>Best Korean Beauty Products</h1>
      </div>
      <div className="container1">
        <h2 className="titel1">Set of Products For Dry Skin</h2>
      </div> 
      <div className="container">
        <img src={image} width="370px" alt='cosmetic' className="img" />
      </div>
      <div className="container">
        <h2>{id} - {name}</h2>
      </div>
      <div className="container">
        <p className="descrip">{description}</p>
        
      </div>

      <div className="container btn">
        <button className="btnn" onClick={previousProduct}>Previous</button>
        <button className="btnn" onClick={nextProduct}>Next</button>
      </div>
      </div>

      <div className="section2">
      <div className="container2">
        <h2 className="titel2">Set of Products For Sensitive Skin</h2>
      </div> 
      <div className="container">
        <img src={imageTwo} width="370px" alt='cosmetic' className="img" />
      </div>
      <div className="container">
        <h2>{idTwo} - {nameTwo}</h2>
      </div>
      <div className="container">
        <p className="descrip">{descriptionTwo}</p>
        
      </div>

      <div className="container btn">
        <button className="btnn2" onClick={previousProductTwo}>Previous</button>
        <button className="btnn2" onClick={nextProductTwo}>Next</button>
      </div>
      </div> 
      
        </div>
      
      
  )
  

}

export default App;
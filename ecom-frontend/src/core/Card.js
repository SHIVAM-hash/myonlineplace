import React, {useState} from "react"
import ImageHelper from "./helper/ImageHelper";
import {Redirect} from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import { isAuthenticated } from "../auth/helper";



const Card = ({
    product,
    addtoCart =true,
    removefromCart = false,
    reload = undefined,
    setReload = (f) => f
}) => {
  const [redirect, setRedirect] = useState(false)
    const cartTitle = product ? product.name : "A random photo"
    const cartDescription = product ? product.description : "A random description"
    const cartPrice = product ? product.price : "Default"
    const addToCart = ()=> {
        if (isAuthenticated()){
            addItemToCart(product, ()=> setRedirect(true));
            console.log("Added to cart")
        }
        else {
            console.log("Login Please !")
        }
    };
    const getRedirect = redirect => {
        if(redirect){
            return <Redirect to="/cart"/>;
        }
    };
    const showAddToCart = (addToCart) => {
        return (
            addtoCart && (
                <button
                onClick={addToCart}
                className="btn btn-block btn-outline-success mt-2 mb-2"
              >
                Add to Cart
              </button>
            )
        )
    }
    const showRemoveFromCart  = removefromCart => {
        return (
            removefromCart && (
                <button
                onClick={() => {
                    removeItemFromCart(product._id);
                    setReload(!reload)
                    console.log("Product removed")
                }}
                className="btn btn-block btn-outline-danger mt-2 mb-2"
              >
                Remove from cart
              </button>
            )
        )
    }
    return (
      <div className="card text-white bg-dark border border-success ">
        <div className="card-header lead bg-green">{cartTitle}</div>
        <div className="card-body">
          {getRedirect(redirect)}
          <ImageHelper product={product}/>
          <p className="lead bg-dark text-wrap" style={{padding:"5px"}}>
            {cartDescription}
          </p>
          <p className="btn btn-info rounded  btn-sm px-4">rs {cartPrice}</p>
          <div className="row">
            <div className="col-12">
              {showAddToCart(addToCart)}
            </div>
            <div className="col-12">
              {showRemoveFromCart(removefromCart)}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Card

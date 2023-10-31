import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { remove } from '../store/cartSlice';
const Cart = () => {
  const Product = useSelector(state=> state.cart);
  const dispatch = useDispatch()
  const removeItem = (id)=>{
    //dispatch a remove action
      dispatch(remove(id))
  }
  const cards= Product.map(products =>(
    <div className='col-md-12' style={{marginBottom:'10px'}}>
      <Card key={products.id} className='h-100'>
        <div className='text-center'>
    <Card.Img variant="top" src={products.image} style={{width:'100px' , height:'130px'}} />
    </div>
     <Card.Body>
      <Card.Title>{products.title}</Card.Title>
      <Card.Text>
        INR:  {products.price}
      </Card.Text>
      
    </Card.Body>

    <Card.Footer style={{backgroundColor:'white'}}>
    <Button variant="danger" onClick={()=>removeItem(products.id)}>Remove Item</Button>
    </Card.Footer>
  </Card>
    </div>
  ))
  return (
    <>
    {/* <div>Cart</div>
    {JSON.stringify(productCart, undefined , 2)} */}
    <div className='row'>
      {cards}
    </div>
    </>
  )
}

export default Cart
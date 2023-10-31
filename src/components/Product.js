import React from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import { Alert } from "react-bootstrap";
const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);


   if(status === "loading"){
    return <p>Loading...</p>
   }
   if(status === "error"){
    return <Alert key="danger" variant="danger" >Something went wrong..</Alert>
   }
  const addTocart = (product) => {
    dispatch(add(product));
  };
  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card key={product.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
        </Card.Body>

        <Card.Footer style={{ backgroundColor: "white" }}>
          <Button variant="primary" onClick={() => addTocart(product)}>
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <>
      <div>Product Dashboard</div>
      {/* <pre>{JSON.stringify(Product, undefined, 2)}</pre> */}
      <div className="row">{cards}</div>
    </>
  );
};

export default Product;

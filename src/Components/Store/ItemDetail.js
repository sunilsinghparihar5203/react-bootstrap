import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Hero from "../UI/Hero";
import { productsContext, CartContext } from "../Context";

function ItemDetail(props) {
  const params = useParams();
  const products = useContext(productsContext);
  const ctx = useContext(CartContext);

  const currentProduct = products.filter((product) => {
    return product.id === params.productId;
  });

  const addtoCartHandler = () => {
    console.log({ currentProduct: currentProduct });
    const item = {
      id: currentProduct[0].id,
      title: currentProduct[0].title,
      image: currentProduct[0].imageUrl,
      price: currentProduct[0].price,
      qty: 1,
    };
    ctx.addItem(item);
  };
  
  return (
    <>
      <Container>
        <Hero title="Product Details" />
        <div className="row">
          <div className="col-md-4">
            <img
              className="img-fluid"
              src={currentProduct[0].imageUrl}
              alt={currentProduct[0].title}
            />

            <div className="my-4 text-center">
              <Button size="sm" variant="info" onClick={addtoCartHandler}>
                Add to Cart
              </Button>
            </div>
          </div>
          <div className="col-md-8">
            <h4>{currentProduct[0].title}</h4>
            <h5>$ {currentProduct[0].price}</h5>
            <hr></hr>
            <div>
              <h5>Reviews</h5>
              {reviews.map((review) => (
                <div key={review.c_id}>
                  <span className="badge bg-success">
                    &#9734; {review.rating}
                  </span>
                  <p>{review.commment}</p>
                  <small>
                    By : {review.username} , date : {review.date}
                  </small>
                  <hr></hr>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ItemDetail;

const reviews = [
  {
    c_id: 1,
    date: "1/2/2023",
    username: "pankaj",
    rating: 4,
    commment: "nice product",
  },
  {
    c_id: 2,
    date: "11/2/2023",
    username: "rahul",
    rating: 3.5,
    commment: "nice product",
  },
];

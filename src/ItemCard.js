import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemCard({title,imageUrl,price}){
    return(
            <Card style={{ width: '18rem',border:'none' }} key={title}>
              <Card.Img variant="top" src={imageUrl} />
              <Card.Body>
                <Card.Title> {title}</Card.Title>
                <Card.Text>${price.toFixed(2)} </Card.Text>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
    )
  }

export default ItemCard
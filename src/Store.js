import React from 'react'
import Container from 'react-bootstrap/Container';
import ItemCard from './ItemCard';
import MyNav from './MyNav';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';

function Store() {
    return (
        <>
            <MyNav />
            <div className='bg-secondary d-flex justify-content-around py-4 text-light mb-4' >
                <h1 className='my-4'>The Generics</h1>
            </div>
            <Container className='d-flex justify-content-around'>
                {
                    products.map(product => {
                        return (
                            <ItemCard title={product.title} price={product.price} imageUrl={product.imageUrl} />
                        )
                    })
                }
            </Container>
            <div className='text-center my-4'>
                <Button variant="info">Add to cart</Button>
            </div>
            <Footer />
        </>
    )
}

export default Store


const products = [

    {
  
      title: 'Colors',
  
      price: 100,
  
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  
    },
  
    {
  
      title: 'Black and white Colors',
  
      price: 50,
  
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  
    },
  
    {
  
      title: 'Yellow and Black Colors',
  
      price: 70,
  
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  
    },
  
    {
  
      title: 'Blue Color',
  
      price: 100,
  
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  
    }
  
  ]
import React from 'react'
import MyNav from './MyNav';
import Footer from './Footer';
import { Button, Container } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
function Home() {
    return (
        <>
            <MyNav />
            <div className='bg-secondary d-flex justify-content-around py-4 text-light' >
                <div className='col-12 text-center'>
                    <h1>The Generics</h1>
                    <Button variant="outline-primary text-white">Get Out latest Album</Button>
                </div>
            </div>

            <Container>
                <div className='col-12 text-center mt-4'>
                    <h1>Album</h1>
                </div>

                <div className='my-4'>
                    <ListGroup>
                        <ListGroup.Item className="d-flex justify-content-between">
                            <span>JUL16</span>
                            <span>DETROIT, MI</span>
                            <span>DTE ENERGY MUSIC THEATRE</span>
                            <span><Button>Buy ticket</Button></span>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between">
                            <span>JUL19</span>
                            <span>TORONTO,ON</span>
                            <span>BUDWEISER STAGE</span>
                            <span><Button>Buy ticket</Button></span>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between">
                            <span>JUL22</span>
                            <span>BRISTOW, VA</span>
                            <span>JIGGY LUBE LIVE</span>
                            <span><Button>Buy ticket</Button></span>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between">
                            <span>JUL29</span>
                            <span>PHOENIX, AZ</span>
                            <span>AK-CHIN PAVILION</span>
                            <span><Button>Buy ticket</Button></span>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between">
                            <span>AUG 2</span>
                            <span>DETROIT, MI</span>
                            <span>T-MOBILE ARENA</span>
                            <span><Button>Buy ticket</Button></span>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between">
                            <span>Aug 7</span>
                            <span>CONCORD, CA</span>
                            <span>CONCORD PAVILION</span>
                            <span><Button>Buy ticket</Button></span>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </Container>

            <Footer />
        </>

    )
}

export default Home
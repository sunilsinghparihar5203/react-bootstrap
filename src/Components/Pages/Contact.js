import React,{useRef} from "react";
import { Container } from "react-bootstrap";
import MyNav from "../Navbar/MyNav";
import Hero from "../UI/Hero";

function Contact() {
  const name = useRef('');
  const email = useRef('');
  const phone = useRef('');

  const details ={
    name: name.current.value,
    email : email.current.value,
    phone : phone.current.value,
  }

  async function contactSubmitHandler(e){
    e.preventDefault()
    const response = await fetch('https://movieapp-bc2eb-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json',{
      method: "POST",
      body: JSON.stringify(details),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await response.json()
    console.log(data)
  }
  return (
    <>
      <Container className="vh-100">
        <Hero title="Contact Us" />
        <div className="d-flex justify-content-center">
          <div className="col-md-6">
            <form className="row g-3" >
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  ref={name}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  ref={email}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">
                  Phone number
                </label>
                <div className="input-group">
                  <input type="tel" className="form-control" id="phone" required ref={phone}/>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" onClick={contactSubmitHandler} >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Contact;

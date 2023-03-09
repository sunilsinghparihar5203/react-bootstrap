import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-4 my-4 bg-dark text-white">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Footer Content</h5>
            <p>
              Here you can use rows and columns to organize your footer content.
            </p>
          </div>

          <div className="col-md-6 mb-md-0 mb-3 d-flex justify-content-center">
            <div className="col-md-6 d-flex justify-content-around">
              <span>
                <a href="#facebook" target='_blank'>Facebook</a>
              </span>
              <span>
                <a href="#instagram" target='_blank'>Instagram</a>
              </span>
              <span>
                <a href="#youtube" target='_blank'>Youtube</a>
              </span>
              <span>
                <a href="#twitter" target='_blank'>Twitter</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

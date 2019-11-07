import React, { Component } from "react";
import "./styles/Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small">
        <div className="container">
          <div className="row ">
            <div className="col-4">
              <i class="fas fa-shield-alt"></i>
            </div>
            <div className="col-4 text-left">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                vel eleifend enim, sit amet posuere libero. Etiam commodo nunc
                sit amet lacus efficitur gravida. Morbi eget laoreet elit.
              </p>
            </div>
            <div className="col-4">
              <h3>Links</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row text-left">
          <div class="footer-copyright  py-3">
            © 2018 Copyright:
            <a href="https://mdbootstrap.com/education/bootstrap/">
              {" "}
              MDBootstrap.com
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

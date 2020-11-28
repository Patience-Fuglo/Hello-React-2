import React from 'react';
import { FaEnvelope, FaGithub, FaFacebook } from "react-icons/fa";

const Contact = () => {

  return (
    <div className="contact_container">
      <h1>Get in touch.</h1>
      <p>patfug3@gmail.com</p>
      <p>212-223-0010</p>
      <br></br>
      <form onSubmit={() => alert('Message Sent')}>
        <div class="form-group">
          <label for="exampleInputName">Name</label>
          <input type="Name" class="form-control" id="exampleInputName" aria-describedby="emailHelp" />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail">Email</label>
          <input type="text" class="form-control" id="exampleInputEmail" />
        </div>
        <div class="form-group">
          <label for="exampleInputName">Message</label>
          <textarea type="text" class="form-control" id="exampleInputName" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      <div className="social_links">
        <ul>
          <li>
            <a href={`mailto:x`}>
              <FaEnvelope></FaEnvelope>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <FaFacebook></FaFacebook>
            </a>
          </li>
          <li>
            <a href="https://github.com/Patience-Fuglo">
              <FaGithub></FaGithub>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
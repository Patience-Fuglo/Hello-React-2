import React from 'react';
import logo from '../pic2.jpg';

const Home = ()=>{
  return (
 <div>
        <div className="home_container">
           <h1 className="home_text">Welcome!</h1>
           <h3>
           <br/> I am Patience Fuglo
           <br/>  And this is my online
           <br/>  Portfolio
           </h3>
           <img src={logo} className="App-logo" alt="logo" />
        </div>
    </div>
    )
}

export default Home;

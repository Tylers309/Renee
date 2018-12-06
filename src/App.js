import React from 'react';
import './App.css';
import Contact from './contact-section';
import Deal from './deal-bar';
import profileimg from './profileImg.jpg';

const App = () => (


  <div className="main-container">
    {/* <Deal /> */}

    <div className="top-container">
      <div className="top-left-container">
        <div className="header-container">
          <h1 className="header">Hi!<br />My name is<span>Renee Sutton</span></h1>
        </div>

        <div className="text-container">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Recusandae quo, consequuntur iusto quod aperiam ipsa fuga
          enim magni neque quis eos rem, omnis corporis quas culpa
          accusantium pariatur explicabo aspernatur? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Recusandae quo,
          consequuntur iusto quod aperiam ipsa fuga enim magni neque
          quis eos rem, omnis corporis quas culpa accusantium pariatur
          explicabo aspernatur?
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Recusandae quo, consequuntur iusto quod aperiam ipsa
          fuga enim magni neque quis eos rem, omnis corporis quas
          culpa accusantium pariatur explicabo aspernatur?
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Recusandae quo, consequuntur iusto quod aperiam ipsa fuga
          enim magni neque quis eos rem, omnis corporis quas culpa
          accusantium pariatur explicabo aspernatur? Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Recusandae quo,
          consequuntur iusto quod aperiam ipsa fuga enim magni neque
          quis eos rem, omnis corporis quas culpa accusantium pariatur
          explicabo aspernatur?
          <br /> <br />
        </div>
      </div>

      <div className="top-right-container">
        <div className="t-right-top">
          <img src={profileimg} alt="Renee Sutton" className="profileimg" />
        </div>
        <div className="t-right-bottom" />
      </div>

    </div>

    <Contact />

  </div>
);


export default App;

// styled components

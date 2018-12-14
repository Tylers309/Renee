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
        Welcome to the place where we celebrate being authentically, you! 
        As a wife, mom of three, and business owner it was important to me 
        to learn how to practice self-care. We often think that taking time for ourselves is selfish, 
        but in fact, it’s necessary and our divine responsibility. We can only give what we ourselves 
        posses and if I don’t take time for me – everyone comes up short. 
        Here you’ll find laughter – because it really is medicine to our soul.  
        <br /> <br />
        You’ll find messy lives and messy thoughts and hopefully acceptance and inspiration. 
        And you’ll find Posh. Lots of Posh. Perfectly Posh was and is the vehicle that helped 
        me make myself a priority, learn that self-care comes in all forms – hello face mask 
        while I fold the laundry. I’ll share reviews, opportunities, and deals for those that follow along on the adventure! 
        <br /> <br />
        Take some time to love you today. You deserve it.
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

import React, {Component} from 'react';


import Header  from './components/header/header';
import Footer  from './components/footer/footer';
import Features from './components/features/features';
import Ourwork from './components/ourWork/ourwork';
import ContactUs from './components/contactUS/contactUs';
import Topbar from './components/topbar/topbar';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Topbar/>
        <Header/>
        <Features/>
        <Ourwork/>
        <ContactUs/>
        <hr/>
        <Footer email={'rajilat1000gmail.com'}/>

      </div>
      
    );
    
  };
}

export default App;

import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import Footer  from './components/footer/footer';
import Topbar from './components/topbar/topbar';
import HomePage from './components/homepage/homepage.component';
import Birthdays from './components/birthdays/birthdays.components';
import Weddings from './components/weddings/weddings.component';
import Corporate from './components/corporate/corporate.component';




class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/birthdays' component={Birthdays} />
          <Route exact path='/weddings' component={Weddings} />
          <Route exact path='/corporate' component={Corporate} />
        </Switch>
        <hr/>
        <Footer email={'rajilat1000gmail.com'}/>

      </div>
      
    );
    
  };
}

export default App;

import React from 'react';

import './features.scss';

import FeaturesItem from './featuresItem';

class Features extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          img: 3,
          title: 'Birthdays',
          path: '/birthdays',
          content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
        },
        {
          img: 4,
          title: 'Corporate',
          path: '/corporate',
          content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' 
        },
        
        {
          img: 5,
          title: 'Weddings',
          path: '/weddings',
          content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure.' 
        },

      ],
    
      name: 'About Us',
      description: 'We gve your event touches of greatness and we deliver a perfect job in due time. Work with us today and enjoy an everlasting relationship plus 50% discount and in your first event we handle for you. With us, you only have to imagine and we’ll source the most cutting-edge entertainment to transform the venue and your special day into an extraordinary and a memorable one. When it comes to events, no matter the crowd, we can get things done the way you imagine and value it. Be it corporate, social or private event. Our professional and devoted staffs are experts at organizing and executing any type of events.'

    }
  }

  render() {
    return (
      <div id="events" tabIndex={-1} className="features">
        <h1 className="heading-large">{this.state.name}</h1>
        <p className="para">{this.state.description}</p>
        {
          this.state.sections.map((section, index) => <FeaturesItem key={index} section={section}/>)
        }
      </div>  
    );
    
  };
}

export default Features;
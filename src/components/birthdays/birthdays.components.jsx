import React from 'react';

import './birthdays.styles.scss';
import BirthdayItem from './birthdayItem';
import NavBar from '../navbar/navbar.component';

class Birthdays extends React.Component {
    constructor() {
    super();

    this.state = {
      sections: [
        {
            img: [1, 2],
            event: 'The celebrant: Mr Michael',
            location: 'Mazab event center Ilorin, Kwara State',
            testimony: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

        },
        {
            img: [3, 4],
            event: 'The celebrant: Mr Michael',
            location: 'Ronicks event center Epe, Lagos State',
            testimony: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

        },
        {
            img: [5, 8],
            event: 'The celebrant: Mr Michael',
            location: 'Skyrise event hall Sapele, Delta State',
            testimony: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

        },
        {
            img: [9, 10],
            event: 'The celebrant: Mr Michael',
            location: 'G2 event center Ibadan, Oyo State',
            testimony: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'

        }
            ]
        }
    }

    render() {
        return (
            <div>
                <NavBar /> 
                <div className='birthday'>
                    <h1 className='birthday__heading'>Important - Please read what people are saying about us</h1>
                    {
                        this.state.sections.map((section, index) => <BirthdayItem key={index} section={section}/>)
                    }
                </div>
            </div>
            
        )
    }
}

export default Birthdays;
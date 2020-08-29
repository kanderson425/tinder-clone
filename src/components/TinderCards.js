import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import '../styles/TinderCards.css';

function TinderCards() { 
    const [people, setPeople] = useState([
        {
            name: 'steve jobs',
            url:'https://www.biography.com/.image/t_share/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg'
        },
        {
            name: 'mark zuckerberg',
            url: 'https://ei.marketwatch.com/Multimedia/2020/07/01/Photos/ZG/MW-IJ712_zucker_20200701195219_ZG.jpg?uuid=e6574f70-bbf5-11ea-adb9-9c8e992d421e'
        }
    ]);
    return (
        <div>
            <div className="tinderCards__cardContainer">
                <h1>Tinder Cards</h1>
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}

                        >
                        <div 
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
};

export default TinderCards;
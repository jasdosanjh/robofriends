import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, id) => {
                    return (
                        <Card
                        key={id}
                        id={robots[id].name}
                        email={robots[id].email}
                        />
                    )
                })
            }
        </div>
    );
}

export default CardList;
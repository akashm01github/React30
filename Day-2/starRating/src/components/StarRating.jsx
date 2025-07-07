import React, { useState } from 'react';

import { FaStar } from 'react-icons/fa';

const StarRating = ({ noofStar = 5 }) => {

    const [rating, setrating] = useState(0);

    const [hover, sethover] = useState(0)

    const handelClick = (getCurrentIndex) => {

        setrating(getCurrentIndex);
    }

    const handelMouseEnter = (getCurrentIndex) => {

        sethover(getCurrentIndex);
    }
    const handelMouseLeave = () => {

        sethover(rating)
    }

    return (
        <div className='starRating flex justify-center gap-10 py-5'>
            {
                [...Array(noofStar)].map((_, index) => {
                    index += 1
                    return (
                        <FaStar className={`${index <= (hover || rating) ? 'text-yellow-500' : 'text-black'}`}
                            onClick={() => { handelClick(index) }}
                            onMouseMove={() => { handelMouseEnter(index) }}
                            onMouseLeave={() => { handelMouseLeave() }}
                            size={50}
                            key={index}
                        />
                    )
                })
            }
        </div>
    )
}

export default StarRating;

// **Array Manipulation**: Sparse to Dense array conversion
// **State Management**: Multiple states for different purposes
// **Event Handling**: Mouse events with parameter passing
// **Conditional Rendering**: Dynamic class assignment
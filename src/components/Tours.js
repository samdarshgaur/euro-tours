import Tour from './Tour.js';

import './Tours.css';

const Tours = (props) => {
    return (
        <div className="tours">
            {props.tours.map(tour => {
                return <Tour key={tour.title} {...tour} />
            })}
        </div>
    );
};

export default Tours;
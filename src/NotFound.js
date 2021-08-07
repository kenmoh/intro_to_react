import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Oooops!!!</h2>
            <p>That page cannat be found</p>
            <Link to="/" >Back to homepage...</Link>
        </div>
    );
};

export default NotFound;

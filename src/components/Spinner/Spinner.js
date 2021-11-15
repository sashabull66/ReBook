import React from 'react';
import './Spinner.css'

const Spinner = () => {
    return (
        <div style={{width:'100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className="loader">Loading...</div>
        </div>
    );
};

export default Spinner;
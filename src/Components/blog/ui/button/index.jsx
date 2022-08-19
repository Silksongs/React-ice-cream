import React from 'react';
import  './style.css'
const MyButton = ({children, ...props}) => {
    return (
        <button  {...props} className={'myBtn'}>
            {children}
        </button>
    );
};

export default MyButton;
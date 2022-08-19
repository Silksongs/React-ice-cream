import React from 'react';

const MyModal = ({children}) => {
    return (
        <div onClick={(e) => e()}>
            {children}
        </div>
    );
};

export default MyModal;
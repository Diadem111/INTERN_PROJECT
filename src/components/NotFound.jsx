import React from 'react';
import { notfound } from '../assets';

const NotFound = () => {
    return (
        <div className="w-full h-full">
            <img
                className=" w-[90%] "
                src={notfound}
                alt="page Not Found"
            />
        </div>
    )
}

export default NotFound
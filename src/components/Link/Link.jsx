import React from 'react';

const Link = ({navbarElement}) => {
    return (
        <li className='mr-12 hover:bg-purple-700'>
            <a href={navbarElement.link}>{navbarElement.title}</a>
        </li>
    );
};

export default Link;
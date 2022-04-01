import React from 'react';
import './Link.css'

const Link = (props) => {
    const {name, link}  =  props;
    return (
            <li className='text-xl'>
                <a className='ml-6' href={link}>{name}</a>
            </li>
    );
};

export default Link;
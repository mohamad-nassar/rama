import React from 'react';
import Header from '../layouts/header';
export default function About()
{
    return[
        <Header />,
        <div key={"about-div"}>Hello about</div>
    ];
}
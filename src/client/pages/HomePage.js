import React from 'react';

const Home = () => {
    return (
    <div>
        <div>I'm the Mika home component</div>
        <button onClick= {()=> console.log("Hi THere")}> Press me!</button>
    </div>
    );
};

export default {
    component: Home
};
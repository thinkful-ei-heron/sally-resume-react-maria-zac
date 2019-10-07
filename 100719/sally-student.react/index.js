
import React from 'react';

import ReactDOM from 'react-dom';


function App (props){
    return (
        <main>
             <nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/Contact"> Contact Information</a></li>
        <li><a href="/Education">Education</a></li>
        <li><a href="/Professional">Professional Employment</a></li>
    </ul>
</nav>

<header>
    <h1>{props.name}</h1>
    </header>
    <img className= "fit-picture" src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg"
    alt= "Picture of Sally Student wearing yellow t-shirt and blue jeans " className="center"
    width="200" height="300"/>
<address>
    <br/>
    Email: <a href= "mailto:sally@gmail.com"> sally@gmail.com</a>
    <br/>
    Phone Number: <a href= "tel:+456789123">456-789-123 </a>
</address>



<section>

<header>
<h2>Education</h2>
</header>
<ul>
    <li> University of New Mexico, Associates of Literature</li>
    <li> Kansas State University, B.S. English Studies</li>
    <li> Virginia Tech, Masters in Education</li>
</ul>
</section>

<section>
<h2> Professional Employment</h2>
<header>
    <h3> Ripples Bar and Grill </h3>
    <h3> Bartender, Dec 2013 to June 2014</h3>
</header>

<ul>
    <li> Duties included opening bar and checking that there is enough stock for entire shift.</li>
    <li> Attending to costumers accordingly and making drinks for entire restaurant.</li>
    <li> Knowledge of Point of Sale system and proper cashing out at the end of shift </li>
</ul>
    <header>
    <h3> Margaritaville</h3>
    <h3> Hostess, July 2014 to Jan 2015</h3>
</header>

<ul>
<li> Seating guests according to restaurant demand.</li>
<li> Cleaning and sweeping waiting area until tables become available.</li>
<li> Communicating with bartenders and waiters to ensure smooth flow of guests in and out of restaurant. </li>
</ul>
<header>
<h3> Early Bird Childhood Center </h3>
<h3> Assistant, Feb 2015 to June 2017</h3>
</header>
<ul>
    <li> Assisting child care reps with morning drop offs and ensuring that kids were fed breakfast if needed. </li>
    <li> Helping coordinate daily activities including taking kids to the park if weather permits.</li>
    <li> Making sure kids left with all belongings at the end of the day</li>
    </ul> 
    
</section>


        </main>

    );
};

ReactDOM.render (
    <App
        name= 'Sally Student'
    />,
    document.querySelector('#application-root')
);


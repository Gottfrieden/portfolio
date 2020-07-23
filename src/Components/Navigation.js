import React from 'react';
import { Link } from 'react-router-dom';
import NavigationElements from '../NavigationElements.json';
import '../Styles/Navigation.css';

export default function Navigation(props) {
    return (
        <div className='navigation-container'>
            {NavigationElements.navigation.map(element => {
                return (
                    <Link key={element.slug} to={`/${element.slug}`} className='navigation-element' onClick={props.hideBurgerMenuContainer}>
                        <p>{element.title}</p>
                    </Link>
                )
            })}
        </div >
    )
}
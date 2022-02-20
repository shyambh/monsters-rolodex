import React from 'react';
import './cardList.style.css';
import { Card } from '../Card/card.component';

export const CardList = props => 
    (<div className='card-list'>
    {props.monsters.map((monster) => (
      <Card key={monster.id} id={monster.id} name={monster.name} email={monster.email}/>
      
    ))}</div>)

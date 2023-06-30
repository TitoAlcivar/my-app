import React from 'react'
import { info } from '../App';


export function CreditCard(  { type, number, expirationMonth, expirationYear, bank, owner, cssClass }) {
  return (
    <div className='credit'>
      <h3>{type}</h3>
      <p>{number}</p>
      <p>{expirationMonth}</p>/<p>{expirationYear}</p>
      <p>{bank}</p>
      <p>{owner}</p>
      <p>{cssClass}</p>
    </div>
  );
}
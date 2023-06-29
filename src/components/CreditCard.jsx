import React from 'react'


export function CreditCard(  { type, number, expirationMonth, expirationYear, bank, owner, cssClass  }) {
  return (
    <div className='credit flex'>
      <h3>{type}</h3>
      <p>{number}</p>
      <p>{expirationMonth}</p>/<p>{expirationYear}</p>
      <p>{bank}</p>
      <p>{owner}</p>
      <p>{cssClass}</p>
    </div>
  );
}
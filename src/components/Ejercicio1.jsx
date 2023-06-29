import React from 'react'
import { CreditCard } from './CreditCard'

export const Ejercicio1 = ({ info }) => {


    return (
        <div>
            <CreditCard type={info.type}
                        number={info.number}
                        expirationMonth={info.expirationMonth} 
                        expirationYear={info.expirationYear}
                        bank={info.bank}
                        owner={info.owner}
                        cssClass={info.cssClass} />


        </div >
    )
}

import React, { useState } from 'react';
import { CountryDropdown } from 'react-country-region-selector';

import './PopUp.css';

import { RiVisaLine } from 'react-icons/ri';
import { RiMastercardFill } from 'react-icons/ri';
import { SiAmericanexpress } from 'react-icons/si';

const PopUp = props => {

    const [enteredCard, setEnteredCard ] = useState('');
    const [enteredCountry, setEnteredCountry ] = useState('');

    const closeBtn = () => {
        props.close();
    }

    const doneBtn = () => {
        props.cardNumberBool(true);
        props.close();
    }

    const countryHandler = country => {
        setEnteredCountry(country);
    }
    const cardHandler = e => {
        e.preventDefault();
        setEnteredCard(e.target.value);
        console.log(enteredCard);
        props.getCardNum(enteredCard)
    }

    return (
        <>
            <div className='popUp-wrap'>
                <div className='popUp'>
                    <button onClick={closeBtn} className='popUp-btn'>Close</button>
                    <div className='popUp-ccDetails'>
                        <p>Add card details</p>
                    </div>
                    <div className='ccBrands'>
                        <RiVisaLine className='brands' />
                        <RiMastercardFill className='brands masterCard' />
                        <SiAmericanexpress className='brands americanExpress' />
                    </div>
                    <form className='popUp-formWrap'>
                        <input className='input100'
                            placeholder='Card number'
                            type='tel'
                            value={enteredCard}
                            onChange={cardHandler}
                        />
                        <div>
                            <input className='input50 first50'
                                placeholder='Expiration (MM/YY)'
                            />
                            <input className='input50 second50'
                                placeholder='CVV'
                                type='number'
                                max='3'
                            />
                        </div>
                        <input className='input100 postalCode'
                            placeholder='Postal code'
                        />
                        <CountryDropdown className='input100 country'
                            placeholder='Country'
                            value={enteredCountry}
                            onChange={countryHandler}
                        />
                        <button
                            className='cardBtn'
                            type='submit'
                            onClick={doneBtn}>Done</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default PopUp;
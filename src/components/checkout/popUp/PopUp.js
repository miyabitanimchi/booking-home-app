import './PopUp.css';

import { RiVisaLine } from 'react-icons/ri';
import { RiMastercardFill } from 'react-icons/ri';
import { SiAmericanexpress } from 'react-icons/si';

const PopUp = props => {

    const closeBtn = () => {
        props.close();
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
                        />
                        <div>
                            <input className='input50 first50'
                                placeholder='Expiration'
                            />
                            <input className='input50 second50'
                                placeholder='CVV'
                            />
                        </div>
                        <input className='input100 postalCode'
                            placeholder='Postal code'
                        />
                        <input className='input100 country'
                            placeholder='Country'
                        />
                        <button
                            className='cardBtn'
                            type='submit'>Done</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default PopUp;
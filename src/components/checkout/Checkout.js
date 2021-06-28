import React from "react";

import { IoIosArrowBack } from 'react-icons/io';
import { BsCreditCard } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaCcPaypal } from 'react-icons/fa';
import { SiGooglepay } from 'react-icons/si';

import './Checkout.css';

const Checkout = (props) => {


    const submitHandler = () => {

    }

    return (
        <>
            <div className='checkout-container'>
                <form onSubmit={submitHandler}>
                    <div className='backBtn-wrap'>
                        <IoIosArrowBack className='checkout-arrow' />
                        <button className='checkout-backBtn'>
                            Request to book
                        </button>
                    </div>
                    <div className='yourTrip-wrap'>
                        <p className='yourTrip-title'>Your trip</p>
                        <div>
                            <div className='yourTrip-info'>
                                <div>
                                    <p className='yourTrip-date'>Dates</p>
                                    <p className='yourTrip-data'>Aug. 12 - Aug.26</p>
                                </div>
                                <div className='yourTrip-btn'>
                                    <button>Edit</button>
                                </div>
                            </div>
                            <div className='yourTrip-info'>
                                <div>
                                    <p className='yourTrip-date'>Guest</p>
                                    <p className='yourTrip-data'>2 guest</p>
                                </div>
                                <div className='yourTrip-btn'>
                                    <button>Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='howToPay'>
                        <p className='howToPay-title'>Choose how to pay</p>
                        <div className='howToPay-container'>
                            <div className='howToPay-wrap'>
                                <div className='howToPay-text-wrap'>
                                    <p className='payBold'>Pay in full</p>
                                    <p className='payText'>Pay the total now and you're all set.</p>
                                </div>
                                <div className='howToPayRadio'>
                                    <span className='howToPaySpan'>$2,756.60</span>
                                    <input
                                        type='radio'
                                        name='payment'
                                    />
                                </div>
                            </div>
                            <div className='howToPay-wrap second'>
                                <div className='howToPay-text-wrap'>
                                    <p className='payBold'>Pay part now, part later</p>
                                    <p className='payText'>Pay $1,378.30 now, and the rest ($1,378.30) will be automatically charged to the same payment method next month. No extra fees.</p>
                                </div>
                                <div className='howToPayRadio'>
                                    <span className='howToPaySpan'>$1,378.60</span>
                                    <input
                                        type='radio'
                                        name='payment'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='payWith-container'>
                        <p className='howToPay-title'>Pay with</p>
                        <div className='payMethod'>
                            <div className='payMethod-wrap'>
                                <div className='payWith-wrap'>
                                    <div className='payWith-text-wrap'>
                                        <BsCreditCard className='bsCreditCard' />
                                        <p>Credit or debit card</p>
                                    </div>
                                    <div className='payWithModal'>
                                        <AiOutlinePlus />
                                    </div>
                                </div>
                            </div>
                            <div className='payMethod-wrap'>
                                <div className='payWith-wrap'>
                                    <div className='payWith-text-wrap'>
                                        <FaCcPaypal className='bsCreditCard' />
                                        <p>Paypal</p>
                                    </div>
                                    <div className='payWithModal'>
                                        <AiOutlinePlus />
                                    </div>
                                </div>
                            </div>
                            <div className='payMethod-wrap third'>
                                <div className='payWith-wrap'>
                                    <div className='payWith-text-wrap'>
                                        <SiGooglepay className='bsCreditCard google' />
                                        <p>Google Pay</p>
                                    </div>
                                    <div className='payWithModal'>
                                        <AiOutlinePlus />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className='checkout-resume'>

                </div>
            </div>
        </>
    );
};

export default Checkout;
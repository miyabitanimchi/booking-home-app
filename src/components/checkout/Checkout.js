import React, { useEffect, useState } from "react";
import moment from "moment";
import './Checkout.css';

import { Link } from "react-router-dom";
import PopUp from './popUp/PopUp';
import { useAccomsContext } from "../../context/AccomsProvider";


import { IoIosArrowBack } from 'react-icons/io';
import { BsCreditCard } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaCcPaypal } from 'react-icons/fa';
import { SiGooglepay } from 'react-icons/si';
import { AiOutlineStar } from 'react-icons/ai';


const Checkout = (props) => {
    console.log(props);
    
    const [isAdding, setIsAdding] = useState(false);
    
    const {
        searchParams, //this will bring me the array from context api
    } = useAccomsContext();
    
    const nights = moment.duration(moment(props.location.detailProps.checkOutDate, "YYYY-MM-DD").diff(moment(props.location.detailProps.checkInDate, "YYYY-MM-DD"))).asDays();
    console.log(nights);

    let allGuest = props.location.detailProps.adultsGuest + props.location.detailProps.childrenGuest + props.location.detailProps.infantsGuest;
    let nightPrice = props.location.detailProps.price * nights;
    let totalPrice = (props.location.detailProps.price * nights) + 50 + 25;
    let halfPrice = totalPrice / 2;
    let perNightPrice = props.location.detailProps.price;

    const submitHandler = () => {

    }
    const popUpModal = () => {
        console.log(isAdding);
        setIsAdding(!isAdding);
    }
    const closePopUp = () => {
        setIsAdding(false);
    }

    return (
        <>
            <div className='checkout-container'>
                <form onSubmit={submitHandler}>
                    <div className='backBtn-wrap'>
                        <Link to="/">
                            <div className='checkout-arrow'>
                                <IoIosArrowBack />
                            </div>
                        </Link>
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
                                    <p className='yourTrip-data'>{props.location.detailProps.checkInDate} | {props.location.detailProps.checkOutDate} ({nights} nights)</p>
                                </div>
                                <div className='yourTrip-btn'>
                                    <button>Edit</button>
                                </div>
                            </div>
                            <div className='yourTrip-info'>
                                <div>
                                    <p className='yourTrip-date'>Guest</p>
                                    <p className='yourTrip-data'>{allGuest} guest</p>
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
                                    <span className='howToPaySpan'>${totalPrice.toFixed(2)}</span>
                                    <input
                                        className='radioInput'
                                        type='radio'
                                        name='payment'
                                    />
                                </div>
                            </div>
                            <div className='howToPay-wrap second'>
                                <div className='howToPay-text-wrap'>
                                    <p className='payBold'>Pay part now, part later</p>
                                    <p className='payText'>Pay ${halfPrice.toFixed(2)} now, and the rest (${halfPrice.toFixed(2)}) will be automatically charged to the same payment method next month. No extra fees.</p>
                                </div>
                                <div className='howToPayRadio'>
                                    <span className='howToPaySpan'>${halfPrice.toFixed(2)}</span>
                                    <input
                                        className='radioInput'
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
                                <div onClick={popUpModal} className='payWith-wrap'>
                                    <div className='payWith-text-wrap'>
                                        <BsCreditCard className='bsCreditCard' />
                                        <p>Credit or debit card</p>
                                    </div>
                                    <div className='payWithModal'>
                                        <AiOutlinePlus />
                                    </div>
                                </div>
                            </div>
                            <div className='payMethod-wrap paypal'>
                                <a href='https://www.paypal.com/' target='_blank' className='payWith-wrap'>
                                    <div className='payWith-text-wrap'>
                                        <FaCcPaypal className='bsCreditCard' />
                                        <p>Paypal</p>
                                    </div>
                                    <div className='payWithModal'>
                                        <AiOutlinePlus />
                                    </div>
                                </a>
                            </div>
                            <div className='payMethod-wrap third'>
                                <a href='https://pay.google.com/intl/en_us/about/' target='_blank' className='payWith-wrap'>
                                    <div className='payWith-text-wrap'>
                                        <SiGooglepay className='bsCreditCard google' />
                                        <p>Google Pay</p>
                                    </div>
                                    <div className='payWithModal'>
                                        <AiOutlinePlus />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='checkout-cancel'>
                        <p className='howToPay-title'>Cancellation policy</p>
                        <p><span className='boldText'>Free cancellation for 48 hours. </span>After that, cancel before 3:00 PM on Jul. 8 and get a 50% refund, minus the service fee.</p>
                    </div>
                    <button
                        className='confirmBtn'
                        type='submit'
                    >Confirm and pay</button>
                </form>
                {/* RESUME */}
                <div className='checkout-resume'>
                    <div className='resume-top'>
                        <div className='resumeImg'>
                            <img src={props.location.detailProps.img} />
                        </div>
                        <div className='resumeText'>
                            <p className='resumeTitle'>{props.location.detailProps.title}</p>
                            <p className='resumeDescription'>{props.location.detailProps.address}</p>
                            <p className='resumeInfo'>{props.location.detailProps.neighbourhood}</p>
                            <p className='resumeScore'>
                                <AiOutlineStar className='star-icon' />
                                <span className='resumeScoreText'>{props.location.detailProps.startRating} star hotel </span>
                            </p>
                        </div>
                    </div>
                    <div className='resume-bottom'>
                        <p className='resumePrice'>Price details</p>
                        <div className='priceDetails-container'>
                            <div className='priceDetails-text'>
                                <p>${perNightPrice.toFixed(2)} x {nights} nights</p>
                            </div>
                            <div className='priceDetails-number'>
                                <p>${nightPrice.toFixed(2)}</p>
                            </div>
                        </div>
                        <div className='priceDetails-container'>
                            <div className='priceDetails-text'>
                                <p>Service fee</p>
                            </div>
                            <div className='priceDetails-number'>
                                <p>$50.00</p>
                            </div>
                        </div>
                        <div className='priceDetails-container'>
                            <div className='priceDetails-text'>
                                <p>Extra taxes and fees</p>
                            </div>
                            <div className='priceDetails-number'>
                                <p>$25.00</p>
                            </div>
                        </div>
                        <div className='priceDetails-container'>
                            <div className='priceDetails-text total'>
                                <p>Total (CAD)</p>
                            </div>
                            <div className='priceDetails-number total'>
                                <p>${totalPrice.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isAdding ? <PopUp close={closePopUp}/> : null}
        </>
    );
};

export default Checkout;
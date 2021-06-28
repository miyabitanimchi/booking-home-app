import React from "react";
import { useAccomsContext } from "../../context/AccomsProvider";
import './Detail.css';

import { AiFillStar } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { GrSubtractCircle } from 'react-icons/gr';
import { GrAddCircle } from 'react-icons/gr';

let title = 'Stanley Park Cozy 1 Bedroom (5 Min Walk!)';
let review = 4.96;
let location = '- Vancouver, BC, Canada';
let hostBy = 'Entire apartment hosted by Daniel';
let guest = 2
let bedroom = 1;
let bathroom = 1;
let price = 138;

const Detail = (props) => {
    console.log('IN DETAIL', props);

    const {
        searchResult, //this will bring me the array from context api
        locationTitle //also from context api You can delete, if you want
      } = useAccomsContext();

    return (
        <>
        {/* use a conditional to check reviews otherwise will give error check SearchResultItem line 24 */}
        {/* {searchResult && ()} */}
            <div className='detail-container'>
                <h1>{title}</h1>
                <div className='detail-score'>
                    <AiFillStar className='star-icon' />
                    <span className='score'>{review}</span>
                    <span className='location'>{location}</span>
                    <a className='save'>
                        <AiOutlineHeart className='save-icon' />Save
                    </a>
                </div>
                {/* <div className='detail-imgs'>
                    <img className='img-1' src='' />
                    <div>
                        <img className='img-2' src='' />
                        <img className='img-3' src='' />
                    </div>
                    <div>
                        <img className='img-4' src='' />
                        <img className='img-5' src='' />
                    </div>
                </div> */}
                <div className='detail-grid'>
                    <div>
                        <div className='detail-hostBy'>
                            <CgProfile className='detail-profileIcon' />
                            <div className='host-keywords'>
                                <h2 className='host-title'>{hostBy}</h2>
                                <span>{guest} guest</span>
                                <span> - {bedroom} bedroom</span>
                                <span> - {bathroom} bathroom</span>
                            </div>
                        </div>
                        <div className='detail-perks'>
                            <div className='perk-1'>
                                <AiOutlineHome className='home-icon' />
                                <div className='perk-text'>
                                    <p className='perk-title'>Entire home</p>
                                    <span className='perk-description'>You'll have the apartment to yourself</span>
                                </div>
                            </div>
                            <div className='perk-1'>
                                <AiOutlineHome className='home-icon' />
                                <div className='perk-text'>
                                    <p className='perk-title'>Entire home</p>
                                    <span className='perk-description'>You'll have the apartment to yourself</span>
                                </div>
                            </div>
                            <div className='perk-1'>
                                <AiOutlineHome className='home-icon' />
                                <div className='perk-text'>
                                    <p className='perk-title'>Entire home</p>
                                    <span className='perk-description'>You'll have the apartment to yourself</span>
                                </div>
                            </div>
                            <div className='perk-1'>
                                <AiOutlineHome className='home-icon' />
                                <div className='perk-text'>
                                    <p className='perk-title'>Entire home</p>
                                    <span className='perk-description'>You'll have the apartment to yourself</span>
                                </div>
                            </div>
                        </div>
                        <div className='host-description'>
                            <p>
                                Welcome to my home!

                                Enjoy Vancouver's most iconic spots within walking distance.

                                5 min walk to the Stanley Park
                                5 min walk to Coal Harbor
                                8 min walk to English Bay Beach
                                Walk to many of Vancouver’s highest rated restaurants
                                5 minute drive to the highway on route to Whistler

                                I understand guests wanting to party. I have been there ;) but please respect the noise.
                            </p>
                        </div>
                    </div>
                    <div className='detail-reserve'>
                        <form>
                            <div className='detail-price'>
                                <h3>${price}</h3>
                                <h3 className='price-night'>/ night</h3>
                            </div>
                            <div className='detail-checkin-checkout'>
                                <div className='detail-checkin'>
                                    <p className='detail-checkin-text'>Check-in</p>
                                    <input
                                        className='detail-dateInput'
                                        type='date'
                                    />
                                </div>
                                <div className='detail-checkout'>
                                    <p className='detail-checkin-text'>Check-out</p>
                                    <input
                                        className='detail-dateInput'
                                        type='date'
                                    />
                                </div>
                            </div>
                            <div className='detail-guest'>
                                <p className='detail-checkin-text'>Guest</p>
                                <div className='guest-wrap'>
                                    <div className='value-guest'>
                                        <p>Adults</p>
                                        <div className='guest-input-wrap'>
                                            <GrSubtractCircle
                                                className='mathSign'
                                            />
                                            <input
                                                className='guest-input'
                                                value={1}
                                                min={1}
                                                max={4}
                                            />
                                            <GrAddCircle
                                                className='mathSign'
                                            />
                                        </div>
                                    </div>
                                    <div className='value-guest'>
                                        <div>
                                            <p>Children</p>
                                        </div>
                                        <div className='guest-input-wrap children'>
                                            <GrSubtractCircle
                                                className='mathSign'
                                            />
                                            <input
                                                className='guest-input'
                                                value={0}
                                                min={0}
                                                max={5}
                                            />
                                            <GrAddCircle
                                                className='mathSign'
                                            />
                                        </div>
                                    </div>
                                    <div className='value-guest'>
                                        <p>Infants</p>
                                        <div className='guest-input-wrap infants'>
                                            <GrSubtractCircle
                                                className='mathSign'
                                            />
                                            <input
                                                className='guest-input'
                                                value={0}
                                                min={0}
                                                max={5}
                                            />
                                            <GrAddCircle
                                                className='mathSign'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='goToPayment-wrap'>
                                <input
                                    className='goToPayment-input'
                                    type='submit'
                                    value='Go to payment'
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail;

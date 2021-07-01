import React, { useEffect, useState } from "react";
import { useAccomsContext } from "../../context/AccomsProvider";
import Checkout from '../checkout/Checkout';
import { Link } from "react-router-dom";
import './Detail.css';

import { AiFillStar } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { GrSubtractCircle } from 'react-icons/gr';
import { GrAddCircle } from 'react-icons/gr';
import { GoLocation } from 'react-icons/go';
import { GrStatusGood } from 'react-icons/gr';
import { TiCancel } from 'react-icons/ti';
import { BiDollarCircle } from 'react-icons/bi';

const Detail = (props) => {
    const [hotelData, setHotelData] = useState([]);
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [aCount, setACount] = useState(1);
    const [cCount, setCCount] = useState(0);
    const [iCount, setICount] = useState(0);
    const [totalGuest, setTotalGuest] = useState('');

    const {
        searchResult, //this will bring me the array from context api
        locationTitle //also from context api You can delete, if you want
    } = useAccomsContext();

    // console.log('IN DETAIL', props);
    // console.log(searchResult);

    useEffect(() => {
        if (searchResult.length !== 0) {
            const currentHotel = searchResult.filter((hotel) =>
                hotel.id === Number(props.match.params.id))
            console.log('Your current hotel: ', currentHotel)
            setHotelData(currentHotel);
        } else {
            alert('There is no list to filter! Check Context API')
        }
    }, [])

    // console.log('Hotel data: ', hotelData);

    const checkInHandler = e => {
        e.preventDefault();
        console.log(checkIn);
        setCheckIn(e.target.value);
    }
    const checkOutHandler = e => {
        e.preventDefault();
        console.log(checkOut);
        setCheckOut(e.target.value);
    }

    return (
        <>
            {/* use a conditional to check reviews otherwise will give error check SearchResultItem line 24 */}
            {hotelData.map((data) => {
                return (
                    <>
                        <div className='detail-container'>
                            {/* <h1>{data.name}</h1> */}
                            {/* <div className='detail-score'>
                                <AiFillStar className='star-icon' />
                                <span className='score'>{data.guestReviews.rating ? data.guestReviews.rating : '(No reviews yet)'}</span>
                                <span className='location'> - {data.address.locality}, {data.address.region} - {data.address.countryName}</span>
                                <a className='save'>
                                    <AiOutlineHeart className='save-icon' />Save
                                </a>
                            </div> */}
                            <div className='detail-grid'>
                                <div>
                                    <div className='detail-hostBy'>
                                        {/* <CgProfile className='detail-profileIcon' /> */}
                                        <img src={data.optimizedThumbUrls.srpDesktop} />
                                        <div className='host-keywords'>
                                            <h1 className='host-title'>{data.name}</h1>
                                            <AiFillStar className='star-icon' />
                                            <span className='score'>{data.guestReviews.rating ? data.guestReviews.rating : '(No reviews yet)'}</span>
                                            <span className='location'> {data.address.locality}, {data.address.region} - {data.address.countryName}</span>
                                            <span className='save'>
                                                <AiOutlineHeart className='save-icon' />Save
                                            </span>
                                        </div>
                                    </div>
                                    <div className='detail-perks'>
                                        <div className='perk-1'>
                                            <GoLocation className='home-icon' />
                                            <div className='perk-text'>
                                                <p className='perk-title'>{data.address.streetAddress}, {data.neighbourhood}</p>
                                                <span className='perk-description'>{data.landmarks[0].distance} from {data.landmarks[0].label}</span>
                                            </div>
                                        </div>
                                        <div className='perk-1'>
                                            {data.ratePlan.features.freeCancellation ? <GrStatusGood className='home-icon' /> : <TiCancel className='home-icon' />}
                                            <div className='perk-text'>
                                                {data.ratePlan.features.freeCancellation ? <p className='perk-title'>Free cancellation</p> : <p className='perk-title'>No free cancellation</p>}
                                                {data.ratePlan.features.noCCRequired ? <span className='perk-description'>No credit card needed</span> : <span className='perk-description'>Credit card needed</span>}
                                            </div>
                                        </div>
                                        <div className='perk-1'>
                                            <BiDollarCircle className='home-icon' />
                                            <div className='perk-text'>
                                                <p className='perk-title'>{data.ratePlan.price.current} {data.ratePlan.price.info}</p>
                                                <span className='perk-description'>{data.ratePlan.price.additionalInfo}</span>
                                            </div>
                                        </div>
                                        {/* <div className='perk-1'>
                                            <AiOutlineHome className='home-icon' />
                                            <div className='perk-text'>
                                                <p className='perk-title'>Entire home</p>
                                                <span className='perk-description'>You'll have the apartment to yourself</span>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className='host-description'>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Aliquam in ultrices elit. Donec purus ipsum, eleifend sit amet lacinia quis, mattis in nunc.
                                            Vivamus nec tortor vehicula, hendrerit leo finibus, feugiat massa. Sed placerat euismod feugiat.
                                            Aliquam aliquet magna magna, ornare suscipit nisi scelerisque vitae. Suspendisse ut sapien et felis gravida tincidunt.
                                            Proin dictum massa ex, in varius dolor vehicula non. Nulla euismod sapien non mi faucibus ullamcorper.
                                            In egestas velit vitae arcu consectetur, sit amet lacinia leo gravida.
                                            Vivamus mollis est velit, quis fringilla justo sagittis in. Donec mi tellus, ornare a risus eget, dignissim mollis libero. In a lacinia eros.
                                            Curabitur euismod massa vel arcu finibus rutrum. Praesent semper euismod libero, id aliquam metus vestibulum a.
                                        </p>
                                    </div>
                                </div>
                                <div className='detail-reserve'>
                                    <form>
                                        <div className='detail-price'>
                                            <h3>{data.ratePlan.price.old ? <span className='oldPrice'>{data.ratePlan.price.old}</span> : ''}${data.ratePlan.price.exactCurrent}</h3>
                                            <h3 className='price-night'>/ night</h3>
                                        </div>
                                        <div className='detail-checkin-checkout'>
                                            <div className='detail-checkin'>
                                                <p className='detail-checkin-text'>Check-in</p>
                                                <input
                                                    className='detail-dateInput'
                                                    type='date'
                                                    value={checkIn}
                                                    onChange={checkInHandler}
                                                />
                                            </div>
                                            <div className='detail-checkout'>
                                                <p className='detail-checkin-text'>Check-out</p>
                                                <input
                                                    className='detail-dateInput'
                                                    type='date'
                                                    value={checkOut}
                                                    onChange={checkOutHandler}
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
                                                            onClick={() => setACount(aCount - 1)}
                                                        />
                                                        <input
                                                            className='guest-input'
                                                            value={aCount}
                                                            min='1'
                                                            max='4'
                                                        />
                                                        <GrAddCircle
                                                            className='mathSign'
                                                            onClick={() => setACount(aCount + 1)}
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
                                                            onClick={() => setCCount(cCount - 1)}
                                                        />
                                                        <input
                                                            className='guest-input'
                                                            value={cCount}
                                                            min="0"
                                                            max="5"
                                                        />
                                                        <GrAddCircle
                                                            className='mathSign'
                                                            onClick={() => setCCount(cCount + 1)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className='value-guest'>
                                                    <p>Infants</p>
                                                    <div className='guest-input-wrap infants'>
                                                        <GrSubtractCircle
                                                            className='mathSign'
                                                            onClick={() => setICount(iCount - 1)}
                                                        />
                                                        <input
                                                            className='guest-input'
                                                            value={iCount}
                                                            min="0"
                                                            max="5"
                                                        />
                                                        <GrAddCircle
                                                            className='mathSign'
                                                            onClick={() => setICount(iCount + 1)}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to={{
                                            pathname:"/checkout",
                                            detailProps:{
                                                checkInDate: checkIn,
                                                checkOutDate: checkOut,
                                                adultsGuest: aCount,
                                                childrenGuest: cCount,
                                                infantsGuest: iCount,
                                                img: data.optimizedThumbUrls.srpDesktop,
                                                title: data.name,
                                                address: data.address.streetAddress,
                                                neighbourhood: data.neighbourhood,
                                                startRating: data.starRating,
                                                price: data.ratePlan.price.exactCurrent,
                                            }
                                        }}
                                            className='goToPayment-wrap'>
                                            <input
                                                className='goToPayment-input'
                                                type='submit'
                                                value='Go to payment'
                                            /></Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </>
                );
            })}
        </>
    );
}

export default Detail;

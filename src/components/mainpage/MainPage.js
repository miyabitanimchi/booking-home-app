import React from "react";
import { useAccomsContext } from "../../context/AccomsProvider";
import MainPageItem from "./MainPageItem";
import "./MainPage.css";

const MainPage = () => {
  const {
    searchResult,
    locationTitle
  } = useAccomsContext();

  console.log(searchResult);
  console.log(locationTitle);

  return (
    <>
      {searchResult && (
        <main >
          <section className="top-wrap">
            <img className="top-img" src="../../house.jpg" alt="house with nature" />
            <div className="top-title-btn-wrap">
              <p className="top-title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button className="top-btn">Get Inspired</button>
            </div>
          </section>
          <section >
            <h2>Suggestions for you:</h2>
            <div className="items-container">
              {searchResult.map((accom) => (
                <MainPageItem key={accom.id} {...accom} />
              ))}
            </div>
          </section>
        </main>
      )}

    </>
  );
};
export default MainPage;

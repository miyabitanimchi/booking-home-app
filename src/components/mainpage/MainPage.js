import React from "react";
import { useAccomsContext } from "../../context/AccomsProvider";
import MainPageItem from "./MainPageItem";
import Loading from "../loading/Loading"
import "./MainPage.css";

const MainPage = () => {
  const {
    searchResult,
    isLoading,
  } = useAccomsContext();

  console.log(searchResult);

  return (
    <>
      {(searchResult && !isLoading) ? (
        <main>
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
      ) : (
          <main>
            <Loading />
          </main>
        )}
    </>
  );
};
export default MainPage;

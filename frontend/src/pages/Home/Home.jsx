import React from "react";
import "./Home.css";
import Header from "../../components/ui/home-page/Header/Header";
import OfferSection from "../../components/ui/home-page/offerSection/OfferSection";
import MemberReviews from "../../components/ui/home-page/memberReviews/MemberReviews";
import NewsLetter from "../../components/ui/home-page/newsLetter/NewsLetter";
import PopularArticles from "../../components/ui/home-page/popularArticals/PopularArticals";
import PartnersSection from "../../components/ui/home-page/partnersSection/PartnersSection";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <Header />
      </div>
      <div className="offer">
        <OfferSection />
      </div>
      <div className="articals">
        <PopularArticles />
      </div>
      <div className="reviews">
        <MemberReviews />
      </div>
      <div className="Partners">
        <PartnersSection />
      </div>
      <div className="news-letter">
        <NewsLetter />
      </div>
    </div>
  );
};

export default Home;

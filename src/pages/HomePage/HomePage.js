import React from "react";
import "./Homepage.css";
import Header from "../../components/Header/Header";
import Card from "../../components/expertisecard/ExpertiseCard";
import cardData from "../../components/expertisecard/CardData";
import Approach from "../../components/approach/Approach";
import ApproachImage from "../../Assets/GettyImages-OurApproach.png";
import ContactUsImage from "../../Assets/GettyImages-contactUS.png";
import Footer from "../../components/footer/Footer";
import ArrowButton from "../../components/arrowButton/ArrowButton";

const HomePage = () => {
  return (
    <div>
      <div className="digital_section">
        <Header />

        <div className="services_body">
          <p className="step_text">Step it up</p>
          <h1 className="services_header">Digital transformation Services</h1>
          <p className="about_services">
            Harness technology. Enhance agility and data-driven decision-making.
            We engineer and build agile, future-ready enterprises.
          </p>
          <ArrowButton title="Learn more" />
        </div>
      </div>
      <div className="overview_section">
        <div className="overview_header">Overview</div>
        <div className="overview_content">
          <p className="left_content">
            Organizations that wish to be adaptive and future-ready must be
            digitally powered, a reason why they pursue digital business
            transformation yet struggle to advance the same.
          </p>
          <span className="border"></span>
          <p className="right_content">
            UST's digital transformation strategy blends human expertise with
            technical capabilities to kick business transformation for various
            companies into gear—and keep the momentum going. Our strategy
            focuses on end-to-end transformations and ways of working at scale.
            We will help you create a culture that embraces innovation, change,
            continual learning and improvement.
          </p>
        </div>
      </div>
      <div className="area_expertise_section">
        <div className="header">
          <div className="section_header">Areas of expertise</div>
          <p className="area_section_content">
            UST digital transformation solutions are focused on business
            outcomes and delivering value.
          </p>
        </div>
        <div className="cards">
          {cardData.map((card) => (
            <Card
              title={card.title}
              expertise={card.expertise}
              projects={card.projects}
              learnmore={card.learnmore}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      </div>

      <Approach
        style={{
          display: "flex",
          gap: "80px",
          alignItems: "center",
          justifyContent: "center",
          padding: "7.5rem 10rem",
          textAlign: "left",
        }}
        title="Our approach"
        image={ApproachImage}
        textColor="#1C242C"
        text="Your journey to digital business transformation is our journey. To help get you there, we move fast. Ask the tough questions. And build momentum from day one. Each transformation project begins with understanding your business model, assessing where you stand in your transformation journey, and providing a clear strategy for incorporating modern technologies."
      />

      <Approach
        title="ContactUsImage"
        image={ContactUsImage}
        text="Learn how UST can accelerate your digital transformation journey."
        textColor="white"
        style={{
          backgroundColor: "#003C52",
          padding: "7.5rem 10rem",
          display: "flex",
          gap: "80px",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "left",
        }}
        exportButton={
          <ArrowButton margin="59px" width="195px" title="Meet an expert" />
        }
      />
      <Footer />
    </div>
  );
};

export default HomePage;

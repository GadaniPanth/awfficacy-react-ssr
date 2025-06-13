import React, { useEffect, useState } from "react";
import "../styles/Landing.css";
import { Link } from "react-router";
import "../styles/Home.css";

// import { Navigation } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

let Swiper = null;
let SwiperSlide = null;

// if (typeof window !== "undefined") {
//   // These imports will only be done on the client
//   const swiper = require("swiper/react");
//   Swiper = swiper.Swiper;
//   SwiperSlide = swiper.SwiperSlide;
// }

const Home = () => {
  const [isClient, setIsClient] = useState(false);

  const imgList = Array.from(
    { length: 89 },
    (_, i) => `./images/clients/client_logo_${i + 1}.svg`
  );

  useEffect(() => {
    const loadSwiper = async () => {
      const swiper = await import("swiper/react");
      const SwiperCore = await import("swiper");

      // Import Swiper modules
      const { Navigation, Pagination, Autoplay } = await import(
        "swiper/modules"
      );

      // Register the modules
      SwiperCore.default.use([Navigation, Pagination, Autoplay]);

      Swiper = swiper.Swiper;
      SwiperSlide = swiper.SwiperSlide;

      setIsClient(true); // trigger render
    };

    loadSwiper();
  }, []);

  return (
    <div className="home_wrapper">
      <div className="section-1 main-container section-padding-4rem">
        <div className="relative">
          <div className="awfficacy_blue_box alc j-c-sb">
            <div className="awfficacy_blue_box_heading">
              <h1 className="font_56 white-color fw_700">
                A United Approach <br className="hidden-xs" />
                for Reinventing Your Business
              </h1>
              <div className="contact-btn">
                <Link to={"/contact"} className="button button-style-white">
                  <p>Get in Touch</p>
                </Link>
              </div>
            </div>
            <div className="awfficacy_blue_box_img">
              <img src="./landingPage.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="section-2 main-container section-padding-4rem pt0">
        <div className="grid-c-1-1 g42">
          <div className="rightside">
            <img src="images/home/Who_Are_we.png" alt="Who Are we?" />
          </div>
          <div className="left-side">
            <div className="left-upper-div">
              <div className="heading">
                <h1>Who Are we?</h1>
                <div className="arrow-svg">
                  <img src="./images/arrow_blue.svg" alt="" />
                </div>
              </div>
              <div className="body">
                <p>
                  Founded in 2021, Awfficacy began offering Make in India
                  incentive advisory services to various clientele, with a
                  particular focus on guiding them through the Production Linked
                  Incentive (PLI) schemes from end-to-end assistance in their
                  growth initiatives. With a methodical and targeted approach,
                  Awfficacy emerged as a leader in this field, serving
                  businesses across various industries throughout India.
                </p>
              </div>
            </div>
            <div className="left-lower-div">
              <div className="grid-c3">
                <div className="block">
                  <div className="head">
                    <h1>14+</h1>
                  </div>
                  <hr />
                  <div className="body">
                    <p>Sectors</p>
                  </div>
                </div>
                <div className="block">
                  <div className="head">
                    <h1>15000+</h1>
                  </div>
                  <hr />
                  <div className="body">
                    <p> (INR) crores investments committed by our clients</p>{" "}
                  </div>
                </div>
                <div className="block">
                  <div className="head">
                    <h1>130+</h1>
                  </div>
                  <hr />
                  <div className="body">
                    <p>Applications Filed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-3 main-container section-padding-4rem pt0">
        <div className="section-3-wrap blue-box relative">
          <div className="head">
            <h1>Make in India Incentive Advisory</h1>
            <div className="logo">
              <img src="./images/home/pli_logo.svg" alt="PLI SCHEMES Logo" />
            </div>
          </div>
          <div className="body">
            <p>
              We strive to provide end-to-end support from conceptualization to
              implementation of various benefits in the form of incentive,
              grants and subsidies provided by the Central as well State
              governments, with a specific focus on Production Linked Incentive
              schemes (PLI schemes).
            </p>
            <br className="hidden-xs" />
            <br className="hidden-xs" />
            <p>
              We help you identify and secure the maximum potential incentives
              available to your company under various relevant government
              schemes.
            </p>
            <br className="hidden-xs" />
            <br className="hidden-xs" />
            <p>
              Our team works collaboratively on behalf of clients to ensure our
              clients have full knowledge about incentives available in specific
              locations for specific activities.
            </p>
          </div>
          <div className="know-btn" style={{ width: "fit-content" }}>
            <Link to="/about">
              <div className="button button-style-blue">
                <p>Know More</p>
                <div className="arrow-svg">
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_115_36)">
                      <path
                        d="M0.317005 8.02907L17.2622 0.665957C17.3593 0.623773 17.4669 0.61178 17.5708 0.631536C17.6748 0.651293 17.7705 0.701886 17.8453 0.776734C17.9202 0.851581 17.9707 0.94722 17.9905 1.05121C18.0102 1.1552 17.9982 1.26272 17.9561 1.3598L10.5929 18.3051C10.55 18.404 10.4777 18.4873 10.3859 18.5439C10.2941 18.6004 10.1872 18.6275 10.0795 18.6214C9.97183 18.6153 9.86863 18.5763 9.78379 18.5098C9.69896 18.4432 9.63656 18.3523 9.60502 18.2491L8.02609 13.0866C7.84686 12.4991 7.52597 11.9647 7.09167 11.5304C6.65736 11.0961 6.12295 10.7752 5.53548 10.596L0.372938 9.01703C0.269812 8.98549 0.178833 8.9231 0.112265 8.83826C0.0456963 8.75342 0.00673676 8.65021 0.000642776 8.54254C-0.00545311 8.43487 0.0216064 8.32793 0.0781746 8.23611C0.134741 8.1443 0.218098 8.07204 0.317005 8.02907Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_115_36">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="matrix(-1 0 0 1 18 0.622223)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="section-4 main-container section-padding-4rem pt0">
        <div className="gold-box relative inner-flex inner-flex-medium">
          <div className="head text-center gold-text">
            <h1>Our Clientele</h1>
          </div>
          <div className="swiper_wrapper relative">
            {isClient && Swiper && SwiperSlide ? (
              <>
                <div className="swiper-button-prev custom-prev">
                  <span class="material-symbols-outlined">
                    keyboard_arrow_left
                  </span>
                </div>
                <Swiper
                  spaceBetween={30}
                  slidesPerView="auto"
                  loop
                  navigation={{
                    prevEl: ".custom-prev",
                    nextEl: ".custom-next",
                  }}
                >
                  {imgList.map((img, i) => {
                    return (
                      <SwiperSlide key={i} className="box blue-box">
                        <div className="logo">
                          <img src={img} alt="Clientele" />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <div className="swiper-button-next custom-next">
                  <span class="material-symbols-outlined">
                    keyboard_arrow_right
                  </span>
                </div>
              </>
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </div>
      <div className="section-5 main-container section-padding-4rem pt0">
        <div className="grid-c-1-1 g42">
          <div className="leftside hr-div">
            <div className="head">
              <h1 className="gold-text" style={{ zIndex: 1 }}>
                Explore our group <br className="hidden-xs" />
                Companies
              </h1>
              <div className="img">
                <img src="./images/home/earth.svg" alt="" />
              </div>
            </div>
            <hr />
            <div className="body">
              <p>
                We empower businesses of all sizes and industries with tailored
                consultancy solutions, fostering innovation, efficiency, end
                sustainable growth.
              </p>
            </div>
          </div>
          <div className="right-side">
            <div className="grid-r-1-1 g61">
              <Link to="https://www.awfficacyglobal.com/" target="_blank">
                <div className="right-upper-div hr-div j-c-c">
                  <div className="head">
                    <img
                      src="./images/home/global_logo.svg"
                      alt="Awfficacy Global"
                    />
                  </div>
                  <hr />
                  <div className="body flex-row j-c-sb alc link-font-size">
                    <p>Learn More</p>
                    <div className="arrow-svg">
                      <img src="./images/arrow_blue.svg" alt="arrow" />
                    </div>
                  </div>
                </div>
              </Link>
              <div className="right-bottom-div">
                <div className="grid-c-1-1 g36">
                  <Link to="https://www.awfficacy.capital/" target="_blank">
                    <div className="block hr-div j-c-c">
                      <div className="head">
                        <img
                          src="./images/home/capital_logo.svg"
                          alt="Awfficacy Capital"
                        />
                      </div>
                      <hr />
                      <div className="body flex-row j-c-sb alc link-font-size">
                        <p>Learn More</p>
                        <div className="arrow-svg">
                          <img src="./images/arrow_blue.svg" alt="arrow" />
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to="https://www.scaleax.com/v" target="_blank">
                    <div className="block hr-div j-c-c">
                      <div className="head">
                        <img
                          src="./images/home/scaleax_logo.svg"
                          alt="ScaleAx"
                        />
                      </div>
                      <hr />
                      <div className="body flex-row j-c-sb alc link-font-size">
                        <p>Learn More</p>
                        <div className="arrow-svg">
                          <img src="./images/arrow_blue.svg" alt="arrow" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-6 main-container section-padding-4rem pt0">
        <div className="hr-div text-center blue-box relative">
          <div className="head">
            <h1>Get in Touch</h1>
          </div>
          <div className="body">
            <p>
              Steered by a balanced set comprising thinkers, doers, and experts
              Awfficacy relies on these three leaders for its own growth,
              expansion, and development.
            </p>
          </div>
          <div className="contact-btn">
            <Link to="/about">
              <div className="button button-style-blue">
                <p>Contact Us</p>
                <div className="arrow-svg">
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_115_36)">
                      <path
                        d="M0.317005 8.02907L17.2622 0.665957C17.3593 0.623773 17.4669 0.61178 17.5708 0.631536C17.6748 0.651293 17.7705 0.701886 17.8453 0.776734C17.9202 0.851581 17.9707 0.94722 17.9905 1.05121C18.0102 1.1552 17.9982 1.26272 17.9561 1.3598L10.5929 18.3051C10.55 18.404 10.4777 18.4873 10.3859 18.5439C10.2941 18.6004 10.1872 18.6275 10.0795 18.6214C9.97183 18.6153 9.86863 18.5763 9.78379 18.5098C9.69896 18.4432 9.63656 18.3523 9.60502 18.2491L8.02609 13.0866C7.84686 12.4991 7.52597 11.9647 7.09167 11.5304C6.65736 11.0961 6.12295 10.7752 5.53548 10.596L0.372938 9.01703C0.269812 8.98549 0.178833 8.9231 0.112265 8.83826C0.0456963 8.75342 0.00673676 8.65021 0.000642776 8.54254C-0.00545311 8.43487 0.0216064 8.32793 0.0781746 8.23611C0.134741 8.1443 0.218098 8.07204 0.317005 8.02907Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_115_36">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="matrix(-1 0 0 1 18 0.622223)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

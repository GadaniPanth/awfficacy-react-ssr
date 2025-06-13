import React, { useEffect, useState } from "react";
import "../styles/Career.css";
import { Link } from "react-router";

let Swiper = null;
let SwiperSlide = null;

const Career = () => {
  const [isClient, setIsClient] = useState(false);

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
    <>
      <div className="whoWeAre-wrapper">
        <div className="section-1 main-container section-padding-4rem">
          <div className="content inner-flex inner-flex-medium">
            <div className="head">
              <h1 className="gold-text">Explore Career Opportunities</h1>
            </div>
            <div className="body">
              <p>
                At Awfficacy, we foster a dynamic work environment that thrives
                on collaboration, creativity, and continuous learning. As part
                of our vibrant community, you'll collaborate with talented
                individuals on innovative projects spanning various industries
                and global markets.
                <br className="hidden-xs" />
                <br className="hidden-xs" />
                We prioritize the well-being and development of our team
                members, offering competitive benefits, flexible work
                arrangements, and opportunities for advancement. From
                comprehensive training programs to mentorship initiatives, we
                invest in your success and support your aspirations.
              </p>
            </div>
          </div>
        </div>
        <div className="section-2 main-container section-padding-4rem pt0 text-center">
          <div className="inner-flex">
            <div className="head">
              <h1>Open Positions</h1>
            </div>
            <div className="positions">
              <div className="bag-img">
                <img src="./images/bag.svg" alt="" />
              </div>
              <div className="text">
                <p>No Current openings</p>
              </div>
            </div>
            <div className="bottom_div text_div">
              <p>
                If you can't find any relevant positions, write to{" "}
                <Link
                  to="mailto: hr@awfficacy.com"
                  target="_blank"
                  className="gold-text email"
                >
                  <p>hr@awfficacy.com</p>
                </Link>{" "}
                with your resume and position
                <br className="hidden-xs" /> you'd be interested in - and we'll
                reach out if our needs align with your profile!
              </p>
            </div>
          </div>
        </div>
        <div className="section-3 main-container section-padding-4rem pt0 text-center">
          <div className="inner-flex">
            <div className="head">
              <h1>Life at Awfficacy</h1>
            </div>
            <div className="text_div">
              <p>
                Our workplace thrives on a vibrant culture of collaboration,
                creativity, and continuous learning. From coffee mixers to
                team-building activities, there's never a dull moment at
                Awfficacy group.
              </p>
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
                    <SwiperSlide className="box">
                      <div>
                        <img
                          src="./images/who_we_are/who-we-are.png "
                          alt="Life at Awfficacy"
                        />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="box">
                      <div>
                        <img
                          src="./images/who_we_are/who-we-are.png "
                          alt="Life at Awfficacy"
                        />
                      </div>
                    </SwiperSlide>
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
      </div>
    </>
  );
};

export default Career;

import React, { useEffect, useState } from "react";
// import "../styles/Who-we-are.css";
import { Link } from "react-router";

const Who_we_are = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [popUpName, setPopUpName] = useState("");

  const popup_list = {
    gautam_pai: {
      img: "./images/who-we-are/popup/gautam_pai.png",
      name: "Gautam Pai",
      designation: "Founder & CEO",
      linkdin: "",
      email: "",
      X: "",
      head_text:
        "An adventurer. A dreamer. A believer of turning ideas into reality. A passionate entrepreneur.",
      body_text: [
        "A Chartered Accountant by profession, Gautam has over 8 years of experience in Inbound and Outbound Investment advisory, Business advisory, Government regulatory advisory and corporate tax advisory.",
        "His forte lies in finance, tax and regulatory (from a government scheme advisory perspective) and is really enthusiastic towards contributing and growing the start-up ecosystem.",
        "Gautam has a die-hard attitude and is passionate to disrupt any field that he lays his eye on.",
      ],
      thought:
        "Make in India initiatives are lion's step towards making the next decade as India's decade in the global economic world. With these steps, India will move forward in becoming a global manufacturing hub, generate foreign investment opportunities and thereby, create huge employment for the youth of the nation. Proud to be a part of this era and narrate india's growth story.",
      two_favorite_books: [
        {
          name: "Start with Why",
          author: "by Simon Sinek",
        },
        {
          name: "Atomic Habits",
          author: "by James Clear",
        },
      ],
    },
    pranav_shukla: {
      img: "./images/who-we-are/popup/gautam_pai.png",
      name: "Pranav Shukla",
      designation: "Founder & MD",
      linkdin: "",
      email: "",
      X: "",
      head_text:
        "An adventurer. A dreamer. A believer of turning ideas into reality. A passionate entrepreneur.",
      body_text: [
        "A Chartered Accountant by profession, Gautam has over 8 years of experience in Inbound and Outbound Investment advisory, Business advisory, Government regulatory advisory and corporate tax advisory.",
        "His forte lies in finance, tax and regulatory (from a government scheme advisory perspective) and is really enthusiastic towards contributing and growing the start-up ecosystem.",
        "Gautam has a die-hard attitude and is passionate to disrupt any field that he lays his eye on.",
      ],
      thought:
        "Make in India initiatives are lion's step towards making the next decade as India's decade in the global economic world. With these steps, India will move forward in becoming a global manufacturing hub, generate foreign investment opportunities and thereby, create huge employment for the youth of the nation. Proud to be a part of this era and narrate india's growth story.",
      two_favorite_books: [
        {
          name: "Start with Why",
          author: "by Simon Sinek",
        },
        {
          name: "Atomic Habits",
          author: "by James Clear",
        },
      ],
    },
    nikita_talati: {
      img: "./images/who-we-are/popup/gautam_pai.png",
      name: "Nikita Talati",
      designation: "Director",
      linkdin: "",
      email: "",
      X: "",
      head_text:
        "An adventurer. A dreamer. A believer of turning ideas into reality. A passionate entrepreneur.",
      body_text: [
        "A Chartered Accountant by profession, Gautam has over 8 years of experience in Inbound and Outbound Investment advisory, Business advisory, Government regulatory advisory and corporate tax advisory.",
        "His forte lies in finance, tax and regulatory (from a government scheme advisory perspective) and is really enthusiastic towards contributing and growing the start-up ecosystem.",
        "Gautam has a die-hard attitude and is passionate to disrupt any field that he lays his eye on.",
      ],
      thought:
        "Make in India initiatives are lion's step towards making the next decade as India's decade in the global economic world. With these steps, India will move forward in becoming a global manufacturing hub, generate foreign investment opportunities and thereby, create huge employment for the youth of the nation. Proud to be a part of this era and narrate india's growth story.",
      two_favorite_books: [
        {
          name: "Start with Why",
          author: "by Simon Sinek",
        },
        {
          name: "Atomic Habits",
          author: "by James Clear",
        },
      ],
    },
    aniket_talati: {
      img: "./images/who-we-are/popup/gautam_pai.png",
      name: "Aniket Talati",
      designation: "Strategic Advisor",
      linkdin: "",
      email: "",
      X: "",
      head_text:
        "An adventurer. A dreamer. A believer of turning ideas into reality. A passionate entrepreneur.",
      body_text: [
        "A Chartered Accountant by profession, Gautam has over 8 years of experience in Inbound and Outbound Investment advisory, Business advisory, Government regulatory advisory and corporate tax advisory.",
        "His forte lies in finance, tax and regulatory (from a government scheme advisory perspective) and is really enthusiastic towards contributing and growing the start-up ecosystem.",
        "Gautam has a die-hard attitude and is passionate to disrupt any field that he lays his eye on.",
      ],
      thought:
        "Make in India initiatives are lion's step towards making the next decade as India's decade in the global economic world. With these steps, India will move forward in becoming a global manufacturing hub, generate foreign investment opportunities and thereby, create huge employment for the youth of the nation. Proud to be a part of this era and narrate india's growth story.",
      two_favorite_books: [
        {
          name: "Start with Why",
          author: "by Simon Sinek",
        },
        {
          name: "Atomic Habits",
          author: "by James Clear",
        },
      ],
    },
    sunil_talati: {
      img: "./images/who-we-are/popup/gautam_pai.png",
      name: "Sunil Talati",
      designation: "Mentor",
      linkdin: "",
      email: "",
      X: "",
      head_text:
        "An adventurer. A dreamer. A believer of turning ideas into reality. A passionate entrepreneur.",
      body_text: [
        "A Chartered Accountant by profession, Gautam has over 8 years of experience in Inbound and Outbound Investment advisory, Business advisory, Government regulatory advisory and corporate tax advisory.",
        "His forte lies in finance, tax and regulatory (from a government scheme advisory perspective) and is really enthusiastic towards contributing and growing the start-up ecosystem.",
        "Gautam has a die-hard attitude and is passionate to disrupt any field that he lays his eye on.",
      ],
      thought:
        "Make in India initiatives are lion's step towards making the next decade as India's decade in the global economic world. With these steps, India will move forward in becoming a global manufacturing hub, generate foreign investment opportunities and thereby, create huge employment for the youth of the nation. Proud to be a part of this era and narrate india's growth story.",
      two_favorite_books: [
        {
          name: "Start with Why",
          author: "by Simon Sinek",
        },
        {
          name: "Atomic Habits",
          author: "by James Clear",
        },
      ],
    },
    umesh_talati: {
      img: "./images/who-we-are/popup/gautam_pai.png",
      name: "Umesh Talati",
      designation: "Mentor",
      linkdin: "",
      email: "",
      X: "",
      head_text:
        "An adventurer. A dreamer. A believer of turning ideas into reality. A passionate entrepreneur.",
      body_text: [
        "A Chartered Accountant by profession, Gautam has over 8 years of experience in Inbound and Outbound Investment advisory, Business advisory, Government regulatory advisory and corporate tax advisory.",
        "His forte lies in finance, tax and regulatory (from a government scheme advisory perspective) and is really enthusiastic towards contributing and growing the start-up ecosystem.",
        "Gautam has a die-hard attitude and is passionate to disrupt any field that he lays his eye on.",
      ],
      thought:
        "Make in India initiatives are lion's step towards making the next decade as India's decade in the global economic world. With these steps, India will move forward in becoming a global manufacturing hub, generate foreign investment opportunities and thereby, create huge employment for the youth of the nation. Proud to be a part of this era and narrate india's growth story.",
      two_favorite_books: [
        {
          name: "Start with Why",
          author: "by Simon Sinek",
        },
        {
          name: "Atomic Habits",
          author: "by James Clear",
        },
      ],
    },
  };

  useEffect(() => {
    document.body.style.overflow = isPopUpOpen ? "hidden" : "auto";
    if (!isPopUpOpen) {
      setPopUpName("");
    }
  }, [isPopUpOpen]);

  return (
    <>
      <div className="whoWeAre-wrapper">
        <div className="section-1 main-container section-padding-4rem">
          <div className="relative">
            <div className="awfficacy_blue_box alc j-c-sb">
              <div className="awfficacy_blue_box_heading">
                <h1
                  className="font_56 white-color fw_700"
                  data-aos="fade-in"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  Turning Vision into Value, <br className="hidden-xs" />
                  Challenges into Opportunities.
                </h1>
              </div>
              {/* <div className="awfficacy_blue_box_img">
                <img src="./images/who-we-are/who-we-are.svg" alt="" />
              </div> */}
              <div className="awfficacy_blue_box_img flex_basis_40">
                {/* <img src="./landingPage.svg" alt="" /> */}
                <div className="blue_box_1">
                  <div className="inner-flex g0 blue_box_img_1">
                    <img src="images/circle.png" alt="Yellow" />
                    <img src="images/blue_left.png" alt="blue_right" />
                  </div>
                  <div className="inner-flex g0 blue_box_img_2">
                    <img src="images/Yellow_box.png" alt="Circle" />
                    <img src="images/circle.png" alt="blue" />
                  </div>
                  <div className="inner-flex g0 blue_box_img_3">
                    <img src="images/blue_down.png" alt="blue_left" />
                    <img src="images/Yellow_box.png" alt="blue" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-2 main-container section-padding-4rem pt0">
          <div className="blue-box inner-flex inner-flex-medium">
            <div className="head">
              <h1
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                Who we are
              </h1>
            </div>
            <div className="body">
              <p
                data-aos="fade-down"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                Awfficacy was born out of the sheer passion and purpose to
                become an integral part of the mission to support India's dream
                of becoming a global manufacturing hub. With a dynamic pair of
                our founders, we root ourselves in their intention to
                meaningfully contribute to the Indian economy through promotions
                of fresh investments in different sectors by way of providing
                niche advisory services in the realms of PLI schemes as well as
                other central and state incentive schemes.
              </p>
            </div>
          </div>
        </div>
        <div className="section-3 main-container section-padding-4rem pt0">
          <div className="gold-box">
            <div className="leadership">
              <div className="head">
                <h2
                  className="gold-text"
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  Leadership
                </h2>
                <h2
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  Building a Strong Foundation
                </h2>
              </div>
              <div className="card-wrapper flex-row j-c-sb">
                <div
                  className="card card-hover"
                  onClick={() => {
                    setIsPopUpOpen(true), setPopUpName("gautam_pai");
                  }}
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <div className="card-image">
                    <img
                      src="./images/who-we-are/gautam_pai.png"
                      alt="Gautam Pai"
                    />
                  </div>
                  <div className="card-body">
                    <div className="hr-div">
                      <div className="card-head flex-row j-c-sb alc">
                        <div className="info">
                          <h2 className="name name_text">Gautam Pai</h2>
                          <h3 className="designation p_text">Founder & CEO</h3>
                        </div>
                        <div className="connection flex-row inner-flex-small">
                          <Link to={""} onClick={(e) => e.stopPropagation()}>
                            <img
                              src="./images/who-we-are/linkdin_blue.svg"
                              alt="Linkdin"
                            />
                          </Link>
                          <Link to={""} onClick={(e) => e.stopPropagation()}>
                            <img
                              src="./images/who-we-are/email_blue.svg"
                              alt="Email"
                            />
                          </Link>
                        </div>
                      </div>
                      <hr />
                      <Link to={""}>
                        <div className="know-more p_text flex-row j-c-sb alc link-font-size underline hover blue left">
                          <p>Know More</p>
                          <div className="arrow-svg">
                            <img src="./images/arrow_blue.svg" alt="arrow" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="card card-hover"
                  onClick={() => {
                    setIsPopUpOpen(true), setPopUpName("pranav_shukla");
                  }}
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
                  <div className="card-image">
                    <img
                      src="./images/who-we-are/pranav_shukla.png"
                      alt="Pranav Shukla"
                    />
                  </div>
                  <div className="card-body">
                    <div className="hr-div">
                      <div className="card-head flex-row j-c-sb alc">
                        <div className="info">
                          <h2 className="name name_text">Pranav Shukla</h2>
                          <h3 className="designation p_text">Founder & MD</h3>
                        </div>
                        <div className="connection flex-row inner-flex-small">
                          <Link to={""} onClick={(e) => e.stopPropagation()}>
                            <img
                              src="./images/who-we-are/linkdin_blue.svg"
                              alt="Linkdin"
                            />
                          </Link>
                          <Link to={""} onClick={(e) => e.stopPropagation()}>
                            <img
                              src="./images/who-we-are/email_blue.svg"
                              alt="Email"
                            />
                          </Link>
                        </div>
                      </div>
                      <hr />
                      <Link to={""}>
                        <div className="know-more p_text flex-row j-c-sb alc link-font-size underline hover blue left">
                          <p>Know More</p>
                          <div className="arrow-svg">
                            <img src="./images/arrow_blue.svg" alt="arrow" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="card card-hover"
                  onClick={() => {
                    setIsPopUpOpen(true), setPopUpName("nikita_talati");
                  }}
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  <div className="card-image">
                    <img
                      src="./images/who-we-are/nikita_talati.png"
                      alt="Nikita Talati"
                    />
                  </div>
                  <div className="card-body">
                    <div className="hr-div">
                      <div className="card-head flex-row j-c-sb alc">
                        <div className="info">
                          <h2 className="name name_text">Nikita Talati</h2>
                          <h3 className="designation p_text">Director</h3>
                        </div>
                        <div className="connection flex-row inner-flex-small">
                          <Link to={""} onClick={(e) => e.stopPropagation()}>
                            <img
                              src="./images/who-we-are/linkdin_blue.svg"
                              alt="Linkdin"
                            />
                          </Link>
                          <Link to={""} onClick={(e) => e.stopPropagation()}>
                            <img
                              src="./images/who-we-are/email_blue.svg"
                              alt="Email"
                            />
                          </Link>
                        </div>
                      </div>
                      <hr />
                      <Link to={""}>
                        <div className="know-more p_text flex-row j-c-sb alc link-font-size underline hover blue left">
                          <p>Know More</p>
                          <div className="arrow-svg">
                            <img src="./images/arrow_blue.svg" alt="arrow" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="advisors">
              <div className="head">
                <h2
                  className="gold-text"
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  Our Advisors
                </h2>
                <h2
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  TRUSTED EXPERTS FOR GUIDANCE
                </h2>
              </div>
              <div className="card-wrapper flex-row j-c-sb">
                <div
                  className="card card-hover"
                  onClick={() => {
                    setIsPopUpOpen(true), setPopUpName("aniket_talati");
                  }}
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <div className="card-image">
                    <img
                      src="./images/who-we-are/aniket_talati.png"
                      alt="Aniket Talati"
                    />
                  </div>
                  <div className="card-body">
                    <div className="hr-div">
                      <div className="card-head flex-row j-c-sb alc">
                        <div className="info">
                          <h2 className="name name_text">Aniket Talati</h2>
                          <h3 className="designation p_text">
                            Strategic Advisor
                          </h3>
                        </div>
                        <div className="connection flex-row inner-flex-small">
                          <Link to={""} onClick={(e) => e.stopPropagation()}>
                            <img
                              src="./images/who-we-are/linkdin_blue.svg"
                              alt="Linkdin"
                            />
                          </Link>
                          <Link to={""} onClick={(e) => e.stopPropagation()}>
                            <img
                              src="./images/who-we-are/email_blue.svg"
                              alt="Email"
                            />
                          </Link>
                        </div>
                      </div>
                      <hr />
                      <Link to={""}>
                        <div className="know-more p_text flex-row j-c-sb alc link-font-size underline hover blue left">
                          <p>Know More</p>
                          <div className="arrow-svg">
                            <img src="./images/arrow_blue.svg" alt="arrow" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="card card-hover"
                  onClick={() => {
                    setIsPopUpOpen(true), setPopUpName("sunil_talati");
                  }}
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
                  <div className="card-image">
                    <img
                      src="./images/who-we-are/sunil_talati.png"
                      alt="Sunil Talati"
                    />
                  </div>
                  <div className="card-body">
                    <div className="hr-div">
                      <div className="card-head flex-row j-c-sb alc">
                        <div className="info">
                          <h2 className="name name_text">Sunil Talati</h2>
                          <h3 className="designation p_text">Mentor</h3>
                        </div>
                        <div className="connection flex-row inner-flex-small">
                          <Link to={""} onClick={(e) => e.stopPropagation()}>
                            <img
                              src="./images/who-we-are/linkdin_blue.svg"
                              alt="Linkdin"
                            />
                          </Link>
                          <Link to={""} onClick={(e) => e.stopPropagation()}>
                            <img
                              src="./images/who-we-are/email_blue.svg"
                              alt="Email"
                            />
                          </Link>
                        </div>
                      </div>
                      <hr />
                      <Link to={""}>
                        <div className="know-more p_text flex-row j-c-sb alc link-font-size underline hover blue left">
                          <p>Know More</p>
                          <div className="arrow-svg">
                            <img src="./images/arrow_blue.svg" alt="arrow" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="card card-hover"
                  onClick={() => {
                    setIsPopUpOpen(true), setPopUpName("umesh_talati");
                  }}
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  <div className="card-image">
                    <img
                      src="./images/who-we-are/umesh_talati.png"
                      alt="Umesh Talati"
                    />
                  </div>
                  <div className="card-body">
                    <div className="hr-div">
                      <div className="card-head flex-row j-c-sb alc">
                        <div className="info">
                          <h2 className="name name_text">Umesh Talati</h2>
                          <h3 className="designation p_text">Mentor</h3>
                        </div>
                        <div className="connection flex-row inner-flex-small">
                          <Link to={""} onClick={(e) => e.stopPropagation()}>
                            <img
                              src="./images/who-we-are/linkdin_blue.svg"
                              alt="Linkdin"
                            />
                          </Link>
                          <Link to={""} onClick={(e) => e.stopPropagation()}>
                            <img
                              src="./images/who-we-are/email_blue.svg"
                              alt="Email"
                            />
                          </Link>
                        </div>
                      </div>
                      <hr />
                      <Link to={""}>
                        <div className="know-more p_text flex-row j-c-sb alc link-font-size underline hover blue left">
                          <p>Know More</p>
                          <div className="arrow-svg">
                            <img src="./images/arrow_blue.svg" alt="arrow" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isPopUpOpen && (
          <>
            <div
              className="popup-overlay"
              onClick={() => setIsPopUpOpen(false)}
            ></div>
            <div className="popup-wrapper">
              <div className="close_btn" onClick={() => setIsPopUpOpen(false)}>
                {/* <span className="material-symbols-outlined">close</span> */}
                <img src="./images/cross.svg" alt="close" />
              </div>
              <div className="inner-flex inner-flex-small">
                <div className="popup-header">
                  {/* <div className="flex-row inner-flex-small j-c-sb alc"> */}
                  <div className="grid grid-inv j-c-sb alc">
                    <div className="image">
                      {/* {console.log(popup_list[popUpName])} */}
                      <img
                        src={popup_list[popUpName].img}
                        alt={popup_list[popUpName].name}
                      />
                    </div>
                    <div className="text inner-flex">
                      <div className="head">
                        <h2 className="name name_text">
                          {popup_list[popUpName].name}
                        </h2>
                        <h2 className="designation p_text">
                          {popup_list[popUpName].designation}
                        </h2>
                      </div>
                      <div className="connections flex-row inner-flex-small alc">
                        <h2>Reach out </h2>
                        <div className="logos flex-row g18 alc">
                          <Link to={popup_list[popUpName].linkdin}>
                            <img
                              src="./images/who-we-are/linkdin_blue.svg"
                              alt="linkdin"
                            />
                          </Link>
                          <Link to={popup_list[popUpName].X}>
                            <img src="./images/who-we-are/X_blue.svg" alt="X" />
                          </Link>
                          <Link to={popup_list[popUpName].email}>
                            <img
                              src="./images/who-we-are/email_blue.svg"
                              alt="email"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="body">
                        <h2>{popup_list[popUpName].head_text}</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="list">
                  <ul className="inner-flex g36">
                    {popup_list[popUpName] &&
                    popup_list[popUpName].body_text.length > 0 ? (
                      popup_list[popUpName].body_text.map((txt, i) => {
                        return (
                          <li
                            key={i}
                            className="list_text flex-row inner-flex-small"
                          >
                            <div className="arrow_svg">
                              <img
                                src="./images/arrow_blue_right.svg"
                                alt="⚫"
                              />
                            </div>
                            <p>{txt}</p>
                          </li>
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </ul>
                </div>
                {/* <div className="flex-row inner-flex-small j-c-sb alc"> */}
                <div className="grid j-c-sb">
                  <div className="tought pBox inner-flex g42 gold-box">
                    <div className="head">
                      <h2 className="blue-text">Food for Thought</h2>
                    </div>
                    <div className="body">
                      <p className="p_text">{popup_list[popUpName].thought}</p>
                    </div>
                  </div>

                  <div className="fav-book pBox inner-flex g42 blue-box">
                    <div className="head">
                      <h2 className="blue-text">Two Favorite Books</h2>
                    </div>
                    <div className="list">
                      <ul className="inner-flex g36">
                        {popup_list[popUpName] &&
                        popup_list[popUpName].body_text.length > 0 ? (
                          popup_list[popUpName].two_favorite_books.map(
                            (book, i) => {
                              return (
                                <li
                                  key={i}
                                  className="list_text flex-row inner-flex-small"
                                >
                                  <div className="book_svg">
                                    <img src="./images/book.svg" alt="⚫" />
                                  </div>
                                  <div className="txt">
                                    <h2 className="book_name">{book.name}</h2>
                                    <h2 className="p_text">{book.author}</h2>
                                  </div>
                                </li>
                              );
                            }
                          )
                        ) : (
                          <></>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Who_we_are;

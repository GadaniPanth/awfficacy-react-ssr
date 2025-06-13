import React, { useState } from "react";
import "../styles/What-we-do.css";

const What_we_do = () => {
    const statePolicies = [
        {
            name: "Maharashtra",
            image: "images/what_we_do/Maharashtra.png",
            policies: [
                "Package Incentive Scheme 2019-2023",
                "Maharashtra State Export Promotion Policy-2023",
                "Maharashtra New Industrial Policy 2019-2024",
                "Maharashtra Aerospace & Defense Policy 2018-2023",
                "Any Other Scheme",
            ],
        },
        {
            name: "Uttar Pradesh",
            image: "images/what_we_do/utterpradesh.png",
            policies: [
                "Uttar Pradesh Industrial Investment & Promotion Policy 2022",
                "Uttar Pradesh Food Processing Industry Policy 2023",
                "Any Other Scheme",
            ],
        },
        {
            name: "Jammu & Kashmir",
            image: "images/what_we_do/kashmir.png",
            policies: [
                "Jammu and Kashmir Industrial Policy 2021-30",
                "Jammu and Kashmir IT / ITES Policy 2020-30",
                "Jammu and Kashmir Industrial Land Allotment Policy 2021",
                "Any Other Scheme",
            ],
        },
        {
            name: "Tamil Nadu",
            image: "images/what_we_do/tamilnadu.png",
            policies: [
                "Tamil Nadu Industrial Policy 2022",
                "Tamil Nadu Aerospace and Defence Industrial Policy 2022",
                "Tamil Nadu Electric Vehicle Policy 2023",
                "Any Other Scheme",
            ],
        },
        {
            name: "Karnataka",
            image: "images/what_we_do/Karnataka.png",
            policies: [
                "Karnataka Industrial Policy 2020-25",
                "Karnataka State Electric Vehicle & Energy Storage Policy (Upcoming 2023)",
                "Any Other Scheme",
            ],
        },
    ];
    const slides = [
        "Analyze the client's business to identify various available government incentive schemes.",
        "Evaluate the client’s eligibility for specific government programs.",
        "Prepare and compile the required documentation for application.",
        "Assist in submitting government applications and tracking progress.",
        "Ensure compliance with incentive program requirements.",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goNext = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };


    return (
        <>
            <div className="awfficacy_wrapper">
                <div className="section-1 main-container section-padding-4rem">
                    <div className="awfficacy_blue_box alc j-c-sb">
                        <div className="awfficacy_blue_box_heading">
                            <h1 className="font_56 yellow-color fw_700">What We Do</h1>
                        </div>
                        <div className="awfficacy_blue_box_img">
                            <img src="images/what_we_do/Single 01.svg" alt="single" />
                        </div>
                    </div>
                </div>
                <div className="section-2 main-container section-padding-4rem pt0">
                    <div className="grid-two">
                        <div className="leftside">
                            <p className="fw_400 font_28">
                                We assist corporates to unleash the best of potential from the
                                available government schemes including Production Linked
                                Incentive (PLI) schemes, other central government schemes, and
                                state incentive schemes; providing end-to-end assistance
                                spanning across application filing to receival of incentives.
                            </p>
                        </div>
                        <div className="rightside">
                            <img src="images/what_we_do/Mask group.png" alt="group image" />
                        </div>
                    </div>
                </div>
                <div className="section-3 main-container section-padding-4rem pt0">
                    <div className="awfficacy_blue_box alc j-c-sb inner-flex gap_spacing">
                        <div className="heading_img">
                            <div className="awfficacy_blue_box_heading">
                                <h1 className="font_40 yellow-color fw_700">
                                    Central Government incentive schemes
                                </h1>
                            </div>
                            <div className="awfficacy_blue_box_img">
                                <img src="images/what_we_do/Group (1).svg" alt="single" />
                            </div>
                        </div>
                        <div className="awfficacy_blue_paragraph inner-flex inner-flex-common">
                            <p className="white-color font_24 fw_400">
                                Since March 2020, the Union Cabinet, chaired by Prime Minister
                                Shri Narendra Modi announced Production Linked Incentive schemes
                                ('PLI schemes') with an expected outlay of INR 1.97 Lakh crores
                                across 14 key sectors during the span of next 5 years.
                            </p>
                            <p className="white-color font_24 fw_400">
                                The PLI schemes were launched with the intention to scale up
                                domestic manufacturing facilities, accompanied by higher import
                                substitution and employment generation.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="section-4 main-container section-padding-4rem pt0 ">
                    <div className="sec-4-paragraph inner-flex gap_spacing">
                        <h1 className="font_40 black-color fw_700">Notified PLI Schemes</h1>
                        <p className="black-color font_24 fw_400">
                            The PLI schemes were launched with the intention to scale up
                            domestic manufacturing facilities, accompanied by higher import
                            substitution and employment generation.
                        </p>
                    </div>
                </div>
                <div className="section-5 main-container section-padding-4rem pt0">
                    Pending ........................
                </div>
                <div className="section-6 main-container section-padding-4rem pt0">
                    <div className="awfficacy_blue_box alc j-c-sb">
                        <div className="awfficacy_blue_box_heading">
                            <h1 className="font_40 yellow-color fw_700">
                                State government incentive schemes Gujarat
                            </h1>
                        </div>
                        <div className="awfficacy_blue_box_img">
                            <img
                                src="images/what_we_do/national-assembly 1.svg"
                                alt="single"
                            />
                        </div>
                    </div>
                </div>
                <div className="section-7 main-container section-padding-4rem pt0">
                    <div className="inner_padding">
                        <div className="section-gujarat">
                            <div className="inner-flex gap_spacing section-padding-bottom">
                                <h1 className="font_36 yellow-color fw_700">Gujarat</h1>
                                <div className="flex-row alc j-c-sb">
                                    <div className="section-7-paragraph inner-flex inner-flex-medium">
                                        <p className="font_24 fw_400 black-color">
                                            Gujarat, a key economic powerhouse of India, is
                                            strategically poised to become a premier hub for GCC
                                            investments. Contributing 8.3% to the national economy,
                                            18% to India's industrial output, and 31% to India's total
                                            exports (FY 2023-24), the state offers a robust
                                            businessenvironment complemented by world-class
                                            infrastructure, industry-friendly policies, and a skilled
                                            workforce. With a per capita income 1.7 times higher than
                                            the national average, Gujarat has consistently led in
                                            industrial excellence, logistics efficiency, renewable
                                            energy adoption, and IT/ITeS expansion
                                        </p>
                                        <p className="font_24 fw_400 black-color">
                                            With a 12% CAGR (2011-2021), surpassing the national
                                            average of 10.4%, Gujarat is on track to achieve its
                                            Viksit Gujarat 2047 vision, aiming to transform into a
                                            $3.5 trillion economy with a per capita income exceeding
                                            $38,000. By 2047, 70% of the state's projected 8-9 crore
                                            population is expected to reside in urban areas, driving
                                            smart, sustainable, and technology-driven growth.
                                        </p>
                                    </div>
                                    <div className="section-7-img">
                                        <img src="images/what_we_do/Gujarat.png" alt="Gujarat" />
                                    </div>
                                </div>
                            </div>
                            <div className="various-schemes-gujarat">
                                <div className="inner-flex inner-flex-medium">
                                    <h1 className="font_32 black-color fw_700">
                                        The various schemes offered by the Gujarat Government are as
                                        follows:
                                    </h1>
                                    <div className="grid-three">
                                        <div className="grid-gujarat inner-flex inner-flex-medium">
                                            <div className="flex-row ellipse">
                                                <img
                                                    src="images/what_we_do/Ellipse 7.svg"
                                                    alt="Ellipse"
                                                />
                                                <h1 className="font_28 black-color">
                                                    01 Atmanirbhar Gujarat Scheme
                                                </h1>
                                            </div>
                                            <div className="btn-2">
                                                <a href="/what-we-do" data-discover="true">
                                                    <div className="know_more_btn">
                                                        Know More
                                                        <div className="arrow-svg">
                                                            <img
                                                                src="images/what_we_do/blueArrow.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="grid-gujarat inner-flex inner-flex-medium">
                                            <div className="flex-row ellipse">
                                                <img
                                                    src="images/what_we_do/Ellipse 7.svg"
                                                    alt="Ellipse"
                                                />
                                                <h1 className="font_28 black-color">
                                                    02 Gujarat Electronics Policy
                                                </h1>
                                            </div>
                                            <div className="btn-2">
                                                <a href="/what-we-do" data-discover="true">
                                                    <div className="know_more_btn">
                                                        Know More
                                                        <div className="arrow-svg">
                                                            <img
                                                                src="images/what_we_do/blueArrow.svg"
                                                                alt=""
                                                            />
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="grid-gujarat inner-flex inner-flex-medium">
                                            <div className="flex-row ellipse">
                                                <img
                                                    src="images/what_we_do/Ellipse 7.svg"
                                                    alt="Ellipse"
                                                />
                                                <h1 className="font_28 black-color">
                                                    03 Gujarat Biotechnology Policy
                                                </h1>
                                            </div>
                                            <div className="btn-2">
                                                <a href="/what-we-do" data-discover="true">
                                                    <div className="know_more_btn">
                                                        Know More
                                                        <div className="arrow-svg">
                                                            <img
                                                                src="images/what_we_do/blueArrow.svg"
                                                                alt="Arrow"
                                                            />
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-bottom"></div>
                            <div className="inner-flex section-padding-4rem">
                                <h1 className="font_36 yellow-color fw_700 pb-4rem">
                                    Other State Policies
                                </h1>
                                <div className="inner-flex inner-flex-medium">
                                    {statePolicies.map((state, index) => (
                                        <div
                                            className="inner-flex section-padding-bottom other_poiticies"
                                            key={index}
                                        >
                                            <h1 className="font_36 black-color fw_700">
                                                {state.name}
                                            </h1>
                                            <div className="flex-row alc j-c-sb">
                                                <div className="section-7-paragraph inner-flex">
                                                    {state.policies.map((policy, i) => (
                                                        <div className="flex-row alc" key={i}>
                                                            <div className="arrowBlue">
                                                                <img
                                                                    src="images/what_we_do/sendingArrow.svg"
                                                                    alt="Arrow"
                                                                />
                                                            </div>
                                                            <p className="font_24 fw_400 black-color">
                                                                {policy}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="section-7-img">
                                                    <img src={state.image} alt={state.name} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="section-padding-4rem pt0">
                                <div className="awfficacy_blue_box flex-row alc j-c-sb">
                                    <div className="heading_para inner-flex inner-flex-medium">
                                        <div className="awfficacy_blue_box_heading">
                                            <h1 className="font_40 yellow-color fw_700">
                                                Our approach
                                            </h1>
                                        </div>
                                        <div className="awfficacy_blue_paragraph">
                                            <p className="white-color font_24 fw_400">
                                                We follow a structured approach in execution , and our
                                                overall process is broadly divided into three phases as
                                                mentioned hereunder:
                                            </p>
                                        </div>
                                    </div>
                                    <div className="awfficacy_blue_box_img">
                                        <img
                                            src="images/what_we_do/business-management 1.svg"
                                            alt="business-management"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="section-padding-4rem pt0 inner_padding border_blue">
                                <div className="slide-card flex-row als j-c-sb">
                                    <div className="slide-header inner-flex inner-flex-common">
                                        <h2 className="font_32 black-color fw_700">
                                            Phase-I: Unlocking Optimal Government Incentives
                                        </h2>

                                        <div className="slide-counter flex-row inner-flex-small">
                                            <img
                                                src="images/what_we_do/yellow_blue.svg"
                                                alt="yellow & blue"
                                            />

                                            <div className="flex-row ale">
                                                <p className="font_32 fw_400 black-color">
                                                    {String(currentIndex + 1).padStart(2, "0")} /
                                                </p>
                                                <p className="font_24 gray-color fw_400">
                                                    {String(slides.length).padStart(2, "0")}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="slide-content">{slides[currentIndex]}</p>

                                    </div>
                                    <div className="slide-controls">
                                        <div className="nav-buttons">
                                            <button onClick={goPrev} className="nav-btn">
                                                <span className="material-symbols-outlined">
                                                    chevron_left
                                                </span>
                                            </button>
                                            <button onClick={goNext} className="nav-btn">
                                                <span className="material-symbols-outlined">
                                                    chevron_right
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                     <div className="border-bottom-mini"></div>
                                <div className="slide-card flex-row als j-c-sb">
                                    <div className="slide-header inner-flex inner-flex-common">
                                        <h2 className="font_32 black-color fw_700">
                                            Phase-I: Unlocking Optimal Government Incentives
                                        </h2>

                                        <div className="slide-counter flex-row inner-flex-small">
                                            <img
                                                src="images/what_we_do/yellow_blue.svg"
                                                alt="yellow & blue"
                                            />

                                            <div className="flex-row ale">
                                                <p className="font_32 fw_400 black-color">
                                                    {String(currentIndex + 1).padStart(2, "0")} /
                                                </p>
                                                <p className="font_24 gray-color fw_400">
                                                    {String(slides.length).padStart(2, "0")}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="slide-content">{slides[currentIndex]}</p>

                                    </div>
                                    <div className="slide-controls">
                                        <div className="nav-buttons">
                                            <button onClick={goPrev} className="nav-btn">
                                                <span className="material-symbols-outlined">
                                                    chevron_left
                                                </span>
                                            </button>
                                            <button onClick={goNext} className="nav-btn">
                                                <span className="material-symbols-outlined">
                                                    chevron_right
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                     <div className="border-bottom-mini"></div>
                                <div className="slide-card flex-row als j-c-sb">
                                    <div className="slide-header inner-flex inner-flex-common">
                                        <h2 className="font_32 black-color fw_700">
                                            Phase-I: Unlocking Optimal Government Incentives
                                        </h2>

                                        <div className="slide-counter flex-row inner-flex-small">
                                            <img
                                                src="images/what_we_do/yellow_blue.svg"
                                                alt="yellow & blue"
                                            />

                                            <div className="flex-row ale">
                                                <p className="font_32 fw_400 black-color">
                                                    {String(currentIndex + 1).padStart(2, "0")} /
                                                </p>
                                                <p className="font_24 gray-color fw_400">
                                                    {String(slides.length).padStart(2, "0")}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="slide-content">{slides[currentIndex]}</p>

                                    </div>
                                    <div className="slide-controls">
                                        <div className="nav-buttons">
                                            <button onClick={goPrev} className="nav-btn">
                                                <span className="material-symbols-outlined">
                                                    chevron_left
                                                </span>
                                            </button>
                                            <button onClick={goNext} className="nav-btn">
                                                <span className="material-symbols-outlined">
                                                    chevron_right
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default What_we_do;

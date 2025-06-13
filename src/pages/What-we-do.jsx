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
        "Evaluate the client's eligibility for specific government programs.",
        "Prepare and compile the required documentation for application.",
        "Assist in submitting government applications and tracking progress.",
        "Ensure compliance with incentive program requirements.",
    ];
    const tabData = [
        {
            tab_id: "1",
            // tab_vectorImg: "assets/images/home/round-shape/mainVector.svg",
            active_img: "images/what_we_do/rotate_active.svg",
            inactive_img: "images/what_we_do/rotate.svg",
            tab_title: "Pharmaceuticals",
            // tab_pdf: "assets/pdfs/sectors/pharmaceuticals.pdf",
            tab_content_details:
                "Major segments of Indian Pharmaceutical Industry include generic drugs, OTC medicines, bulk drugs, vaccines, contract research & manufacturing, biosimilars and biologics. India is a global leader in the supply of DPT, BCG, and Measles vaccines. India is one of the biggest suppliers of low-cost vaccines in the world.",
            tab_content_details2: [
                {
                    text: "<span>Ministry - </span>Department of Pharmaceuticals",
                },
                {
                    text: "<span>Incentive Outlay - </span>INR 6940 cr for Bulk Drugs, INR 3,420 for Medical Devices, INR 15,000 for pharmaceutical manufacturing",
                }
            ],
            tab_counter: [
                { number: "3.3", text: "% Total FDI Inflows" },
                { number: "23.5", text: "US$- Exports of Pharmaceuticals " },
                { number: "21.22", text: "US$- FDI (Apr 2021-Dec 2022)" }
            ],
            // expert_img: "assets/images/home/expert.png",
            expert_title: "Sector Expert",
            expert_name: "Expert's Name"
        },
        {
            tab_id: "4",
            // tab_vectorImg: "assets/images/home/round-shape/mainVector.svg",
            tab_title: "Speciality steel",
            active_img: "images/what_we_do/rotate_active.svg",
            inactive_img: "images/what_we_do/rotate.svg",
            // tab_pdf: "assets/pdfs/sectors/steel.pdf",
            tab_content_details: "i. The Indian steel industry is a major contributor to the country's manufacturing output. It is the second-largest producer of crude steel in the world, with a production of 133.596 MT in FY22. The growth of the Indian steel industry has been driven by the domestic availability of raw materials such as iron ore and cost-effective labor. The Indian steel industry is modern, with state-of-the-art steel mills. It has always strived for continuous modernization of older plants and up-gradation to higher energy efficiency levels.",
            tab_content_details2: [
                {
                    text: "<span>Ministry - </span> Ministry of Steel"
                },
                {
                    text: "<span>Incentive Outlay - </span> INR 6322 cr"
                }
            ],
            tab_counter: [
                { number: "102.5", text: "Million tonnes (FY21) - Total Crude Steel Production" },
                { number: "94.7", text: "million tonnes (FY21) - Consumption of Finished Steel" },
                { number: "77.2", text: "Kgs (FY22) - Per Capita Consumption of Steel" },
                { number: "13.5", text: "US$ million tonnes - Finished Steel Export" }
            ],
            // expert_img: "assets/images/home/expert.png",
            expert_title: "Sector Expert",
            expert_name: "Expert's Name"
        },
        {
            tab_id: "5",
            // tab_vectorImg: "assets/images/home/round-shape/mainVector.svg",
            tab_title: "Drone & Drone Components",
            active_img: "images/what_we_do/rotate_active.svg",
            inactive_img: "images/what_we_do/rotate.svg",
            // tab_pdf: "assets/pdfs/sectors/drones.pdf",
            tab_content_details: "The county is all set to welcome the future of aerial technology, where unmanned aircraft are revolutionizing industries and opening up new possibilities. India, with its rich history of innovation and technological prowess, is emerging as a global hub for drones. In this section, we delve into the exciting world of the Indian drone industry, exploring its growth, potential, and the government initiatives propelling it forward.",
            tab_content_details2: [
                {
                    text: "<span>Ministry</span>- Ministry of Civil Aviation"
                },
                {
                    text: "<span>Incentive Outlay</span>- INR 120 cr"
                }
            ],
            tab_counter: [
                { number: "60", text: "cr - Annual Sales Turnover" },
                { number: "900", text: "cr INR (FY24)-Projected Annual Sales Turnover" }
            ],
            // expert_img: "assets/images/home/expert.png",
            expert_title: "Sector Expert",
            expert_name: "Expert's Name"
        },
        {
            tab_id: "8",
            tab_sub_title: " Make in India Advisory",
            tab_vectorImg: "assets/images/home/round-shape/mainVector.svg",
            active_img: "images/what_we_do/rotate_active.svg",
            inactive_img: "images/what_we_do/rotate.svg",
            tab_title: "High Efficiency solar PV Modules",
            tab_pdf: "assets/pdfs/sectors/high-solar-modules.pdf",
            tab_content_details: "India has set ambitious goals for its energy transition, aiming to achieve 500 GW of non-fossil fuel-based electricity installed capacity by 2030. This would ensure that clean, non-fossil fuel sources make up 50% of the country's energy mix. The generation of electricity from renewable sources such as solar, wind, hydro, and biopower has witnessed significant growth, increasing from 193.5 billion units in 2013-14 to 306.3 billion units in 2020-21, with a compound annual growth rate (CAGR) of 6.8%.",
            tab_content_details2: [{
                text: "<span>Ministry</span>- Ministry of New and Renewable Energy",
            },
            {
                text: "<span>Incentive Outlay</span>- INR 4,500 cr (Tranche I), INR 19,500 cr (Tranche II)",
            },
                // {
                // 	text: "<span>Approved</span>- 11 (Tranche II)",
                // },
            ],
            tab_counter: [{
                number: "1000",
                text: "+GW - Renewable energy potential in India"
            },

            {
                number: "160 ",
                text: "GW - Installed renewable energy capacity (as of May 2022)"
            },

            {
                number: "40",
                text: "% Share in total installed capacity"
            }

            ],
            expert_img: "assets/images/home/expert.png",
            expert_title: "Sector Expert",
            expert_name: "Expert's Name",
        },

        {
            tab_id: "9",
            tab_sub_title: " Make in India Advisory",
            tab_vectorImg: "assets/images/home/round-shape/mainVector.svg",
            active_img: "images/what_we_do/rotate_active.svg",
            inactive_img: "images/what_we_do/rotate.svg",
            tab_title: "Telecom & Networking",
            tab_pdf: "assets/pdfs/sectors/telecom.pdf",
            tab_content_details: "India's telecommunications market has experienced remarkable growth, becoming the world's second largest with an impressive subscriber base of 1,170.38 million as of December 2022. The government's visionary policies have played a vital role in this progress, providing easy market access to advanced telecom equipment and establishing a fair regulatory framework. With affordable prices and increased connectivity, telecom services have become accessible to all, contributing to India's economic development.",
            tab_content_details2: [{
                text: "<span>Ministry</span>- Ministry of Telecommunication",
            },
            {
                text: "<span>Incentive Outlay</span>- INR 12,195 Cr",
            },
                // {
                // 	text: "<span>Approved</span>- 31",
                // },
            ],
            tab_counter: [{
                number: "231",
                text: "% - Internet Connections Growth (2014-2021)"
            },

            {
                number: "4 ",
                text: "Mn- Total employment"
            },

            {
                number: "10",
                text: "Mn - Active 5G Devices in India"
            },

            {
                number: "100",
                text: "No. of Smart Cities"
            }

            ],
            expert_img: "assets/images/home/expert.png",
            expert_title: "Sector Expert",
            expert_name: "Expert's Name",
        },

        {
            tab_id: "10",
            tab_sub_title: " Make in India Advisory",
            tab_vectorImg: "assets/images/home/round-shape/mainVector.svg",
            active_img: "images/what_we_do/rotate_active.svg",
            inactive_img: "images/what_we_do/rotate.svg",
            tab_title: "Textile & Apparel",
            tab_pdf: "assets/pdfs/sectors/textiles.pdf",
            tab_content_details: "India's apparel and textile industry contributes around 2% to the country's GDP and represents 7% of industry output. It is the 3rd largest exporter globally, with textile, apparel, and handicrafts accounting for 11.4% of total exports in 2020-21. India is a major producer of cotton, jute, silk, and hand-woven fabric, employing around 45 million people directly and supporting 100 million in allied industries.",
            tab_content_details2: [{
                text: "<span>Ministry</span>- Ministry of Textiles",
            },
            {
                text: "<span>Incentive Outlay</span>- INR 10,683 Cr",
            },
                // {
                // 	text: "<span>Approved</span>- 64",
                // },
            ],
            tab_counter: [{
                number: "28",
                text: "Trained Artisan"
            },

            {
                number: "168",
                text: "Energy Intensive Textile Units"
            },

            {
                number: "31",
                text: "Functional Textile Parks"
            }

            ],
            expert_img: "assets/images/home/expert.png",
            expert_title: "Sector Expert",
            expert_name: "Expert's Name",
        },

        {
            tab_id: "11",
            tab_sub_title: " Make in India Advisory",
            tab_vectorImg: "assets/images/home/round-shape/mainVector.svg",
            active_img: "images/what_we_do/rotate_active.svg",
            inactive_img: "images/what_we_do/rotate.svg",
            tab_title: "Auto & Auto components ",
            tab_pdf: "assets/pdfs/sectors/automobile.pdf",
            tab_content_details: "The Indian auto component industry has achieved remarkable growth in the fiscal year 2021-22, with its highest-ever turnover of $6.5 billion, reflecting a significant 23% increase. This growth can be attributed to the increasing presence of global automobile Original Equipment Manufacturers (OEMs) in India, which has led to a substantial localization of their components within the country.",
            tab_content_details2: [{
                text: "<span>Ministry</span>- Ministry of Heavy Industries and Public Enterprises",
            },
            {
                text: "<span>Incentive Outlay</span>- INR 25,938 Cr",
            },
                // {
                // 	text: "<span>Approved</span>- 115",
                // },
            ],
            tab_counter: [{
                number: "2.3",
                text: "Share in India's GDP"
            },

            {
                number: "5",
                text: "Mn- Employment Generated"
            },

            {
                number: "6",
                text: "% - CAGR (over 6 years)"
            },

            {
                number: "13.3",
                text: "$ Bn - Auto Component Export"
            }

            ],
            expert_img: "assets/images/home/expert.png",
            expert_title: "Sector Expert",
            expert_name: "Expert's Name",
        },

        {
            tab_id: "12",
            tab_sub_title: " Make in India Advisory",
            tab_vectorImg: "assets/images/home/round-shape/mainVector.svg",
            active_img: "images/what_we_do/rotate_active.svg",
            inactive_img: "images/what_we_do/rotate.svg",
            tab_title: "White Goods",
            tab_pdf: "assets/pdfs/sectors/white-goods.pdf",
            tab_content_details: "The white goods industry consists of air conditioners, refrigerators, washing machines and dryers, dishwashers, and LED Lights. The White Goods industry in India reached USD 13.6 Bn in FY21. Out of this, the largest market share is comprised of Air Conditioners, Refrigerators and LED products.  The White Goods market is estimated to cross USD 21 Bn by 2025 expanding at a CAGR of 11%. Domestic manufacturing contributes nearly USD 4.6 Bn on an average to this industry.",
            tab_content_details2: [{
                text: "<span>Ministry</span>- Ministry of Commerce & Industry (Department for Promotion of Industry and Internal Trade)",
            },
            {
                text: "<span>Incentive Outlay</span>- INR 6238 Crores",
            },
                // {
                // 	text: "<span>Approved</span>- 57",
                // },
            ],
            tab_counter: [{
                number: "100",
                text: "% - FDI Permitted"
            },

            {
                number: "13.6",
                text: "US$ Bn - Industry Size"
            },

            {
                number: "21",
                text: "US$ Bn - Estimated Market Size"
            }

            ],
            expert_img: "assets/images/home/expert.png",
            expert_title: "Sector Expert",
            expert_name: "Expert's Name",
        },

        {
            tab_id: "13",
            tab_sub_title: " Make in India Advisory",
            tab_vectorImg: "assets/images/home/round-shape/mainVector.svg",
            active_img: "images/what_we_do/rotate_active.svg",
            inactive_img: "images/what_we_do/rotate.svg",
            tab_title: "Food Processing",
            tab_pdf: "assets/pdfs/sectors/food-processing-industries.pdf",
            tab_content_details: "India's food processing sector is a burgeoning industry that presents attractive investment opportunities. The government, through the Ministry of Food Processing Industries (MoFPI), is actively promoting growth and development in this sector. Initiatives such as the Pradhan Mantri Kisan Sampada Yojana (PMKSY) focus on building modern infrastructure and efficient supply chains from farm to retail.",
            tab_content_details2: [{
                text: "<span>Ministry</span>- Ministry of Food Processing Industries",
            },
            {
                text: "<span>Incentive Outlay</span>- INR 10,900 Cr",
            },
                // {
                // 	text: "<span>Approved</span>- 150",
                // },
            ],
            tab_counter: [{
                number: "18.8",
                text: "% share of GVA of agriculture and allied sector to total economy"
            },

            {
                number: "12.32",
                text: "%- Share in total employment"
            },

            {
                number: "10.4",
                text: "% - Share in India's exports"
            },

            {
                number: "136",
                text: "% - Cropping intensity"
            }

            ],
            expert_img: "assets/images/home/expert.png",
            expert_title: "Sector Expert",
            expert_name: "Expert's Name",
        },

    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [angle, setAngle] = useState(0);

    const tab = tabData[currentIndex];

    const goPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? tabData.length - 1 : prev - 1));
    };

    const goNext = () => {
        setCurrentIndex((prev) => (prev === tabData.length - 1 ? 0 : prev + 1));
    };

    const rotateRight = () => setAngle(prev => prev + 30);
    const rotateLeft = () => setAngle(prev => prev - 30);
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
                <div className="section-5 main-container section-padding-4rem pt0 relative ovrflow-hidden">
                    <div className="inner_padding border_blue">
                        <div className="grid_60_40">
                            <div className="innner-flex">
                                <div className="inner-flex inner-flex-medium">
                                    <div className="flex-row alc sec-5-img-heading inner-flex-common">
                                        <img
                                            src="images/what_we_do/medicine 1.svg"
                                            alt="medicine"
                                        />
                                        <h1 className="font_36 black-color fw_700">
                                            {tab.tab_title}
                                        </h1>
                                    </div>

                                    <p className="black-color font_24 fw_400">
                                        {tab.tab_content_details}
                                    </p>

                                    <div className="grid-three">
                                        {tab.tab_counter.map((counter, index) => (
                                            <div
                                                key={index}
                                                className={`grid_box_1 ${index === 1 ? "border_yellow" : "border_blue"
                                                    }`}
                                            >
                                                <div className="inner-flex inner-flex-common">
                                                    <h1 className="font_28 black-color border-bottom-1rem">
                                                        {counter.number}
                                                        {counter.text.includes("USD") ? " USD" : ""}
                                                    </h1>
                                                    <p className="font_24 black-color">{counter.text}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {tab.tab_content_details2.map((info, idx) => (
                                        <div className="flex-row als" key={idx}>
                                            <span className="material-symbols-outlined blue-color font_30">
                                                arrow_right_alt
                                            </span>
                                            <h2
                                                className="font_24"
                                                dangerouslySetInnerHTML={{ __html: info.text }}
                                            ></h2>
                                        </div>
                                    ))}

                                    <div className="btn-2">
                                        <a
                                            href={tab.tab_pdf}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <div className="know_more_btn">
                                                Know More
                                                <div className="arrow-svg">
                                                    <img src="images/what_we_do/blueArrow.svg" alt="" />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                                <div className="rotate-section">
                                    <div className="relative">
                                        <div className="pharma-vector-images1">
                                            <div className="relative">
                                                <div className="pharma-vector-img1">
                                                    <div className="circle-vector-img relative" id="box" style={{
                                                        transform: `rotate(${angle}deg)`,
                                                        transition: 'transform 0.3s ease',
                                                    }}>
                                                        <img
                                                            src="images/what_we_do/round-shape.png"
                                                            alt="round-shape"
                                                        />
                                                        <div className="main-position">
                                                            {tabData.map((item, index) => (
                                                                <div
                                                                    key={item.tab_id}
                                                                    className="tab_main_div"
                                                                    id={`tab-id-${item.tab_id}`}
                                                                    onClick={() => setCurrentIndex(index)}
                                                                >
                                                                    <div className="vectorImgDiv">
                                                                        <img
                                                                            src={currentIndex === index ? item.active_img : item.inactive_img}
                                                                            alt=""
                                                                            className={currentIndex === index ? "active_img_tab" : "border-vector-img"}
                                                                        />
                                                                        <div className="tabs-title-text tabs_text">
                                                                            <h3 className={currentIndex === index ? "white-color" : "black-color"}>{item.tab_title}</h3>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>

                                                    </div>
                                                    <div className="buttons_postition">
                                                        <div className="button_tabs">
                                                            <button id="rotateRight" className="up_button" onClick={rotateRight}>
                                                                <img src="images/what_we_do/blue-up-arrow.svg" alt="" />
                                                            </button>
                                                            <button id="rotateLeft" className="down_button" onClick={rotateLeft}>
                                                                <img src="images/what_we_do/blue-down-arrow.svg" alt="" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

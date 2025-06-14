import React, { useState } from "react";
import "../styles/Clientele.css";

const Clientele = () => {
  const clientsData = {
    automobile: [
      { name: "Hop Electric Mobility", img: "clientele/Hop.png" },
      { name: "Bounce Infinity", img: "clientele/bounce.png" },
      { name: "Greaves", img: "clientele/greaves.png" },
      { name: "Ampere", img: "clientele/ampere.png" },
      { name: "BOOM", img: "clientele/boom.png" },
      { name: "Prical", img: "clientele/prical.png" },
    ],
    pharmaceuticals: [
      { name: "Hetero", img: "clientele/Hetero.png" },
      { name: "Honour", img: "clientele/Honour.png" },
      { name: "aurobindo", img: "clientele/wg_aurobindo.png" },
      { name: "wockhardi", img: "clientele/wg_wockhardi.png" },
      { name: "aurore", img: "clientele/wg_aurore.png" },
      { name: "meghmani", img: "clientele/wg_meghmani.png" },
      { name: "msn", img: "clientele/wg_msn.png" },
      { name: "sai", img: "clientele/wg_sai.png" },
      { name: "shreepathi", img: "clientele/wg_shreepathi.png" },
      { name: "alcedio", img: "clientele/1.png" },
      { name: "avra", img: "clientele/2.png" },
      { name: "vasudha", img: "clientele/3.png" },
      { name: "arene Lifescience", img: "clientele/4.png" },
      { name: "amsal chemical", img: "clientele/5.png" },
      { name: "mendas pharma", img: "clientele/6.png" },
      { name: "atvantic", img: "clientele/7.png" },
      { name: "jayshri", img: "clientele/8.png" },
      { name: "emmennar", img: "clientele/9.png" },
      { name: "synthokem labs ", img: "clientele/10.png" },
      { name: "amneal", img: "clientele/11.png" },
    ],
    white_goods: [
      { name: "aditya birla", img: "clientele/12.png" },
      { name: "blue star", img: "clientele/13.png" },
    ],
    textiles: [
      { name: "arvind", img: "clientele/14.png" },
      { name: "madura", img: "clientele/15.png" },
      { name: "hp thread", img: "clientele/16.png" },
    ],
    drone_industry: [
      { name: "TAS", img: "clientele/17.png" },
      { name: "adani general aeronautics", img: "clientele/18.png" },
      { name: "garuda", img: "clientele/19.png" },
      { name: "paras aerospace", img: "clientele/20.png" },
      { name: "zuppa", img: "clientele/21.png" },
      { name: "dums", img: "clientele/22.png" },
      { name: "drona aviation", img: "clientele/23.png" },
      { name: "indowings", img: "clientele/24.png" },
      { name: "absolute composites", img: "clientele/25.png" },
      { name: "AUS", img: "clientele/26.png" },
      { name: "androitec", img: "clientele/27.png" },
      { name: "omnipresent", img: "clientele/28.png" },
      { name: "zas", img: "clientele/29.png" },
    ],
    food_processing: [
      { name: "global", img: "clientele/30.png" },
      { name: "the choice group", img: "clientele/31.png" },
      { name: "maniarr's", img: "clientele/32.png" },
      { name: "amul", img: "clientele/33.png" },
      { name: "vadilal", img: "clientele/34.png" },
      { name: "dukes", img: "clientele/35.png" },
      { name: "sankalp the test of india", img: "clientele/37.png" },
      { name: "slipy owl", img: "clientele/38.png" },
      { name: "sanstar", img: "clientele/39.png" },
      { name: "milkymist", img: "clientele/40.png" },
      { name: "scoops", img: "clientele/41.png" },
      { name: "double horce", img: "clientele/42.png" },
      { name: "gadre", img: "clientele/43.png" },
      { name: "induben khakhrawala", img: "clientele/44.png" },
      { name: "bakemate", img: "clientele/45.png" },
      { name: "early foods", img: "clientele/46.png" },
      { name: "micks", img: "clientele/47.png" },
      { name: "baby marine ventures", img: "clientele/48.png" },
      { name: "lal the joy of eating good", img: "clientele/49.png" },
      { name: "777 brand", img: "clientele/50.png" },
      { name: "ratnaraj foods", img: "clientele/51.png" },
      { name: "cream stone", img: "clientele/52.png" },
      { name: "sayaji", img: "clientele/53.png" },
      { name: "sabar dairy", img: "clientele/54.png" },
      { name: "oshon", img: "clientele/55.png" },
      { name: "organic irm", img: "clientele/56.png" },
      { name: "yoga bar", img: "clientele/57.png" },
      { name: "greenergy", img: "clientele/58.png" },
      { name: "pratipa cashew", img: "clientele/59.png" },
    ],
    state_indust_policies: [
      { name: "Jay hind group", img: "clientele/60.png" },
      { name: "trent", img: "clientele/61.png" },
      { name: "amneal", img: "clientele/62.png" },
      { name: "anjali", img: "clientele/63.png" },
      { name: "vihita", img: "clientele/64.png" },
      { name: "meghmahi", img: "clientele/65.png" },
      { name: "sanstar", img: "clientele/66.png" },
      { name: "sayaji", img: "clientele/67.png" },
      { name: "state industriel policy", img: "clientele/68.png" },
    ],
    manufacturing: [
      { name: "pricol", img: "clientele/69.png" },
      { name: "monk", img: "clientele/70.png" },
      { name: "liebherr", img: "clientele/71.png" },
      { name: "nemi", img: "clientele/72.png" },
      { name: "aditya birla", img: "clientele/73.png" },
      { name: "blue star", img: "clientele/74.png" },
    ],
  };

  const [selectedIndustry, setSelectedIndustry] = useState("automobile");

  const handleChange = (e) => {
    setSelectedIndustry(e.target.value);
  };

  return (
    <div className="awfficacy_wrapper">
      <div className="clientele-wrapper">
        <div className="section-1 main-container section-padding-4rem">
          <div className="awfficacy_blue_box alc j-c-sb">
            <div className="awfficacy_blue_box_heading">
              <h1 className="font_56 white-color fw_700">
                Credibility & Trust
              </h1>
            </div>
            <div className="clientele_us-img">
              <img src="images/Clientele-img.svg" alt="Clientele" />
            </div>
          </div>
        </div>
        <div className="section-2 main-container section-padding-4rem pt0">
          <div className="inner-flex inner-flex-medium">
            <div className="our_clientele flex-row j-c-sb alc">
              <h1 className="font_40 black-color fw_700">Our Clientele</h1>
              <div className="select">
                <select value={selectedIndustry} onChange={handleChange}>
                  <option value="automobile">Automobile</option>
                  <option value="pharmaceuticals">Pharmaceuticals</option>
                  <option value="white_goods">White Goods</option>
                  <option value="textiles">Textiles</option>
                  <option value="drone_industry">Drone Industry</option>
                  <option value="food_processing">Food Processing</option>
                  <option value="state_indust_policies">
                    State Industrial Policies
                  </option>
                  <option value="manufacturing">
                    Manufacturing of Electronic Components and Semiconductors
                  </option>
                </select>
              </div>
            </div>
            <div className="grid_five">
              {clientsData[selectedIndustry].map((client, index) => (
                <div key={index} className="client_img">
                  <img src={`images/${client.img}`} alt={client.name} />
                  <p className="black-color pt-1rem capitalize">
                    {client.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientele;

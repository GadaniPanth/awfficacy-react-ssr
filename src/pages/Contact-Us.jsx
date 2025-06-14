import React, { useState } from "react";
// import "../styles/Contact-us.css";
import { Link } from "react-router";

const Contact_us = () => {
  const MyForm = () => {
    const [formData, setFormData] = useState({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      countryCode: "+91",
      companyname: "",
      message: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        countryCode: "+91",
        companyname: "",
        message: "",
      });
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const validate = () => {
      const newErrors = {};

      if (!formData.firstname.trim())
        newErrors.firstname = "First name is required.";
      if (!formData.lastname.trim())
        newErrors.lastname = "Last name is required.";
      if (!formData.email.trim()) {
        newErrors.email = "E-mail is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Invalid email format.";
      }
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required.";
      } else if (!/^[0-9]+$/.test(formData.phone)) {
        newErrors.phone = "Please enter a valid phone number.";
      }
      if (!formData.companyname.trim())
        newErrors.companyname = "Company name is required.";
      if (!formData.message.trim()) newErrors.message = "Message is required.";

      return newErrors;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitted(true);
      const newErrors = validate();

      if (Object.keys(newErrors).length === 0) {
        console.log("Form Submitted successfully!", formData);
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          countryCode: "+91",
          companyname: "",
          message: "",
        });
        setErrors({});
        setSubmitted(false);
      } else {
        setErrors(newErrors);
      }
    };

    return (
      <>
        <div className="awfficacy_wrapper">
          <div className="contact_us_wrapper">
            <div className="section-1 main-container section-padding-4rem">
              <div className="awfficacy_blue_box alc j-c-sb">
                <div className="awfficacy_blue_box_heading">
                  <h1 className="font_56 white-color fw_700">Let's Connect</h1>
                </div>
                <div className="contact_us-img">
                  <img src="images/contact_us.svg" alt="contact_us" />
                </div>
              </div>
            </div>

            <div className="section-2 mini-container">
              <div className="contact_form">
                <form
                  className="inner-flex inner-flex-small"
                  onSubmit={handleSubmit}
                >
                  <div className="flex-row inner-flex-small">
                    <div className="form_group">
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        className="form-control"
                        placeholder="First Name"
                        value={formData.firstname}
                        onChange={handleChange}
                      />
                      {submitted && errors.firstname && (
                        <span className="error-message">
                          {errors.firstname}
                        </span>
                      )}
                    </div>
                    <div className="form_group">
                      <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        className="form-control"
                        placeholder="Last Name"
                        value={formData.lastname}
                        onChange={handleChange}
                      />
                      {submitted && errors.lastname && (
                        <span className="error-message">{errors.lastname}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex-row inner-flex-small">
                    <div className="form_group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {submitted && errors.email && (
                        <span className="error-message">{errors.email}</span>
                      )}
                    </div>
                    <div className="form_group">
                      <select
                        name="country"
                        id="country"
                        className="form-control"
                        value={formData.country}
                        onChange={handleChange}
                      >
                        <option value="">Select Country</option>
                        <option value="India">India</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                      </select>
                      {submitted && errors.country && (
                        <span className="error-message">{errors.country}</span>
                      )}
                    </div>
                  </div>
                  {/* third row */}
                  <div className="flex-row">
                    <div className="form_group">
                      <input
                        name="companyname"
                        id="companyname"
                        className="form-control"
                        placeholder="Company Name"
                        value={formData.companyname}
                        onChange={handleChange}
                      />
                      {submitted && errors.companyname && (
                        <span className="error-message">
                          {errors.companyname}
                        </span>
                      )}
                    </div>
                    <div className="form_group phone-wrapper">
                      <select
                        name="countryCode"
                        required
                        value={formData.countryCode}
                        onChange={handleChange}
                      >
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                      </select>
                      <input
                        name="phone"
                        id="phone"
                        className="form-control"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {submitted && errors.phone && (
                        <span className="error-message">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  <div className="text-area form_group">
                    <textarea
                      name="message"
                      id="text-area"
                      className="form-control"
                      placeholder="What can we help you with?"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {submitted && errors.message && (
                      <span className="error-message">{errors.message}</span>
                    )}
                  </div>
                  <div className="form_group flex-row alc j-c-c">
                    <label className="font_18">
                      Please tell us all the ways you want to hear from us:
                    </label>
                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        id="emailComm"
                        name="contactMethods"
                        value="email"
                      />
                      <label htmlFor="emailComm font_18">
                        E-mail communication
                      </label>
                    </div>
                    <div className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        id="phoneComm"
                        name="contactMethods"
                        value="phone"
                      />
                      <label htmlFor="phoneComm font_18">
                        Telephonic communication
                      </label>
                    </div>
                  </div>

                  <br />
                  <button type="submit" className="form-control btn-2">
                    <div className="know_more_btn">
                      Submit
                      <div className="arrow-svg">
                        <img
                          src="images/what_we_do/blueArrow.svg"
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return <MyForm />;
};

export default Contact_us;

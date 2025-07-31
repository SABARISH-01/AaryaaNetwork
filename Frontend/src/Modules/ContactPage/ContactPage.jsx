// import React, { use } from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import CustomizedStyleleft from "../../assets/CustomizedStyleLeft.png";
import { toast } from "react-toastify";
import QueryImg from "../../assets/Contact/QueryImg.jpg";
import Footer from "../../Components/Footer/Footer";
import "./Contactpage.css";
function ContactPage() {
  const location = useLocation();
  const navigate = useNavigate();
  // const selectedPlan = location.state?.selectedPlan || null;
  const [selectedPlan] = useState(() => location.state?.selectedPlan || null);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });

          // Clear the scrollTo state after scroll
          navigate(location.pathname, { replace: true, state: {} });
        }, 100); // wait for DOM to render
      }
    }
  }, [location, navigate]);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPlan, setShowPlan] = useState(true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    window.history.replaceState({}, document.title);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      const requestBody = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        address: form.address,
        message: form.message,
      };

      // Add plan details if a plan was selected
      if (selectedPlan) {
        requestBody.selectedPlan = {
          speed: selectedPlan.speed,
          provider: selectedPlan.provider,
          duration: selectedPlan.duration,
          planType: selectedPlan.planType,
          price: selectedPlan.firstTimeTotal || selectedPlan.renewalTotal,
          ottTier: selectedPlan.ottTier,
          tvChannels: selectedPlan.tvChannels,
          router: selectedPlan.router,
          androidBox: selectedPlan.androidBox,
        };
      }

      const res = await fetch(
        "https://aaryaanetwork-backend.onrender.com/api/contact/post",
        {
          method: "POST",
          body: JSON.stringify(requestBody),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        const alertMsg = Object.values(data.errors || {}).join("\n");
        toast.error(alertMsg);
      } else {
        toast.success(data.message);

        setForm({
          firstName: "",
          lastName: "",
          phone: "",
          address: "",
          email: "",
          message: "",
        });
      }
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
      setShowPlan(false);
    }
  };

  return (
    <>
      <div className="contact-page-overall">
        <div className="cp-first-section">
          <div className="let-talk-section">
            <h2>Interested in Our Plans? Let’s Talk!</h2>
            <p className="sub-c-title">
              Whether you’re exploring our fixed plans or customizing your own,
              we’d love to hear from you. Fill out the form, and our team will
              get back to you quickly with the details you need.
            </p>

            <div className="c-style-img">
              <img src={CustomizedStyleleft} className="c-style-left-img" />
              <img src={CustomizedStyleleft} className="c-style-right-img" />
            </div>
          </div>
        </div>
        <div className="cp-second-section">
          <div className="contact-grid">
            <div
              className="contact-box contact-box1"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/aaryaa_network?igsh=MXc0eXJ4cWVweG5xcg==",
                  "_blank"
                )
              }
            >
              <div className="contact-box-in contact-box1-in"></div>
              <div className="contact-bottom">
                {/* <div className="contact-bottom-circle">
                            </div> */}
                <p>Aaryaa Fibernet</p>
              </div>
              <div className="contact-top">
                <FaArrowRightLong className="arrow-icon" />
              </div>
            </div>
            <div
              className="contact-box contact-box2"
              onClick={() =>
                window.open("https://wa.me/917708067932", "_blank")
              }
            >
              <div className="contact-box-in contact-box2-in"></div>
              <div className="contact-bottom">
                {/* <div className="contact-bottom-circle">
                            </div> */}
                <p>Whatsapp</p>
              </div>
              <div className="contact-top">
                <FaArrowRightLong className="arrow-icon" />
              </div>
            </div>
            <div
              className="contact-box contact-box3"
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/WN8AMJ2euCY2b4yK9",
                  "_blank"
                )
              }
            >
              <div className="contact-box-in contact-box3-in"></div>
              <div className="contact-bottom">
                {/* <div className="contact-bottom-circle">
                            </div> */}
                <p>Sankarankovil, TamilNadu</p>
              </div>
              <div className="contact-top">
                <FaArrowRightLong className="arrow-icon" />
              </div>
            </div>
            <div
              className="contact-box contact-box4"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/aaryaatv/profilecard/?igsh=MXdodjZra3o2MmI2Ng==",
                  "_blank"
                )
              }
            >
              <div className="contact-box-in contact-box1-in"></div>
              <div className="contact-bottom">
                {/* <div className="contact-bottom-circle">
                            </div> */}
                <p>Aaryaa Tv</p>
              </div>
              <div className="contact-top">
                <FaArrowRightLong className="arrow-icon" />
              </div>
            </div>
            <div
              className="contact-box contact-box5"
              onClick={() =>
                window.open(
                  "https://youtube.com/@aaryaatv?si=N2Ofgg3v6nkQSy5g",
                  "_blank"
                )
              }
            >
              <div className="contact-box-in contact-box5-in"></div>
              <div className="contact-bottom contact-bottom-img">
                {/* <div className="contact-bottom-circle">
                            </div> */}
                <p>Youtube</p>
              </div>
              <div className="contact-top">
                <FaArrowRightLong className="arrow-icon" />
              </div>
            </div>
            <div
              className="contact-box contact-box6"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/share/1AZnobBpY6/?mibextid=wwXIfr",
                  "_blank"
                )
              }
            >
              <div className="contact-box-in contact-box6-in"></div>
              <div className="contact-bottom">
                {/* <div className="contact-bottom-circle">
                            </div> */}
                <p>Facebook</p>
              </div>
              <div className="contact-top">
                <FaArrowRightLong className="arrow-icon" />
              </div>
            </div>
          </div>
        </div>
          <div className="cp-third-section">
            <div className="query">
              <div className="left-query">
                <img src={QueryImg} className="left-query-img" />
              </div>

              <div className="right-query" id="contact-form-section">
                {selectedPlan && showPlan && (
                  <div className="selected-plan-summary-contact">
                    <h4>Selected Plan</h4>
                    <ul>
                      <li>
                        <b>Speed : </b> {selectedPlan.speed}
                      </li>
                      <li>
                        <b>Provider : </b> {selectedPlan.provider}
                      </li>
                      <li>
                        <b>Duration : </b> {selectedPlan.duration}
                      </li>
                      <li>
                        <b>Type : </b> {selectedPlan.planType}
                      </li>
                      <li>
                        <b>Price : </b> ₹
                        {selectedPlan.firstTimeTotal ||
                          selectedPlan.renewalTotal}
                      </li>
                      {selectedPlan.ottTier &&
                        selectedPlan.ottTier !== "None" && (
                          <li>
                            <b>OTT Tier : </b> {selectedPlan.ottTier}
                          </li>
                        )}
                      {selectedPlan.tvChannels &&
                        selectedPlan.tvChannels !== "None" && (
                          <li>
                            <b>TV Channels : </b> {selectedPlan.tvChannels}
                          </li>
                        )}
                      {selectedPlan.router &&
                        selectedPlan.router !== "None" && (
                          <li>
                            <b>Router : </b> {selectedPlan.router}
                          </li>
                        )}
                      {selectedPlan.androidBox && (
                        <li>
                          <b>Android Box : </b> Included
                        </li>
                      )}
                    </ul>
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="query-header">
                    <h1>Get In Touch</h1>
                    <p>
                      I'm always open to new opportunities. Feel free to drop me
                      a line if having any questions or projects.
                    </p>
                  </div>
                  <div className="query-box">
                    <div className="input-flex-box">
                      <h3>First Name</h3>
                      <div className="input-div">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="Enter Your First Name"
                          className="input-box"
                          value={form.firstName}
                          onChange={handleChange}
                        ></input>
                        {errors.firstName && (
                          <p className="error">{errors.firstName}</p>
                        )}
                      </div>
                    </div>
                    <div className="input-flex-box">
                      <h3>Last Name</h3>
                      <div className="input-div">
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Enter Your Last Name"
                          className="input-box"
                          value={form.lastName}
                          onChange={handleChange}
                        ></input>
                        {errors.firstName && (
                          <p className="error">{errors.lastName}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="query-box">
                    <div className="input-flex-box">
                      <h3>Phone Number</h3>
                      <div className="input-div">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Enter your Phone Number"
                          className="input-box"
                          value={form.phone}
                          onChange={handleChange}
                        />
                        {errors.phone && (
                          <p className="error">{errors.phone}</p>
                        )}
                      </div>
                    </div>
                    <div className="input-flex-box">
                      <h3>Address</h3>
                      <div className="input-div">
                        <input
                          type="text"
                          name="address"
                          placeholder="Enter your Address"
                          className="input-box"
                          value={form.address}
                          onChange={handleChange}
                        />
                        {errors.address && (
                          <p className="error">{errors.address}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="address-box input-flex-box">
                    <h3>Email Address</h3>
                    <div className="input-div">
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter your Email Address"
                        className="input-adr-box"
                        value={form.email}
                        onChange={handleChange}
                      />
                      {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="message input-flex-box">
                    <h3>Message</h3>
                    <div className="input-div">
                      <textarea
                        name="message"
                        placeholder="Enter your message here..."
                        rows={6}
                        cols={50}
                        className="message-box"
                        value={form.message}
                        onChange={handleChange}
                      />
                      {/* {errors.message && (
                      <p className="error">{errors.message}</p>
                    )} */}
                    </div>
                  </div>
                  <div className="button-div">
                    <button
                      className="send-message"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        <div className="cp-last-section footer-section">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ContactPage;

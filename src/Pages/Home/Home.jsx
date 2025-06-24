import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import AbtPic from "./Images/luminara_grad.jpg";

// import videos
import Medihelp from "./Images/MediHelp_1.mp4";
import Miniportfolio from "./Images/MiniPortfolio.mp4";
import GraphicsDesign from "./Images/WorkArea.png";

import Herobg from "./Images/Herobg.mp4";

// import carousel images
import caro1 from "./Images/carousel/Coding_Workframes/node-js-icon.svg";
import caro2 from "./Images/carousel/Coding_Workframes/react-js-icon.svg";
import caro3 from "./Images/carousel/Coding_Workframes/redux-icon.svg";
import caro4 from "./Images/carousel/Coding_Workframes/tailwind-css-icon.svg";
import caro5 from "./Images/carousel/Design Tools/adobe-xd-icon.svg";
import caro6 from "./Images/carousel/Design Tools/figma-icon.svg";
// import caro7 from "./Images/carousel/Design Tools/spline_logo.webp";
import caro8 from "./Images/carousel/Design Tools/framer-color-icon.svg";
// import caro9 from "./Images/carousel/Sound_Design_Tools/ableton_macos_bigsur_icon_190476.svg";
import caro10 from "./Images/carousel/Sound_Design_Tools/adobe-audition-icon.svg";
// import caro11 from "./Images/carousel/Sound_Design_Tools/favpng_2f826b027b021a2c922bfe5774093770.svg";
import caro12 from "./Images/carousel/Sound_Design_Tools/audacity-icon.svg";
import caro13 from "./Images/carousel/Videography_Design_Tools/adobe-after-effects-icon.svg";
import caro14 from "./Images/carousel/Videography_Design_Tools/adobe-premiere-pro-icon.svg";
import caro15 from "./Images/carousel/Videography_Design_Tools/adobe-photoshop-icon.svg";
import caro16 from "./Images/carousel/Videography_Design_Tools/adobe-illustrator-icon.svg";

// import winner icon
import winner from "./Images/first-icon.svg";

// import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faVideo,
  faScrewdriverWrench,
  faGraduationCap,
  faNewspaper,
  faFileArrowDown,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet-async";
import { ReactTyped } from "react-typed";
import ServiceBox from "../../Components/Divs/ServiceBox";
// import TestBox from "../../Components/Divs/TestBox";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  // browser tab title
  useEffect(() => {
    document.title = "Home - Luminara";
  }, []);

  // About section functionality
  const [activeTab, setActiveTab] = useState("skills");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  const handleDownloadResume = async () => {
    try {
      // Fetch the resume file from the public folder
      const response = await fetch("/Luminara's_Resume.pdf");
      const blob = await response.blob();

      // Create a URL for the blob object
      const url = window.URL.createObjectURL(new Blob([blob]));

      // Create an anchor element with the URL and trigger download
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Luminara's Resume.pdf");
      document.body.appendChild(link);
      link.click();

      // Cleanup
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading resume:", error);
      toast.error("Error downloading resume");
    }
  };

  // View more functionality
  // const [showMore, setShowMore] = useState(false);

  // const handleViewMore = () => {
  //   setShowMore(true);
  // };

  // const handleHide = () => {
  //   setShowMore(false);
  // };

  // Services data
  const servicesData = [
    {
      icon: faCode,
      title: "Web Development",
      description:
        "A great product needs a great web app. I blend clean design with code across languages to bring client visions to life.",
    },
    {
      icon: faVideo,
      title: "Video Editing",
      description:
        "I bring stories to life through clean, impactful video edits that help clients connect with their audience.",
    },
    {
      icon: faNewspaper,
      title: "Graphics Design",
      description:
        "Design is more than aesthetics—it's communication. I craft visuals that resonate, using color, layout, and typography to support client goals.",
    },
  ];

  // carousel effect
  const settings = {
    infinite: true,
    slidesToShow: 7,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "60px",
    focusOnSelect: true,
  };

  // Testimonial data
  const CarouselData = [
    caro1,
    caro2,
    caro3,
    caro4,
    caro5,
    caro6,
    // caro7,
    caro8,
    // caro9,
    caro10,
    // caro11,
    caro12,
    caro13,
    caro14,
    caro15,
    caro16,
  ];

  //  // Contact form functionality
  // const scriptURL = process.env.REACT_APP_GOOGLE_SCRIPT;

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);

  //   // Immediately show a loading message
  //   toast.info("Submitting your message...", {
  //     style: {
  //       backgroundColor: "black",
  //       color: "white",
  //     },
  //   });

  //   try {
  //     const response = await fetch(scriptURL, {
  //       method: "POST",
  //       body: formData,
  //     });

  //     if (response.ok) {
  //       toast.success("Form submitted successfully!", {
  //         style: {
  //           backgroundColor: "black",
  //           color: "white",
  //         },
  //       });
  //       e.target.reset();
  //     } else {
  //       toast.error("Form submission failed");
  //       throw new Error("Failed to submit message");
  //     }
  //   } catch (error) {
  //     console.error("Error!", error.message);
  //     toast.error("Error occurred while submitting the form.", error.message);
  //   }
  // };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_bu1nab8", "template_u82238z", form.current, {
        publicKey: "_9o6RwS2wV4aeP0oq",
      })
      .then(
        () => {
          toast.success("Form submitted successfully!", {
            style: {
              backgroundColor: "black",
              color: "white",
            },
          });
        },
        (error) => {
          toast.error("Form submission failed");
        }
      );
  };

  return (
    <div>
      <Helmet>
        <title>Home - Luminara</title>
        <meta name="description" content="Let's craft your story." />

        {/* OG Tags */}
        <meta property="og:title" content="Luminara's Website" />
        <meta property="og:description" content="Let’s craft your story." />
        <meta
          property="og:image"
          content="https://andreschoque.com/static/media/background-header.35708e91d89ba76f59f2.jpg"
        />
        <meta property="og:url" content="https://Luminara.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Luminara's Website" />
        <meta name="twitter:description" content="Let’s craft your story." />
        <meta
          name="twitter:image"
          content="https://andreschoque.com/static/media/background-header.35708e91d89ba76f59f2.jpg"
        />
        <meta name="twitter:url" content="https://Luminara.com" />
      </Helmet>

      <div className="header-section" id="header">
        <video className="hero-video" autoPlay muted loop>
          <source src={Herobg} type="video/mp4" />
        </video>
        <div className="container">
          <Navbar />
          <div className="header-text">
            <h1>
              <small>Hi, I'm</small> Luminara
            </h1>
            <h2>
              <ReactTyped
                strings={[
                  "Web Developer",
                  "Videgrapher / designer",
                  "<i>Let’s craft your story</i>.",
                ]}
                typeSpeed={50}
                backSpeed={20}
                loop
              />
            </h2>
            <div className="btn-align">
              <a
                href="#contact"
                id="Get-started"
                className="header-btn"
                aria-label="Get-started-button"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About section */}

      <div className="about-section" id="about">
        <div className="container">
          <h1 className="sub-header">About Me</h1>
          <div className="row">
            <div className="abt-col-1">
              <img src={AbtPic} alt="Luminara-Professional" />
              <div className="resume">
                <button
                  onClick={handleDownloadResume}
                  id="Download-resume"
                  className="btn"
                  aria-label="Download-resume-button"
                >
                  Download Resume &nbsp;{" "}
                  <FontAwesomeIcon icon={faFileArrowDown} />
                </button>
              </div>
            </div>
            <div className="abt-col-2">
              <p>
                I am a self-taught web developer and video editor passionate
                about creating engaging digital experiences. Specializing in{" "}
                <strong>Front-End and Video Editing</strong>. I’m eager to
                contribute to a creative and forward-thinking team, bringing
                strong technical skills and a commitment to continuous learning.
              </p>
              <div className="tabs">
                <p
                  className={`tab-links ${
                    activeTab === "skills" ? "act-link" : ""
                  }`}
                  onClick={() => openTab("skills")}
                >
                  <strong>
                    <FontAwesomeIcon
                      className="tools"
                      icon={faScrewdriverWrench}
                    />{" "}
                    &nbsp; Skills
                  </strong>
                </p>
                <p
                  className={`tab-links ${
                    activeTab === "education" ? "act-link" : ""
                  }`}
                  onClick={() => openTab("education")}
                >
                  <strong>
                    <FontAwesomeIcon className="grad" icon={faGraduationCap} />{" "}
                    &nbsp; Education
                  </strong>
                </p>
              </div>

              <div
                className={`tab-conts ${
                  activeTab === "skills" ? "act-tab" : ""
                }`}
                id="skills"
              >
                <ul>
                  <li>
                    <span>Front-End</span>
                    <br />
                    React, Vue, HTML, CSS, Bootstrap, Tailwind, Shadcn,
                    JavaScript
                  </li>
                  <li>
                    <span>Design Tools</span>
                    <br />
                    Adobe Xd, Photoshop, Figma, Framer, Spline
                  </li>
                  <li>
                    <span>Sound Design</span>
                    <br />
                    Ableton, FL Studio, Adobe Audition, Audacity
                  </li>
                  <li>
                    <span>Coding Tools</span>
                    <br />
                    Git, GitHub, Azure DevOps, Azure Cloud
                  </li>
                  <li>
                    <span>Operating Systems</span>
                    <br />
                    Windows, MacOS
                  </li>
                </ul>
              </div>

              <div
                className={`tab-conts ${
                  activeTab === "education" ? "act-tab" : ""
                }`}
                id="education"
              >
                <ul>
                  <li>
                    <span>May 2023 - May 2028</span>
                    <br />
                    Bachelor's in Electrical Engineering | Addis Ababa Science
                    and Technology University
                  </li>
                  <li>
                    <span>March 2025</span>
                    <br />
                    Certification Responsive Web Design | FreeCodeCamp
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel section */}

      <div className="carousel-icons">
        <Slider {...settings}>
          {CarouselData.map((index) => (
            <div className="icons-slide">
              <img src={index} className="icons" alt="carousel-icon" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Services section */}

      <div className="services-section" id="services">
        <div className="container">
          <h1 className="sub-header">Services</h1>

          <div className="services-list">
            {servicesData.map((service, index) => (
              <ServiceBox
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                containerClass="service-box"
                iconClass="ser-icon"
                titleClass="service-title"
                descriptionClass="service-description"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio section */}

      <div className="portfolio-section" id="portfolio">
        <div className="container">
          <h1 className="sub-header">Portfolio</h1>

          <div className="work-list">
            <div className="work">
              <video autoPlay muted loop>
                <source src={Medihelp} type="video/mp4"></source>
              </video>
              <div className="card">
                <div className="winner-icon">
                  <img src={winner} alt="Winner Icon" />
                </div>
              </div>
              <div className="layer">
                <h3>
                  <strong>MediHelp</strong>
                  <p>
                    <small>
                      Hackthon First place winner at GDG Hackathon 2025
                    </small>
                  </p>
                </h3>
                <a
                  href="https://gdg-hackaton-medi-help.netlify.app"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="AI Powered Medical Help"
                >
                  <FontAwesomeIcon icon={faLocationArrow} />
                </a>
              </div>
            </div>

            <div className="work">
              <video autoPlay muted loop>
                <source src={Miniportfolio}></source>
              </video>
              <div className="layer">
                <h3>
                  <strong>Video Editing</strong>
                </h3>
                <a
                  href="https://ytjobs.co/talent/profile/273483"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Video Editor Portfolio"
                >
                  {" "}
                  <FontAwesomeIcon icon={faLocationArrow} />
                </a>
              </div>
            </div>

            <div className="work">
              <img src={GraphicsDesign} alt="Graphics Design Portfolio" />
              <div className="layer">
                <h3>
                  <strong>Graphics Design</strong>
                </h3>
                <a
                  href="_blank"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Graphics-Design-website-link"
                >
                  {" "}
                  <FontAwesomeIcon icon={faLocationArrow} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials section (commented out) */}

      {/* <div className="reviews-section" id="reviews">
        <div className="container">
          <h1 className="sub-header">Testimonials</h1>

          <div className="testimonials">
            {/* <Slider {...settings}> /}*
            {testimonialsData.map((testimonial, index) => (
              <TestBox
                key={index}
                author={testimonial.author}
                description={testimonial.description}
                workplace={testimonial.workplace}
              />
            ))}
            {/* </Slider> /}
          </div>
        </div>
      </div> */}

      <div className="contact-section" id="contact">
        <div className="container">
          <h1 className="sub-header">Let's Get in Touch</h1>

          <div className="column">
            <div className="contact-t">
              {/* <p><FontAwesomeIcon icon={faEnvelope}/>andreschoque71@gmail.com</p> */}
              <div className="social">
                <a
                  href="https://www.instagram.com/phazotron_/"
                  id="Instagram"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Luminara-instagram-account"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://x.com/Edible4261181"
                  id="Twitter"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Luminara-twitter-account"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a
                  href="https://www.linkedin.com/in/edible-dank-84932233b/"
                  id="LinkedIn"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Luminara-linkedin-account"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/IridescentGlow"
                  id="GitHub"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Luminara-github-account"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>

            <div className="contact-b">
              <form
                name="submit-to-google-sheet"
                onSubmit={sendEmail}
                ref={form}
              >
                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  id="Name"
                  required
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  id="Email"
                  required
                />
                <textarea
                  name="Message"
                  id="Message"
                  rows="6"
                  placeholder="Message"
                  className="no-resize"
                ></textarea>
                <div className="align-btn">
                  <button id="Submit" type="submit" className="btn btncv">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;

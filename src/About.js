import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                Hi I am a Junior Front-end developer with 2 years experience in web-development. I am sing in React , Javascript and CSS as I am working with a coulple of projects.I have desire and love to work as a team with colleagues building some amazing websites and applications.
              </p>
              <p className="about__text p__color">
              Right now am starting to work on the back end of web development using python and django and Node.Js so that i become a full stack developer.I am 100% sure and excited that i will unlock the full potential in myself very soon by becoming a full stack developer.I get motivated everyday with the number of my friends who are senior web developers and everyday I wake up with one goal in my mind.Group projects with friends from all over Africa in building ing projects are part of my everyday life .
              </p>
              <p className="about__text p__color">
                M.GUMBU
              </p>
           
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="up" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
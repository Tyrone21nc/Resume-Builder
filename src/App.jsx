import "./App.css";
import ResumeHeader from "./components/ResumeHeader.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faMoon } from '@fortawesome/free-solid-svg-icons';




const resumeBHeader = {
  name: "John Doe",
  email: "someEmail@gmail.com",
  phone: "012-345-6789",
  github: "someGitHubID",
  linkedIn: "https://www.linkedin.com/in/someperson/",
};
const resumeBEducation = {
  schoolName: "Some University of some state/country",
  major: "Computer Science",
  startDate: "08/2000",
  endDate: "05/2004",
  activitiesclubs: "some clubs import to note", 
};
const resumeExperience = {
  companyName: "Hustler University",
  position: "Hustler",
  from: "04/2014",
  to:   "05/2019", // this means currently working here
  responsibilities: "At a well-known company, a software engineer is responsible for designing, developing, and maintaining scalable, high-quality software solutions that meet business and user needs. They collaborate closely with cross-functional teams to gather requirements, implement features, review code, and ensure performance, security, and reliability. They also troubleshoot issues, write automated tests, and stay up to date with emerging technologies to continuously improve products and processes.",
};




function App(){
  // const [ theme, setTheme ] = useState("plain-dark");
  // const [ active1, setActive1 ] = useState(false);
  // const [ active2, setActive2 ] = useState(true);
  // const [ active3, setActive3 ] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "plain-dark";
  });

  const [active1, setActive1] = useState(theme === "stars");
  const [active2, setActive2] = useState(theme === "plain-dark");
  const [active3, setActive3] = useState(theme === "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);




  return(
    <div className={theme} style={{width: "100%", height: "100%"}}>
      <div className="select-theme">
        <p>choose a theme: </p>
        <div className="button-container">
          <button className={active1? "active-button":""} onClick={() => {setTheme("stars"); setActive1(true); setActive2(false); setActive3(false) }}>stars</button>
          <button className={active2? "active-button":""} onClick={() => {setTheme("plain-dark"); setActive1(false); setActive2(true); setActive3(false)}}>plain dark</button>
          <button className={active3? "active-button":""} onClick={() => {setTheme("light"); setActive1(false); setActive2(false); setActive3(true)}}>light</button>
        </div>
      </div>
      <div>
        <ResumeHeader theName={resumeBHeader.name}
                      theEmail={resumeBHeader.email}
                      thePhone={resumeBHeader.phone}
                      theGitHub={resumeBHeader.github}
                      theLinkedIn={resumeBHeader.linkedIn}
        />
        <Education schoolName={resumeBEducation.schoolName}
                  major={resumeBEducation.major}
                  start={resumeBEducation.startDate}
                  end={resumeBEducation.endDate}
                  activitiesclubs={resumeBEducation.activitiesclubs}
        />
        <Experience />


      {/*The code below is for the themes*/}
      <div className="select-theme">
        <p className={active3? "special": ""}>choose a theme: </p>
        <div className="button-container">
          <button className={active1? "active-button":""} onClick={() => {setTheme("stars"); setActive1(true); setActive2(false); setActive3(false) }}>stars</button>
          <button className={active2? "active-button":""} onClick={() => {setTheme("plain-dark"); setActive1(false); setActive2(true); setActive3(false)}}>plain dark</button>
          <button className={active3? "active-button":""} onClick={() => {setTheme("light"); setActive1(false); setActive2(false); setActive3(true)}}>light</button>
        </div>
      </div>
      </div>
    </div>
  );
}


export default App;

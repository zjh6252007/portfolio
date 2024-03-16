import { ReactTyped } from "react-typed";
import './Home.scss'
const Home = () =>{
    return (
        <div className="home">
            <div className="hello">
            <ReactTyped
            strings={["Hello,"]}
            typeSpeed={50}
            showCursor={false}
        />
        <br/>
        <span className="highlight">
        <ReactTyped
        strings={["This is Jay</br>"]}
        startDelay={1000} 
        typeSpeed={50}
        showCursor={false}
      />
        </span>
        <ReactTyped
        strings={["Software Developer", "Full-stack Developer"]}
        startDelay={2000} 
        typeSpeed={50}
        backSpeed={50}
        loop
    />
    <br/>
        </div>
        <div className="background">
            <div className="aboutme">
                <div className="title">
                About me
                </div>
                <div className="aboutcontent">
                    <span>I'm Jay Zhu, a web developer skilled in both front-end and back-end technologies.<br/> I excel in creating dynamic user interfaces with React.js and managing application state with Redux.<br/> My back-end expertise lies in developing robust server-side applications using Spring Boot.
<br/>My technical toolkit includes HTML5, CSS3, JavaScript (ES6+), and RESTful API design, alongside proficiency in Git for version control. <br/>I thrive on building scalable, high-performing web applications and enjoy collaborating on projects that challenge me to learn and grow.</span>
                </div>
            </div>
            <div className="skills">
                <div className="title">
                My Skills
                </div>
                <div className="personal-skill">
                    <ul>
                        <li className="react">React</li>
                        <li className="css">Css3</li>
                        <li className="java">Java</li>
                        <li className="springboot">Spring Boot</li>
                        <li className="sql">SQL</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home
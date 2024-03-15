import { ReactTyped } from "react-typed";
import './Home.scss'
const Home = () =>{
    return (
        <div className="home">
            <div className="introduce">
            <ReactTyped
            strings={["Hello,"]}
            typeSpeed={50}
            showCursor={false}
        />
        <br/>
        <span className="highlight">
        <ReactTyped
        strings={["This is Jay"]}
        startDelay={1000} 
        typeSpeed={50}
        showCursor={false}
      />
        </span>
        <ReactTyped
      strings={["<br/>Software Developer", "<br/>Full-stack Developer"]}
      startDelay={2000} 
      typeSpeed={50}
      backSpeed={50}
      loop
    />
            <br/>
            </div>
        </div>
    )
}

export default Home
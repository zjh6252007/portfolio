import FlipCard from "../components/FlipCard"
import Grid from '@mui/material/Grid';
import { ReactTyped } from "react-typed";
import './Projects.scss'
const Projects = () =>{
    return (
        <div className="project">
            <div className="title">
            <ReactTyped
                strings={["Some of my projects"]}
                typeSpeed={30}
                showCursor={false} 
            />
            </div>
            <div className="gridcontainer">
            <Grid container className="container">
                <Grid xs={6} sm={6} md={3} >
                    <a href="https://wlappliance.com" target="_blank" rel="noopener noreferrer">
                    <FlipCard coverUrl={'/wlappliance.png'} introduce={"Ecommerical Website"}
                    backContent={<span>Build from scratch<br/>SEO</span>}/>
                    </a>
                </Grid>
                <Grid xs={6} sm={6} md={3}>
                    <a href="https://smartsafe.ucf.edu/" target="_blank"  rel="noopener noreferrer">
                    <FlipCard coverUrl={'/ucfwebsite.png'} introduce={"SST Website"}
                    backContent={<span>Build from scratch<br/>Wordpress</span>}/>
                    </a>
                </Grid>
                <Grid xs={6} sm={6} md={3}>
                <a href="https://github.com/UCF-SST-Lab/UCF-SST-CitySim1-Dataset/tree/main/asset/University%40Alafaya" target="_blank"  rel="noopener noreferrer">
                    <FlipCard coverUrl={'/simulator.png'} introduce={"Driving Simulator"}
                    backContent={<span>Unity3D<br/>VR<br/>Connect With Sumo<br/>Allow Multiple Driver<br/>Create BaseMap</span>}/>
                    </a>
                </Grid>
                <Grid xs={6} sm={6} md={3}>
                    <FlipCard coverUrl={'./propertymanager.png'} introduce={"Property Manager System"}
                    backContent={<span>Frontend:React<br/>Backend:SpringBoot<br/>Database:MySql</span>}/>
                </Grid>
            </Grid>
            </div>
        </div>
    )
}

export default Projects
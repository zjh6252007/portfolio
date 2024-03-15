import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import './index.scss'
import { pdfjs } from 'react-pdf';
const DefaultPage = () =>
{
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    return(
    <div className="mainPage">
    <Header className="header"/>
        <div className="outlet">
            <Outlet/>
        </div>
    <Footer className="footer"/>
    </div>
    )
}

export default DefaultPage

import './Resume.scss'
import{useState} from 'react'
import { Document, Page} from 'react-pdf';
const Resume = () => {
    const[numPages,setNumPages] = useState()

    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPages)
    }

return(
    <div className='resume'>
        <Document
        file={'./RESUME.pdf'} onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
      >
        {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} renderTextLayer={false} renderAnnotationLayer={false} className='pdfPage' />
        ))}
        </Document>
    </div>
)
}

export default Resume;
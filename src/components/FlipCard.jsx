import './FlipCard.scss'
const FlipCard= ({coverUrl,backContent,introduce}) =>{
    return(
    <div className="card-container">
        <div className="front">
        <img src={coverUrl} alt="Cover"></img>
    </div>
    <div className="back">
        {backContent}
    </div>
    <div className='introduce'>
        <span>{introduce}</span>
    </div>
    </div>
    )
}

export default FlipCard
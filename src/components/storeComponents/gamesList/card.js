function Card(props) {
    return (
        <div className='games-box'>
            <img src={props.image} alt='first-image'></img>
            <div className='games-info'>
                <h3>{props.name}</h3>
            </div>
        </div>
    )
}
export default Card
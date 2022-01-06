function Deleteit(props) {
    return (
            <>
            <li> <button className='btn1' onClick={()=>{props.onselect(props.id)}}><i className="fas fa-times fa-lg" id="icon1" ></i></button>{props.text}</li>
            </>
            );  
}
export default Deleteit;
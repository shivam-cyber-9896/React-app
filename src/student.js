import './App.css';
function Student(props)
{
    return(
        <div className="backred">
            <h1>hello student {props.name}</h1>
            <h1>{props.city}</h1>
            <h1>{props.addr.Hno}</h1>
            <h1>{props.addr.Area}</h1>
        </div>
    )
}

export default Student
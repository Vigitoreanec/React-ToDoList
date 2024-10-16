import React from "react";

export default function AddToDo(props) {
    // const style = {
    //     textDecoration: !props.checked ? "line-through" : "none"
    // };

    return <div key={props.id}>
        
<label>
    <input type='checkbox' checked={props.checked}/>
    <span>{props.value}</span>
    <button>X</button>
</label>
       { //key={props.id}
        /*<label>
             <input type="checkbox" onChange={() => props.checked} />
            <span style={style}>{props.value}</span>
        </label>
        <button onClick={props.DeleteTask}>X</button> */}
    </div>
}
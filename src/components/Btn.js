import React from 'react'


const Btn = (props)=>{

console.log(props)
    return(
    <div key={props.id}>
        {props.title}
        {props.description}
    </div>
    )
}
export default Btn
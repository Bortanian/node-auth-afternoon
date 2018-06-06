import React from 'react'

export default function Student(props){
    return(
        <div>
            <p>Name:{props.name}</p>
            <p>Email:{props.email}</p>
            <p>Phone:{props.phone}</p>
            <p>Current Grade:{props.grade}</p>
            <hr />
        </div> 
    )
}
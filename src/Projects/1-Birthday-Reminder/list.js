import React from "react";

const List=(props)=>{
    const {people}= props;
    return <ul>
        {people.map((person)=>{
            const{id,name,age,image}=person;
            return <li key={id} className='person'>
                    <img src={image} alt={name} />
                    <div>
                        <h4>{name}</h4>
                        <p>{age} years</p>
                    </div>
            </li>
        })}
    </ul>
}

export default List;
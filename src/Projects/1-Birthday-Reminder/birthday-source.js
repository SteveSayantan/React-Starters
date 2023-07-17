import React,{useState} from "react";
import data from './data';
import List from './list';


const HappyBirthday=()=>{
    const [people,setPeople]= useState(data);
    return<>
    <main>
    <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people}></List> {/* Setting a prop */}
        <button onClick={()=>setPeople([])}>Clear All</button>
    </section>
    </main>
    </>
}
export default HappyBirthday;
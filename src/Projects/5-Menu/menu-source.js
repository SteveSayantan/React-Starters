import { useState } from 'react';
import Menu from './MenuList'
import Categories from './Categories';
import items from './data';

const allCategories=['all',...new Set(items.map((ele)=>ele.category))]

// console.log(allCategories);
function LandingPage(){

    const[menuItems,setMenuItems]=useState(items);
    const categories=useState(allCategories)[0]; //As we don't need the function

    const filterItems=(category)=>{
        if(category=='all') return setMenuItems(items);
       let newItems= items.filter((item)=>{
           return item.category==category; 
        });
        setMenuItems(newItems);
    }
    
    return <main>
        <section className="menu section">
            <div className="title">
                <h2>our menu</h2>
                <div className="underline"></div>
            </div>
            <Categories filterItems={filterItems} categories={categories}/>
            <Menu items={menuItems}/>
        </section>
    </main>
}

export default LandingPage;
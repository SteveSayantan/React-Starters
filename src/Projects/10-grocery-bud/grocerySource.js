import {useState,useEffect} from 'react'
import List from './list'
import Alert from './alert'

function getItems(){
    let storedList= localStorage.getItem('list')
    return storedList?JSON.parse(storedList):[];
}
const GroceryBud=()=>{
    const [name,setName]=useState('')
    const [list,setList]=useState(getItems())
    const [isEditing,setIsEditing]=useState(false)
    const [editId,setEditID]=useState(null)
    const [alert,setAlert]=useState({show:false,msg:'',type:''})

   useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(list))
   },[list])

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name){
            //display alert
            showAlert(true,'danger','Please provide Value')
        }
        else if(name&& isEditing){
            //deal with edit
            const newList= list.map((item)=>{
                if(item.id==editId){
                    return {...item,title:name}     // setting the 'name' state value as title
                }
                return item
            })
            setList(newList);
            setName('');
            setEditID(null)
            setIsEditing(false)
            showAlert(true,'success','Value Changed');
        }
        else{
            const newItem={id: Date.now().toString(),title:name}
            setList([...list,newItem])
            showAlert(true,'success','Item Added');
            setName('');
        }
    }

    const showAlert=(show=false,type='',msg='')=>{
        setAlert({show,type,msg})
    }

    const clearList=()=>{
        setList([])
        setName('');
        setIsEditing(false);
        showAlert(true,'danger','Empty List')

    }

    const removeItem=(id)=>{
        showAlert(true,'danger','Item Deleted')
        const newList= list.filter((item)=>id!=item.id)
        setList(newList);
        setName('');
        setIsEditing(false);
    }

    const editItem=(id)=>{
        const specificItem= list.find((item)=>item.id==id)
        setIsEditing(true)
        setEditID(id)
        setName(specificItem.title)     // setting the title of that item as name state value
    }


    return <section className="section-center">
        <form onSubmit={handleSubmit} className="grocery-form">
            {alert.show&& <Alert {...alert} removeAlert={showAlert} list={list}/>} 
            <h3>grocery bud</h3>
            <div className="form-control">
            <input type="text"className='grocery' placeholder='e.g. eggs' value={name} onChange={(e)=>setName(e.target.value)} />
            <button type="submit" className="submit-btn">
                {isEditing?'edit':'submit'}  
            </button>
            </div>
        </form>
        {list.length>0 &&
        <div className="grocery-container">
            <List items={list} removeItem={removeItem} editItem={editItem}/>
            <button className="clear-btn" onClick={clearList}>clear items</button>
        </div>
        }
    </section>
}

export default GroceryBud;
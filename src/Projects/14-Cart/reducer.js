 const reducer= (state,action)=>{
    if(action.type=='LOADING'){
        return{...state,loading:true}
    }
    if(action.type=='DISPLAY_ITEMS'){
        return{...state,loading:false,cart:action.info}
    }
    if(action.type=='CLEAR_CART'){
        return {...state,cart:[]};
    }
    if(action.type=='REMOVE'){
        return {...state,cart:state.cart.filter((ele)=>ele.id!=action.info)};
    }
    if(action.type=='INCREASE'){
        let tempCart=state.cart.map((ele)=>{
            if(ele.id==action.info){
                return {...ele,amount:ele.amount+1};
            }
            return ele;
        });
        return {...state,cart:tempCart}
    }
    if(action.type=='DECREASE'){
        let tempCart=state.cart.map((ele)=>{
            if(ele.id==action.info){
                return {...ele,amount:ele.amount-1};
            }
            return ele;
        }).filter((item)=>item.amount>0);
        return {...state,cart:tempCart}
    }
    if(action.type=='GET_TOTAL'){

        let tempObj=state.cart.reduce((prevEle,nextEle)=>{ 

            const{price,amount}=nextEle;
            const total_price=price*amount;

            prevEle.total+=total_price;
            prevEle.amount+=amount;
            return prevEle;
        },
        {total:0,amount:0}) // It is the initial value

        /* 
            We have provided an initial value to the reduce function. The basic idea is, in each iteration collect required value from the items in the original array and update the initial value. Ultimately, return the initial value which contains the total amount and total price.

            For better understanding, revise the reduce function concept.
        
        */

        let{total,amount}=tempObj;

        total=parseFloat(total.toFixed(2))
        return {...state,total,amount}
    }
    throw new Error('no matching action type')
}

export default reducer;
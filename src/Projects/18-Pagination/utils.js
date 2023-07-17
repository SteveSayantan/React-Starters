const paginate = (followers) => {   // This function creates the Array of arrays. Each sub array represents a single page.
    const itemsPerPage=10;
    const pages=Math.ceil(followers.length/itemsPerPage)

    const newFollowers=Array.from({length:pages},(item,index)=>{
        const start=index*itemsPerPage;
        return followers.slice(start,start+itemsPerPage)
    })

    return newFollowers;
}

export default paginate

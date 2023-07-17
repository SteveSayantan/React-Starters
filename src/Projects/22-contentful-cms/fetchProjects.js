import {createClient} from 'contentful'     // This method is a named import from contentful library (separately installed)
import {useState,useEffect} from 'react'


// First, we have to setup a client
const client= createClient({
    space:'yvlgqsqv8sus',                                           // this is the space id
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY      // this is the access token
});


export const useFetchProjects=()=>{
    const [loading, setLoading]=useState(false);
    const [projects,setProjects]=useState([]);

    const fetchData= async()=>{
        setLoading(true);
        try {
            // using getEntries() method we can get all the entries for a particular Content Type        
            const resp= await client.getEntries({content_type:'projects'})      // this is the Content Type ID (can be accessed from Content model section of Contentful site)

            const newArray= resp.items.map(item=>{
                const{fields:{title,url}}=item;
                const {file:{url:img}}= item.fields.image.fields;
                const {id}= item.sys;
                return {title,url,id,img}
            })
            setProjects(newArray);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error);
        }

    }

    useEffect(()=>{
        fetchData()
    },[])

    return {loading,projects};
    
}
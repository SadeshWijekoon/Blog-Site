 import { useParams } from "react-router-dom";
 import articals from './Artical-content'
 
 const Artical = ()=>{
    const {articalId  } = useParams();
    const artical=articals.find(artical=>artical.name===articalId)
    return(
        <>
        <h1>{artical.title}</h1>
        {artical.content.map((paragraph,index)=>(
            <p key={index}>{paragraph}</p>
        ))}
        </>
    )
 }
 export default Artical;
 import { useParams } from "react-router-dom";
 import articals from './Artical-content';
 import NotFound from "./NotFoud";
 
 const Artical = ()=>{ 
    const {articalId  } = useParams();
    const articale=articals.find(articale=>articale.name===articalId)
    if(!articale){
        return <NotFound/>
    }
    return(
        <>
        <h1>{articale.title}</h1>
        {articale.content.map((paragraph,index)=>(
            <p key={index}>{paragraph}</p>
        ))}
        </>
    )
 }
 export default Artical;
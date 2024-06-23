import { Link } from "react-router-dom";
import articals from "./Artical-content";

const ArticalList =()=>{
    return(
        
        <>
          <h1>Articals</h1>
          {articals.map(articale=>(
            <Link className="article-list-item" to ={`/artical/${articale.name}`} key={articale.id}>
                <h3>{articale.title}</h3>
                <p >{articale.content[0].substring(0,150)}...</p>
            </Link>
          ))} 
        </>

    )
}
export default ArticalList;
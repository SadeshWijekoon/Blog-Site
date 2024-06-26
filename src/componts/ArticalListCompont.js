import { Link } from "react-router-dom";
const ArticalListCompont=({articals})=>{
    return(
        <>
        {articals.map(articale=>(
            <Link className="article-list-item" to ={`/artical/${articale.name}`} key={articale.id}>
                <h3>{articale.title}</h3>
                <p >{articale.content[0].substring(0,150)}...</p>
            </Link>
          ))} 
        </>
    )
}
export default ArticalListCompont;
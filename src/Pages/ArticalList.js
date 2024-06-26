
import Articalcontent from "../Pages/Artical-content"
import ArticalListCompont from "../componts/ArticalListCompont";

const ArticalList =()=>{
    return(
        
        <>
          <h1>Articals</h1>
             <ArticalListCompont articals={Articalcontent} />
        </>

    )
}
export default ArticalList;
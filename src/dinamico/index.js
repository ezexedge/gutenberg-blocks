const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload,BlockControls, AlignmentToolbar } = wp.editor
const {Button , IconButton} = wp.components
const { withSelect} = wp.data
/** Import the logo */
import { ReactComponent as Logo } from '../ga-logo.svg';

registerBlockType('ga/dinamico', {
    title: 'GA ultimas recetas', 
    icon: { src: Logo }, 
    category: 'gourmet-artist', 
    edit: withSelect(select => {
        return {
            posts: select("core").getEntityRecords("postType","recetas", {
                per_page: 3,
                offset: 1
            })
        }
    })(({ posts })=>{
        if(!posts){
            return '...cargando'
        }

        if(posts && posts.length === 0){
            return 'no hay resultados'
        }

        console.log(posts)
        return (
            <>
            <h2>Ultimas recetas</h2>


            <ul className="ultimas-recetas contenedor">

                {posts.map(post =>(
                    <li>
                        <img src={post.imagen_destacada} />
                        <div className="contenido">

                                <h3>{post.title.rendered}</h3>
                                <p>
                                    <RichText.Content
                                    
                                    value={post.content.rendered.substring(0,100) + '....'}


                                    
                                    />
                                </p>

                                <a href={post.link} className="boton">Leer mas</a>
                        </div>
                    </li>
                ) )}
                
            </ul>

            </>
        )
    }),
    save: () => {
        return null
    }
})
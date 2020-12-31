const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload,URLInputButton,BlockControls, AlignmentToolbar } = wp.editor
const {Button , IconButton} = wp.components
/** Import the logo */
import { ReactComponent as Logo } from '../ga-logo.svg';

registerBlockType('ga/imagentexto', {
    title: 'GA imagen con texto', 
    icon: { src: Logo }, 
    category: 'gourmet-artist', 
    attributes: {
        appTitulo:{
            type: 'string',
            source: 'html',
            selector: '.imagen-texto-block .contenido h1'
        },
        appTexto:{
            type: 'string',
            source: 'html',
            selector: '.imagen-texto-block .contenido p'
        },
        appImagen: {
            type: 'string',
            source: 'html',
            selector: '.imagen-texto-block img',
            default: Logo
        },
        urlApp:{
            type: 'string',
            source: 'attribute',
            attribute: 'href'
        },
    },supports:{
        align: ['wide','full']
    },
    styles : [
        {
            name: 'default',
            label: 'Azul (default)',
            isDefault: true
        },{
            name: 'verde',
            label: 'verde'
        },
        {
            name: 'red',
            label: 'red'
        }
    ],
    edit: props => {

        const {attributes : {appTitulo,appTexto,appImagen,urlApp},setAttributes} = props



        const onChangeTitulo = nuevoTitulo => {
            setAttributes({appTitulo: nuevoTitulo})
        }

        const onChangeTexto = nuevoTexto => {
            setAttributes({appTexto: nuevoTexto})
        }

        const onSeleccionarImagen = imagen => {
            

            setAttributes({appImagen : imagen.sizes.medium.url})
        }

        const onChangeURL = nuevaURL => {
            setAttributes({urlApp : nuevaURL})

        }

        return(
            <div className="imagen-texto-block">
            <div className="contenedor">
                <div className="contenido">
                    <h1>
                        <RichText

                            placeholder="agregar titulo"
                            value={appTitulo}
                            onChange={onChangeTitulo}
                        
                        />
                    </h1>
                    <p>
                    <RichText
                    placeholder="agregar texto"
                    value={appTexto}
                    onChange={onChangeTexto}
                    />
                     </p>
                    <a href={urlApp} className="boton">Descargar</a>
                    <URLInputButton
                    url={urlApp}
                    onChange={onChangeURL}
                    />
                </div>
    
                <div className="imagen">
                    <img src={appImagen}/>

                    <MediaUpload

                        onSelect={onSeleccionarImagen}
                        type="image"
                        value={appImagen}
                        render={({open}) => (
                            <Button onClick={open}>
                                subir imagen
                            </Button>
                        )}

                        />
                </div>
            </div>
        </div>
        )

    },
    save: props => {


        const {attributes : {appTitulo,appTexto,appImagen,urlApp}} = props


        return(
            <div className="imagen-texto-block">
            <div className="contenedor">
                <div className="contenido">
                    <h1>
                        <RichText.Content
                        value={appTitulo}
                        />
                    </h1>
                    <p>
                    <RichText.Content
                    value={appTexto}
                    />    
                    </p>
                    <a href={urlApp} className="boton">Descargar</a>
                </div>
    
                <div className="imagen">
                    <img src={appImagen}/>

                  
                </div>
            </div>
        </div>
        )

    }

})
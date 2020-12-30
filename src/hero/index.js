const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload,BlockControls, AlignmentToolbar } = wp.editor
const {Button , IconButton} = wp.components
/** Import the logo */
import { ReactComponent as Logo } from '../ga-logo.svg';

registerBlockType('ga/hero', {
    title: 'GA Hero', 
    icon: { src: Logo }, 
    category: 'gourmet-artist', 
    attributes: {
        tituloHero: {
            type: 'string',
            source: 'html',
            selector: '.hero-block h1'
        },
        textoHero:{
            type: 'string',
            source: 'html',
            selector: '.hero-block p'
        },
        imagenHero:{
            type: 'string',
            selector: '.hero-block'
        },
        alinearContenido:{
            type: 'string',
            default: 'center'
        }
        
    },
    supports: {
            
        align: ['wide','full']
    
    },
    edit: props => {

        const {attributes : {tituloHero,textoHero,imagenHero,alinearContenido},setAttributes} = props


        const onChangeTitulo = nuevoTitulo => {
            setAttributes({tituloHero : nuevoTitulo})
        }

        const onChangeTexto = nuevoTexto => {
            setAttributes({textoHero: nuevoTexto})
        }
        const onSeleccionarImagen = nuevaImagen => {
            setAttributes({imagenHero: nuevaImagen.sizes.full.url})
        }

        const onChangeAlinearContenido = nuevaAlineacion => {
            setAttributes({alinearContenido: nuevaAlineacion})
        }

        return (
            <div className="hero-block" style={{backgroundImage: `url(${imagenHero})`}}>

            <BlockControls>
                <AlignmentToolbar
                    onChange={onChangeAlinearContenido}
                />
            </BlockControls>

            <MediaUpload
            onSelect={onSeleccionarImagen}
            type="image"
            value={imagenHero}
            render={({open}) => (
                <IconButton

                onClick={open}
                icon="format-image"
                label="cambiar imagen"
                
                />
            )}
            />
            <h1>
                <RichText
                style={{textAlign: alinearContenido}}
                placeholder="Agrega un titulo"
                value={tituloHero}
                onChange={onChangeTitulo}
                />
            </h1>
            <p>
            <RichText
                style={{textAlign: alinearContenido}}
                placeholder="Agrega un texto"
                value={textoHero}
                onChange={onChangeTexto}
                />
            </p>
        </div>
        )

    },
    save: props => {

        const {attributes : {tituloHero,textoHero,imagenHero,alinearContenido}} = props

        return (
            <div className="hero-block"  style={{backgroundImage: `url(${imagenHero})` , textAlign: alinearContenido}}>
            <h1>
                <RichText.Content value={tituloHero} />
            </h1>
            <p>
                <RichText.Content value={textoHero} />
            </p>
        </div>
        )
    }

})
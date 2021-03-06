const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload,InspectorControls,ColorPalette } = wp.editor
const {Button,PanelBody} = wp.components
/** Import the logo */
import { ReactComponent as Logo } from '../ga-logo.svg';

registerBlockType('ga/testimonial', {
    title: 'GA Testimonial', 
    icon: { src: Logo }, 
    category: 'gourmet-artist', 
    attributes: {
        textoTestimonial : {
            type: 'string',
            source: 'html',
            selector: '.testimonial-block blockquote'
        },
        nombreTestimonial : {
            type: 'string',
            source: 'html',
            selector: '.testimonial-info p'
        },
        imagenTestimonial: {
            type: 'string',
            source: 'attribute',
            attribute: 'src',
            selector: '.testimonial-info img',
            default: Logo
        },
        colorTestimonial: {
            type: 'string'
        }
    },
    edit: props => {
        console.log(props)

        const {attributes: {textoTestimonial ,nombreTestimonial, imagenTestimonial,colorTestimonial},setAttributes} = props


        const onChangeNombreTestimonial = nuevoTestimonial => {

            setAttributes({nombreTestimonial: nuevoTestimonial})

        }

        const onChangeTextoTestimonial = nuevoTexto => {
            setAttributes({textoTestimonial: nuevoTexto})
        }

        const onSeleccionarImagen = imagen => {
            

            setAttributes({imagenTestimonial : imagen.sizes.medium.url})


        }

        const onChangeColorTestimonial = nuevoColor => {
              setAttributes({ colorTestimonial: nuevoColor })
        }

        return(
            <>

            <InspectorControls>
                <PanelBody
                title={"elige tus colores"}
                >
                    <div className="components-base-control">
                        <div className="components-base-control__field">
                            <label className="components-base-control__label">
                                Color de texto y linea
                            </label>
                            <ColorPalette
                                onChange={onChangeColorTestimonial}
                            />
                        </div>

                    </div>
                </PanelBody>
            </InspectorControls>
            <div className="testimonial-block" style={{borderColor: colorTestimonial}}>
            <blockquote>
                <RichText
                placeholder="agrega un texto en testimonial"
                onChange={onChangeTextoTestimonial}
                value={textoTestimonial}
                />
            </blockquote>

            <div className="testimonial-info">
                <img src={imagenTestimonial}/>
                <MediaUpload

                    onSelect={onSeleccionarImagen}
                    type="image"
                    value={imagenTestimonial}
                    render={({open}) => (
                        <Button onClick={open}>
                            subir imagen
                        </Button>
                    )}
                
                />
                <p>
                    <RichText

                        placeholder="Agregar nombre de testimonial"
                        onChange={onChangeNombreTestimonial}
                        value={nombreTestimonial}
                        style={{color: colorTestimonial}}

                    />
                </p>
            </div>
        </div>
        </>
        )
    },
    save: props => {
   
        const {attributes: {textoTestimonial,nombreTestimonial,imagenTestimonial ,colorTestimonial}} = props

        
        return(
            <div className="testimonial-block" style={{borderColor: colorTestimonial}}>
            <blockquote>
                <RichText.Content value={textoTestimonial}/>
            </blockquote>

            <div className="testimonial-info">
                <img src={imagenTestimonial}/>

                <p style={{color:colorTestimonial}}>
                    <RichText.Content
                    
                    value={nombreTestimonial}
                    style={{color: colorTestimonial}}

                    />
                </p>
            </div>
        </div>
        )
    }

    })

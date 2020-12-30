const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload } = wp.editor
const {Button} = wp.components
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
        }
    },
    edit: props => {
        console.log(props)

        const {attributes: {textoTestimonial ,nombreTestimonial, imagenTestimonial},setAttributes} = props


        const onChangeNombreTestimonial = nuevoTestimonial => {

            setAttributes({nombreTestimonial: nuevoTestimonial})

        }

        const onChangeTextoTestimonial = nuevoTexto => {
            setAttributes({textoTestimonial: nuevoTexto})
        }

        const onSeleccionarImagen = imagen => {
            

            setAttributes({imagenTestimonial : imagen.sizes.medium.url})




        }

        return(
            <div className="testimonial-block">
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

                    />
                </p>
            </div>
        </div>
        )
    },
    save: props => {
   
        const {attributes: {textoTestimonial,nombreTestimonial,imagenTestimonial }} = props

        
        return(
            <div className="testimonial-block">
            <blockquote>
                <RichText.Content value={textoTestimonial}/>
            </blockquote>

            <div className="testimonial-info">
                <img src={imagenTestimonial}/>
                <p>
                    <RichText.Content
                    
                    value={nombreTestimonial}

                    />
                </p>
            </div>
        </div>
        )
    }

    })

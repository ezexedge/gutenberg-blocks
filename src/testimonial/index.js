const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor

/** Import the logo */
import { ReactComponent as Logo } from '../ga-logo.svg';

registerBlockType('ga/testimonial', {
    title: 'GA Testimonial', 
    icon: { src: Logo }, 
    category: 'gourmet-artist', 
    edit: () => {

        const onChangeTextoTestimonial = nuevoTexto => {
            console.log(nuevoTexto)
        }

        return(
            <div className="testimonial-block">
            <blockquote>
                <RichText
                placeholder="agrega un texto en testimonial"
                onChange={onChangeTextoTestimonial}
                />
            </blockquote>

            <div className="testimonial-info">
                <img src="img/testimonial.jpg"/>
                <p>- Alice White <span>WebDev CEO</span></p>
            </div>
        </div>
        )
    },
    save: () => {
        return(
            <p>Esto se ve en el frontend modificado</p>
        )
    }

    })

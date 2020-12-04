const { registerBlockType } = wp.blocks;

/** Import the logo */
import { ReactComponent as Logo } from '../ga-logo.svg';

registerBlockType('ga/testimonial', {
    title: 'GA Testimonial', 
    icon: { src: Logo }, 
    category: 'gourmet-artist', 
    edit: () => {
        return(
            <p>Esto se ve en el editor</p>
        )
    },
    save: () => {
        return(
            <p>Esto se ve en el frontend</p>
        )
    }

    })

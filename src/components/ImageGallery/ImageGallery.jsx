import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ children }) => {
    return (
        <Gallery className="gallery">
            <div>{ children }</div>
        </Gallery>
    )
};
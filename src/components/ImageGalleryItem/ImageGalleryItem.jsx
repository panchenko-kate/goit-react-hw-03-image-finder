import { Item, Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ openModal, pictures }) => {
    return (
        pictures.map(({ id, webformatURL, largeImageURL, tags }) => (
        <Item openModal={openModal} key={id}>
            <Img id={id} src={webformatURL} alt={tags} 
            onClick={()=> {openModal(largeImageURL, tags)}} />
        </Item>
        ))
    )
};
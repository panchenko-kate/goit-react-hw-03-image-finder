import { Item, Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ onClick, pictures }) => {
    return (
        pictures.map(item => (
        <Item onClick={onClick} key={item.id}>
            <Img id={item.id} src={item.webformatURL} alt={item.tags} />
        </Item>
        ))
    )
};
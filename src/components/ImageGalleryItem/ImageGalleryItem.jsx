
import { Item, Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ imgSrc }) => {
    return (
        <Item>
            <Img src={imgSrc} alt="" />
        </Item>
    )
};
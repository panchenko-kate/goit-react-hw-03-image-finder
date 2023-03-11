import { Item, Img } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

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

  ImageGalleryItem.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
      })
    ),
    openModal: PropTypes.func.isRequired,
  };
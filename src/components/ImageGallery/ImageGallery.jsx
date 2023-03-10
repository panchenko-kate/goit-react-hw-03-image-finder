import axios from "axios";
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import Modal from '../Modal/Modal';

export default class ImageGallery extends Component {
    state = {
        showModal: false,
        // tag: '',
        pictures: null,
        loading: false,
        largeUrl: null,
        alt: '',
        selectedImage: null,
    };

    componentDidUpdate(prevProps, prevState) {
        const nextTag = this.props.tag;

        if (prevProps.tag !== nextTag) {
            axios.get(`https://pixabay.com/api/?key=33000427-89fe7bf8f999bb2d1ca661cd2&q=${nextTag}&image_type=photo&orientation=horizontal&per_page=12`)
            .then(res => res.data.hits)
            .then(pictures => this.setState({ pictures }))
            .finally(() => this.setState({ loading: false }));
        }
    }

    onClickItem = e => {
        const ItemId = e.target.id;
        
        this.setState({
            selectedImage: ItemId,
        })
    };

    selectedPicture = () => {
        const data = this.state.pictures.find(items => items.id === this.state.selectedImage)
        console.log(data)
        // this.setState({
        //     largeUrl: data.largeUrl,
        //     // alt: '',
        // })
        axios.get(`https://pixabay.com/api/?key=33000427-89fe7bf8f999bb2d1ca661cd2&id=${this.state.selectedPicture}&image_type=photo&orientation=horizontal`)
            .then(res => res.data.hits)
            .then(picture => this.setState({ largeUrl: picture.largeUrl }))
    }
    
    toggleModal = () => {
        this.setState(({ showModal }) => ({
          showModal: !showModal,
        }))
    };


    render () {
        const { showModal, loading, pictures } = this.state;
        return (
        <Gallery className="gallery" onClick={this.onClickItem}>
            {loading && <h1>Downloading</h1>}
            {showModal && 
            <Modal onClose={this.toggleModal} 
            picture={pictures.largeImageURL}
            alt={pictures.tags} />}
            {pictures && 
            <ImageGalleryItem onClick={this.toggleModal}
            pictures={pictures} />
            }
             
        </Gallery>
    )}
};
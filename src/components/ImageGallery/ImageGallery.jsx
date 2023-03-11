import axios from "axios";
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import Modal from '../Modal/Modal';

export default class ImageGallery extends Component {
    state = {
        showModal: false,
        pictures: null,
        loading: false,
        modalImg: null,
        alt: '',
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

    openModal = (largeImageURL, tags) => {
        this.setState({
            showModal: true,
            modalImg: largeImageURL,
            alt: tags,
        });
    };
    
    closeModal = () => {
        this.setState({
            showModal: false,
            modalImg: null,
        });
    };


    render () {
        const { showModal, loading, pictures } = this.state;
        return (
        <Gallery className="gallery">
            {loading && <h1>Downloading</h1>}
            {showModal && 
            <Modal onClose={this.closeModal} 
            alt={this.state.tag}
            img={this.state.modalImg}/>}
            {pictures && 
            <ImageGalleryItem openModal={this.openModal}
            pictures={pictures} />
            }
             
        </Gallery>
    )}
};
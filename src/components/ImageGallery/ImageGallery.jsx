// import axios from "axios";
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import Modal from '../Modal/Modal';

export default class ImageGallery extends Component {
    state = {
        showModal: false,
        // tag: '',
        pictures: null,

    };

    componentDidUpdate(prevProps, prevState) {
        const nextTag = this.props.tag;

        if (prevProps.tag !== nextTag) {
            // fetch(`https://pixabay.com/api/?q=${this.props.tag}&key=33000427-89fe7bf8f999bb2d1ca661cd2&id=2295434&image_type=photo&orientation=horizontal`)
            fetch(`https://pixabay.com/api/?key=33000427-89fe7bf8f999bb2d1ca661cd2&q=${nextTag}&image_type=photo&orientation=horizontal&per_page=12`)
            .then(res => res.json())
            .then(pictures => this.setState({ pictures }))
        }

        // .then(res => res.json())
        // .then(pictures => this.setState({ pictures }))
        // .finally(() => this.setState({ loading: false }));
    }

    // componentDidMount() {
    //     this.setState({ loading: true });
    
    //     fetch('https://pixabay.com/api/?key=33000427-89fe7bf8f999bb2d1ca661cd2&id=2295434&image_type=photo')
    //     .then(res => res.json())
    //     .then(console.log)
    //     // .then(pictures => this.setState({ pictures }))
    //     // .finally(() => this.setState({ loading: false }));
    //   };
    

    toggleModal = () => {
        this.setState(({ showModal }) => ({
          showModal: !showModal,
        }))
    };


    render () {
        const { showModal } = this.state;
        return (
        <Gallery className="gallery">
            {showModal && 
            <Modal onClose={this.toggleModal} />}
            {/* <p>{this.props.tag}</p> */}
            {this.state.pictures && 
            <ImageGalleryItem onClick={this.toggleModal}
            pictures={this.state.pictures} />
            }
             
        </Gallery>
    )}
};
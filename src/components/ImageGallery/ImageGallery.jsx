import axios from "axios";
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import Modal from '../Modal/Modal';
import Button from "components/Button/Button";
import { Loader } from "components/Loader/Loader";

export default class ImageGallery extends Component {
    state = {
        showModal: false,
        pictures: null,
        loading: false,
        modalImg: null,
        alt: '',
        page: 1,
        perPage: 12,
        totalItems: null,
    };

    componentDidUpdate(prevProps, prevState) {
        const nextTag = this.props.tag;

        if (prevProps.tag !== nextTag || prevState.perPage !== this.state.perPage) {
            this.setState({
                loading: true
             })
            axios.get(`https://pixabay.com/api/?key=33000427-89fe7bf8f999bb2d1ca661cd2&q=${nextTag}&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}&page=${this.state.page}`)
            .then(res => res.data.hits)
            .then(pictures => this.setState({ pictures }))
            .catch(error => {
                console.log(error)})
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

    loadMoreImages = (pictures) => {
        this.setState(prevState => ({ 
            perPage: prevState.perPage + Number(pictures.perPage)
        }));
    };


    render () {
        const { showModal, loading, pictures, tag, modalImg, totalItems } = this.state;
        // const hasMorePictures = totalItems > pictures.length;
        return (
        <div>
        {loading && <Loader />}
        <Gallery className="gallery">
            {showModal && 
            <Modal onClose={this.closeModal} 
            alt={tag}
            img={modalImg}/>}
            {pictures && 
            <ImageGalleryItem openModal={this.openModal}
            pictures={pictures} />
            }
        </Gallery>
            {pictures !== null && <Button onClick={this.loadMoreImages} />}
        </div>
    )}
};
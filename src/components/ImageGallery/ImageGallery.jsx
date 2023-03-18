import axios from "axios";
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import Modal from '../Modal/Modal';
<<<<<<< HEAD
import Button from "components/Button/Button";
import { Loader } from "components/Loader/Loader";
=======
>>>>>>> parent of c4521de (add load mode button)

export default class ImageGallery extends Component {
    state = {
        showModal: false,
        pictures: null,
        loading: false,
        modalImg: null,
        alt: '',
<<<<<<< HEAD
        page: 1,
        perPage: 12,
        totalItems: null,
=======
>>>>>>> parent of c4521de (add load mode button)
    };

    componentDidUpdate(prevProps, prevState) {
        const nextTag = this.props.tag;

<<<<<<< HEAD
        if (prevProps.tag !== nextTag || prevState.perPage !== this.state.perPage) {
            this.setState({
                loading: true
             })
            axios.get(`https://pixabay.com/api/?key=33000427-89fe7bf8f999bb2d1ca661cd2&q=${nextTag}&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}&page=${this.state.page}`)
=======
        if (prevProps.tag !== nextTag) {
            axios.get(`https://pixabay.com/api/?key=33000427-89fe7bf8f999bb2d1ca661cd2&q=${nextTag}&image_type=photo&orientation=horizontal&per_page=12`)
>>>>>>> parent of c4521de (add load mode button)
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

<<<<<<< HEAD
    loadMoreImages = (pictures) => {
        this.setState(prevState => ({ 
            perPage: prevState.perPage + Number(pictures.perPage)
        }));
    };


    render () {
        const { showModal, loading, pictures, tag, modalImg } = this.state;
=======

    render () {
        const { showModal, loading, pictures } = this.state;
>>>>>>> parent of c4521de (add load mode button)
        return (
        <div>
        {loading && <Loader />}
        <Gallery className="gallery">
<<<<<<< HEAD
=======
            {loading && <h1>Downloading</h1>}
>>>>>>> parent of c4521de (add load mode button)
            {showModal && 
            <Modal onClose={this.closeModal} 
            alt={this.state.tag}
            img={this.state.modalImg}/>}
            {pictures && 
            <ImageGalleryItem openModal={this.openModal}
            pictures={pictures} />
            }
<<<<<<< HEAD
=======
             
>>>>>>> parent of c4521de (add load mode button)
        </Gallery>
            {pictures !== null && <Button onClick={this.loadMoreImages} />}
        </div>
    )}
};
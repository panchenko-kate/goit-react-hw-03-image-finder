import axios from "axios";
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import Modal from '../Modal/Modal';
import { Button } from "components/Button/Button";

export default class ImageGallery extends Component {
    state = {
        showModal: false,
        pictures: [],
        loading: false,
        modalImg: null,
        alt: '',
        page: 1,
        totalItems: null,
    };

    componentDidUpdate(prevProps, prevState) {
        const nextTag = this.props.tag;

        if (prevProps.tag !== nextTag || prevState.page !== this.state.page) {
            axios.get(`https://pixabay.com/api/?key=33000427-89fe7bf8f999bb2d1ca661cd2&q=${nextTag}&image_type=photo&orientation=horizontal&per_page=12`)
            .then(res => res.data.hits)
            // .then(res => {
            //     const newPictures = res.data.hits;
            //     const totalHits = res.data.totalhits;  
                
            //     this.setState((prevState) => ({ 
            //         pictures: [...prevState.pictures, ...newPictures], 
            //         totalItems: totalHits,
            //         loading: false,
            //     }));
            // })
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

    loadMoreImages = () => {
        this.setState(prevState => ({ 
            page: prevState.page + 1, loading: true 
        }));
    }


    render () {
<<<<<<< Updated upstream
        const { showModal, loading, pictures, tag, modalImg, totalItems } = this.state;
        // const hasMorePictures = totalItems > pictures.length;


=======
        const { showModal, loading, pictures, tag, modalImg } = this.state;
>>>>>>> Stashed changes
        return (
        <Gallery className="gallery">
            {loading && <h1>Loading..</h1>}
            {showModal && 
            <Modal onClose={this.closeModal} 
            alt={tag}
            img={modalImg}/>}
            {pictures && 
            <ImageGalleryItem openModal={this.openModal}
            pictures={pictures} />
            }
            {/* {hasMorePictures && !loading && ( */}
            <Button loadMoreImages={this.loadMoreImages} />
            {/* )} */}
        </Gallery>
    )}
};
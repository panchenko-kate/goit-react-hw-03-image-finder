import { Component } from 'react';
import Modal from './Modal/Modal';
import { Application } from 'components/App.styled'
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import SearchBar from './Searchbar/Searchbar';


export class App extends Component {
  state = {
    showModal: false,
    pictures: null,
    loading: false,
    tag: '',
  }

  componentDidMount() {
    this.setState({ loading: true });

    fetch('https://pixabay.com/api/?key=33000427-89fe7bf8f999bb2d1ca661cd2&id=2295434&image_type=photo')
    .then(res => res.json())
    .then(pictures => this.setState({ pictures }))
    .finally(() => this.setState({ loading: false }));
  };

  // componentDidUpdate(prevProps, prevState) {

  // };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }))
  };

  handleFormSubmit = tag => {
    this.setState({ tag });
  };

  render() {
    const { showModal } = this.state;

    return (
      <Application>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <button type='button' onClick={this.toggleModal}>Open</button>
        {showModal && 
        <Modal onClose={this.toggleModal} />}
        {this.state.loading && <h1>Downloag</h1>}
        {this.state.pictures && (<ImageGallery>
          <ImageGalleryItem imgSrc={this.state.pictures.webformatURL} />
          {/* <img src={this.state.pictures.largeImageURL} alt="" /> */}
        </ImageGallery>)}
      </Application>
    )
  };
};

import { Component } from 'react';
import { Application } from 'components/App.styled'
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './Searchbar/Searchbar';


export class App extends Component {
  state = {
    // showModal: false,
    // pictures: null,
    loading: false,
    tag: '',
  }

  // componentDidMount() {
  //   this.setState({ loading: true });

  //   fetch(`https://pixabay.com/api/?q=cat&key=33000427-89fe7bf8f999bb2d1ca661cd2&id=2295434&image_type=photo&orientation=horizontal`)
  //   .then(res => res.json())
  //   .then(pictures => this.setState({ pictures }))
  //   .finally(() => this.setState({ loading: false }));
  // };

  // componentDidUpdate(prevProps, prevState) {

  // };

  handleFormSubmit = tag => {
    this.setState({ tag });
  };

  render() {

    return (
      <Application>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {this.state.loading && <h1>Downloag</h1>}
        {/* {this.state.pictures && ( */}
        <ImageGallery tag={this.state.tag}
         />
        {/* )} */}
      </Application>
    )
  };
};

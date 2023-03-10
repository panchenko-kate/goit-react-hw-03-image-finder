import { Component } from 'react';
import { Application } from 'components/App.styled'
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './Searchbar/Searchbar';


export class App extends Component {
  state = {
    tag: '',
  }

  handleFormSubmit = tag => {
    this.setState({ tag });
  };

  render() {

    return (
      <Application>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery tag={this.state.tag} />
      </Application>
    )
  };
};

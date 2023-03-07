import { Component } from 'react';
import Modal from './Modal/Modal';
import { Application } from 'components/App.styled'


export class App extends Component {
  state = {
    showModal: false,
  }

  // componentDidMount() {

  // };

  // componentDidUpdate(prevProps, prevState) {

  // };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }))
  };

  render() {
    const { showModal } = this.state;

    return (
      <Application>
        <button type='button' onClick={this.toggleModal}>Open</button>
        {showModal && 
        <Modal onClose={this.toggleModal} />}
      </Application>
    )
  };
};

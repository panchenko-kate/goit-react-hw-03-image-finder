import { Component } from 'react';
import Modal from './Modal/Modal';
import { Application } from 'components/App.styled'


export class App extends Component {
  state = {
    showModal: false,
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }))
  }

  render() {
    return (
      <Application>
        <Modal />
      </Application>
    )
  }
};

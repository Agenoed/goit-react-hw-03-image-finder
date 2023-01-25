import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    return (
      <>
        <img
          src={this.props.image.webformatURL}
          alt={this.props.image.tags}
          className={css.ImageGalleryItemImage}
          onClick={this.toggleModal}
        />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img
              src={this.props.image.largeImageURL}
              alt={this.props.image.tags}
            />
          </Modal>
        )}
      </>
    );
  }
}

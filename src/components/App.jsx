import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import * as basicLightbox from 'basiclightbox';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { fetchImages } from 'helpers/api';
import { load, save } from 'helpers/storage';

export class App extends Component {
  state = {
    loading: false,
    errorMsg: false,
    query: '',
    images: [],
    total: 0,
    page: 1,
    perPage: 12,
    imgURL: '',
  };

  componentDidMount() {
    const query = load('query');
    if (query) this.setState({ query });
  }

  componentDidUpdate(pProps, { query, page }) {
    if (query !== this.state.query || page !== this.state.page) {
      this.getFetch(this.state.query, this.state.page);
    }
  }

  componentWillUnmount() {
    save('query', this.state.query);
  }

  handleSubmit = e => {
    e.preventDefault();
    const query = e.target.query.value.trim();
    if (query !== this.state.query) {
      this.setState({ query, page: 1 });
    }
  };

  handleLoadMore = () => {
    const { query, page } = this.state;
    this.getFetch(query, page + 1, true);
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  handleModal = imgURL => {
    console.log('img', imgURL);
    this.setState({ imgURL });
  };

  getFetch = async (query, page, add) => {
    console.log(query, page);
    const options = { params: { q: query, page } };
    try {
      this.setState({ loading: true, errorMsg: false });
      const { hits, totalHits } = await fetchImages(options);
      if (this.total !== totalHits) this.setState({ total: totalHits });
      add
        ? this.setState(prev => ({
            images: [...prev.images, hits],
          }))
        : this.setState({ images: hits });
    } catch (error) {
      this.setState({ errorMsg: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { images, perPage, loading, page, imgURL } = this.state;
    const isLoadBtn = images.total / (perPage * page) > 1;
    const isImages = Boolean(images.length);
    const isModalVision = Boolean(imgURL);
    return (
      <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
      >
        <Searchbar onSubmit={this.handleSubmit} />
        {isImages && (
          <ImageGallery images={images} handleModal={this.handleModal} />
        )}
        {isLoadBtn && <Button onClick={this.handleLoadMore} />}
        {loading && <Loader />}
        {isModalVision && (
          <Modal imgURL={imgURL} handleModal={() => this.handleModal('')} />
        )}
      </div>
    );
  }
}

// const instance = basicLightbox.create(`
// 	<div class="overlay">
//   <div class="modal">
//     <img src="" alt="" />
//   </div>
// </div>
// `);

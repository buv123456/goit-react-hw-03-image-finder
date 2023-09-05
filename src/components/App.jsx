import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchImages } from 'helpers/api';
import { load, save } from 'helpers/storage';

export class App extends Component {
  state = {
    query: '',
    images: [],
    addImages: false,
    total: 0,
    page: 1,
    perPage: 12,
  };

  componentDidMount() {
    const query = load('query');
    if (query) this.setState({ query });
  }

  componentDidUpdate(pProps, { query, page }) {
    if (query !== this.state.query || page !== this.state.page) {
      this.getFetch(this.state.query, this.state.page, this.state.addImages);
      save('query', this.state.query);
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const query = `${Date.now()}/${e.target.query.value.trim()}`;
    if (query !== this.state.query) {
      this.setState({ query, page: 1, addImages: false });
    }
  };

  handleLoadMore = () => {
    this.setState(prev => ({
      page: prev.page + 1,
      addImages: true,
    }));
  };

  getFetch = async (query, page, add) => {
    const toastId = toast.loading('Loading...');
    const options = { params: { q: query.slice(14), page } };
    try {
      const { hits, totalHits } = await fetchImages(options);
      if (this.total !== totalHits) this.setState({ total: totalHits });

      add
        ? this.setState(prev => ({
            images: [...prev.images, ...hits],
          }))
        : this.setState({ images: hits });

      toast.success('Data comes. All is OK.', {
        id: toastId,
        duration: 4000,
      });
    } catch (error) {
      toast.error('Something goes wrong. Reload page');
    } finally {
      toast.dismiss(toastId);
    }
  };

  render() {
    const { images, perPage, page, total, query } = this.state;
    const isLoadBtn = total / (perPage * page) > 1;
    const isImages = Boolean(images.length);
    return (
      <div>
        <Searchbar
          onSubmit={this.handleSubmit}
          query={query && query.slice(14)}
        />
        {isImages && <ImageGallery images={images} />}
        {isLoadBtn && <Button onClick={this.handleLoadMore} />}
        <Toaster position="top-right" reverseOrder={false} gutter={8} />
      </div>
    );
  }
}

import { Searchbar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchImages } from 'helpers/api';

export class App extends Component {
  state = {
    query: '',
    images: [],
    total: 0,
    page: 1,
    perPage: 12,
  };

  componentDidUpdate(pProps, { query, page }) {
    if (query !== this.state.query || page !== this.state.page) {
      const { query, page, perPage } = this.state;
      this.getFetch(query, page, perPage);
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const newQuery = e.target.query.value.trim();
    if (!newQuery) {
      toast.error('There is no request');
      return;
    }
    const query = `${Date.now()}/${newQuery}`;

    if (query !== this.state.query) {
      this.setState({ query, page: 1, images: [] });
    }
  };

  handleLoadMore = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  getFetch = async (query, page, per_page) => {
    const toastId = toast.loading('Loading...');
    const toastIdOptions = {
      id: toastId,
      duration: 3000,
    };
    const options = { params: { q: query.slice(14), page, per_page } };

    try {
      const { hits, totalHits } = await fetchImages(options);
      if (!hits.length) {
        toast('There are no images for your request', toastIdOptions);
      } else {
        this.setState(prev => ({
          images: [...prev.images, ...hits],
        }));
        toast.success(
          `${
            hits.length + this.state.images.length
          } from ${totalHits} images comes. All is OK.`,
          toastIdOptions
        );
        if (this.total !== totalHits) this.setState({ total: totalHits });
      }
    } catch (error) {
      toast.error('Something goes wrong. Reload page', toastIdOptions);
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

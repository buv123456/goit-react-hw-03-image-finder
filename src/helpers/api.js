import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '38526354-71390ec20934c98ef5a24eda8',
  per_page: '12',
  image_type: 'photo',
  orientation: 'horizontal',
};

export const fetchImages = async params => {
  const { data } = await axios(params);
  console.log(data);
  return data;
};

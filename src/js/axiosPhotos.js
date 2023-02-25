import axios from 'axios';

export const objectPage = {
	page: 1, 
	per_page: 40,
	searchValue: '',
} 

const BASE_URL = 'https://pixabay.com/api/';

export const getData = async (searchValue) => {

	const response = await axios.get(
		`${BASE_URL}?key=33675530-14a54e49ac2d12a2b0a037dca&q=${searchValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${objectPage.page}&per_page=${objectPage.per_page}`);
	return response.data; 	  
};

export function incrementPage() {
   objectPage.page += 1;
  }

export function resetPage() {
  return objectPage.page = 1;
  }
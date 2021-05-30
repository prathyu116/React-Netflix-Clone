import {API_KEY} from './constants/constant'


export const original =`discover/tv?api_key=${API_KEY}&with_networks=213`; 
export const romantic =`discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const horror =`discover/movie?api_key=${API_KEY}&with_genres=27`;
export const action =`discover/movie?api_key=${API_KEY}&with_genres=28`;
export const comedy=`discover/movie?api_key=${API_KEY}&with_genres=35`;
export const trending=`trending/all/week?api_key=${API_KEY}&language=en-US`;
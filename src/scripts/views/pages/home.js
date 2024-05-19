import RestaurantSource from '../../data/restaurant-resource';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import '../../../components/hero-element.js';
import '../../../components/resto-list.js';

const Home = {
  async render() {
    return `
    <hero-element></hero-element>
    <restaurant-list></restaurant-list>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantContainer = document.querySelector('restaurant-list');
    const restoList =
      restaurantContainer._shadowRoot.querySelector('#restoList');

    restaurants.forEach((restaurant) => {
      restoList.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;

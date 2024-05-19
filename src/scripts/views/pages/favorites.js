import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
    <section class="content">
      <h2 class="page-title"><i class="fa fa-star" aria-hidden="true"></i> Your Favorite Resto <i class="fa fa-star" aria-hidden="true"></i></h2>
      <div id="restoList" class="resto-list">
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restoList');

    if (restaurants.length === 0) {
      restaurantContainer.innerHTML =
        '<h3>No favorite restaurants found...</h3>';
      return;
    }

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorites;

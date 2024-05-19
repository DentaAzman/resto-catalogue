import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <article class="resto-detail resto-item">
    <div class="resto-item__thumbnail">
      <img src="${`${CONFIG.SMALL_IMG_URL}/${restaurant.pictureId}`}" alt="${
  restaurant.name || '-'
}" class="resto-item__img">
      <div class="resto-item__city-container">
        <p class="resto-item__city" tabindex="0">City: ${
          restaurant.city || '-'
        }</p>
      </div>
    </div>
    <div class="resto-item__info">
      <p class="resto-item__rating" tabindex="0">Rating: ⭐️${
        restaurant.rating || '-'
      }</p><br>
      <h3 class="resto-item__name" tabindex="0"><a href="/#/detail/${
        restaurant.id
      }">${restaurant.name || '-'}</a></h3><br>

      <p class="resto-item__description" tabindex="0">${
        restaurant.description || '-'
      }</p>
    </div>
  </article>
`;

const createRestaurantDetailTemplate = (data) => `
  <h2 class="resto-detail__name" tabindex="0">${data.restaurant.name}</h2>
  <div class="resto-detail__picture-container">
  <img class="resto-detail__picture" src="${CONFIG.LARGE_IMG_URL}/${
  data.restaurant.pictureId
}" alt="${data.restaurant.name}">
</div>
<div class="resto-detail__rating-description-container">
  <p class="resto-detail__rating" tabindex="0"><b>Rating: </b> ⭐️${
    data.restaurant.rating
  }</p><br>
  <p class="resto-detail__address" tabindex="0"><b>Address:</b> ${
    data.restaurant.address
  }</p><br>
  <p class="resto-detail__city tabindex="0"><b>City:</b> ${
    data.restaurant.city
  }</p><br>

  <h3 tabindex="0">Description</h3><br>
  <p class="resto-detail__description" tabindex="0"> ${
    data.restaurant.description
  }</p>
</div>
<br>

  <h3 tabindex="0">Menu</h3>
  <div class="resto-detail__menu">
  <div class="resto-detail__menu__list">
    <p class="resto-detail__foods" tabindex="0"><b>Foods:</b> </p>
    <ul>
      ${data.restaurant.menus.foods
        .map(
          (food) =>
            `<li tabindex="0">
              ${food.name}
            </li>`
        )
        .join('')}
    </ul><br>
  </div>
  <div class="resto-detail__menu__list">
    <p class="resto-detail__drinks" tabindex="0"><b>Drinks:</b> </p>
    <ul>
      ${data.restaurant.menus.drinks
        .map(
          (drink) =>
            `<li tabindex="0">
              ${drink.name}
            </li>`
        )
        .join('')}
    </ul>
  </div>
</div><br>

  <h3 tabindex="0">Reviews</h3>
  <div class="resto-detail__reviews-container">
    <ul>
    ${data.restaurant.customerReviews
      .map(
        (customer) =>
          `<li class="resto-detail__review" tabindex="0">
      <span class="resto-detail__reviewers-name">${customer.name}</span><br>
      <span class="resto-detail__reviewers-comment">${customer.review}</span><br>
      <span class="resto-detail__reviewers-date">${customer.date}</span>
    </li>`
      )
      .join('')}
    </ul>
  </div>
`;

const createFavoriteRestaurantButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
  <i class="fa fa-star-o" aria-hidden="true"></i>
  </button>
`;

const createUnfavoriteRestaurantButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
  <i class="fa fa-star" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createFavoriteRestaurantButtonTemplate,
  createUnfavoriteRestaurantButtonTemplate,
};

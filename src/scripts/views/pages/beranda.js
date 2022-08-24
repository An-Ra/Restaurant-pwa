import restaurantdb from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const beranda = {
  async render() {
    return `
    <img class="heros" src='heros/hero.jpg'></img>
      <div class="content">
        <h2 class="content__heading">Daftar Restaurant</h2>
        <div id="restaurants" class="restaurants">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await restaurantdb.beranda();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default beranda;

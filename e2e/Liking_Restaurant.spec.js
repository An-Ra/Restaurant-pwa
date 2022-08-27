const assert = require('assert');
const { async } = require('regenerator-runtime');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('test something', async ({ I }) => {
  I.see('Belum Ada Restoran Favorit Kamu', '.favorite-restaurant-not-found');
  I.amOnPage('/');
  I.waitForElement('.restaurant-item .restaurant-item__content button', 10);
  I.seeElement('.restaurant-item .restaurant-item__content button');
  const firstRestaurant = locate('.restaurant-item .restaurant-item__content button').first();
  const firstRestaurantTitle = await I.grabTextFrom('.restaurant-item .restaurant-item__content h3').first;
  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item .restaurant-item__content h3');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item .restaurant-item__content h3').first;
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  I.click(firstRestaurant);
  I.seeElement('[aria-label="unlike this restaurant"]');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  pause();
});

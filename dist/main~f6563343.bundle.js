(()=>{"use strict";var n,r={510:(n,r,a)=>{a.d(r,{YF:()=>e,a$:()=>p,ci:()=>o,ty:()=>i,yK:()=>t});var A=a(961),e=(a(90),a(770),function(n){return'\n  <img id="maincontent" alt="Gambar Restaurant '.concat(n.name,'" class="img-detail lazyload" data-src="').concat(A.Z.BASE_IMAGE_URL).concat(n.pictureId,'"></img>\n  <hr/>\n  <div id="restaurant-info">\n  <h2>').concat(n.name,"</h2> <h3>⭐️").concat(n.rating,"</h3>\n  <p>").concat(n.address," | ").concat(n.city,"</p>\n  <p>").concat(n.description,'</p>\n  </div>\n  <hr/>\n  <div id="menu-info">\n  <h2>Menu</h2>\n  <div class="menu">\n  <ul>\n  <h3>Minuman</h3>\n  ').concat(n.menus.drinks.map((function(n){return"<li>".concat(n.name,"</li>")})).join(""),"\n</ul>\n<ul>\n<h3>Makanan</h3>\n  ").concat(n.menus.foods.map((function(n){return"<li>".concat(n.name,"</li>")})).join(""),'\n</ul>\n</div>\n</div>\n<hr/>\n<div id="section-ulasan">\n<h3> Review </h3>\n<div class="container-ulasan">\n').concat(n.customerReviews.map((function(n){return'<div class="card">\n  <h3>Nama : '.concat(n.name,'</h3>\n  <h4>"').concat(n.review,'"</h4>\n  <p>Tanggal : ').concat(n.date,"</p>\n  </div>  \n  ")})).join(""),'\n  </div>\n</div>\n<hr/>\n<div id="pendapat">\n<h3> Ulasan Kamu </h3>\n<form>\n<input type="text" class="inputreview" placeholder="Nama" required></input>\n<textarea type="text" class="namereviewer" placeholder="Ulasan Misal : Makanan Nya enak" required></textarea>\n<button class="kirim-ulasan" aria-label="Kirim Ulasan">Kirim Ulasan</button>\n</form>\n</div>\n</div>\n  </div>\n')}),t=function(n){return'\n  <div class="restaurant-item">\n    <div class="restaurant-item__header">\n        <img class="restaurant-item__header__poster lazyload" alt="'.concat(n.name,'"\n        data-src="').concat(A.Z.BASE_IMAGE_URL).concat(n.pictureId,'">\n        <div class="restaurant-item__header__rating">\n            <p>⭐️<span class="restaurant-item__header__rating__score">').concat(n.rating,'</span></p>\n        </div>\n    </div>\n    <div class="restaurant-item__content">\n        <h3>').concat(n.name,"</h3>\n        <p>").concat(n.description,"</p>\n        <button onclick=\"location.href='","#/detail/".concat(n.id),'\'" type="button" aria-label="lihat lebih detail">Lihat</button>\n        </div>\n  </div>\n  ')},i=function(){return'\n  <button aria-label="like this restaurant" id="likeButton" class="like">\n     <i class="fa fa-heart-o" aria-hidden="true"></i>\n  </button>\n'},o=function(){return'\n  <button aria-label="unlike this restaurant" id="likeButton" class="like">\n    <i class="fa fa-heart" aria-hidden="true"></i>\n  </button>\n'},p=function(){return'\n      <div id="UnavailableFavorite">\n      <h1 class="favorite-restaurant-not-found">Belum Ada Restoran Favorit Kamu</h1>\n      </div>\n'}},948:(n,r,a)=>{a.d(r,{Z:()=>o});var A=a(537),e=a.n(A),t=a(645),i=a.n(t)()(e());i.push([n.id,"@media screen and (min-width: 650px) {\r\n  .app-bar {\r\n    grid-template-columns: 1fr auto;\r\n    padding: 8px 32px;\r\n  }\r\n\r\n  .app-bar .app-bar__brand h1 {\r\n    font-size: 1.5em;\r\n  }\r\n\r\n  .app-bar .app-bar__menu {\r\n    display: none;\r\n  }\r\n\r\n  .app-bar .app-bar__navigation {\r\n    position: static;\r\n    width: 100%;\r\n  }\r\n\r\n  .app-bar .app-bar__navigation ul li {\r\n    display: inline-block;\r\n  }\r\n\r\n  .app-bar .app-bar__navigation ul li a {\r\n    display: inline-block;\r\n    width: 120px;\r\n    text-align: center;\r\n    margin: 0;\r\n  }\r\n\r\n  .restaurants {\r\n    grid-template-columns: 1fr 1fr;\r\n\r\n  }\r\n\r\n  .movie {\r\n    grid-template-columns: auto 1fr;\r\n  }\r\n\r\n  .movie .movie__title {\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n  }\r\n\r\n  .movie .movie__overview {\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n  .app-bar .app-bar__brand h1 {\r\n    font-size: 2em;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 850px) {\r\n  .restaurants {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n  .container-ulasan {\r\n    display: grid;\r\n    grid-template-columns:repeat(2,1fr);\r\n    row-gap: 2em;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  .restaurants {\r\n    grid-template-columns: repeat(4, 1fr);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1600px) {\r\n  .restaurants {\r\n    grid-template-columns: repeat(5, 1fr);\r\n  }\r\n}\r\n","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;EACE;IACE,+BAA+B;IAC/B,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,gBAAgB;IAChB,WAAW;EACb;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,qBAAqB;IACrB,YAAY;IACZ,kBAAkB;IAClB,SAAS;EACX;;EAEA;IACE,8BAA8B;;EAEhC;;EAEA;IACE,+BAA+B;EACjC;;EAEA;IACE,oBAAoB;IACpB,kBAAkB;EACpB;;EAEA;IACE,oBAAoB;IACpB,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,cAAc;EAChB;AACF;;AAEA;EACE;IACE,qCAAqC;EACvC;EACA;IACE,aAAa;IACb,mCAAmC;IACnC,YAAY;EACd;AACF;;AAEA;EACE;IACE,qCAAqC;EACvC;AACF;;AAEA;EACE;IACE,qCAAqC;EACvC;AACF",sourcesContent:["@media screen and (min-width: 650px) {\r\n  .app-bar {\r\n    grid-template-columns: 1fr auto;\r\n    padding: 8px 32px;\r\n  }\r\n\r\n  .app-bar .app-bar__brand h1 {\r\n    font-size: 1.5em;\r\n  }\r\n\r\n  .app-bar .app-bar__menu {\r\n    display: none;\r\n  }\r\n\r\n  .app-bar .app-bar__navigation {\r\n    position: static;\r\n    width: 100%;\r\n  }\r\n\r\n  .app-bar .app-bar__navigation ul li {\r\n    display: inline-block;\r\n  }\r\n\r\n  .app-bar .app-bar__navigation ul li a {\r\n    display: inline-block;\r\n    width: 120px;\r\n    text-align: center;\r\n    margin: 0;\r\n  }\r\n\r\n  .restaurants {\r\n    grid-template-columns: 1fr 1fr;\r\n\r\n  }\r\n\r\n  .movie {\r\n    grid-template-columns: auto 1fr;\r\n  }\r\n\r\n  .movie .movie__title {\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n  }\r\n\r\n  .movie .movie__overview {\r\n    grid-column-start: 1;\r\n    grid-column-end: 3;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n  .app-bar .app-bar__brand h1 {\r\n    font-size: 2em;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 850px) {\r\n  .restaurants {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n  .container-ulasan {\r\n    display: grid;\r\n    grid-template-columns:repeat(2,1fr);\r\n    row-gap: 2em;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  .restaurants {\r\n    grid-template-columns: repeat(4, 1fr);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1600px) {\r\n  .restaurants {\r\n    grid-template-columns: repeat(5, 1fr);\r\n  }\r\n}\r\n"],sourceRoot:""}]);const o=i},890:(n,r,a)=>{a.d(r,{Z:()=>o});var A=a(537),e=a.n(A),t=a(645),i=a.n(t)()(e());i.push([n.id,"* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  background-color: white;\r\n  min-height: 100vh;\r\n  display: grid;\r\n  grid-auto-flow: row;\r\n}\r\n\r\n.app-bar {\r\n  padding: 8px 16px;\r\n  background-color: white;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  gap: 10px;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 99;\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.app-bar .app-bar__menu {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__menu button {\r\n  background-color: transparent;\r\n  border: none;\r\n  font-size: 18px;\r\n  padding: 8px;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  height: 44px;\r\n  width: 44px;\r\n}\r\n\r\n.app-bar .app-bar__brand {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__brand h1 {\r\n  color: #db0000;\r\n  text-transform: uppercase;\r\n  font-size: 22px;\r\n  user-select: none;\r\n}\r\n\r\n.app-bar .app-bar__navigation {\r\n  position: absolute;\r\n  top: 50px;\r\n  left: -180px;\r\n  width: 150px;\r\n  transition: all 0.3s;\r\n  padding: 8px;\r\n  background-color: white;\r\n  overflow: hidden;\r\n}\r\n\r\n.app-bar .app-bar__navigation.open {\r\n  left: 0;\r\n}\r\n\r\n.app-bar .app-bar__navigation ul li a {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  color: black;\r\n  padding: 8px;\r\n  margin-bottom: 5px;\r\n  width: 100%;\r\n  height: 44px;\r\n  align-items: center;\r\n line-height: 44px;\r\n}\r\n\r\n.skip-link {\r\n  position: absolute;\r\n  top: -50px;\r\n  left: 0;\r\n  padding: 8px;\r\n  background-color: #bf1722;\r\n  color: white;\r\n  z-index: 100;\r\n}\r\n.skip-link:focus {\r\n  top: 0;\r\n}\r\n\r\nmain {\r\n  padding: 32px;\r\n}\r\n\r\n.heros {\r\n  width: 100%;\r\n  max-height: 500px;\r\n  margin-bottom: 3em;\r\n  object-fit: cover;\r\n}\r\n#UnavailableFavorite {\r\nwidth: 800px;\r\nheight: 800px;\r\njustify-content: center;\r\n}\r\n#UnavailableFavorite > h1 {\r\n  line-height: 1em;\r\n  color: #aaaaaa;\r\n}\r\n.content {\r\n  margin: 0 auto;\r\n}\r\n\r\n.content .content__heading {\r\n  font-weight: normal;\r\n}\r\n\r\n\r\n\r\n.restaurants {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  gap: 16px;\r\n  margin: 32px 0;\r\n}\r\n\r\n.restaurant-item {\r\n  width: 100%;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n}\r\n\r\n.restaurant-item__header {\r\n  position: relative;\r\n}\r\n\r\n.restaurant-item .restaurant-item__header .restaurant-item__header__poster {\r\n  width: 100%;\r\n}\r\n\r\n.restaurant-item .restaurant-item__header .restaurant-item__header__rating {\r\n  position: absolute;\r\n  padding: 8px;\r\n  bottom: 20px;\r\n  left: 0;\r\n  display: inline-block;\r\n  background-color: black;\r\n  color: white;\r\n}\r\n\r\n.restaurant-item .restaurant-item__header .restaurant-item__header__rating .restaurant-item__header__rating__score {\r\n  margin-left: 10px;\r\n}\r\n\r\n.restaurant-item .restaurant-item__content {\r\n  padding: 16px;\r\n}\r\n\r\n.restaurant-item .restaurant-item__content h3 {\r\n  margin: 0 0 10px 0;\r\n}\r\n\r\n.restaurant-item .restaurant-item__content h3 {\r\n  color: #db0000;\r\n  text-decoration: none;\r\n}\r\n.restaurant-item .restaurant-item__content button {\r\n  padding: 5px;\r\n  border: #ffffff00;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 44px;\r\n  min-width: 44px;\r\n  min-height: 44px;\r\n  margin-top: 2em;\r\n}\r\n\r\n.restaurant-item .restaurant-item__content p {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 4; /* number of lines to show */\r\n  -webkit-box-orient: vertical;\r\n}\r\n\r\n.like {\r\n  width: 55px;\r\n  height: 55px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #db0000;\r\n  \r\n  position: fixed;\r\n  bottom: 16px;\r\n  right: 16px;\r\n  border-radius: 50%;\r\n  border: 0;\r\n  \r\n  font-size: 18px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n#restaurant-detail {\r\n  display: grid;\r\n  grid-template-rows: 1fr;\r\n  row-gap: 30px;\r\n}\r\n.img-detail {\r\n  width: 100%;\r\n  max-height: 800px;\r\n}\r\n#restaurant-info{\r\n  display: grid;\r\n  grid-template-rows: 1fr;\r\n}\r\ndiv > .menu {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\ndiv > .menu > ul {\r\n  list-style-position: inside;\r\n}\r\n#section-ulasan {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n}\r\n.container-ulasan {\r\n  display: grid;\r\n  grid-template-rows: 1fr;\r\n  row-gap: 2em;\r\n}\r\nform {\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr;\r\n  row-gap:5px;\r\n}\r\n#pendapat > form > input {\r\n  display: inline-block;\r\n  line-height: 3em;\r\n  height: 44px;\r\n  min-height: 44px;\r\n}\r\n#pendapat > textarea {\r\n  height: 5em;\r\n  min-height: 44px;\r\n}\r\nbutton.kirim-ulasan {\r\n  line-height: 2em;\r\n  display: block;\r\n  height: 44px;\r\n}\r\n\r\n\r\nfooter {\r\n  padding: 16px;\r\n}\r\n\r\nfooter p {\r\n  text-align: center;\r\n  color: #aaaaaa;\r\n}\r\n\r\nfooter p a {\r\n  color: #db0000;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  height: 44px;\r\n}\r\n","",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"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",sourcesContent:["* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  background-color: white;\r\n  min-height: 100vh;\r\n  display: grid;\r\n  grid-auto-flow: row;\r\n}\r\n\r\n.app-bar {\r\n  padding: 8px 16px;\r\n  background-color: white;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  gap: 10px;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 99;\r\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.app-bar .app-bar__menu {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__menu button {\r\n  background-color: transparent;\r\n  border: none;\r\n  font-size: 18px;\r\n  padding: 8px;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  height: 44px;\r\n  width: 44px;\r\n}\r\n\r\n.app-bar .app-bar__brand {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__brand h1 {\r\n  color: #db0000;\r\n  text-transform: uppercase;\r\n  font-size: 22px;\r\n  user-select: none;\r\n}\r\n\r\n.app-bar .app-bar__navigation {\r\n  position: absolute;\r\n  top: 50px;\r\n  left: -180px;\r\n  width: 150px;\r\n  transition: all 0.3s;\r\n  padding: 8px;\r\n  background-color: white;\r\n  overflow: hidden;\r\n}\r\n\r\n.app-bar .app-bar__navigation.open {\r\n  left: 0;\r\n}\r\n\r\n.app-bar .app-bar__navigation ul li a {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  color: black;\r\n  padding: 8px;\r\n  margin-bottom: 5px;\r\n  width: 100%;\r\n  height: 44px;\r\n  align-items: center;\r\n line-height: 44px;\r\n}\r\n\r\n.skip-link {\r\n  position: absolute;\r\n  top: -50px;\r\n  left: 0;\r\n  padding: 8px;\r\n  background-color: #bf1722;\r\n  color: white;\r\n  z-index: 100;\r\n}\r\n.skip-link:focus {\r\n  top: 0;\r\n}\r\n\r\nmain {\r\n  padding: 32px;\r\n}\r\n\r\n.heros {\r\n  width: 100%;\r\n  max-height: 500px;\r\n  margin-bottom: 3em;\r\n  object-fit: cover;\r\n}\r\n#UnavailableFavorite {\r\nwidth: 800px;\r\nheight: 800px;\r\njustify-content: center;\r\n}\r\n#UnavailableFavorite > h1 {\r\n  line-height: 1em;\r\n  color: #aaaaaa;\r\n}\r\n.content {\r\n  margin: 0 auto;\r\n}\r\n\r\n.content .content__heading {\r\n  font-weight: normal;\r\n}\r\n\r\n\r\n\r\n.restaurants {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  gap: 16px;\r\n  margin: 32px 0;\r\n}\r\n\r\n.restaurant-item {\r\n  width: 100%;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n}\r\n\r\n.restaurant-item__header {\r\n  position: relative;\r\n}\r\n\r\n.restaurant-item .restaurant-item__header .restaurant-item__header__poster {\r\n  width: 100%;\r\n}\r\n\r\n.restaurant-item .restaurant-item__header .restaurant-item__header__rating {\r\n  position: absolute;\r\n  padding: 8px;\r\n  bottom: 20px;\r\n  left: 0;\r\n  display: inline-block;\r\n  background-color: black;\r\n  color: white;\r\n}\r\n\r\n.restaurant-item .restaurant-item__header .restaurant-item__header__rating .restaurant-item__header__rating__score {\r\n  margin-left: 10px;\r\n}\r\n\r\n.restaurant-item .restaurant-item__content {\r\n  padding: 16px;\r\n}\r\n\r\n.restaurant-item .restaurant-item__content h3 {\r\n  margin: 0 0 10px 0;\r\n}\r\n\r\n.restaurant-item .restaurant-item__content h3 {\r\n  color: #db0000;\r\n  text-decoration: none;\r\n}\r\n.restaurant-item .restaurant-item__content button {\r\n  padding: 5px;\r\n  border: #ffffff00;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 44px;\r\n  min-width: 44px;\r\n  min-height: 44px;\r\n  margin-top: 2em;\r\n}\r\n\r\n.restaurant-item .restaurant-item__content p {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 4; /* number of lines to show */\r\n  -webkit-box-orient: vertical;\r\n}\r\n\r\n.like {\r\n  width: 55px;\r\n  height: 55px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #db0000;\r\n  \r\n  position: fixed;\r\n  bottom: 16px;\r\n  right: 16px;\r\n  border-radius: 50%;\r\n  border: 0;\r\n  \r\n  font-size: 18px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n#restaurant-detail {\r\n  display: grid;\r\n  grid-template-rows: 1fr;\r\n  row-gap: 30px;\r\n}\r\n.img-detail {\r\n  width: 100%;\r\n  max-height: 800px;\r\n}\r\n#restaurant-info{\r\n  display: grid;\r\n  grid-template-rows: 1fr;\r\n}\r\ndiv > .menu {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n}\r\ndiv > .menu > ul {\r\n  list-style-position: inside;\r\n}\r\n#section-ulasan {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n}\r\n.container-ulasan {\r\n  display: grid;\r\n  grid-template-rows: 1fr;\r\n  row-gap: 2em;\r\n}\r\nform {\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr;\r\n  row-gap:5px;\r\n}\r\n#pendapat > form > input {\r\n  display: inline-block;\r\n  line-height: 3em;\r\n  height: 44px;\r\n  min-height: 44px;\r\n}\r\n#pendapat > textarea {\r\n  height: 5em;\r\n  min-height: 44px;\r\n}\r\nbutton.kirim-ulasan {\r\n  line-height: 2em;\r\n  display: block;\r\n  height: 44px;\r\n}\r\n\r\n\r\nfooter {\r\n  padding: 16px;\r\n}\r\n\r\nfooter p {\r\n  text-align: center;\r\n  color: #aaaaaa;\r\n}\r\n\r\nfooter p a {\r\n  color: #db0000;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  height: 44px;\r\n}\r\n"],sourceRoot:""}]);const o=i},362:(n,r,a)=>{var A=a(379),e=a.n(A),t=a(795),i=a.n(t),o=a(569),p=a.n(o),d=a(565),l=a.n(d),s=a(216),c=a.n(s),m=a(589),u=a.n(m),E=a(948),C={};C.styleTagTransform=u(),C.setAttributes=l(),C.insert=p().bind(null,"head"),C.domAPI=i(),C.insertStyleElement=c(),e()(E.Z,C),E.Z&&E.Z.locals&&E.Z.locals},915:(n,r,a)=>{var A=a(379),e=a.n(A),t=a(795),i=a.n(t),o=a(569),p=a.n(o),d=a(565),l=a.n(d),s=a(216),c=a.n(s),m=a(589),u=a.n(m),E=a(890),C={};C.styleTagTransform=u(),C.setAttributes=l(),C.insert=p().bind(null,"head"),C.domAPI=i(),C.insertStyleElement=c(),e()(E.Z,C),E.Z&&E.Z.locals&&E.Z.locals}},a={};function A(n){var e=a[n];if(void 0!==e)return e.exports;var t=a[n]={id:n,exports:{}};return r[n](t,t.exports,A),t.exports}A.m=r,n=[],A.O=(r,a,e,t)=>{if(!a){var i=1/0;for(l=0;l<n.length;l++){for(var[a,e,t]=n[l],o=!0,p=0;p<a.length;p++)(!1&t||i>=t)&&Object.keys(A.O).every((n=>A.O[n](a[p])))?a.splice(p--,1):(o=!1,t<i&&(i=t));if(o){n.splice(l--,1);var d=e();void 0!==d&&(r=d)}}return r}t=t||0;for(var l=n.length;l>0&&n[l-1][2]>t;l--)n[l]=n[l-1];n[l]=[a,e,t]},A.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return A.d(r,{a:r}),r},A.d=(n,r)=>{for(var a in r)A.o(r,a)&&!A.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:r[a]})},A.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n={361:0};A.O.j=r=>0===n[r];var r=(r,a)=>{var e,t,[i,o,p]=a,d=0;if(i.some((r=>0!==n[r]))){for(e in o)A.o(o,e)&&(A.m[e]=o[e]);if(p)var l=p(A)}for(r&&r(a);d<i.length;d++)t=i[d],A.o(n,t)&&n[t]&&n[t][0](),n[t]=0;return A.O(l)},a=self.webpackChunkrestaurant_catalogue=self.webpackChunkrestaurant_catalogue||[];a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a))})(),A.nc=void 0;var e=A.O(void 0,[30,21,334,291],(()=>A(253)));e=A.O(e)})();
//# sourceMappingURL=main~f6563343.bundle.js.map
import { Link, Outlet } from 'react-router';
import { IonIcon } from '@ionic/react';
import {
  personOutline,
  searchOutline,
  cartOutline,
  heartOutline,
} from 'ionicons/icons';
import '../../../src/Style.css';

export default function GuestLayout() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Casmart - Biggest shopping center</title>
      {/* 
      - favicon
    */}
      <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />
      {/* 
      - custom css link
    */}
      {/* <link rel="stylesheet" href="./assets/css/style.css" /> */}
      {/* 
      - google font link
    */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      {/* 
      - #HEADER
    */}
      <header className="header" data-header="">
        <div className="container">
          <div className="overlay" data-overlay="" />
          <div className="header-search">
            <input
              type="search"
              name="search"
              placeholder="Search Product..."
              className="input-field"
            />
            <button className="search-btn" aria-label="Search">
              <IonIcon icon={searchOutline}></IonIcon>
            </button>
          </div>
          <a href="#" className="logo">
            <img
              src="./assets/images/logo.svg"
              alt="Casmart logo"
              width={130}
              height={31}
            />
          </a>
          <div className="header-actions">
            <button className="header-action-btn">
              <IonIcon icon={personOutline}></IonIcon>
              <p className="header-action-label">Sign in</p>
            </button>
            <button className="header-action-btn">
              <IonIcon icon={searchOutline}></IonIcon>
              <p className="header-action-label">Search</p>
            </button>
            <button className="header-action-btn">
              <IonIcon icon={cartOutline}></IonIcon>
              <p className="header-action-label">Cart</p>
              <div className="btn-badge green" aria-hidden="true">
                3
              </div>
            </button>
            <button className="header-action-btn">
              <IonIcon icon={heartOutline}></IonIcon>
              <p className="header-action-label">Wishlisht</p>
              <div className="btn-badge" aria-hidden="true">
                2
              </div>
            </button>
          </div>
          <button
            className="nav-open-btn"
            data-nav-open-btn=""
            aria-label="Open Menu">
            <span />
            <span />
            <span />
          </button>
          <nav className="navbar" data-navbar="">
            <div className="navbar-top">
              <a href="#" className="logo">
                <img
                  src="./assets/images/logo.svg"
                  alt="Casmart logo"
                  width={130}
                  height={31}
                />
              </a>
              <button
                className="nav-close-btn"
                data-nav-close-btn=""
                aria-label="Close Menu">
                <ion-icon name="close-outline" />
              </button>
            </div>
            <ul className="navbar-list">
              <li>
                <a href="#home" className="navbar-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="navbar-link">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="navbar-link">
                  About
                </a>
              </li>
              <li>
                <a href="#blog" className="navbar-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="navbar-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <article>
          {/* 
    - #HERO
  */}
          <section
            className="hero"
            id="home"
            style={{
              backgroundImage: 'url("./assets/images/hero-banner.jpg")',
            }}>
            <div className="container">
              <div className="hero-content">
                <p className="hero-subtitle">Fashion Everyday</p>
                <h2 className="h1 hero-title">Unrivalled Fashion House</h2>
                <button className="btn btn-primary">Shop Now</button>
              </div>
            </div>
          </section>
          {/* 
    - #SERVICE
  */}
          <section className="service">
            <div className="container">
              <ul className="service-list">
                <li className="service-item">
                  <div className="service-item-icon">
                    <img
                      src="./assets/images/service-icon-1.svg"
                      alt="Service icon"
                    />
                  </div>
                  <div className="service-content">
                    <p className="service-item-title">Free Shipping</p>
                    <p className="service-item-text">On All Order Over $599</p>
                  </div>
                </li>
                <li className="service-item">
                  <div className="service-item-icon">
                    <img
                      src="./assets/images/service-icon-2.svg"
                      alt="Service icon"
                    />
                  </div>
                  <div className="service-content">
                    <p className="service-item-title">Easy Returns</p>
                    <p className="service-item-text">30 Day Returns Policy</p>
                  </div>
                </li>
                <li className="service-item">
                  <div className="service-item-icon">
                    <img
                      src="./assets/images/service-icon-3.svg"
                      alt="Service icon"
                    />
                  </div>
                  <div className="service-content">
                    <p className="service-item-title">Secure Payment</p>
                    <p className="service-item-text">100% Secure Gaurantee</p>
                  </div>
                </li>
                <li className="service-item">
                  <div className="service-item-icon">
                    <img
                      src="./assets/images/service-icon-4.svg"
                      alt="Service icon"
                    />
                  </div>
                  <div className="service-content">
                    <p className="service-item-title">Special Support</p>
                    <p className="service-item-text">24/7 Dedicated Support</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* 
    - #CATEGORY
  */}
          <section className="section category">
            <div className="container">
              <ul className="category-list">
                <li className="category-item">
                  <figure className="category-banner">
                    <img
                      src="./assets/images/category-1.jpg"
                      alt="Sunglass & eye"
                      loading="lazy"
                      width={510}
                      height={600}
                      className="w-100"
                    />
                  </figure>
                  <a href="#" className="btn btn-secondary">
                    Sunglass &amp; Eye
                  </a>
                </li>
                <li className="category-item">
                  <figure className="category-banner">
                    <img
                      src="./assets/images/category-2.jpg"
                      alt="Active & outdoor"
                      loading="lazy"
                      width={510}
                      height={600}
                      className="w-100"
                    />
                  </figure>
                  <a href="#" className="btn btn-secondary">
                    Active &amp; Outdoor
                  </a>
                </li>
                <li className="category-item">
                  <figure className="category-banner">
                    <img
                      src="./assets/images/category-3.jpg"
                      alt="Winter wear"
                      loading="lazy"
                      width={510}
                      height={600}
                      className="w-100"
                    />
                  </figure>
                  <a href="#" className="btn btn-secondary">
                    Winter Wear
                  </a>
                </li>
                <li className="category-item">
                  <figure className="category-banner">
                    <img
                      src="./assets/images/category-4.jpg"
                      alt="Exclusive footwear"
                      loading="lazy"
                      width={510}
                      height={600}
                      className="w-100"
                    />
                  </figure>
                  <a href="#" className="btn btn-secondary">
                    Exclusive Footwear
                  </a>
                </li>
                <li className="category-item">
                  <figure className="category-banner">
                    <img
                      src="./assets/images/category-5.jpg"
                      alt="Jewelry"
                      loading="lazy"
                      width={510}
                      height={600}
                      className="w-100"
                    />
                  </figure>
                  <a href="#" className="btn btn-secondary">
                    Jewelry
                  </a>
                </li>
                <li className="category-item">
                  <figure className="category-banner">
                    <img
                      src="./assets/images/category-6.jpg"
                      alt="Sports cap"
                      loading="lazy"
                      width={510}
                      height={600}
                      className="w-100"
                    />
                  </figure>
                  <a href="#" className="btn btn-secondary">
                    Sports Cap
                  </a>
                </li>
              </ul>
            </div>
          </section>
          {/* 
    - #PRODUCT
  */}
          <section className="section product">
            <div className="container">
              <h2 className="h2 section-title">Products of the week</h2>
              <ul className="filter-list">
                <li>
                  <button className="filter-btn  active">Best Seller</button>
                </li>
                <li>
                  <button className="filter-btn">Hot Collection</button>
                </li>
                <li>
                  <button className="filter-btn">Trendy</button>
                </li>
                <li>
                  <button className="filter-btn">New Arrival</button>
                </li>
              </ul>
              <ul className="product-list">
                <li>
                  <div className="product-card">
                    <figure className="card-banner">
                      <a href="#">
                        <img
                          src="./assets/images/product-1.jpg"
                          alt="Varsi Leather Bag"
                          loading="lazy"
                          width={800}
                          height={1034}
                          className="w-100"
                        />
                      </a>
                      <div className="card-badge red"> -25%</div>
                      <div className="card-actions">
                        <button
                          className="card-action-btn"
                          aria-label="Quick view">
                          <ion-icon name="eye-outline" />
                        </button>
                        <button className="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          />
                          <p>Add to Cart</p>
                        </button>
                        <button
                          className="card-action-btn"
                          aria-label="Add to Whishlist">
                          <ion-icon name="heart-outline" />
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <h3 className="h4 card-title">
                        <a href="#">Varsi Leather Bag</a>
                      </h3>
                      <div className="card-price">
                        <data value="48.75">£48.75</data>
                        <data value={65.0}>£65.00</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="product-card">
                    <figure className="card-banner">
                      <a href="#">
                        <img
                          src="./assets/images/product-2.jpg"
                          alt="Fit Twill Shirt for Woman"
                          loading="lazy"
                          width={800}
                          height={1034}
                          className="w-100"
                        />
                      </a>
                      <div className="card-badge green"> New</div>
                      <div className="card-actions">
                        <button
                          className="card-action-btn"
                          aria-label="Quick view">
                          <ion-icon name="eye-outline" />
                        </button>
                        <button className="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          />
                          <p>Add to Cart</p>
                        </button>
                        <button
                          className="card-action-btn"
                          aria-label="Add to Whishlist">
                          <ion-icon name="heart-outline" />
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <h3 className="h4 card-title">
                        <a href="#">Fit Twill Shirt for Woman</a>
                      </h3>
                      <div className="card-price">
                        <data value={62.0}>£62.00</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="product-card">
                    <figure className="card-banner">
                      <a href="#">
                        <img
                          src="./assets/images/product-3.jpg"
                          alt="Grand Atlantic Chukka Boots"
                          loading="lazy"
                          width={800}
                          height={1034}
                          className="w-100"
                        />
                      </a>
                      <div className="card-actions">
                        <button
                          className="card-action-btn"
                          aria-label="Quick view">
                          <ion-icon name="eye-outline" />
                        </button>
                        <button className="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          />
                          <p>Add to Cart</p>
                        </button>
                        <button
                          className="card-action-btn"
                          aria-label="Add to Whishlist">
                          <ion-icon name="heart-outline" />
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <h3 className="h4 card-title">
                        <a href="#">Grand Atlantic Chukka Boots</a>
                      </h3>
                      <div className="card-price">
                        <data value={32.0}>£32.00</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="product-card">
                    <figure className="card-banner">
                      <a href="#">
                        <img
                          src="./assets/images/product-4.jpg"
                          alt="Women's Faux-Trim Shirt"
                          loading="lazy"
                          width={800}
                          height={1034}
                          className="w-100"
                        />
                      </a>
                      <div className="card-actions">
                        <button
                          className="card-action-btn"
                          aria-label="Quick view">
                          <ion-icon name="eye-outline" />
                        </button>
                        <button className="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          />
                          <p>Add to Cart</p>
                        </button>
                        <button
                          className="card-action-btn"
                          aria-label="Add to Whishlist">
                          <ion-icon name="heart-outline" />
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <h3 className="h4 card-title">
                        <a href="#">Women's Faux-Trim Shirt</a>
                      </h3>
                      <div className="card-price">
                        <data value={84.0}>£84.00</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="product-card">
                    <figure className="card-banner">
                      <a href="#">
                        <img
                          src="./assets/images/product-5.jpg"
                          alt="Soft Touch Interlock Polo"
                          loading="lazy"
                          width={800}
                          height={1034}
                          className="w-100"
                        />
                      </a>
                      <div className="card-actions">
                        <button
                          className="card-action-btn"
                          aria-label="Quick view">
                          <ion-icon name="eye-outline" />
                        </button>
                        <button className="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          />
                          <p>Add to Cart</p>
                        </button>
                        <button
                          className="card-action-btn"
                          aria-label="Add to Whishlist">
                          <ion-icon name="heart-outline" />
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <h3 className="h4 card-title">
                        <a href="#">Soft Touch Interlock Polo</a>
                      </h3>
                      <div className="card-price">
                        <data value={45.0}>£45.00</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="product-card">
                    <figure className="card-banner">
                      <a href="#">
                        <img
                          src="./assets/images/product-6.jpg"
                          alt="Casmart Smart Watch"
                          loading="lazy"
                          width={800}
                          height={1034}
                          className="w-100"
                        />
                      </a>
                      <div className="card-actions">
                        <button
                          className="card-action-btn"
                          aria-label="Quick view">
                          <ion-icon name="eye-outline" />
                        </button>
                        <button className="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          />
                          <p>Add to Cart</p>
                        </button>
                        <button
                          className="card-action-btn"
                          aria-label="Add to Whishlist">
                          <ion-icon name="heart-outline" />
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <h3 className="h4 card-title">
                        <a href="#">Casmart Smart Watch</a>
                      </h3>
                      <div className="card-price">
                        <data value={30.0}>£30.00</data>
                        <data value={38.0}>£38.00</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="product-card">
                    <figure className="card-banner">
                      <a href="#">
                        <img
                          src="./assets/images/product-7.jpg"
                          alt="Casmart Smart Glass"
                          loading="lazy"
                          width={800}
                          height={1034}
                          className="w-100"
                        />
                      </a>
                      <div className="card-actions">
                        <button
                          className="card-action-btn"
                          aria-label="Quick view">
                          <ion-icon name="eye-outline" />
                        </button>
                        <button className="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          />
                          <p>Add to Cart</p>
                        </button>
                        <button
                          className="card-action-btn"
                          aria-label="Add to Whishlist">
                          <ion-icon name="heart-outline" />
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <h3 className="h4 card-title">
                        <a href="#">Casmart Smart Glass</a>
                      </h3>
                      <div className="card-price">
                        <data value={25.0}>£25.00</data>
                        <data value={39.0}>£39.00</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="product-card">
                    <figure className="card-banner">
                      <a href="#">
                        <img
                          src="./assets/images/product-8.jpg"
                          alt="Cotton Shirt for Men"
                          loading="lazy"
                          width={800}
                          height={1034}
                          className="w-100"
                        />
                      </a>
                      <div className="card-actions">
                        <button
                          className="card-action-btn"
                          aria-label="Quick view">
                          <ion-icon name="eye-outline" />
                        </button>
                        <button className="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          />
                          <p>Add to Cart</p>
                        </button>
                        <button
                          className="card-action-btn"
                          aria-label="Add to Whishlist">
                          <ion-icon name="heart-outline" />
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <h3 className="h4 card-title">
                        <a href="#">Cotton Shirt for Men</a>
                      </h3>
                      <div className="card-price">
                        <data value={85.0}>£85.00</data>
                        <data value={99.0}>£99.00</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="product-card">
                    <figure className="card-banner">
                      <a href="#">
                        <img
                          src="./assets/images/product-9.jpg"
                          alt="Double-breasted Blazer"
                          loading="lazy"
                          width={800}
                          height={1034}
                          className="w-100"
                        />
                      </a>
                      <div className="card-actions">
                        <button
                          className="card-action-btn"
                          aria-label="Quick view">
                          <ion-icon name="eye-outline" />
                        </button>
                        <button className="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          />
                          <p>Add to Cart</p>
                        </button>
                        <button
                          className="card-action-btn"
                          aria-label="Add to Whishlist">
                          <ion-icon name="heart-outline" />
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <h3 className="h4 card-title">
                        <a href="#">Double-breasted Blazer</a>
                      </h3>
                      <div className="card-price">
                        <data value={32.0}>£32.00</data>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="product-card">
                    <figure className="card-banner">
                      <a href="#">
                        <img
                          src="./assets/images/product-10.jpg"
                          alt="Ribbed Cotton Bodysuits"
                          loading="lazy"
                          width={800}
                          height={1034}
                          className="w-100"
                        />
                      </a>
                      <div className="card-badge green">New</div>
                      <div className="card-actions">
                        <button
                          className="card-action-btn"
                          aria-label="Quick view">
                          <ion-icon name="eye-outline" />
                        </button>
                        <button className="card-action-btn cart-btn">
                          <ion-icon
                            name="bag-handle-outline"
                            aria-hidden="true"
                          />
                          <p>Add to Cart</p>
                        </button>
                        <button
                          className="card-action-btn"
                          aria-label="Add to Whishlist">
                          <ion-icon name="heart-outline" />
                        </button>
                      </div>
                    </figure>
                    <div className="card-content">
                      <h3 className="h4 card-title">
                        <a href="#">Ribbed Cotton Bodysuits</a>
                      </h3>
                      <div className="card-price">
                        <data value={71.0}>£71.00</data>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <button className="btn btn-outline">View All Products</button>
            </div>
          </section>
          {/* 
    - #BLOG
  */}
          <section className="section blog">
            <div className="container">
              <h2 className="h2 section-title">Latest fashion news</h2>
              <ul className="blog-list">
                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <a href="#">
                        <img
                          src="./assets/images/blog-1.jpg"
                          alt="Worthy Cyber Monday Fashion From Casmart"
                          loading="lazy"
                          width={1020}
                          height={700}
                          className="w-100"
                        />
                      </a>
                    </figure>
                    <div className="card-content">
                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          <ion-icon name="folder-open-outline" />
                          <a href="#" className="card-meta-link">
                            Fashion
                          </a>
                        </li>
                        <li className="card-meta-item">
                          <ion-icon name="time-outline" />
                          <a href="#" className="card-meta-link">
                            <time dateTime="2021-03-31">31 Mar 2021</time>
                          </a>
                        </li>
                      </ul>
                      <h3 className="h3 card-title">
                        <a href="#">Worthy Cyber Monday Fashion From Casmart</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <a href="#">
                        <img
                          src="./assets/images/blog-2.jpg"
                          alt="Holiday Home Decoration I’ve Recently Ordered"
                          loading="lazy"
                          width={1020}
                          height={700}
                          className="w-100"
                        />
                      </a>
                    </figure>
                    <div className="card-content">
                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          <ion-icon name="folder-open-outline" />
                          <a href="#" className="card-meta-link">
                            Fashion
                          </a>
                        </li>
                        <li className="card-meta-item">
                          <ion-icon name="time-outline" />
                          <a href="#" className="card-meta-link">
                            <time dateTime="2021-03-31">31 Mar 2021</time>
                          </a>
                        </li>
                      </ul>
                      <h3 className="h3 card-title">
                        <a href="#">
                          Holiday Home Decoration I’ve Recently Ordered
                        </a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-card">
                    <figure className="card-banner">
                      <a href="#">
                        <img
                          src="./assets/images/blog-3.jpg"
                          alt="Unique Ideas for Fashion You Haven’t heard yet"
                          loading="lazy"
                          width={1020}
                          height={700}
                          className="w-100"
                        />
                      </a>
                    </figure>
                    <div className="card-content">
                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          <ion-icon name="folder-open-outline" />
                          <a href="#" className="card-meta-link">
                            Fashion
                          </a>
                        </li>
                        <li className="card-meta-item">
                          <ion-icon name="time-outline" />
                          <a href="#" className="card-meta-link">
                            <time dateTime="2021-03-31">31 Mar 2021</time>
                          </a>
                        </li>
                      </ul>
                      <h3 className="h3 card-title">
                        <a href="#">
                          Unique Ideas for Fashion You Haven’t heard yet
                        </a>
                      </h3>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          {/* 
    - #NEWSLETTER
  */}
          <section className="section newsletter">
            <div className="container">
              <div
                className="newsletter-card"
                style={{
                  backgroundImage: 'url("./assets/images/newsletter-bg.png")',
                }}>
                <h2 className="card-title">Subscribe Newsletter</h2>
                <p className="card-text">
                  Enter your email below to be the first to know about new
                  collections and product launches.
                </p>
                <form action="" className="card-form">
                  <div className="input-wrapper">
                    <ion-icon name="mail-outline" />
                    <input
                      type="email"
                      name="emal"
                      placeholder="Enter your email"
                      required=""
                      className="input-field"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    <span>Subscribe</span>
                    <ion-icon name="arrow-forward" aria-hidden="true" />
                  </button>
                </form>
              </div>
            </div>
          </section>
        </article>
      </main>
      {/* 
      - #FOOTER
    */}
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-brand">
              <a href="#" className="logo">
                <img src="./assets/images/logo.svg" alt="Casmart logo" />
              </a>
              <p className="footer-text">
                Casmart is a fashion theme for presents a complete wardrobe of
                uniquely crafted Ethnic Wear, Casuals, Edgy Denims, &amp;
                Accessories inspired from the most contemporary
              </p>
              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-pinterest" />
                  </a>
                </li>
              </ul>
            </div>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Information</p>
              </li>
              <li>
                <a href="#" className="footer-link">
                  About Company
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Payment Type
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Awards Winning
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  World Media Partner
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Become an Agent
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Refund Policy
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Category</p>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Handbags &amp; Wallets
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Women's Clothing
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Plus Sizes
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Complete Your Look
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Baby Corner
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Man &amp; Woman Shoe
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Help &amp; Support</p>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Dealers &amp; Agents
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  FAQ Information
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Shipping &amp; Delivery
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Order Tranking
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  List of Shops
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              © 2022 <a href="#">codewithsadee</a>. All Rights Reserved
            </p>
            <ul className="footer-bottom-list">
              <li>
                <a href="#" className="footer-bottom-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-bottom-link">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#" className="footer-bottom-link">
                  Sitemap
                </a>
              </li>
            </ul>
            <div className="payment">
              <p className="payment-title">We Support</p>
              <img
                src="./assets/images/payment-img.png"
                alt="Online payment logos"
                className="payment-img"
              />
            </div>
          </div>
        </div>
      </footer>
      {/* 
      - custom js link
    */}
      {/* 
      - ionicon link
    */}
    </>
  );
}

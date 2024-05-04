import Header from '../Header'

import './index/css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Clothes That Get You Noticed</h1>
        <img
          src=""
          alt="clothes that get you noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          Fashion is the part of the daily air and it does not quite help
        </p>
        <button className="shop-now-button" type="button">
          Shop now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        className="home-desktop-img"
        alt="clothes that get you noticed"
      />
    </div>
  </>
)
export default Home

// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))

    this.setState({blogsData: formattedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="cryptocurrencies-list-container">
            <h1 className="crypto-heading">Cryptocurrency Tracker</h1>
            <img
              className="crypto-images"
              alt="cryptocurrency"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            />
            <div className="item-container">
              <nav className="nav-bar">
                <p className="coin-type">Coin Type</p>
                <div className="curreny-container">
                  <p className="curreny-type">USD</p>
                  <p className="curreny-type">EURO</p>
                </div>
              </nav>
              <ul className="blogs-list">
                {blogsData.map(eachBlogItem => (
                  <CryptocurrencyItem
                    key={eachBlogItem.id}
                    blogItemDetails={eachBlogItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    )
  }
}
export default CryptocurrenciesList

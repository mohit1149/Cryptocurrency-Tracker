// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {blogItemDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = blogItemDetails
  return (
    <li className="list_item">
      <div className="left-container">
        <img className="crypto-image" src={currencyLogo} alt={currencyName} />
        <p className="crypto-name">{currencyName}</p>
      </div>
      <div className="left-container">
        <p className="usd crypto-name">{usdValue}</p>
        <p className="crypto-name">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem

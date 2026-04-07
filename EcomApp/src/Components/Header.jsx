// import {UseLink} from 'react-douter-dom'

export default function Header({ cartCount, search, setSearch }) {
  return (
    <div className="navbar">

      <div className="logo-section">
        <img className="logo" src="https://cdn.dribbble.com/userupload/17039932/file/original-983633d1f6de58f5d871f174ff34f057.jpg?format=webp&resize=400x300&vertical=center" alt="logo"/>
        <h2 className="app-title">React Demo App</h2>
      </div>

      <input
        type="text"
        placeholder="Search products..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="cart-info">
         {cartCount}
      </div>

    </div>
  );
}
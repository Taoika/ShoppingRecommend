import './index.scss'
import logo from '../../assets/logo1_1.png'
import SearchBar from '../../components/SearchBar';

export default function Home() {

  return (
    <div className="Home">
      <div className="body">
        <div className="logo"><img src={logo} alt="GGB"/></div>
        <SearchBar></SearchBar>
      </div>
    </div>
  )
}

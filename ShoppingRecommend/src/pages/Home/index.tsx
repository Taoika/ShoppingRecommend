import './index.scss'
import { Input} from 'antd';
const { Search } = Input;
import logo from '../../assets/logo.png'

export default function Home() {

  const onSearch = () => {
    console.log('onSearch');
    
  }

  return (
    <div className="Home">
      <div className="body">
        <div className="logo"><img src={logo} alt="GGB"/></div>
        <div className="Search_container">
          <Search placeholder="输入详细商品信息" classNames={{input: 'search'}} onSearch={onSearch} enterButton />
        </div>
      </div>
    </div>
  )
}

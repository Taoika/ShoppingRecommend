import './index.scss'
import { Input} from 'antd';
const { Search } = Input;

export default function SearchBar() {

    const onSearch = () => {
        console.log('onSearch');
      }

  return (
    <div className="SearchBar">
        <Search placeholder="输入详细商品信息" classNames={{input: 'search'}} onSearch={onSearch} enterButton />
    </div>
  )
}

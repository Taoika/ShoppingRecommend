import './App.css'
import { useRoutes } from 'react-router-dom'
import routes from './routes'
import { ConfigProvider } from 'antd'

function App() {

  const element = useRoutes(routes)

  return (
    <ConfigProvider
      theme={{
		token: {
			colorPrimary: '#ffc703'
		}
	  }}
    >
      {element}
    </ConfigProvider>
  )
}

export default App

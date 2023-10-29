import Home from "../pages/Home"
import Result from "../pages/Result"

const routes = [
    // 搜索
    {
        path: '/Home',
        element: <Home />,
    },
    // 结果
    {
        path: '/Result',
        element: <Result />,
    },
    {
        path: '/',
        element: <Result />,
    },
]

export default routes


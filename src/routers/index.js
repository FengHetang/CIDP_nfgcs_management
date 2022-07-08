import Login_Index from "@view/Login/Login_Index";
import Not_Found from "@view/NotFound";
import LayoutIndex from "@view/Layout"

const routers = [
    {
        title:"login",
        path:'/login',
        element:Login_Index
    },
    {
        title: "notfound",
        path: "/notfound",
        element: Not_Found
    },
    {
        title: "layout",
        path: "/layout",
        element: LayoutIndex
    },
]

export default routers
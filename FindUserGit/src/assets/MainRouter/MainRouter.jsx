import { createBrowserRouter } from "react-router-dom";
import { MainScreen } from "../Screens/MainScreen/MainScreen";

export const MainRouter = createBrowserRouter([
    {
        path:'/',
        element:<MainScreen/>,
    }
])
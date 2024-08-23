import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import ChannelView from "../pages/channels/ChannelView";
import ErrorPage from "../error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/channelview",
        element: <ChannelView />,
        children: [
          {
            path: ":channelId",
            element: <ChannelView />,
          },
        ],
      },
    ],
  },
]);

export default router;

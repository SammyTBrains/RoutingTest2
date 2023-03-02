import { createBrowserRouter, RouterProvider } from "react-router-dom";

import EditEventPage from "./pages/EditEventPage";
import ErrorPage from "./pages/ErrorPage";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as eventDeleteAction,
} from "./pages/EventDetailPage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import HomePage from "./pages/HomePage";
import NewEventPage, { action as newEventAction } from "./pages/NewEventPage";
import RootLayout from "./pages/RootLayout";
import EventsLayout from "./pages/EventsLayout";

const router = createBrowserRouter([
  //shouldn't be recreated or reloaded, just loads once on start
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail", 
            loader: eventDetailLoader, //Sharing a loader
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: eventDeleteAction,
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: newEventAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

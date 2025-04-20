import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from './src/pages/root/root.jsx';
import ErrorPage from './error-page.jsx';
import { CallbackPage } from './callback-page.jsx';
import { Auth0ProviderWithNavigate } from './src/auth0-provider-with-navigate.jsx';
import Controlspage from './Pages/Controlspage/Controlspage.jsx';
import Peoplepage from './Pages/Peoplepage/Peoplepage.jsx';
import Documentspage from './Pages/Documentspage/Documentspage.jsx';
import Mentorspage from './Pages/Mentorspage/Mentorspage.jsx';
import Policiespage from './Pages/Policiespage/Policiespage.jsx';
import Compliancepage from './Pages/Compliancepage/Compliance.jsx';

const router = createBrowserRouter( [
  { 
      path:"/",
      element: <Auth0ProviderWithNavigate/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path:"app",
          element: <Root/>,
          children: [
            {
              path: "home",
              element: <Compliancepage/>
            },
            {
              path: "controls",
              element: <Controlspage/>
            },
            {
              path: "mentors",
              element:<Mentorspage/>
            },
            {
              path: "documents",
              element:<Documentspage/>
            },
            {
              path: "policies",
              element:<Policiespage/>
            },
            {
              path: "people",
              element:<Peoplepage/>
            }  
           
          ]
        },
        {
          path: "callback",
          element:<CallbackPage/>
        }      
      ]
  },
  

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router= {router}/>
  </StrictMode>,
)

import React from 'react';
import Header from './Header/Header';
import {PartialRouteObject} from "react-router"
import {useRoutes} from "react-router-dom"
import ContactForm from "./contact";


const routes:PartialRouteObject[] = [{path: "/", element: <p>Racine</p>}, {path: "contact", element: <ContactForm/>}]

function App() {

  const routing = useRoutes(routes)
  return (
      <>
      <Header/>
        {routing}
      </>
  );
}

export default App;
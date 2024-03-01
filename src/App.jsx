import './App.css'
import Home from './components/pages/Home'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements
} from "react-router-dom";
import Product from './components/pages/Product';
import Contact from './components/pages/Contact';
import Rootlayout from './components/layout/sections/Rootlayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Rootlayout />}>
      <Route index element={< Home/>} ></Route>
      <Route path="/product" element={<Product/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Route>
    </>
  )
);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

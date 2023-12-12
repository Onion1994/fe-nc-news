import ArticleList from '../components/ArticleList'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Home from '../pages/Home';
import './App.css'
import  { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <Header />
    <Nav />
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

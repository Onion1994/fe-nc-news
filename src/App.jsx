import ArticleList from '../components/ArticleList'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Article from '../pages/Article';
import Home from '../pages/Home';
import './App.css'
import  { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <Header />
    <BrowserRouter>
    <Nav />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:topic/:article" element={<Article />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

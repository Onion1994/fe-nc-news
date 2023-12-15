import Header from '../components/Header'
import Nav from '../components/Nav'
import Article from '../pages/Article';
import Error from '../pages/Error';
import Home from '../pages/Home';
import Topic from '../pages/Topic';
import Topics from '../pages/Topics';
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
    <Route path="/topics" element={<Topics />}/>
    <Route path="/topics/:topic" element={<Topic />}/>
    <Route path="/topics/:topic/:article" element={<Article />} />
    <Route path="*" element={<Error />} />
    </Routes >
    </BrowserRouter>
    </>
  )
}

export default App

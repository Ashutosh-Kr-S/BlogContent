// import './App.css';
import Header from './components/Header';
import Blogs from './components/Blogs';
import Pagination from './components/Pagination';
import {AppContext} from './context/AppContext';
import { useContext } from 'react';
import { useEffect } from 'react';

function App() {

  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts()
  }, [])

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center bg-gradient-to-r from-emerald-50 to-emerald-200">
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  );
}

export default App;

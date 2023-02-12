import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Content from '../../components/content/Content';
import Search from '../../components/search/Search';
import './Home.css';
import { mockFoods } from './../../mock'
import Header from '../../components/header/Header';

export function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.localStorage.getItem('user')) {
      navigate('/login');
    }
  }, []);
  return (
    <section className="main">
      <div className="container">
        <h1>Popular Menu</h1>
        <div className="search">
          <Search />
        </div>
        <div className="content">
          <Content props={mockFoods} wc={false}/>
        </div>
        <div className="navbar">
          <Header />
        </div>
      </div>
    </section>
  );
}

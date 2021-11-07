import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { homeViewClass } from './HomeView.css';

export function HomeView() {
  return (
    <div className={homeViewClass}>
      <Navbar />
      <Outlet />
      <footer>Hope you liked it.</footer>
    </div>
  );
}

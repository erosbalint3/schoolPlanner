import { Outlet, Link } from "react-router-dom";
import './Navigation-Bar-Link.css';
import './Navigation-Bar.css';

const Layout = () => {
  return (
    <>
    <div id="centeredNavBarSpan">
        <div id="navBarDiv">
            <Link to='/'>Home</Link>
            <Link to="/grades" >Grades</Link>
            <Link to="/homeworks" >Homeworks</Link>
            <Link to="/exams"  >Exams</Link>
            <Link to="/files"  >Files</Link>
        </div>
    </div>
    
    
        <Outlet />
    </>
  )
};

export default Layout;
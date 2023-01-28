import React from 'react'
import { Link, useLocation } from 'react-router-dom'
function Sidebar() {
  const location = useLocation();
    return (
        <div className="list-group">
          <Link to="/dashboard" className={`list-group-item list-group-item-action ${location.pathname === '/dashboard' ? 'active' : ''}`}>
            Dashboard
          </Link>
          <Link to="/admin/userlist" className={`list-group-item list-group-item-action ${location.pathname === '/admin/userlist' ? 'active' : ''}`}>
            Users
          </Link>
          <Link to="/admin/productlist" className={`list-group-item list-group-item-action ${location.pathname === '/admin/productlist' ? 'active' : ''}`}>
            Products
          </Link>
          <Link to="/admin/orderlist" className={`list-group-item list-group-item-action ${location.pathname === '/admin/orderlist' ? 'active' : ''}`}>
            Orders
          </Link>
          <Link to="/admin/categorylist" className={`list-group-item list-group-item-action ${location.pathname === '/admin/categorylist' ? 'active' : ''}`}>
            Categories
          </Link>
        </div>
      );
    }
    
    
    

export default Sidebar
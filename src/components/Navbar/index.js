import "./index.css";



const Navbar = () => {


  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="search" placeholder="Search..." />
        
        </div>
        <div className="items">
          <div className="item">
           
            Dashboard
          </div>
          <div className="item">
            <span>UserList</span>
          </div>
          <div className="item">
            <span>ProductList</span>
          </div>
         
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

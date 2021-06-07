import React from "react";

const Header = () => {
  return (
    <div style={{width: '100%', backgroundColor: 'green',height: 60}}>
        <div style={{backgroundColor: 'red',height: 40, width: 80, position: "absolute",right: '12px',marginTop: 10}}>
            <button className="ui inverted tiny blue button" style={{height: 30, width: 50}}> Log Out </button>
        </div>
    </div>
  );
};

export default Header;

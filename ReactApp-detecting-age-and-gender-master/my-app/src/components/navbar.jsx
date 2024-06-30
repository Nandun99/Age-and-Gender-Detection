import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      
      <header className="bg-slate-700 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">
            Age and Gender Detection App
          </h1>
        </div>
      </header>
    );
  }
}

export default Navbar;

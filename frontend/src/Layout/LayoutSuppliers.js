import React from "react";
import Header from "../Component/Header/Header";
import Search from "../Search/Search";
import Sidebar from "../Component/Sidebar/Sidebar";
import Suppliers from "../Suppliers/Suppliers";

const LayoutSuppliers=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            <Search className="search" />
            <Suppliers className="Suppliers" />
            
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutSuppliers
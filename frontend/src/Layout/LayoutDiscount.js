import React from "react";
import Header from "../Component/Header/Header";
import Search from "../Search/Search";
import Sidebar from "../Component/Sidebar/Sidebar";
import Discount from "../Discount/Discount";

const LayoutDiscount=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            <Search className="search" />
            <Discount/>
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutDiscount
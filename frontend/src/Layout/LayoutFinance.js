import React from "react";
import Header from "../Component/Header/Header";
import Search from "../Search/Search";
import Sidebar from "../Component/Sidebar/Sidebar";
import Finance from "../Finance/Finance";

const LayoutFinance=()=>
{
    return (
        <>
          <div className="layout">
        <div className="main-container">
            <Sidebar/>
            <div className="content">
            <Header className="header" />
            <Search className="search" />
            <Finance/>
            </div>
        </div>
        </div>


        </>
    )
}

export default LayoutFinance
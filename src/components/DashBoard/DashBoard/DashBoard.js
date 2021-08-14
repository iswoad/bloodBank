import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Sidebar from '../../SideBar/Sidebar';

const DashBoard = () => {
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div  style={{ position: "absolute", right: 0, backgroundColor: "#F3F3F3" }}>
                <Navbar></Navbar>
                <div className="row">
                    
                </div>
            </div>
        </section>
    );
};

export default DashBoard;
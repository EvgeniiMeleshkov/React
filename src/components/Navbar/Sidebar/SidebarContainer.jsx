import React from "react";
import Sidebar from "./Sidebar";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebarPage.sidebar
    }
}

const SidebarContainer = connect(mapStateToProps)(Sidebar)

export default SidebarContainer
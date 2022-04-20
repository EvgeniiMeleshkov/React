import React from "react";
import Sidebar from "./Sidebar";
import {connect} from "react-redux";


class SidebarContainer extends React.Component {

    render ()
    {
        return (
            <Sidebar
                sidebar={this.props.sidebar}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebarPage.sidebar
    }
}


export default connect(mapStateToProps)(SidebarContainer)
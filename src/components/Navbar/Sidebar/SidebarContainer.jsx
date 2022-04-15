import React from "react";
import Sidebar from "./Sidebar";

import StoreContext from "../../../StoreContext";


const SidebarContainer = () => {


    return (
        <StoreContext.Consumer>

            {(store) => {
                let state = store.getState()
                return (
                    <Sidebar sidebar={state.sidebarPage.sidebar}/>
                )
            }
            }
        </StoreContext.Consumer>

    )
}

export default SidebarContainer
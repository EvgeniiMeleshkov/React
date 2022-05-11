import React, {Suspense} from 'react'
import './App.css'
import {HashRouter, Route, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/reduxStore";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

const Navbar = React.lazy(() => import('./components/Navbar/Navbar'));
const News = React.lazy(() => import('./components/Navbar/Navbar'));
const Music = React.lazy(() => import('./components/Navbar/Navbar'));
const Settings = React.lazy(() => import('./components/Navbar/Navbar'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const HeaderContainer = React.lazy(() => import('./components/Header/HeaderContainer'));
const LoginPage = React.lazy(() => import('./components/Login/Login'));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        } else {
            return (
                <Suspense fallback={<Preloader/>}>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>

                    <div className='app-wrapper-content'>

                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/news'
                               render={() => <News/>}/>
                        <Route path='/music'
                               render={() => <Music/>}/>
                        <Route path='/settings'
                               render={() => <Settings/>}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/login'
                               render={() => <LoginPage/>}/>
                    </div>
                </div>
        </Suspense>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

const SamuraiJSApp = (props) => {
    return <HashRouter>}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp
import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
// import DialogsContainer from './component/Dialogs/DialogsContainer';
// import ProfileContainer from './component/Profile/ProfileContainer';
import FriendsContainer from './component/Friends/FriendsContainer';
import HeaderContainer from './component/Header/HeaderContainer';
import Preloader from './component/common/Preloader/Preloader';
import Settings from './component/Settings/Settings';
import Login from './component/Login/Login';
import Music from './component/Music/Music';
import News from './component/News/News';
import Nav from './component/Nav/Nav';
import { initializeApp } from './redux/appReducer';
import './App.scss';

const DialogsContainer = React.lazy(() => import('./component/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./component/Profile/ProfileContainer'));


const App = ({initializeApp, initialazed}) => {
  initializeApp();

  if (!initialazed) {
    return <Preloader />
  }

  return (
    <div className='app'>
      <HeaderContainer />
      <Nav />
      <div className='content'>
        <Suspense fallback={<Preloader/>}>
          <Routes>
            <Route path="/profile" element={<ProfileContainer />}>
              <Route path=":userId" element={<ProfileContainer />} />
            </Route>
            <Route path="/" element = {<ProfileContainer />} />
            <Route path="/dialogs" element = {<DialogsContainer />} />
            <Route path="/news" element = {<News />}/>
            <Route path="/music" element = {<Music />}/>
            <Route path="/friends" element = {<FriendsContainer />}/>
            <Route path="/settings" element = {<Settings />}/>
            <Route path="/login" element = {<Login />}/>
            <Route path="*" element = {<div>404 Page not Found</div>}/>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}


const mapStateToProps = (state) => ({
  initialazed: state.appReducer.initialazed,
})

export default connect(mapStateToProps, {initializeApp})(App);

import React from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './component/Dialogs/DialogsContainer';
import FriendsContainer from './component/Friends/FriendsContainer';
import ProfileContainer from './component/Profile/ProfileContainer';
import HeaderContainer from './component/Header/HeaderContainer';
import Preloader from './component/common/Preloader/Preloader';
import Settings from './component/Settings/Settings';
import Login from './component/Login/Login';
import Music from './component/Music/Music';
import News from './component/News/News';
import Nav from './component/Nav/Nav';
import { initializeApp } from './redux/appReducer';
import './App.scss';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render () {
    if (!this.props.initialazed) {
      return <Preloader />
    }
    return (
      <div className='app'>
        <HeaderContainer />
        <Nav />
        <div className='content'>
          <Routes>
            <Route path="/profile" element={<ProfileContainer />}>
              <Route path=":userId" element={<ProfileContainer />} />
            </Route>
            <Route path="/dialogs" element = {<DialogsContainer />} />
            <Route path="/news" element = {<News />}/>
            <Route path="/music" element = {<Music />}/>
            <Route path="/friends" element = {<FriendsContainer />}/>
            <Route path="/settings" element = {<Settings />}/>
            <Route path="/login" element = {<Login />}/>
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialazed: state.appReducer.initialazed,
})

export default connect(mapStateToProps, {initializeApp})(App);

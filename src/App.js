import { Route, Routes } from 'react-router-dom';
import './App.scss';
import DialogsContainer from './component/Dialogs/DialogsContainer';
import FriendsContainer from './component/Friends/FriendsContainer';
import Header from './component/Header/Header';
import Music from './component/Music/Music';
import Nav from './component/Nav/Nav';
import News from './component/News/News';
import ProfileContainer from './component/Profile/ProfileContainer';
import Settings from './component/Settings/Settings';

const App = (props) => {

  return (
    <div className='app'>
      <Header />
      <Nav />
      <div className='content'>
        <Routes>
          <Route path={'/profile'} element={<ProfileContainer/>}/>
          <Route path="/profile/:userId?" element = {<ProfileContainer />} />
          <Route path="/dialogs" element = {<DialogsContainer />} />
          <Route path="/news" element = {<News />}/>
          <Route path="/music" element = {<Music />}/>
          <Route path="/friends" element = {<FriendsContainer />}/>
          <Route path="/settings" element = {<Settings />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

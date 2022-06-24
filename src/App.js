import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Dialogs from './component/Dialogs/Dialogs';
import Friends from './component/Friends/Friends';
import Header from './component/Header/Header';
import Music from './component/Music/Music';
import Nav from './component/Nav/Nav';
import News from './component/News/News';
import Profile from './component/Profile/Profile';
import Settings from './component/Settings/Settings';

const App = (props) => {
  console.log(props)
  return (
    <div className='app'>
      <Header />
      <Nav />
      <div className='content'>
      <Routes>
        <Route path="/profile" element = {<Profile 
        profilePage={props.state.profilePageReducer}
        dispatch={props.dispatch}/>}/>

        <Route path="/dialogs" element = {<Dialogs store={props.store} />}
        />
        <Route path="/news" element = {<News />}/>
        <Route path="/music" element = {<Music />}/>
        <Route path="/settings" element = {<Settings />}/>
        <Route path="/friends" element = {<Friends state={props.state.friendsData} />}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;

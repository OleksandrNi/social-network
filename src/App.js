import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Dialogs from './component/Dialogs/Dialogs';
import Header from './component/Header/Header';
import Music from './component/Music/Music';
import Nav from './component/Nav/Nav';
import News from './component/News/News';
import Profile from './component/Profile/Profile';
import Settings from './component/Settings/Settings';

function App(props) {

  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Nav />
        <div className='content'>
        <Routes>
          <Route path="/profile" element = {<Profile postsData={props.state.profilePage.postsData}/>}/>
          <Route path="/dialogs" 
            element = {<Dialogs 
              messagesData={props.state.messagePage.messagesData} 
              dialogData={props.state.messagePage.dialogData}/>}
          />
          <Route path="/news" element = {<News />}/>
          <Route path="/music" element = {<Music />}/>
          <Route path="/settings" element = {<Settings />}/>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

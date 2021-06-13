import logo from './logo.svg';


import './App.css';
import Header from './components/1header/Header.jsx';
import Nav from './components/2nav/Nav.jsx';
import MyPage from './components/3main/1MyPage/MyPage';
import News from './components/3main/2News/News';
import Message from './components/3main/3Message/Message';
import Friends from './components/3main/4Friends/Friends';
import Music from './components/3main/5Music/Music';
import Settings from './components/3main/6Setings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';


function App(props) {
  console.log('AppProps', props);
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <Nav />
        <div className='main'>
          <Route path='/MyPage' render={() => < MyPage
            myPageP={props.state.myPageP}
            dispatch={props.dispatch} />} />
          <Route path='/News' render={() => < News />} />
          <Route path='/Message' render={() => < Message
            messagesP={props.state.messagesP}
            dispatch={props.dispatch} />} />
          <Route path='/Friends' render={() => < Friends />} />
          <Route path='/Music' render={() => < Music />} />
          <Route path='/Settings' render={() => < Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
//addPost={props.addPost}
//updateNewPostText={props.updateNewPostText}
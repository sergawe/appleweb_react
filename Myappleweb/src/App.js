import React from 'react';
import Header from './components/Header/Header';
import Alert from './components/Alert-section/Alert';
import Main from './components/Main-Section';
import Footer from './components/Footer/Footer';

class App extends React.Component{
    render(){
        return (
            <div>
               <Header />
               <Alert />
               <Main />
               <Footer />, 
            </div>
        )
    }
}
export default App;
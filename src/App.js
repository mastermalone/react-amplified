import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import HomePage from './pages/home';
import ThemProvider from './providers/MainTheme/mainTheme';
import Header from './components/header';

function App() {
  return (
    <>
      <ThemProvider>
        <Header></Header>
        <HomePage></HomePage>
      </ThemProvider>
    </>
  );
}

export default withAuthenticator(App);

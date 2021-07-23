import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import HomePage from './pages/home';
import ThemeProvider from './providers/MainTheme/mainTheme';
import Header from './components/header';

function App() {
  return (
    <>
      <ThemeProvider>
        <Header></Header>
        <HomePage></HomePage>
      </ThemeProvider>
    </>
  );
}

export default withAuthenticator(App);

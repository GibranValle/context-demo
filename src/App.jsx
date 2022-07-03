import './App.css';

import ThemeContextProvider from './context/ThemeContext'
import LanguageProvider from './context/LanguageContext';
import Navbar from './Navbar';
import Form from './Form'
import PageContent from './PageContent';

function App() {
  return (
    <ThemeContextProvider>
      <LanguageProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </LanguageProvider>
    </ThemeContextProvider>
  );
}

export default App;
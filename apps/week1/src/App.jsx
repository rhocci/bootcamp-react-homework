import ListSection from './components/ListSection/ListSection.jsx';
import ListItem from './components/ListItem/ListItem.jsx';
import { SVGICON_ITEMS, BUTTON_ITEMS } from './data.jsx';
import './App.css';

function App() {
  return (
    <>
      <header id="header">
        <h1>Stateless Components</h1>
        <p>React 1주차 과제 - 문서영</p>
      </header>
      <main id="container">
        <ListSection title="SvgIcon">
          {SVGICON_ITEMS.map((item) => (
            <ListItem key={item.title} title={item.title}>
              {item.render()}
            </ListItem>
          ))}
        </ListSection>
        <ListSection title="UploadButton">
          {BUTTON_ITEMS.map((item) => (
            <ListItem key={item.title} title={item.title}>
              {item.render()}
            </ListItem>
          ))}
        </ListSection>
      </main>
    </>
  );
}

export default App;

import ListSection from './components/ListSection/ListSection.jsx';
import ListItem from './components/ListItem/ListItem.jsx';
import { SVGICON_ITEMS, BUTTON_ITEMS } from './data.jsx';
// import SvgIcon from './components/SvgIcon/SvgIcon.jsx';
// import UploadButton from './components/UploadButton/UploadButton.jsx';

function App() {
  return (
    <>
      <h1>1주차 과제 - Stateless 컴포넌트</h1>
      <main id="container">
        <ListSection title="SvgIcon 컴포넌트">
          {SVGICON_ITEMS.map((item) => (
            <ListItem key={item.title} title={item.title}>
              {item.render()}
            </ListItem>
          ))}
        </ListSection>
        <ListSection title="UploadButton 컴포넌트">
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

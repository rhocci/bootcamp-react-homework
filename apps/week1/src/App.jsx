import SvgIcon from './components/SvgIcon/SvgIcon.jsx';
import UploadButton from './components/UploadButton/UploadButton.jsx';

function App() {
  return (
    <>
      <h1>1주차 과제 - Stateless 컴포넌트</h1>
      <main id="container">
        <section className="svg-icon">
          <h2>SvgIcon</h2>
          <ul className="component-list">
            <li>
              <h3>up-arrow</h3>
              <SvgIcon />
            </li>
            <li>
              <h3>spinner</h3>
              <SvgIcon type="spinner" />
            </li>
            <li>
              <h3>up-arrow</h3>
              <SvgIcon type="check-mark" />
            </li>
            <li>
              <h3>up-arrow</h3>
              <SvgIcon type="cross" />
            </li>
            <li>
              <h3>up-arrow</h3>
              <SvgIcon type="not-allowed" />
            </li>
          </ul>
        </section>
        <section className="upload-button">
          <h2>UploadButton</h2>
          <ul className="component-list">
            <li>
              <h3>idle</h3>
              <UploadButton label="업로드 대기"></UploadButton>
            </li>
            <li>
              <h3>pending(loading)</h3>
              <UploadButton label="업로드 중" status="pending">
                업로드 중
              </UploadButton>
            </li>
            <li>
              <h3>resolved</h3>
              <UploadButton label="업로드 성공" status="resolved">
                완료
              </UploadButton>
            </li>
            <li>
              <h3>rejected</h3>
              <UploadButton label="업로드 실패" status="rejected">
                실패
              </UploadButton>
            </li>
            <li>
              <h3>disabled</h3>
              <UploadButton
                label="비활성 버튼"
                status="disabled"
              ></UploadButton>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;

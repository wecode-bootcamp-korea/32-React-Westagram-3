import AppBtn from './components/AppBtn';

const AppDownload = () => {
  return (
    <div className="app_download">
      <span>앱을 다운로드하세요.</span>
      <div className="appBtn_wrap">
        <AppBtn text="앱스토어 다운로드" />
        <AppBtn text="구글플레이 다운로드" />
      </div>
    </div>
  );
};

export default AppDownload;

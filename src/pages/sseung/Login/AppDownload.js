const AppDownload = () => {
  return (
    <div className="app_download">
      <span>앱을 다운로드하세요.</span>
      <div className="appBtn_wrap">
        <button type="button" className="appstrore">
          앱스토어 다운로드
        </button>
        <button type="button" className="googleplay">
          구글플레이 다운로드
        </button>
      </div>
    </div>
  );
};

export default AppDownload;

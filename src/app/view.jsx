import { useFile } from "./model";
import "./style.css";

const App = () => {
  const { handleGetFile, detailLink } = useFile();

  const hasDetailLink = Object.values(detailLink).length !== 0;

  return (
    <div className="app-main">
      <header className="app-main__header">
        <h1>Mocks for UI 👩‍🎤✨</h1>
      </header>
      <div className="app-main__upload-block">
        <label htmlFor="file">Upload 🗄</label>
        <input id="file" type="file" hidden onChange={handleGetFile} />
      </div>
      <div className="app-main__download-block">
        {hasDetailLink && (
          <a
            href={detailLink.link}
            download={`${detailLink.name}.js`}
            className="app-main__detail-download"
          >
            Detail mock ⚙️
          </a>
        )}
        <div className="app-main__detail-download-list-block">
          <p>List Mock:</p>
        </div>
      </div>
    </div>
  );
};

export { App };

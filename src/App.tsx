import './App.css';

import { DOCUMENTS } from './__stdlib';
import DocumentManager from './Screens/DocumentManager/DocumentManager';

const App = () => {
  return (
    <div className="App">
      <DocumentManager documents={DOCUMENTS} />
    </div>
  );
};

export default App;

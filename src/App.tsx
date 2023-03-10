import './App.css';

import { DOCUMENTS } from './__stdlib';
import DocumentManager from './Screens/DocumentManager/DocumentManager';
import Image from './UILibrary/Image/Image';
import { ImageVariant } from './UILibrary/Image/Image.Enum';

const App = () => {
  return (
    <div className="App">
      <DocumentManager documents={DOCUMENTS} />
      <Image variant={ImageVariant.ROUND} imagePath="/voiceflowBanner.png" />
    </div>
  );
};

export default App;

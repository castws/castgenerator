import Actions from 'components/Actions';
import CastOptions from 'components/CastOptions';
import CastViewer from 'components/CastViewer';
import cn from './App.module.css';

const App = () => {
  return (
    <div className={cn.app}>
      <div>
        <h1>Cast Generator</h1>
        <div className={cn.content}>
          <div className={cn.figure}>
            <CastViewer />
            <Actions />
          </div>
          <div className={cn.options}>
            <CastOptions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

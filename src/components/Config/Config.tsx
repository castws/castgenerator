import { useRecoilState } from 'recoil';

import Checkbox from 'components/Checkbox';
import { configState } from 'services/config';
import cn from './Config.module.css';

const Config = () => {
  const [config, setConfig] = useRecoilState(configState);

  return (
    <div className={cn.config}>
      <Checkbox
        label={
          <span>
            Allow casts overlap (<em>e.g.</em>, LLC after SLC in same leg)
          </span>
        }
        name="allowOverlap"
        checked={config.allowOverlap}
        onChange={() =>
          setConfig({ ...config, allowOverlap: !config.allowOverlap })
        }
      />
    </div>
  );
};

export default Config;

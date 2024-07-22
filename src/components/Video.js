import {useEffect, useState} from 'react';

export const Video = (props) => {
  const [muted, setMuted] = useState(props.muted || true);
  const [controls, setControls] = useState(props.controls || false);
  const [hasAutoplayed, setHasAutoplayed] = useState(false);

  useEffect(() => {
    setHasAutoplayed(false);
  }, [props.autoPlay]);

  return (
    <video
      {...props}
      muted={muted}
      onPlay={() => (!hasAutoplayed ? setHasAutoplayed(true) : setMuted(false))}
      onPause={() => setMuted(true)}
      controls={props.controls != undefined ? props.controls : controls}
      onMouseOver={() => setControls(true)}
      onMouseOut={() => setControls(false)}
    />
  );
};

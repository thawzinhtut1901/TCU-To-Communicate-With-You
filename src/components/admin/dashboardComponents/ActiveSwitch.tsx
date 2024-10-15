import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function ActiveSwitch() {
  return (
    <div>
      <Switch {...label} defaultChecked />
    </div>
  );
}

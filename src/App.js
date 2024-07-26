import React from 'react';
import Grid from './components/Grid';
import './App.css';

const websites = [
  { url: 'https://app.avnu.fi/', title: 'Avnu', thumbnail: 'https://doc.avnu.fi/~gitbook/image?url=https%3A%2F%2F1433483397-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FBEENXwkITptyXUHEEOyz%252Fuploads%252F7NueSM5JFo6lyHh9GgRq%252FAVNU_logo_white.png%3Falt%3Dmedia%26token%3D2978a639-0e81-4f10-9115-caa6de4d6616&width=768&dpr=2&quality=100&sign=518fb438&sv=1' },
  { url: 'https://app.ekubo.org/', title: 'Ekubo', thumbnail: 'https://app.ekubo.org/pwa-512x512.png' },
  { url: 'https://v3.hyperflex.services/', title: 'Flex', thumbnail: 'https://v3.hyperflex.services/_next/static/media/logo-flex.ebe59111.svg' },
  { url: 'https://app.fibrous.finance/', title: 'Fibrous', thumbnail: 'https://app.fibrous.finance/static/media/logo-for-darkv3.49bcbe6a541a5adf8e4d0c42c26d847b.svg' },
  { url: 'https://beta.strkfarm.xyz/slinks', title: 'StrkFarm', thumbnail: 'https://static-assets-8zct.onrender.com/strkfarm/fulllogo-color.svg' },
  { url: 'https://slink.raize.club/', title: 'Raize.Club', thumbnail: 'https://www.raize.club/assets/logos/raizelogo.svg' },
  { url: 'https://starkflip.starkarcade.com/', title: 'StarkArcade', thumbnail: 'https://pbs.twimg.com/profile_images/1771003396989898752/VZz3jZqu_400x400.jpg' },
  { url: '  https://app.starknet.id', title: 'Starknet.id', thumbnail: 'https://app.starknet.id/visuals/StarknetIdLogo.svg' },
];

function App() {  
  return (
    <div className="App">
      <Grid websites={websites} />
    </div>
  );
}

export default App;
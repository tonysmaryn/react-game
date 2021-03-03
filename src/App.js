import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { Game } from './components/game/Game';
import { Menu } from './components/menu/Menu';
import { Settings } from './components/settings/Settings';

function App() {
  const defaultSettings = () => ({
    diff: 'easy',
  });

  const [settings, setSettings] = useState(defaultSettings);

  const onChangeDiff = (newDiff) => {
    setSettings({ diff: newDiff });
    console.log('newDiff: ' + newDiff);

  }

  return (
    <Switch>
      <Route exact path='/' component={Menu} />
      <Route path='/game' render={() => <Game settings={settings} />} />
      <Route path='/settings' render={() => <Settings changeDiff={onChangeDiff} />} />
    </Switch>
  );
}

export default App;

import Baobab from 'baobab';

import api from './api';
import player from './player';

export const tree = new Baobab({
  api,
  player,
});

global.tree = tree;

export default tree;

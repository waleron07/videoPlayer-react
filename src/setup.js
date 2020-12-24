import { root } from 'baobab-connect';

import baobabJsonEditor from 'baobab-jsoneditor';
import tree from './state';

root(tree);

const { PROD_ROOT } = process.env;
const { DEV_ROOT } = process.env;

let defaultRoot = '';

if (process.env.NODE_ENV === 'development') {
  defaultRoot = DEV_ROOT;
  if (!window.navigator.userAgent.match(/iPhone|Android/i)) {
    baobabJsonEditor(tree);
  }
} else {
  defaultRoot = PROD_ROOT;
}

const $api = tree.select('api');
$api.set({ defaultRoot });

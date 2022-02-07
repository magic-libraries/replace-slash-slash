import { is } from '@magic/test'

import defaultReplaceSlashSlash, { replaceSlashSlash } from '../src/index.mjs'


export default [
  { fn: true },
  { fn: is.deep.equal(defaultReplaceSlashSlash, replaceSlashSlash), info: 'default export equals named export' },

]
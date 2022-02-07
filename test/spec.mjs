import { is, version } from '@magic/test'

import defaultReplaceSlashSlash, { replaceSlashSlash } from '../src/index.mjs'

const spec = {
  default: 'fn',
  replaceSlashSlash: 'fn',
}

export default [
  ...version({ replaceSlashSlash }, spec),
  {
    fn: is.deep.equal(defaultReplaceSlashSlash, replaceSlashSlash),
    info: 'default export equals named export',
  },
]

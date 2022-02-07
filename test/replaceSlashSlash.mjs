import { is } from '@magic/test'
import defaultReplaceSlashSlash, { replaceSlashSlash } from '../src/index.mjs'

export default [
  {
    fn: () => replaceSlashSlash('//testing//'),
    expect: is.string,
    info: 'slugify returns a string',
  },
  {
    fn: () => replaceSlashSlash('//testing/'),
    expect: '/testing/',
    info: 'replaceSlashSlash replaces Slashes at start',
  },
  {
    fn: () => replaceSlashSlash('/testing//'),
    expect: '/testing/',
    info: 'replaceSlashSlash replaces Slashes at end',
  },
  {
    fn: () => replaceSlashSlash('//test//ing//'),
    expect: '/test/ing/',
    info: 'replaceSlashSlash replaces Slashes at start, end and in the middle',
  },
  {
    fn: () => replaceSlashSlash('/test//ing/'),
    expect: '/test/ing/',
    info: 'replaceSlashSlash replaces Slashes in the middle',
  },
  {
    fn: () => replaceSlashSlash(0),
    expect: '',
    info: 'replaceSlashSlash always returns a string, input: number',
  },
  {
    fn: () => replaceSlashSlash(new Error('meh')),
    expect: '',
    info: 'replaceSlashSlash always returns a string, input: Error',
  },
  {
    fn: () => replaceSlashSlash(false),
    expect: '',
    info: 'replaceSlashSlash always returns a string, input: false',
  },
  {
    fn: () => replaceSlashSlash(undefined),
    expect: '',
    info: 'replaceSlashSlash always returns a string, input: undefined',
  },
  {
    fn: () => replaceSlashSlash(new Date()),
    expect: '',
    info: 'replaceSlashSlash always returns a string, input: Date',
  },
]

export const replaceSlashSlash = str => {
  if (typeof str !== 'string') {
    return ''
  }

  return str.replace(/\/\//gim, '/')
}

export default replaceSlashSlash

export function removeWhitespace(val:string) {
  if(typeof val === 'string')
    return val.replace(/\s/g, '');
}

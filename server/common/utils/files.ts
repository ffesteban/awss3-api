export const FileUtils = {
  getBase64Type: (base64MineType: string): string => base64MineType.split('/').pop(),
  getBufferFromBase64: (base64: string, base64Type: string): Buffer =>
    new Buffer(base64.replace(getBase64Replace(base64Type), ''), 'base64'),
  getBase64MimeType: (base64: string): string => {
    let result = null;
    if (typeof base64 !== 'string') {
      return result;
    }
    const mime = base64.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
    if (mime && mime.length) {
      result = mime[1];
    }
    return result;
  }
}

const getBase64Replace = (base64Type: string): string => {
  const base64Replaces = {
    pdf: 'data:application/pdf;base64,',
    mp3: 'data:audio/mp3;base64,'
  };
  return base64Replaces[base64Type] ? base64Replaces[base64Type] : /^data:image\/\w+;base64,/;
}
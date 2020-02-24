export default function imgUrl(path) {
  if (typeof path === 'string') {
    return `${process.env.REACT_APP_S3_URL}/${path}`;
  }
  return path;
}

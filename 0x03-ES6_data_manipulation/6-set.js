export default function setFromArray(array) {
  if (!Array.isArray(array)) {
    console.log('The provided argument is not an array');
    return null;
  }
  return new Set(array);
}

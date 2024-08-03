export default function createInt8TypedArray(length, position, value) {
  const arr = new ArrayBuffer(length);
  const data = new DataView(arr);

  try {
    data.setInt8(position, value);
  } catch (e) {
    throw new Error('Position outside range');
  }

  return data;
}

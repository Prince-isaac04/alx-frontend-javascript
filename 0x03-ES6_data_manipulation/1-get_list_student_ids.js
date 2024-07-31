export default function getListStudentIds(list) {
  // Check if the input is not an array
  if (!Array.isArray(list)) {
    return [];
  }
  
  // Use the map function to extract the IDs
  return list.map((obj) => obj.id);
}

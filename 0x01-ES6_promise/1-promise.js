export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const object = {
      status: 200,
      body: 'Success',
    };

    if (success === true) {
      resolve(object);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

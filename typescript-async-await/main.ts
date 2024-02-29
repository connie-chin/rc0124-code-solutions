function waitTwoSeconds(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Done Waiting!');
    }, 2000);
  });
}

// waitTwoSeconds()
//   .then(message => console.log(message))
//   .catch(error => console.error('Error:', error));

async function performWait(): Promise<void> {
  try {
    const result = await waitTwoSeconds();
    console.log(result);
  } catch (error) {
    console.error('Error:', error);
  }
}

performWait();

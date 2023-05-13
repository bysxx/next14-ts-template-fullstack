export async function getData() {
  // eslint-disable-next-line
  return await new Promise((resolve) => setTimeout(resolve, 1000)).then((_) => 'Success!');
}

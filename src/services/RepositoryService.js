export const getPublicRepo = async () => {
  let response = await fetch('https://api.github.com/repositories');
  let json = await response.json();
  return json;
};

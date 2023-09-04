export function save(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.log(error);
  }
}

export function load(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? '' : JSON.parse(serializedState);
  } catch (error) {
    console.log();
  }
}

export function randomString() {
  const randomNumber = Math.floor(Math.random() * 8 * 36);
  return randomNumber.toString(36);
}

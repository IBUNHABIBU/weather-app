
function convert(temp) {
  const toFarenheit = (temp * (9 / 5)) + 32;
  return Math.floor(toFarenheit);
}
export default convert;
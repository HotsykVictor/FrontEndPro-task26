const isValid = (name) =>
  typeof name === "string" && name.length !== 0 && isNaN(name);
export default isValid;

const inputValidator = (input) => {
  if (input !== "") {
    return true;
  }
};

module.exports = [
  {
    type: "input",
    name: "path",
    message: "src/pages以下のパスを指定してください。ex) about",
    validate: inputValidator,
  },
];

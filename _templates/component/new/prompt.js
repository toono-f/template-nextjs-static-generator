const inputValidator = (input) => {
  if (input !== "") {
    return true;
  }
};

module.exports = [
  {
    type: "input",
    name: "name",
    message: "コンポーネントの名前を指定してください。ex) Button",
    validate: inputValidator,
  },
  {
    type: "input",
    name: "path",
    message: "src/components以下のパスを指定してください。ex) atoms",
    validate: inputValidator,
  },
  {
    type: "toggle",
    name: "withCssModule",
    message: ".module.scssも一緒に作成しますか？",
    disabled: "いいえ",
    enabled: "はい",
    initial: true,
  },
  {
    type: "toggle",
    name: "withStory",
    message: ".stories.tsxも一緒に作成しますか？",
    disabled: "いいえ",
    enabled: "はい",
    initial: true,
  },
];

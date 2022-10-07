const inputValidator = (input) => {
  if (input !== "") {
    return true;
  }
};

module.exports = [
  {
    type: "select",
    name: "path",
    message: "コンポーネントの粒度を選択してください",
    choices: ["atoms", "molecules", "organisms", "templates", "layouts"],
  },
  {
    type: "input",
    name: "name",
    message: "コンポーネント名をパスカルケースで入力してください(例: ButtonSample)",
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
  {
    type: "toggle",
    name: "withTest",
    message: ".spec.tsxも一緒に作成しますか？",
    disabled: "いいえ",
    enabled: "はい",
    initial: true,
  },
];

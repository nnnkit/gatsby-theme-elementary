let basePath;

exports.onPreBootstrap = ({ reporter }, themeOptions) => {
  basePath = themeOptions.basePath || "/";
  console.log(basePath);
};

exports.createPages = ({ actions, reporter }) => {
  reporter.info("make sure to load data from somewhere!");

  // TODO replace this with data from somewhere
  actions.createPage({
    path: "/",
    component: require.resolve("./src/templates/home.js")
  });
};

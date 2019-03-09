const path = require("path"),
  fs = require("fs"),
  SETS = {
    desktop: ["common", "desktop"],
    touch: ["common", "touch"]
  };

function getLevels(platform) {
  let platformNames = SETS[platform],
    levels = [];

  platformNames.forEach(function(name) {
    levels.push({
      path: path.join("node_modules", "bem-core", name + ".blocks"),
      check: false
    });
    levels.push({
      path: path.join("node_modules", "bem-components", name + ".blocks"),
      check: false
    });
    levels.push({
      path: "node_modules/bem-components/design/common.blocks",
      check: false
    });
    levels.push({
      path: "node_modules/bem-components/design/desktop.blocks",
      check: false
    });
    levels.push({
      path: path.join("node_modules", "bem-forms", name + ".blocks"),
      check: false
    });
    levels.push({
      path: path.join("node_modules", "bem-history", name + ".blocks"),
      check: false
    });
    levels.push({
      path: "node_modules/bem-textarea-editor/common.blocks",
      check: false
    });
    levels.push({
      path: path.join("node_modules", "bem-font-awesome-icons"),
      check: false
    });
    levels.push({
      path: path.join("components", name + ".blocks"),
      check: true
    });
    levels.push({ path: path.join("design", name + ".blocks"), check: true });
  });

  return levels.filter(function(level) {
    return fs.existsSync(level.path);
  });
}

module.exports = {
  getLevels: getLevels,
  SETS: SETS
};

const IS_WINDOWS = process.platform === "win32";

if (IS_WINDOWS) {
  return;
}

const { execSync } = require("child_process");
const bash = (...commands) => {
  commands.forEach((command) => {
    const cwd = IS_WINDOWS ? "C:\\Program Files\\bzBond-server" : "/var/www/bzbond-server";
    const shell = IS_WINDOWS ? "powershell.exe" : undefined;
    execSync(command, { cwd, shell });
  });
};

function installLibgbm () {
  bash(`sudo apt-get install libgbm-dev -y`);
}

module.exports = installLibgbm;
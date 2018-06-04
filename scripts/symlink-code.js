const OS = require("os");
const {execSync} = require("child_process");

if (OS.platform() === "win32"){
	execSync("mklink /D ..\\ios lib\\ios",{cwd:__dirname});
	execSync("mklink /D ..\\android lib\\android",{cwd:__dirname});	
} else {
	execSync("ln -sf ../lib/{ios,android} ..",{cwd:__dirname});
}

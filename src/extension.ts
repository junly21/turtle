// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import * as notifier from "node-notifier";
import * as path from "path";

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log("음");
  console.log(__dirname);
  const notifier = require("node-notifier");
  // Define the interval and the message to show

  // Set up the interval to show the message every 10 seconds
  const iconPath = path.join(__dirname, "assets", "turtle.png");
  const showNotification = () => {
    notifier.notify({
      title: "turtle-alarm",
      message: "거북목! 스트레칭!",
      sound: false,
      timeout: 1,
      icon: iconPath,
    });

    // Schedule next notification
    const interval = getRandomInt(5000, 10000); // 5 to 10 seconds in milliseconds
    setTimeout(showNotification, 10000);
  };

  showNotification();
}

// This method is called when your extension is deactivated
export function deactivate() {}

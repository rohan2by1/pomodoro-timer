Pomodoro Timer by Rohan

A transparent floating Pomodoro timer built with Electron. The timer supports Pomodoro, short break, and long break modes, and provides an interactive UI that can be toggled on and off.

Features

Transparent always-on-top floating window

Pomodoro, short break, and long break modes

Start, pause, and reset functionality

Interactive UI that can be toggled

Plays three beeps when the timer ends

Customizable settings

Supports Windows

Tech Stack

Electron - For building the desktop application

HTML, CSS, JavaScript - For frontend UI

Tailwind CSS - For styling

Node.js - For managing dependencies and running the Electron app

Installation

Prerequisites

Ensure you have Node.js installed.

Clone the Repository

git clone https://github.com/yourusername/pomodoro-timer.git
cd pomodoro-timer

Install Dependencies

npm install

Run the Application

npm start

Build the Application

To create a Windows portable executable:

npm run build

Usage

Press F9 to toggle interactivity.

Click the Start button to begin the timer.

Click 🔄 to reset the timer.

Click ❌ to close the application.

File Structure

├── index.html        # UI layout
├── main.js           # Electron main process
├── preload.js        # Secure IPC communication
├── styles.css        # Styling for UI
├── package.json      # Project metadata and scripts
├── package-lock.json # Dependency lock file

Author

Created by Rohan

License

This project is licensed under the ISC License.

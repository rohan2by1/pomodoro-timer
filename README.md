
# Pomodoro Timer by Rohan

A transparent floating Pomodoro timer built with Electron. The timer supports Pomodoro, short break, and long break modes, and provides an interactive UI that can be toggled on and off.


## Features

- Transparent always-on-top floating window

- Pomodoro, short break, and long break modes

- Start, pause, and reset functionality

- Interactive UI that can be toggled

- Plays three beeps when the timer ends

- Customizable settings

- Supports Windows


## Tech Stack

**Electron :** - For building the desktop application

**HTML, CSS, JavaScript:** - For frontend UI

**Tailwind CSS :** - For styling

**Node.js :** - For managing dependencies and running the Electron app



## Installation
### Prerequisites
Ensure you have [Node.js](https://nodejs.org/en) installed. 


Clone the project


```bash
  git clone https://github.com/rohan2by1/pomodoro-timer.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Usage

- Press F9 to toggle interactivity.

- Click the Start button to begin the timer.

- Click 🔄 to reset the timer.

- Click ❌ to close the application.

## File Structure

```
├── index.html        # UI layout
├── main.js           # Electron main process
├── preload.js        # Secure IPC communication
├── styles.css        # Styling for UI
├── package.json      # Project metadata and scripts
├── package-lock.json # Dependency lock file
```


## Authors

- Created by Rohan [@rohan2by1](https://www.github.com/rohan2by1)


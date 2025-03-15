const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron');
const path = require('path');

let mainWindow;
let isInteractive = false; // Tracks interactivity state

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 300,
        transparent: true,
        frame: false,
        alwaysOnTop: true,
        resizable: false,
        backgroundColor: "#00000000",
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        },
    });

    mainWindow.loadFile('index.html');
    mainWindow.setIgnoreMouseEvents(true); // Start as non-interactive
    mainWindow.setSize(850, 450); // Adjust to fit content

function toggleUIVisibility(isVisible) {
    mainWindow.webContents.executeJavaScript(`
        document.body.style.opacity = ${isVisible ? '1' : '0.5'};
        document.querySelectorAll('.mode-buttons, .control-buttons').forEach(el => {
            el.style.opacity = ${isVisible ? '1' : '0'};
        });
    `);
}
// Initialize UI as hidden since we start non-interactive
mainWindow.webContents.on('did-finish-load', () => {
    toggleUIVisibility(false);
});

// Update the toggle interactivity shortcut to also toggle UI visibility
globalShortcut.register('F9', () => {
    isInteractive = !isInteractive;
    mainWindow.setIgnoreMouseEvents(!isInteractive);
    toggleUIVisibility(isInteractive);
    console.log(`App is now ${isInteractive ? 'interactive' : 'non-interactive'}`);
});

// Update the blur handler to also hide UI
mainWindow.on('blur', () => {
    isInteractive = false;
    mainWindow.setIgnoreMouseEvents(true);
    toggleUIVisibility(false);
    console.log('App is now non-interactive (blur)');
});
    
    // Handle close requests from renderer
    ipcMain.on('close-app', () => {
        console.log('Close request received');
        mainWindow.close();
    });
});

app.on('window-all-closed', () => {
    globalShortcut.unregisterAll();
    app.quit();
});
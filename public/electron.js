const path = require('path');
const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const si = require('systeminformation');


const express = require('express');

const appExpress = express();


// ====== ============ ========== ==============


//===================================== estudar depois
const cors = require('cors');

appExpress.use(cors({
    origin: '*'
}));

//=====================================

appExpress.get('/', (req, res) => {
    res.send('Hello World!');
});

// ======================SISTEMA========================

appExpress.get('/system', (req, res) => {
    si.system(function (data) {
        res.send(data);
    });
});

appExpress.get('/baseboard', (req, res) => {
    si.baseboard(function (data) {
        res.send(data);
    });
});



// ==============================================

// ==================== CPU ==========================

appExpress.get('/cpu', (req, res) => {
    si.cpu(function (data) {
        res.send(data);
    });
});

appExpress.get('/cpuSpeed', (req, res) => {
    si.cpuCurrentSpeed(function (data) {
        res.send(data);
        console.log(data);
    });
});


appExpress.get('/cpuAvgLoad', (req, res) => {
    si.currentLoad(function (data) {
        res.send(data);
        //  console.log(data); 
    });
});

appExpress.get('/cpuTemp', (req, res) => {
    si.cpuTemperature(function (data) {
        res.send(data);
        console.log(data);
    });
});
// ================================================================


// ==================== GPU ==========================
appExpress.get('/gpu', (req, res) => {
    si.graphics(function (data) {
        res.send(data.controllers[0]);
        // console.log(data.controllers);
    });
});
// ==============================================


// ======================DISCO======================


appExpress.get('/disk', (req, res) => {
    si.diskLayout(function (data) {
        res.send(data);

    });
});
// ============================================

// ======================Memory======================memLayout

appExpress.get('/memory', (req, res) => {
    si.mem(function (data) {
        res.send(data);

    });
});

appExpress.get('/memLayout', (req, res) => {
    si.memLayout(function (data) {
        res.send(data);

    });
});

// ============================================


appExpress.listen(3030, () => {
    console.log('Server listening on port 3030');
});


function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 1060,
        height: 700,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    // and load the index.html of the app.
    // win.loadFile("index.html");
    win.loadURL(
        isDev
            ? 'http://localhost:3000'
            : `file://${path.join(__dirname, '../build/index.html')}`
    );
    // Open the DevTools.
    if (isDev) {
        win.webContents.openDevTools({ mode: 'detach' });
    }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
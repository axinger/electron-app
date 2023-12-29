const { app, BrowserWindow } = require('electron')

const createWindow = () => {

    // 创建浏览器窗口
    const win = new BrowserWindow({
      autoHideMenuBar: false,
    })

    // win.webContents.openDevTools()
    // 全屏
    win.maximize()
    
    // 载入网页链接
    win.loadURL('https://www.baidu.com/').then(r => {

    })
}

// 应用程序准备好后加载窗口
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// 窗口关闭后退出应用程序
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
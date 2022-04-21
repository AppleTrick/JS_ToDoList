const {app,BrowserWindow,Menu} = require('electron');

const createWindow = () => {
    const window = new BrowserWindow({
        width: 1200,
        height: 800,
    });
    window.loadFile("index.html");

    const template = [{
        label : "ToDoList",
        submenu : [{role : "about"}, {type : "separator"},{role : "quit"}],
    },
    {
        label : "기능",
        submenu : [
            {
                label : "새로운 배경화면",
                click : () => {
                    window.webContents.executeJavaScript(`
                        getBackground();
                    `);
                }
            },
            {
                type : "separator"
            },
            {
                label : "데이터초기화",
                click : () => {
                    window.webContents.executeJavaScript(`
                    localStorage.clear();
                    window.location.reload();
                    `);
                }
            }
        ],
    }
    ]

    const customMenu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(customMenu);
}

app.whenReady().then(()=>{
    createWindow();
});
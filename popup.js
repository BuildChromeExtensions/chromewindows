
document.getElementById('window-count').onclick = async () => {
    console.log('windows')
    // https://developer.chrome.com/docs/extensions/reference/api/windows#type-QueryOptions
    const query = { windowTypes: ['normal', 'popup'] }
    
    // async/await are supported as well.
    // const windows = await chrome.windows.getAll(query)

    chrome.windows.getAll(query, (windows) => {
        alert(`${windows.length} Windows`);
    });
}

document.querySelector('form').onsubmit = (e) => {
    e.preventDefault();

    const url = e.target.url.value;

    //optional fields
    const width = parseInt(e.target.width.value);
    const height = parseInt(e.target.height.value);
    const x = parseInt(e.target.x.value);
    const y = parseInt(e.target.y.value);
    const windowType = e.target.windowType.value;
    const windowState = e.target.windowState.value;
    const incognito = e.target.incognito.checked;
    const focused = e.target.focused.checked;


    //The initial state of the window. The minimized, maximized, and fullscreen states cannot be combined with focused, left, top, width, or height.
    if (windowState == 'normal') {
        // create window
        chrome.windows.create({
            url: url,
            type: windowType,
            width: width,
            height: height,
            left: x,
            top: y,
            state: 'normal',
            incognito: incognito,
            focused: focused
        })
    } else {
        // create window
        chrome.windows.create({
            url: url,
            state: windowState,
            incognito: incognito,
        })
    }

}
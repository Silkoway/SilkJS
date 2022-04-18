const link = (href, label) => {
    return `<a href="${href}"><code lang="js">${label}</code></a>`
}

const links = [link('sstring.html', 'SString'),
link('stime.html', 'STime'),
link('stest.html', 'STest'),
link('sdebug.html', 'SDebug'),
link('sconsole.html', 'SConsole'),]

links.forEach(element => {
    document.getElementById('nav-elements').innerHTML += element
})

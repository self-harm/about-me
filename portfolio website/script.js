console.log("its working!")

let themeDotes = document.getElementsByClassName('theme-dot')

let theme = sessionStorage.getItem('theme')

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

for (var i = 0; themeDotes.length > i; i++) {
    themeDotes[i].addEventListener('click', function () {
        let mode = this.dataset.mode
        console.log('Option clicked', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'default.css'
    }
    if (mode == 'dark') {
        document.getElementById('theme-style').href = 'dark.css'
    }
    if (mode == 'pink') {
        document.getElementById('theme-style').href = 'pink.css'
    }
    if (mode == 'gray') {
        document.getElementById('theme-style').href = 'gray.css'
    }

    sessionStorage.setItem('theme', mode)
}
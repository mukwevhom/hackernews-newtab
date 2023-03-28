window.onload = function() {
    document.querySelectorAll('.titleline a').forEach(element => {
        element.setAttribute('target', '_blank')
    })
}
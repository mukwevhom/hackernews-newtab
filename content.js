window.onload = function() {
    document.querySelectorAll('.storylink').forEach(element => {
        element.setAttribute('target', '_blank')
    })
}
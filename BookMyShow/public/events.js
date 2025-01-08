const home = () => {
    window.location.href = "/"
}
const adminPanel = () => {
    window.location.href = "/AdminPanel"
}
const openCanvas = () => {
    document.querySelector('.off-canvas').classList.add('on-canvas')
    document.querySelector('.off-canvas-background').classList.add('on-canvas-background')
}
const closeCanvas = () => {
    document.querySelector('.off-canvas').classList.remove('on-canvas')
    document.querySelector('.off-canvas-background').classList.remove('on-canvas-background')
}

const openAdForm = () => {
    document.querySelector('.adForm').classList.add('onAdForm')
    document.querySelector('.adform').classList.add('on-background')
}
const closeAdForm = () => {
    document.querySelector('.adForm').classList.remove('onAdForm')
    document.querySelector('.adform').classList.remove('on-background')
}
const openMovieForm = () => {
    document.querySelector('.movieForm').classList.add('onMovieForm')
    document.querySelector('.movieform').classList.add('on-background')
}
const closeMovieForm = () => {
    document.querySelector('.movieForm').classList.remove('onMovieForm')
    document.querySelector('.movieform').classList.remove('on-background')
}

const deleteMovie = (id) => {
    window.location.href = `/deleteMovie/${id}`
}
const editMovie = (id) => {
    window.location.href = `/editMovie/${id}`
}
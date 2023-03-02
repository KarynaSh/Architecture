window.onload = function() {

    setTimeout(function() {

        document.body.classList.add('loaded')

        Draggable.create('.gallery', {
            bounds: 'body'
        })
        InertiaPlugin.create('.gallery', {
            inertia: true
        })

    })

}
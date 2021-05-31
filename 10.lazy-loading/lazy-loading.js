const images = document.querySelectorAll("img")

const imgOption = {
    threshold: 0.2
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const img = entry.target
        img.src = img.src.replace("w=10&", "w=800&")
        imgObserver.unobserve(entry.target)
    })
}, imgOption)

images.forEach((img) => {
    imgObserver.observe(img)
})
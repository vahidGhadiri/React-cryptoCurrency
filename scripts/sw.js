self.addEventListener("install", (event) => {
    console.log("[service-worker]: is installed...", event)
})

self.addEventListener("activate", (event) => {
    console.log("[service-worker]: is activated...", event)
})

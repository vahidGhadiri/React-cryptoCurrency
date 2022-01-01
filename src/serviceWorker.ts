export const isServiceWorkerAvailable = (): boolean => {
    return "serviceWorker" in navigator
}


export enum Storage {
    /**
     * Stores the session information in the local storage
     */
    LocalStorage = "localStorage",
    /**
     * Store the session information in the session storage.
     */
    SessionStorage = "sessionStorage",
    /**
     * Store the session information in the memory cache.
     */
    MemoryCache = "memoryCacheStorage",
    /**
     * Store the session information in the web worker.
     */
    WebWorker = "webWorker",
    BrowserMemory = "browserMemory"
}
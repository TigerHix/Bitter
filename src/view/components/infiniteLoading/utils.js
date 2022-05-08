const stateHandler = state => ({
    loading() {
        state.value = "loading";
    },
    loaded() {
        state.value = "loaded";
    },
    complete() {
        state.value = "complete";
    },
    error() {
        state.value = "error";
    },
});

const infiniteEventEmitter = (emit, stateHandler) => {
    return () => {
        stateHandler.loading();
        emit("infinite", stateHandler);
    };
}

const isVisible = (el, view) => {
    if (!el || !view) return false;
    const rect = el.getBoundingClientRect();
    const viewRect = view.getBoundingClientRect();
    const rectTop = rect.top - viewRect.top;
    return (rectTop <= view.clientHeight || !view.clientHeight);
}

// generate event handler
const getEventHandler = (el, { state, distance, emitInfiniteEvent, top }) => {
    return () => {
        const { scrollTop, scrollHeight, clientHeight } = el;
        const validState = state.value == "loaded" || !state.value;

        if (top && Math.ceil(scrollTop) - distance <= 0 && validState) {
            emitInfiniteEvent();
        }
        if (!top && Math.ceil(scrollTop) + clientHeight >= scrollHeight - distance && validState) {
            emitInfiniteEvent();
        }
    };
};
// start scroll event
const startScrollEvent = params => {
    if (params.target && !document.querySelector(params.target))
        return console.error("Vue3 infinite loading: target prop should be a valid css selector");

    const el = document.querySelector(params.target) || document.documentElement;
    const target = document.querySelector(params.target) || window;

    const infiniteLoading = document.getElementById(params.id);
    if (isVisible(infiniteLoading, el) && params.firstLoad) params.emitInfiniteEvent();

    const eventHandler = getEventHandler(el, params);
    target.addEventListener("scroll", eventHandler);
    return eventHandler
};
// remove scroll event
const removeScrollEvent = (params, eventHandler) => {
    const target = document.querySelector(params.target) || window;
    target.removeEventListener("scroll", eventHandler);
};

export const $dummyState = {loaded: () => {}, complete: () => {}, error: () => {}}

export { stateHandler, infiniteEventEmitter, startScrollEvent, removeScrollEvent };

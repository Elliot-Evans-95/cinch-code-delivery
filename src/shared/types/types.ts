export enum Direction {
    NEXT = 'next',
    PREVIOUS = 'prev',
}

export enum Messages {
    CONTENT_ADDED = '[DOM] Added Content',
    CONTENT_REMOVED = '[DOM] Removed Content',
    SET_PAGE = '[PRESENTATION] Set Page',
    OPEN_NOTES = '[NOTES] Open Notes',
}

export enum ComponentEvents {
    DIRECTION = '[ROUTER] Direction changed',
}

export enum Action {
    OPEN = 'open',
}

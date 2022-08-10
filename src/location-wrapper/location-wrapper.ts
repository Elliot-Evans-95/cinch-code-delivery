export class LocationWrapper {
    private readonly location: Location

    constructor(location: Location) {
        this.location = location
    }

    get pathName() {
        return this.location.pathname
    }
}

class memoryStore {
    store = {}

    constructor() {
        this.store = {}
    }

    async ensureRoom(roomName) {
        const room = this.store[roomName]
        if (!room) {
            this.store[roomName] = new Room(roomName)
        }
        return this.store[roomName]
    }
}

class Room {
    room = ''
    users = {}

    constructor(roomName) {
        this.room = roomName
        this.users = {}
    }

    /**
     * Ensure that the user is there in the system
     * @param {string} userName
     */
    async ensureUser(userName) {
        this.users[userName] = { selection: 'none' }
        return this
    }

    async deleteUser(userName) {
        delete this.users[userName]
        return this
    }

    async select(userName, selection) {
        this.users[userName] = { selection }
        return this
    }

    async clearAllSelections() {
        Object.keys(this.users).map((e) => {
            this.users[e] = { selection: 'none' }
        })
        return this
    }
}

module.exports = memoryStore

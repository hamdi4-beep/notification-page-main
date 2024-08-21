export type User = {
    name: string
    avatar: string
    notification: string
    time: string
    isRecent: boolean
    associatedColor?: string
    content?: {
        type: string
        value: string
    }
}
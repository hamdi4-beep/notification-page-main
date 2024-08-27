type User = {
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

function Notification({
    user
}: {
    user: User
}) {
    const {content} = user

    return (
        <div className="mb-3">
            <div className={`flex p-3 rounded-md ${user.isRecent && "bg-neutral-very-light-grayish-blue" || ''}`}>
                <div className="mr-3 self-start shrink-0">
                    <img
                        src={user.avatar}
                        className="w-8 h-8"
                        alt="user's avatar"
                    />
                </div>

                <div className="mr-auto">
                    <p>
                        <span className="font-bold text-neutral-very-dark-blue">{user.name} </span>
                        {' ' + user.notification}

                        {content?.type == 'contextual' && (
                            <span className={`${user.associatedColor} font-bold`}>{' ' + content.value}</span>
                        )}

                        {user.isRecent && (
                            <span className="w-3 h-3 inline-block bg-black rounded-full ml-1"></span>
                        )}
                    </p>

                    <span className="text-neutral-grayish-blue">{user.time}</span>

                    {content?.type == 'message' && (
                        <div className="border border-black p-3 rounded mt-2">
                            <p>{content.value}</p>
                        </div>
                    )}
                </div>

                {content?.type == 'image' && (<img className="self-start w-10 h-10" src={content.value} />)}
            </div>
        </div>
    )
}

export default Notification
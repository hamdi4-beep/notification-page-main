import { User } from "../types/User"

function Notifications({
    users
}: {
    users: User[]
}) {
    return (
        <div className="mt-8">
            {users.map((user, i) => (
                <div className="mb-3" key={i}>
                    <div className={`flex items-center p-3 rounded-md ${user.isRecent && "bg-neutral-very-light-grayish-blue" || ''}`}>
                        <div className="mr-3 self-start shrink-0">
                            <img
                                src={user.avatar}
                                className="w-8 h-8"
                                alt="user's avatar"
                            />
                        </div>

                        <div className="">
                            <div>
                                <p className="">
                                    <span className=" font-bold">{user.name} </span>

                                    <span>{user.notification}</span>

                                    <span className={"font-semibold " + user.associatedColor}> {user.content?.type == 'contextual' && user.content?.value} </span>
                                    {user.isRecent && (<span className="w-2 h-2 mt-[.5em] inline-block rounded bg-primary-blue"></span>)}
                                    
                                    {user.content?.type == 'image' && (
                                        <img
                                            src={user.content.value}
                                            alt="chess image"
                                            className="w-12 h-12"
                                        />
                                    )}
                                </p>
                            </div>

                            {user.content?.type == 'message' && (
                                <p className="p-6 my-3 border border-neutral-grayish-blue rounded-sm">{user.content?.value}</p>
                            )}

                            <span className='text-neutral-grayish-blue'>{user.time} </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Notifications
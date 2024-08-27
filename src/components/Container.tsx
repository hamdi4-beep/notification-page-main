import Notification from "./Notification"


import { users } from "../data"

function Container() {
    return (
        <div className="mt-8">
            {users.map((user, i) => (
                    <Notification
                        user={user}
                        key={i}
                    />
                ))}
        </div>
    )
}

export default Container
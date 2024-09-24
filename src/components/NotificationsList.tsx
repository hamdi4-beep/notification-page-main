import * as React from 'react'

import Notification from "./Notification"
import users from "../data.json"

function NotificationsList() {
    const [usersList, setUsersList] = React.useState(users)
    const recentNotifications = usersList.filter(user => user.isRecent)

    return (
        <div className='bg-neutral-white p-5 rounded-lg max-w-screen-md'>
          <div className="flex justify-between items-center">
            <div className='flex items-center gap-2'>
                <h1 className='font-bold text-xl'>Notifications</h1>
                <span className='bg-primary-blue text-white font-bold px-2 rounded'>{recentNotifications.length}</span>
            </div>

            <button onClick={() => setUsersList(users => users.map(user => ({
                ...user,
                isRecent: false
            })))}>Read all as read</button>
          </div>

          <div className="mt-8">
            {usersList.map((user, i) => {
                return (
                    <Notification
                        user={user}
                        key={i}
                    />
                )
            })}
          </div>
        </div> 
    )
}

export default NotificationsList
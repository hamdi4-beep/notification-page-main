import Notification from "./Notification"
import { users } from "../data"

function NotificationsList() {

    return (
        <div className='bg-neutral-white p-5 rounded-lg max-w-4xl'>
          <div className="flex justify-between items-center">
            <div className='flex items-center gap-2'>
                <h1 className='font-bold text-xl'>Notifications</h1>
                <span className='bg-primary-blue text-white font-bold px-2 rounded'>3</span>
            </div>

            <button>Mark all as read</button>
          </div>

          <div className="mt-8">
            {users.map((user, i) => (
                <Notification
                    user={user}
                    key={i}
                />
            ))}
          </div>
        </div> 
    )
}

export default NotificationsList
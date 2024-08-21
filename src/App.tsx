import Notifications from './components/Notifications'
import { users } from './data'

function App() {
  return (
    <div className="bg-[#eee] font-sans-PlusJakartaSans py-6 flex justify-center">
      <div className='bg-neutral-white p-5 rounded-lg max-w-4xl'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <h1 className='font-bold text-xl'>Notifications</h1>
            <span className='bg-primary-blue text-white font-bold px-2 rounded'>3</span>
          </div>

          <p>Mark all as read</p>
        </div>

        <Notifications users={users} />
      </div>
    </div>
  )
}

export default App
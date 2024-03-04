
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
function Chatbox() {
  return (
    <div >
        <div className="flex items-center gap-5 h-16 pl-3">
            <FontAwesomeIcon icon={faCircleUser} className="text-gray-400 text-4xl" />
            <div className="flex flex-col border-b border-gray-40066 w-full h-16 flex justify-center ">
              <p className="text-20 text-#110e0ed1 font-500">User</p>
              <p className="text-xs text-gray-500">Description...</p>
            </div>
          </div>
    </div>
  )
}

export default Chatbox

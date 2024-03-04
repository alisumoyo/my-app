import faImage from '../assets/Desktop.png'
import Image from '../assets/imagee.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUsers } from '@fortawesome/free-solid-svg-icons'


function SideCon2() {
  return (

    <main id='main' className='h-full bg-cover justify-center flex flex-col items-center justify-between' style={{ backgroundImage: `url(${faImage})` }}>
      {/* Content inside the main element */}
      <div className='pt-28'>
        <div>
          <img src={Image} className='w-64' />
        </div>
        <div className='flex items-center gap-4 pt-6'>
          <p className='text-gray-300 text-sm pl-8 '>End to End Encripted</p>
          <FontAwesomeIcon icon={faLock} className='text-white' />
        </div>
      </div>
      <div>
      </div>
      <div className='pb-4 flex gap-2'>
        <p className='text-gray-300  text-sm '>Family Chats are Awsome with New Feature</p>
        <FontAwesomeIcon icon={faUsers} className='text-white' />
      </div>
    </main>
  )
}
export default SideCon2

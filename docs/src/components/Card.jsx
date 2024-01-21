import { motion } from "framer-motion"
import { IoClose } from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
const Card = ({data,reference}) => {
  return (
    
      <motion.div drag dragConstraints={reference}className=' relative flex-shrink-0 w-60 h-72 bg-sky-200 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden'>
      <FaRegFileAlt/>
      <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0  w-full  left-0 '>
        <div className='px-5 text-black flex items-center justify-between mb-5 py-2'>
            <h5 className='text-white'>
              {data.filesize}
            </h5>
            <span className='w-6 h-6 bg-zinc-200 rounded-full flex items-center justify-center'>
            {data.close ?<IoClose/>:<FaDownload  size=".7em" color="#000"/>
          }
              </span>
            
        </div>
        {
                data.tag.isOpen &&(
                    <div className={`tag w-full py-4 bg-orange-400 flex items-center justify-center`}>
                    <h3 className='px-4 text-black '> {data.tag.tagTitle}  </h3> 
           
           
        </div>
                )
            }
        
        </div>
       
      </motion.div>

    
  )
}

export default Card

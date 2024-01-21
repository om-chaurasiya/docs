import React,{useRef} from 'react'
;
import Card from './Card'
const Foreground = () => {
    const ref = useRef(null);
     const data=[
        {
            desc:"chalo ab bahut hua lagg jao jee jaan se so that baad me guilty na feel ho",
            filesize:".9mb",
            close:"true",
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"orange"},

        },
        {
            desc:"chalo ab bahut hua lagg jao jee jaan se so that baad me guilty na feel ho",
            filesize:".9mb",
            close:"true",
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"red"},

        },
        {
            desc:"chalo ab bahut hua lagg jao jee jaan se so that baad me guilty na feel ho",
            filesize:".9mb",
            close:"true",
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"},

        },
     ];

  return (
    
      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full bg-sky-800/10 flex gap-10 flex-wrap p-5'>
        {data.map((item, index)=>(
            <Card  data={item} reference={ref}/> 
        ))}
        
       
        
    
      </div>
    
  )
}

export default Foreground

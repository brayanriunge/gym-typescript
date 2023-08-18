import { ClassType, SelectedPage } from '@/shared/types'
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import { motion } from 'framer-motion'
import Htext from '@/shared/Htext'
import Class from './Class'


const classes:Array<ClassType>=[
    {
        name:"Weight Training Classes",
        description: 
        "Our trainers are ready to help our clients in lifting weights and to the best position to use.",
        image: image1
    },
    {
        name:"Yoga Classes",
        description: 
        "This class incorporates yoga postures, gentle movement sequences, breath work, supported silent meditation, and guided relaxation to support increased awareness and mindfulness of the breath and body, and quieting of the nervous system.",
        image: image2
    },
    {
        name:"Ab Core Classes",
        description: 
        "This class uses your body strength, body bar, light weights and mats to strengthen and tone your body. Through challenging and fun you will be exercising and experience core muscle strengthening, muscle toning, elongation of muscles and burning body fat.",
        image: image3
    },
    {
        name:"Adventure Classes",
        description: 
        "We occasionally have outdoor fitness training. Our trainers will be there to help you during these training session.",
        image: image4
    },
    {
        name:"Fitness Classes",
        description: 
        "We many classes in fitness, with the help of our trainer you will be able to choose the class that fits your needs.",
        image: image5
    },
    {
        name:"Training Classes",
        description: 
        "Our trainers are ready to help you train if you are athelete. We also help our clents join crossfit competitions. ",
        image: image6
    },
]


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id='ourclasses' className='w-full bg-primary-100 py-40'>
        <motion.div
            onViewportEnter={()=> setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className='mx-auto w-5/6'
                initial="hidden"
                 whileInView="visible"
                viewport={{once:true, amount: 0.5}}
                transition={{duration: 0.5}}
                variants={{
                hidden: {opacity:0, x: -50},
                visible: {opacity:1 , x:0},
             }}
            >
                <div className='md:w-3/5'>
                    <Htext>
                        Our Classes
                    </Htext>
                    <p className='py-5'>
                        We have proffessional trianers who help our client achive 
                        their goal. 
                    </p>
                </div>
            </motion.div>
        </motion.div>
        {/** IMAGES AND HOVER EFFECT */}
        <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
            <ul className='w-[2800px] whitespace-nowrap '>
                {classes.map((item: ClassType, index)=>(
                    <Class
                        key={`${item.name}-${index}`}
                        name={item.name}
                        description={item.description}
                        image={item.image}                    
                    />
                ))}
            </ul>
        </div>
    </section>
  )
}

export default OurClasses
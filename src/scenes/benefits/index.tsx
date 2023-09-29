import Htext from "@/shared/Htext";
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"


const benefits: Array<BenefitType> =[
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description:"Evogym has best facilities that help our client achieve their goals.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description:"We offer classes that are held by our trainers during sessions.",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainer",
        description:"Evogym has professional trainers who have also participated in the crossfit competitions in the country.",
    },
]

const container={
    hidden:{},
    visible:{
        transition:{ staggerChildren: 0.2}
    }
}

type Props = {
   
    setSelectedPage: (value: SelectedPage)=> void;

}

const Benefits = ({ setSelectedPage}: Props) => {
  return (
    <section 
     id="benefits"
     className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
         onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}
        >
            {/** HEADER */}
            <motion.div 
             className="md:my-5 md:w-3/5"
             initial="hidden"
             whileInView="visible"
             viewport={{once:true, amount: 0.5}}
             transition={{delay: 0.2, duration: 0.5}}
             variants={{
                hidden: {opacity:0, x: -50},
                visible: {opacity:1 , x:0},
             }}
            >
                <Htext>
                    MORE THAN JUST A GYM
                </Htext>
                <p className="my-5 text-sm">
                 We provide world class fitness equipment, trainers and classes to
                 get you to your ultimate fitness goals with ease. We provide true
                 care into each and every member.
                </p>
            </motion.div>
            
            {/**Benefits */}
            
            <motion.div
             className="md:flex items-center justify-between gap-8 mt-5"
             initial = "hidden"
             whileInView="visible"
             viewport={{once:true , amount: 0.5}}
             variants={container}
            >
                {benefits.map((benefit: BenefitType)=>(
                    <Benefit
                     key={benefit.title}
                     icon={benefit.icon}
                     title={benefit.title}
                     description={benefit.description}
                     setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>
            {/** GRAPHICAL AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/** GRAPHIC */}
                <img 
                 className="mx-auto"
                 src={BenefitsPageGraphic} 
                 alt="benefits-page-graphic" 
                />
                {/** DESCRIPTION */}
                <div>
                    {/** title */}
                     <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <motion.div
                              initial="hidden"
                              whileInView="visible"
                              viewport={{once:true, amount: 0.5}}
                              transition={{ duration: 0.5}}
                              variants={{
                                 hidden: {opacity:0, x: 50},
                                 visible: {opacity:1 , x:0},
                              }}                          
                            >
                                <Htext>
                                    MILLIONS OF HAPPY MEMBERS GETTING {""}
                                    <span className="text-primary-500">
                                        FIT
                                    </span>
                                </Htext>

                            </motion.div>
                        </div>
                     </div>

                    {/**  DESCRIPT*/}
                    <motion.div
                     initial="hidden"
                        whileInView="visible"
                       viewport={{once:true, amount: 0.5}}
                       transition={{delay: 0.2, duration: 0.5}}
                       variants={{
                         hidden: {opacity:0, x: 50},
                         visible: {opacity:1 , x:0},
                        }}
                        >
                        <p className="my-5 ">
                            As Evogym, we are getting many positive responses due to the excellent work we do as a team. Our clients are able to achieve their goals
                            because of the effort they put in with the help of our professional trainers.
                        </p>
                        <p className="mb-5">
                            Evogym partcipates in crossfit competition in the country and our clients are motivated to join these competitions. The feedback that we get from 
                            organizers of these events/competitions is always positive and we are ready to prmote such competitions in the near future.

                        </p>
                    </motion.div>
                    {/** Button*/}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles ">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>

                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits
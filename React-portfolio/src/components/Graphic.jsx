import NS from '../components/NS'
import SP from '../components/SP'
import IP from '../components/IP'
import HC from '../components/HC'
import NSTote from '../components/NSTote'
import Illustration from '../components/tags/Illustration'
import ZineTag from '../components/tags/ZineTag'

export default function Graphic() {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 md:gap-0.5">
            <div className='border p-6'>
                <div className='flex justify-between'>
                    <h2 className='hover:text-green-300 border border-green-300 rounded-t px-2'><a href="https://nllphl.netlify.app/">Neighbor Share Tote</a></h2>
                    <h3>2022</h3>
                </div>
                <div className='h-[40rem] overflow-scroll'>
                    <NSTote />
                </div>
                <p className='py-2 text-sm'>These tote bags were designed to leverage customer resources and crowdfund for the launch of Neighbor Share, a mutual aid initiative, that provides low-cost or free weekly seafood shares to customers.</p>
                <div className='flex space-x-2'>
                    <Illustration />
                </div>
            </div>
            <div className='border p-6'>
                <div className='flex justify-between'>
                    <h2 className='hover:text-green-300 border border-green-300 rounded-t px-2'><a href="https://nllphl.netlify.app/">Food Sovereignty from Land to Ocean</a></h2>
                    <h3>2021</h3>
                </div>
                <div className='h-[40rem] overflow-scroll'>
                <NS />
                </div>
                <p className='py-2 text-sm'>Food Sovereignty from Land to Ocean highlights the intersections of food sovereignty and mutual aid initiatives to bring power back into the hands of consumers, producers, and the environment in the fish eating ecosystem. </p>
                <div className='flex space-x-2'>
                    <ZineTag />
                </div>
            </div>
            <div className='border p-6'>
                <div className='flex justify-between'>
                    <h2 className='hover:text-green-300 border border-green-300 rounded-t px-2'><a href="https://nllphl.netlify.app/">Spaces for Us</a></h2>
                    <h3>2021</h3>
                </div>
                <div className='h-[40rem] overflow-scroll'>
                    <SP />
                </div>
                <p className='py-2 text-sm'>Spaces For Us is the cumulative project from the class "Bodies of Injustice: Health, Illness, and Healing in Contexts of Inequality" that combines both theoretical works and lived experience to imagine what "care" looks like in an academic institution for nonwhite students.</p>
                <div className='flex space-x-2'>
                    <ZineTag />
                </div>
            </div>
            <div className='border p-6'>
                <div className='flex justify-between'>
                    <h2 className='hover:text-green-300 border border-green-300 rounded-t px-2'><a href="https://www.hc-strike.com/index.html">Haverford College Strike</a></h2>
                    <h3>2020</h3>
                </div>
                <div className='h-[40rem] overflow-scroll'>
                    <HC />
                </div>
                <p className='py-2 text-sm'>Students at Haverford College initiated a 14 day general strike at Haverford College due to the adminstration's failure to meet the demands of BIPOC students.</p>
                <div className='flex space-x-2'>
                    <Illustration />
                </div>
            </div>
            <div className='border p-6'>
                <div className='flex justify-between'>
                    <h2 className='hover:text-green-300 border border-green-300 rounded-t px-2'><a href="https://nllphl.netlify.app/">Coalition Building</a></h2>
                    <h3>2019</h3>
                </div>
                <div className='h-[40rem] overflow-scroll'>
                    <IP />
                </div>
                <p className='py-2 text-sm'>This work combines Black Feminist theory and praxis around care and intersectionality. Through a group interviews and a potluck, we engage students in the question of whether it is possible for historically marginalized people to thrive in elite academic institutions.</p>
                <div className='flex space-x-2'>
                    <ZineTag />
                </div>
            </div>
            
        </div>
        
    )
}
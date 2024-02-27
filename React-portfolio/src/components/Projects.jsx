import Web from './Web'
import Graphic from './Graphic'

export default function Projects() {
    return(
        <div className='py-10 font-work'>
            <div id="web" className='shadow-sm bg-green-400 rounded-t text-white ml-12 w-32 py-2 text-center'>
                Web Design
            </div>
            <div className='mx-12'>
                <Web/>
            </div>
            <div id="graphic" className='shadow-sm bg-green-400 rounded-t text-white ml-12 w-32 py-2 mt-10 text-center'>
                Graphic Design
            </div>
            <div className='mx-12'>
                <Graphic/>
            </div>
        </div>
    )
}
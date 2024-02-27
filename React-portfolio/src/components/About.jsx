import Me from './Me'

export default function About() {
    return (
        <div className="flex justify-center px-14 py-10 h-full font-work"> {/* Changed min-h-screen to h-full */}
            <div className="flex flex-col md:flex-row mx-4 md:mx-auto max-w-screen-lg">
                <div className="inline-block bg-white p-4 rounded-md border border-gray-200 shadow-lg md:w-72 md:mr-4 mb-4 md:mb-0"> 
                    <Me className="w-full h-auto rounded-lg" />
                    <div className='text-center'>
                        <h2 className='pt-4 font-medium hover:text-green-400'>Cassandra Manotham</h2>
                        <h3 className='text-sm'>(she/her)</h3>
                        <h3 className='text-sm font-light'>Fullstack Software Engineer, Designer, & Community Worker</h3>
                        <h4 className='text-xs font-light text-green-500'>Philadelphia</h4>
                    </div>
                </div>
                <div className="w-full md:w-72 font-light"> 
                    <p className='pt-8'>Hi there! I'm passionate about equity, design, and solving complex problems in creative ways. Before writing code, I led a digital equity program designed to serve the needs of immigrants and refugees. Now, I create websites and programs with all users in mind.</p>
                    <div className='text-sm py-2'>
                        <p className='text-base font-normal animate-pulse'>Let's connect</p>
                        <p>
                            Mail 
                            <span className='text-green-500 p-1'><a href={`mailto:cassandramanotham@gmail.com`}>
                                cassandramanotham@gmail.com</a></span>
                        </p>
                        <p>
                            GitHub 
                            <span className='text-green-500 p-1'><a href={`https://github.com/codedbycass`}>/codedbycass</a></span></p>
                        <p>
                            LinkedIn 
                        <span className='text-green-500 p-1'><a href={`https://www.linkedin.com/in/cassandramanotham/`}>/cassandramanotham</a></span>
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

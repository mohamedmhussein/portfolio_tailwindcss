
import './globals.css'
import ProjectsBtn from '@/components/ProjectsBtn'
export default function Page() {
  return (
    <div className='bg-primary/60 h-full' >
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/60 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left container mx-auto'>
          <h1 className='h1'>
            Transforming ideas <br /> Into {' '}
            <span className='text-accent'>Digital Reality</span>
          </h1>
          <p className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
            loremipsumfsgdfgdsfsfsdf
          </p>
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
        </div>
      </div>
      {/* image */}
    </div>
  )
}

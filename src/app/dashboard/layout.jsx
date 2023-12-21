import Sidebar from "@/components/dashboard/Sidebar";

export default function Layout({ children }) {
    return (
    
        <div
         className={` relative h-full font-sans antialiased`}>
          
          <main className='relative flex min-h-screen '>
            {/* TODO Navbar here */}
            <Sidebar></Sidebar>
            
           <div  className='flex-grow flex-1 pl-[50px]  px-0  md:pl-[270px] md:px-20 py-10'> {children}</div>
            {/* TODO Footer here */}
           
            </main>
         
         </div>
     
    )
  }
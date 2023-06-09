import React from 'react'
import Cardx from '@/components/Cardx'
import Cardy from '@/components/Cardy'
import Getincard from '@/components/Getincard'
import Servicecard from '@/components/Servicecard'

const main = () => {
  return (
    <>
    <div className="homesec bg-[#FCFAF4] py-[5px] ">
      
      <div className="wrapper">
        
        <div className="grid1 grid gap-[30px] grid-cols-1 sm:grid-cols-[45%_25%_25%]   lg:mt-[80px] mt-[30px] ">
          <Cardx/>
          <Cardy/>
          <Cardy/>
        </div>
        <div className="grid2 grid gap-[30px] grid-cols-1 sm:grid-cols-[25%25%45%] mt-[30px] ">
          
          <Cardy/>
          <Cardy/>
          <Cardx/>
        </div>
        <div className="grid3 grid gap-[15px] grid-cols-1 sm:grid-cols-[50%50%] mt-[30px] ">
          <Getincard/>
          <Servicecard/>
          
        </div>
      </div>
     
    </div>
    
    </>
  )
}

export default main
import React from 'react'

function ContributionsRowHead() {
  return (
    <div className="flex flex-row p-2 border-b-2 justify-between border-t-2 items-center">
        <div className='flex flex-row items-center flex-1'>
            <div className='size-7 border rounded-lg mr-3 hover:cursor-pointer'></div>
         <div className="text-[16px] font-medium text-neutral-400 ">Document Name</div>
        </div>
        <div>
            
        </div>
  <div className="text-[16px] font-medium text-neutral-400 flex-1  ">Contributor</div>
  <div className="text-[16px] font-medium text-neutral-400 flex-1  ">Date</div>
  <div className="text-[16px] font-medium text-neutral-400 flex-1  ">Status</div>

</div>
  )
}

export default ContributionsRowHead

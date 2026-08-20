import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-[280px] w-[310px] min-w-[310px] bg-slate-900/90 border border-amber-500/30 hover:border-amber-500/60 rounded-2xl p-5 flex flex-col justify-between shadow-xl shadow-amber-950/10 transition-all duration-200'>
      <div>
        <div className='flex justify-between items-center'>
          <span className='text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded-lg tracking-wide uppercase'>
            {data?.category || 'Task'}
          </span>
          <span className='text-xs font-medium text-slate-400'>
            {data?.taskDate || data?.date}
          </span>
        </div>
        <h2 className='mt-4 font-bold text-lg text-white line-clamp-2 leading-snug'>
          {data?.taskTitle || data?.taskName}
        </h2>
        <p className='mt-2.5 font-normal text-xs text-slate-300 line-clamp-3 leading-relaxed'>
          {data?.taskDescription || data?.description}
        </p>
      </div>

      <div className='mt-4 pt-3 border-t border-slate-800/80'>
        <div className='w-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-semibold py-2.5 rounded-xl text-center cursor-default tracking-wide'>
          Failed
        </div>
      </div>
    </div>
  )
}

export default FailedTask
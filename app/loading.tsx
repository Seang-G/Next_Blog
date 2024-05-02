export default function Loading() {
  return (
    <div className="top-0 absolute w-full h-full backdrop-blur-lg bg-black bg-opacity-30 flex justify-center items-center">
      <div className='w-12 h-12 rounded-[50%] inline-block border-t-2 border-t-white border-r-2 border-r-transparent box-border animate-spin' />
    </div>
  )
}
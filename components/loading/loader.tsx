import Spinner from "./spinner";

export default function Loader({text=""}:{text:string}) {
  return (
    <div className="top-0 left-0 fixed w-full h-full backdrop-blur-lg bg-black bg-opacity-30 flex justify-center items-center z-30">
      <div className='w-1/5 aspect-square flex justify-center' >
        <Spinner />
      </div>
      <h1 className="fixed font-black text-3xl animate-bounce">{text}</h1>
    </div>
  )
}
import UserInfoLoading from "./user-info-loading";

export default function PostLoading() {

  return (
    <div className="bg-gray-600 w-[90%] h-80 rounded-3xl py-5 px-10 flex justify-between mb-12 overflow-hidden shadow-xl">
      <div className="basis-[90%]">
        <div className={`bg-gray-300 w-[40%] h-6 rounded-full`}/>
        <div className="pl-5 mt-10">
          <div className={`bg-gray-500 w-[80%] h-3 rounded-full mb-4`}/>
          <div className={`bg-gray-500 w-[70%] h-3 rounded-full mb-4`}/>
          <div className={`bg-gray-400 w-[60%] h-3 rounded-full mb-4`}/>
          <div className={`bg-gray-400 w-[80%] h-3 rounded-full mb-4`}/>
          <div className={`bg-gray-500 w-[50%] h-3 rounded-full mb-4`}/>
          <div className={`bg-gray-500 w-[70%] h-3 rounded-full mb-4`}/>
        </div>
      </div>
      <div className="basis-[10%]">
        <UserInfoLoading />
      </div>
    </div>
  )
}
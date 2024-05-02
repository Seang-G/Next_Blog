import UserInfoLoading from "./user-info-loading";

export default function PostLoading() {

  return (
    <div className="bg-gray-600 w-[90%] h-40 rounded-3xl py-5 px-10 flex justify-between mb-3 overflow-hidden shadow-xl">
      <div className="basis-[90%]">
        <div className={`bg-gray-300 w-[200px] h-6 rounded-full`}/>
        <div className="pl-5 mt-4">
          <div className={`bg-gray-500 w-80 h-3 rounded-full mt-2`}/>
          <div className={`bg-gray-500 w-96 h-3 rounded-full mt-2`}/>
          <div className={`bg-gray-500 w-72 h-3 rounded-full mt-2`}/>
        </div>
      </div>
      <div className="basis-[10%]">
        <UserInfoLoading />
      </div>
    </div>
  )
}
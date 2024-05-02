import UserDefaultImage from "../svgs/user-default-image";

export default function UserInfoLoading() {
  return (
  <div className="aspect-6/7 w-full flex flex-col items-center animate-pulse">
    <div className="w-full basis-5/6 flex justify-center items-center">
      <UserDefaultImage className=" text-gray-700"/>
    </div>
    <div className="w-full basis-1/6 flex justify-center items-center">
      <div className="bg-gray-700 w-[40%] h-[20%] rounded-lg"/>
    </div>
  </div>
  )
}
import Button from "../button";
import UserDefaultImage from "../svgs/user-default-image";

export default function HeaderUserLoading() {
  return(
    <div className="animate-pulse justify-end w-full flex items-center gap-5">
      <Button className="bg-gray-500"/>
      <Button className="bg-gray-400"/>
      <Button className="bg-gray-600"/>
      <UserDefaultImage className="h-[50px] text-gray-400"/>
    </div>
  )
}
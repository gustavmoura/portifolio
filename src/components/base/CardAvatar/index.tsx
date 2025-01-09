import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Card() {
    return (
        <div className="flex justify-center items-center mb-[20px] mt-[20px]">
            <Avatar>
                <AvatarImage src="https://media.licdn.com/dms/image/v2/D4D03AQFt4LuuyburXA/profile-displayphoto-shrink_200_200/B4DZPACRbcGgAY-/0/1734093642260?e=1741824000&v=beta&t=0oTHcvT0ZmRp2v2tbAzRGkbuiDhD4qn1W8gaeqx8-jA" />
                <AvatarFallback></AvatarFallback>
            </Avatar>
        </div>
    );
}
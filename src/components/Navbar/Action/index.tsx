import { FaRegEnvelope } from "react-icons/fa6";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import IconButton from "./IconButton";

const Action = () => {
  return (
    <div className='flex gap-4 items-center justify-center'>
      <IconButton>
        <FaRegEnvelope />
      </IconButton>
      <IconButton>
        <IoSettingsOutline />
      </IconButton>
      <IconButton>
        <IoNotificationsOutline />
      </IconButton>
      <div className='bg-zinc-500 h-12 w-12 rounded-full overflow-hidden'>
        <img src='https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250' />
      </div>
    </div>
  );
};

export default Action;

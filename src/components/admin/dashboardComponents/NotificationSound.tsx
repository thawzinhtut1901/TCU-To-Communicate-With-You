import { FC, useState } from "react";
import {
  MdNotificationsActive,
  MdOutlineAddReaction,
  MdOutlinePhonelinkRing,
} from "react-icons/md";
import { IoMailUnread } from "react-icons/io5";
import { PiVibrate } from "react-icons/pi";
import Switch from "@mui/material/Switch";

interface SettingItemProps {
  icon: FC;
  label: string;
  isActive: boolean;
  onToggle: (newState: boolean) => void;
}

const SettingItem: FC<SettingItemProps> = ({ icon: Icon, label, isActive, onToggle }) => (
  <div className="flex w-[400px] items-center justify-between px-4 py-2 h-[60px] bg-white border-b border-gray-300 shadow">
    <div className="flex items-center">
      <div className="flex items-center justify-center w-8 h-8 mr-3 bg-purple-100 rounded-full">
        <Icon />
      </div>
      <span>{label}</span>
    </div>
    <Switch
      checked={isActive}
      onChange={(e) => onToggle(e.target.checked)}
      color="primary"
    />
  </div>
);

const NotificationSound: FC = () => {
  const [notificationFromChats, setNotificationFromChats] = useState(true);
  const [notificationFromGroups, setNotificationFromGroups] = useState(false);
  const [reactionEnabled, setReactionEnabled] = useState(true);
  const [countUnread, setCountUnread] = useState(false);
  const [ringtoneEnabled, setRingtoneEnabled] = useState(true);
  const [vibrateEnabled, setVibrateEnabled] = useState(false);

  const settings = [
    {
      icon: MdNotificationsActive,
      label: "Notification from All Chats",
      isActive: notificationFromChats,
      onToggle: setNotificationFromChats,
    },
    {
      icon: MdNotificationsActive,
      label: "Notification from All Groups",
      isActive: notificationFromGroups,
      onToggle: setNotificationFromGroups,
    },
    {
      icon: MdOutlineAddReaction,
      label: "Reaction",
      isActive: reactionEnabled,
      onToggle: setReactionEnabled,
    },
    {
      icon: IoMailUnread,
      label: "Count Unread Messages",
      isActive: countUnread,
      onToggle: setCountUnread,
    },
    {
      icon: MdOutlinePhonelinkRing,
      label: "Ringtone",
      isActive: ringtoneEnabled,
      onToggle: setRingtoneEnabled,
    },
    {
      icon: PiVibrate,
      label: "Vibrate",
      isActive: vibrateEnabled,
      onToggle: setVibrateEnabled,
    },
  ];

  return (
    <div className="w-[400px] bg-[#e4d4f9] shadow h-[600px] flex flex-col items-center pt-4">
      <h2 className="sticky top-0 left-0 px-4 py-3 bg-white rounded text-main">
        Notification & Sound
      </h2>
      <div className="flex flex-col gap-5 my-6 overflow-y-scroll">
        {settings.map(({ icon, label, isActive, onToggle }) => (
          <SettingItem
            key={label}
            icon={icon}
            label={label}
            isActive={isActive}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationSound;

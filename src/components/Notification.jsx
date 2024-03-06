function Notification() {
  return (
    <div className="flex items-center">
      <h1 className="text-xl font-extrabold text-gray-900 lg: text-2xl">
        Notifications
      </h1>
      <span className="w-8 h-[25px] rounded-md bg-blue-800 inline-block text-center font-extrabold text-base text-white ml-[9px] lg: ml-[11px]">
        3
      </span>
      <span className="text-sm font-medium text-gray-700 ml-[74px] lg: text-base ml-[356px]">
        Mark all as read
      </span>
    </div>
  );
}

export default Notification;

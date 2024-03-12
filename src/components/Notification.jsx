function Notification(props) {
  function markAsRead() {
    const clone = [...props.newData].map((item) => {
      item.seen = true;
      return item;
    });
    props.setnewData(clone);
  }
  return (
    <div className="flex items-center mb-[14px] lg:mb-[23px]">
      <h1 className="text-xl lg:text-2xl font-extrabold text-gray-900">
        Notifications
      </h1>
      <span className="w-8 h-[25px] rounded-md bg-blue-800 inline-block text-center font-extrabold text-base text-white ml-[9px] lg:ml-[11px]">
        {[...props.newData].filter((e) => !e.seen).length}
      </span>
      <span
        onClick={markAsRead}
        className="text-sm lg:text-base font-medium text-gray-700 ml-[74px] lg:ml-[356px] hover:text-[#0a327b] hover:cursor-pointer"
      >
        Mark all as read
      </span>
    </div>
  );
}

export default Notification;

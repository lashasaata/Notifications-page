function Message(props) {
  function readMessages(index) {
    const clone = [...props.newData];
    clone[index].seen = true;
    props.setnewData(clone);
  }
  return props.newData.map((item, index) => {
    return (
      <div
        key={index}
        onClick={() => {
          readMessages(index);
        }}
        className={`${
          !item.seen ? "bg-[#f7fafd] rounded-lg" : "bg-white"
        } flex gap-[13px] lg:gap-[19px] mt-[10px] lg:mt-2 w-[343px] lg:w-[670px] py-4 lg:py-[18px] pl-4 lg:pl-5 pr-5`}
      >
        <img
          src={`./images/avatar-${item.author
            .replace(" ", "-")
            .toLowerCase()}.webp`}
          alt="avatar images"
          className="w-8 lg:w-[45px] h-8 lg:h-[45px]"
        />
        <div>
          <div className="flex gap-[33px] lg:gap-[0px] lg:w-[566px] lg:justify-between">
            <p className="leading-[18px]">
              <span className="text-sm lg:text-base font-extrabold text-[#1c202b] hover:text-[#0a327b] hover:cursor-pointer">
                {item.author}
              </span>
              <span className="text-sm lg:text-base font-medium text-[#5e6778] ml-1.5">
                {item.type}
              </span>
              {item.content.includes(".webp") ? (
                ""
              ) : (
                <>
                  {item.type == "sent you a private message" ? (
                    ""
                  ) : (
                    <span
                      className={
                        item.type == "left the group" ||
                        item.type == "has joined your group"
                          ? `text-[#0a327b] text-sm lg:text-base font-extrabold ml-1.5 hover:cursor-pointer`
                          : `text-[#5e6778] text-sm lg:text-base font-bold ml-1.5 hover:text-[#0a327b] hover:cursor-pointer`
                      }
                    >
                      {item.content}
                    </span>
                  )}
                </>
              )}
              {!item.seen ? (
                <span className="bg-[#f65552] w-[8px] h-[8px] rounded-full inline-block ml-[7px] lg:ml-1.5"></span>
              ) : (
                ""
              )}
            </p>
            {item.content.includes(".webp") ? (
              <img
                src={`${item.content}`}
                className="w-8 lg:w-[45px] h-8 lg:h-[45px] ml-3 hover:cursor-pointer"
              />
            ) : (
              ""
            )}
          </div>
          <span className="text-sm lg:text-base font-[500] text-[#939cad]">
            {item.time}
          </span>
          {item.type == "sent you a private message" ? (
            <p className="w-[263px] lg:w-[566px] p-4 lg:p-5 lg:pt-[17px] border border-solid border-[#dde7ee] mt-3 lg:mt-[13px] text-sm lg:text-base text-[#5e6778] font-[500] hover:bg-[#e5effa] hover:cursor-pointer">
              {item.content}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  });
}
export default Message;

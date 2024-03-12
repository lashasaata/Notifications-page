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
        } flex gap-[13px] mt-[10px] w-[343px] py-4 pl-4 pr-5`}
      >
        <img
          src={`./images/avatar-${item.author
            .replace(" ", "-")
            .toLowerCase()}.webp`}
          alt="avatar images"
          className="w-8 h-8"
        />
        <div>
          <div className="flex items-center gap-[33px]">
            <p className="leading-[18px]">
              <span className="text-sm font-extrabold text-[#1c202b]">
                {item.author}
              </span>
              <span className="text-sm font-medium text-[#5e6778] ml-1.5">
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
                          ? `text-[#0a327b] font-extrabold ml-1.5`
                          : `text-[#5e6778] font-bold ml-1.5`
                      }
                    >
                      {item.content}
                    </span>
                  )}
                </>
              )}
              {!item.seen ? (
                <span className="bg-[#f65552] w-[8px] h-[8px] rounded-full inline-block ml-[7px]"></span>
              ) : (
                ""
              )}
            </p>
            {item.content.includes(".webp") ? (
              <img src={`${item.content}`} className="w-8 h-8 ml-3" />
            ) : (
              ""
            )}
          </div>
          <span className="text-sm font-[500] text-[#939cad]">{item.time}</span>
          {item.type == "sent you a private message" ? (
            <p className="w-[263px] p-4 border border-solid border-[#dde7ee] mt-3 text-sm text-[#5e6778] font-[500]">
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

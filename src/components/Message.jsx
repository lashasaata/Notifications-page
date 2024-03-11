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
        className={`${!item.seen ? "bg-[#f7fafd]" : "bg-white"}`}
      >
        <img
          src={`./images/avatar-${item.author
            .replace(" ", "-")
            .toLowerCase()}.webp`}
          alt="avatar images"
        />
        <div>
          <div>
            <p>
              <span>{item.author}</span>
              <span>{item.type}</span>
              {item.content.includes(".webp") ? (
                <img src={`${item.content}`} />
              ) : (
                <span
                  className={
                    item.type == "left the group" ||
                    item.type == "has joined your group"
                      ? `text-[#0a327b] font-extrabold`
                      : `text-[#5e6778]`
                  }
                >
                  {item.content}
                </span>
              )}
            </p>
            {!item.seen ? (
              <div className="bg-[#f65552] w-[8px] h-[8px] rounded-full"></div>
            ) : (
              ""
            )}
          </div>
          <span>{item.time}</span>
        </div>
      </div>
    );
  });
}
export default Message;

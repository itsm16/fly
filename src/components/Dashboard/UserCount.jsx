import React from "react";

function UserCount({title, count, style, border, color}) {
  return (
    <div className={`${style} ${border ? `border-[${border}] border` : ``} bg-white rounded-md w-[50%] text-xs font-semibold flex flex-col items-center justify-between p-1`}>
      <div className="self-start font-bold">{title}</div>
      <div className={`text-${color} text-2xl`}>{count}</div>
      <div className="self-end">View all users</div>
    </div>
  );
}

export default UserCount;

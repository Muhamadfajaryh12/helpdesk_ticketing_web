import React, { Fragment } from "react";

export const Breadcrumb = ({ data }) => {
  return (
    <div className="flex gap-2 text-sm  text-gray-600">
      {data.map((item, index) => (
        <Fragment>
          <span>{item}</span>
          {data.length - 1 > index ? <span>/</span> : ""}
        </Fragment>
      ))}
    </div>
  );
};

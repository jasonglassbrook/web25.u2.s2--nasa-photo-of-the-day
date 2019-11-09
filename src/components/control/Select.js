import React from "react";

function buildOptions (data) {
  /// create data.build function if missing ///
  if (data.build === undefined) {
    data.build = (x) => (x.toString ());
  }
  /// create data.list if missing ///
  if (data.list === undefined) {
    data.list = [];
    for (const n = data.min ; n <= data.max ; n += data.step) {
      data.list.push ({
        "value"   : n,
      });
    }
  }
  /// create options ///
  return (
    <>{
      options.list.map ((el , i) => (
        <option value={el.value}>
          {(el.content !== undefined) ? (el.content) : (data.build (el.value))}
        </option>
      ))
    }</>
  );
}

export function Button (props) {
  return (
    <select className="select" onChange={props.onChange} value={props.value}>
      {buildOptions (props.data)}
    </select>
  );
}

export default Button;
// import React from "react";
// const SvgrMock = React.forwardRef((props, ref) => {
//   return <svg ref={ref} {...props} />;
// });
// SvgrMock.displayName = "SvgrMock";
// export const ReactComponent = SvgrMock;
// export default SvgrMock;

type SvgMockProps = {
  fileName: string;
  width: number;
  height: number;
  stroke: string;
  strokeWidth: string;
  fill: string;
};

const SvgrMock = (props: SvgMockProps) => {
  return <svg {...props} />;
};

export default SvgrMock;

import AlertIcon from "public/icon/alert.svg";
import { SVGAttributes } from "react";

export type SvgIconProps = SVGAttributes<SVGElement> & {
  fileName: "Alert";
  width: number;
  height: number;
};

export const Alert = (props: SvgIconProps) => {
  return <AlertIcon {...props} />;
};

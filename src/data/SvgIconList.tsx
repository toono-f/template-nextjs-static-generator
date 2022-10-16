import AlertIcon from "public/icon/alert-icon.svg";
import { SVGAttributes } from "react";

export type SvgIconProps = SVGAttributes<SVGElement> & {
  fileName: string;
  width: number;
  height: number;
};

export const Icon = (props: SvgIconProps) => {
  return <AlertIcon {...props} />;
};

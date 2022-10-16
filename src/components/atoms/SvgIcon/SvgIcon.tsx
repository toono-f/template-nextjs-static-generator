import dynamic from "next/dynamic";
import { SVGAttributes } from "react";

type SvgIconProps = SVGAttributes<SVGElement> & {
  fileName: string;
  width: number;
  height: number;
};

export const SvgIcon = ({ fileName, width, height, ...props }: SvgIconProps) => {
  const Icon = dynamic(() => import(`public/images/icon/${fileName}.svg`), { ssr: false }) as React.FC<React.SVGProps<SVGElement>>;
  return (
    <>
      <div className="icon">
        <Icon width={width} height={height} {...props} />
      </div>
      <style jsx global>{`
        /* レスポンシブ対応させるために設定 */
        svg {
          display: block;
          width: 100%;
          height: 100%;
        }
      `}</style>
      <style jsx>
        {`
        /* SVGが非同期で読み込まれる前のCLSを考慮するため、親要素に横幅と高さを設定 */
          .icon {
            width: ${width * 0.7}px;
            height: ${height * 0.7}px;
          }
          @media (min-width: 768px) {
            .icon {
              width: ${width}px;
              height: ${height}px;
            }
          }
        `}
      </style>
    </>
  );
};

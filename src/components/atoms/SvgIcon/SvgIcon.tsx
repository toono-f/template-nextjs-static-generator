import { SvgIconProps } from "@/data/SvgIconList";
import dynamic from "next/dynamic";

export const SvgIcon = ({ fileName, width, height, ...props }: SvgIconProps) => {
  const Icon = dynamic(() => import("@/data/SvgIconList").then((module) => module[fileName as keyof unknown]), { ssr: false }) as React.FC<React.SVGProps<SVGElement>>;

  return (
    <>
      <span className="icon">
        <Icon width={width} height={height} {...props} />
      </span>
      <style jsx global>{`
        /* レスポンシブ対応させるために設定 */
        svg {
          display: block;
          width: 100%;
          height: 100%;
        }
      `}</style>
      <style jsx>{`
        /* SVGが非同期で読み込まれる前のCLSを考慮するため、親要素に横幅と高さを設定 */
        .icon {
          display: block;
          width: ${width}px;
          height: ${height}px;
        }
        @media (min-width: 768px) {
          .icon {
            width: ${width}px;
            height: ${height}px;
          }
        }
      `}</style>
    </>
  );
};

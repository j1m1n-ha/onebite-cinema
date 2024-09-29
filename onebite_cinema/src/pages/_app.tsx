import GlobalLayout from "@/components/global-layout"; /* GlobalLayout 컴포넌트를 가져옴. 페이지의 공통 레이아웃 */
import "@/styles/globals.css";
import { NextPage } from "next"; /* Next.js의 기본 페이지 타입 */
import type { AppProps } from "next/app"; /* AppProps는 각 페이지에 전달되는 기본 속성 타입 */
import { ReactNode } from "react"; /* ReactNode는 React에서 사용할 수 있는 모든 자식 요소를 의미 */

type NextPageWithLayout = NextPage & {
  getLayout: (page: ReactNode) => ReactNode /* 각 페이지마다 커스텀 레이아웃을 지정할 수 있는 타입 */;
};

export default function App({
  Component /* 각 페이지 컴포넌트 */,
  pageProps /* 각 페이지에 전달되는 속성 */,
}: AppProps & {
  Component: NextPageWithLayout /* Component에 레이아웃을 위한 추가 속성 getLayout 포함 */;
}) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  /* 페이지에 커스텀 레이아웃이 있으면 사용하고, 없으면 기본 레이아웃을 사용 */

  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
  /* GlobalLayout으로 감싼 후, 커스텀 레이아웃을 적용한 페이지를 렌더링 */
}

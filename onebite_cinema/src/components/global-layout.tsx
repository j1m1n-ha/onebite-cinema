import Link from "next/link"; /* Next.js의 페이지 이동을 위한 Link 컴포넌트 가져오기 */
import { ReactNode } from "react"; /* ReactNode는 React 컴포넌트 안에 들어갈 수 있는 모든 요소를 의미 */
import style from "./global-layout.module.css"; /* 글로벌 레이아웃 스타일을 CSS 모듈에서 불러오기 */

export default function GlobalLayout({ children }: { children: ReactNode }) {
  /* GlobalLayout은 페이지의 공통 레이아웃을 제공하는 함수형 컴포넌트 */
  return (
    <div className={style.container}>
      {/* 스타일에서 정의한 container 클래스 사용 */}
      <header>
        <Link href={"/"}>ONEBITE CINEMA</Link>
        {/* 링크를 통해 홈으로 이동하게 설정 */}
      </header>
      {children}
    </div>
  );
}

import { Html, Head, Main, NextScript } from "next/document"; /* Next.js에서 제공하는 기본 HTML 구조 컴포넌트 */

export default function Document() {
  return (
    <Html lang="en">
      <Head /> {/* 페이지의 메타데이터(예: SEO)를 삽입 */}
      <body>
        <Main /> {/* 각 페이지의 내용을 렌더링 */}
        <NextScript /> {/* Next.js에서 필요한 스크립트 삽입 */}
      </body>
    </Html>
  );
}

import SearchableLayout from "@/components/searchable-layout"; /* 검색 기능이 포함된 레이아웃을 가져옴 */
import { ReactNode } from "react"; /* ReactNode는 React에서 사용할 수 있는 모든 자식 요소를 의미 */

export default function Home() {
  return <h2>ONEBITE CINEMA</h2>;
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
  /* 페이지 레이아웃으로 SearchableLayout을 사용하여, 검색 기능이 포함된 레이아웃을 적용 */
};

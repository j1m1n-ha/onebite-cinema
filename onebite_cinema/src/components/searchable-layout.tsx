import { useRouter } from "next/router"; /* Next.js의 라우팅 기능을 사용 */
import { ReactNode, useEffect, useState } from "react"; /* useEffect와 useState는 React의 상태 관리 및 생명주기 관련 함수 */
import style from "./searchable-layout.module.css"; /* 검색 레이아웃 스타일을 CSS 모듈에서 불러오기 */

export default function SearchableLayout({ children }: { children: ReactNode }) {
  const router = useRouter(); /* 라우터 객체 사용 */
  const [search, setSearch] = useState(""); /* 검색어를 관리하는 상태값 */

  const q = router.query.q as string; /* URL에서 'q'라는 검색어 쿼리 추출 */

  useEffect(() => {
    setSearch(q || ""); /* URL에 있는 검색어를 검색창에 반영 */
  }, [q]); /* 'q' 값이 변경될 때마다 실행 */

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value); /* 검색창에 입력된 값을 상태로 업데이트 */
  };

  const onSubmit = () => {
    if (!search || q === search) return; /* 검색어가 없거나 현재 검색어와 같다면 아무 작업도 하지 않음 */
    router.push(`/search?q=${search}`); /* 검색어를 쿼리로 추가하여 페이지 이동 */
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit(); /* 엔터 키가 눌리면 검색 실행 */
    }
  };

  return (
    <div>
      <div className={style.searchbar_container}>
        {/* 검색창과 버튼을 포함한 컨테이너 */}
        <input value={search} onKeyDown={onKeyDown} onChange={onChangeSearch} placeholder="검색어를 입력하세요..." /* 검색어를 입력받을 수 있는 필드 */ />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children} {/* 자식 요소 렌더링 */}
    </div>
  );
}

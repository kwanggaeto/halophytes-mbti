const ERROR_TITLE = "잘못된 접근입니다";
const ERROR_DESCRIPTION = "유효한 결과 주소를 다시 확인해 주세요.";

export function InvalidAccess() {
  return (
    <main className="error-page">
      <section className="error-card" aria-labelledby="error-title">
        <span className="error-mark" aria-hidden="true">
          !
        </span>
        <p className="error-code">INVALID ACCESS</p>
        <h1 id="error-title">{ERROR_TITLE}</h1>
        <p className="error-description">{ERROR_DESCRIPTION}</p>
      </section>
    </main>
  );
}

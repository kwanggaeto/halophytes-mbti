# halophytes-mbti

염생식물 MBTI 결과 이미지를 4자리 ID로 조회하고 다운로드하는 Next.js 정적 사이트입니다.

## URL

- 결과 페이지: `/{id}/`
- 결과 API: `/api/halophytes/{id}/`
- 유효하지 않은 주소와 루트(`/`): `잘못된 접근입니다` 화면

| 결과 | ID | 결과 | ID |
| ---: | :--- | ---: | :--- |
| 01 | `1472` | 10 | `6742` |
| 02 | `2085` | 11 | `7086` |
| 03 | `2639` | 12 | `7521` |
| 04 | `3157` | 13 | `8195` |
| 05 | `3841` | 14 | `8463` |
| 06 | `4268` | 15 | `8937` |
| 07 | `5013` | 16 | `9214` |
| 08 | `5576` | 17 | `9568` |
| 09 | `6194` | 18 | `9840` |

## 실행 및 배포

```bash
npm install
npm run dev
npm run build
npm run deploy
```

빌드 산출물은 `out`에 생성되며 Cloudflare Worker `halophytes-mbti`의 정적 자산으로 배포됩니다. Cloudflare Git 빌드 설정은 `npm run build` 후 `npx wrangler deploy`를 실행하면 됩니다. 기존 Pages 프로젝트에 직접 업로드해야 할 때는 `npm run deploy:pages`를 사용합니다.

## 이미지 저장 방식

현재 18개 이미지는 `public/results`에 WebP 정적 자산으로 포함합니다. 이미지 수가 적고 배포본 전체가 약 4.4MB라서 별도 R2 버킷보다 구조가 단순하며 Workers Static Assets 캐시를 바로 활용할 수 있습니다. 운영 중 이미지가 자주 바뀌거나, 관리자 업로드·대용량 원본 보관·앱 배포와 독립된 이미지 갱신이 필요해질 때 R2로 이전하는 것을 권장합니다.

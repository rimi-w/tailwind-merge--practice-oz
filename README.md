# tailwindcss v4 및 tailwind-merge 라이브러리 다루기 (난이도 : ⭐️)

## 과제 정보

- 주제 : tailwindcss v4 를 이용하여 페이지를 구성하고 tailwind-merge를 활용한 조건 스타일링 다루기
- 학습 목표
    1. 이전 과제에서 작성한 css 코드를 tailwindcss를 사용하여 리팩토링할 수 있다.
    2. tailwindcss를 사용하기 위한 초기설정을 할 수 있다.
    3. tailwindcss를 사용하는 방법에 대해 이해한다.
    4. tailwindcss를 사용하는 경우의 장단점에 대해 이해한다.
 
- **기본 요구 사항**
1. vite 설치 후 환경 설정

```powershell
npm create vite@latest
```

1. `tailwindcss` 및 `tailwind-merge` 설치 

```powershell
npm install tailwindcss @tailwindcss/vite
npm install tailwind-merge
```

1. `vite.config.js` 파일 수정

```powershell
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    tailwindcss(), react()
  ],
})
```

1. `index.css`를 수정하고 모든 css파일 제거

```powershell
@import "tailwindcss";
```

1. 간단한 div를 활용한 **`counter Application`**을 자유롭게 구성하여 **tailwindcss**의 기능을 다루세요
    - 카운트의 값을 `1, 10,100`  감소 / 증가 시키는 버튼이 있어야 합니다.
    - 카운트의 숫자가 `5, 50, 500` 이상일 때 각각 다른 색상으로 변환되어야 합니다.
        - (예시)
        - 5 이상: `green-500`
        - 50 이상: `blue-500`
        - 500 이상: `purple-500`
        
    - 카운트의 숫자가 `-5 , -50, -500` 이하일 때 각각 다른 색상으로 변환되어야 합니다.
        - (예시)
        - -5 이하: `red-500`
        - -50 이하: `orange-500`
        - -500 이하: `yellow-500`

## 최종 화면

<img width="200" height="200" alt="image" src="https://github.com/user-attachments/assets/58eb3e22-249a-41d3-abe1-47b91e1327d6" />
<img width="200" height="200" alt="image" src="https://github.com/user-attachments/assets/28f47160-9974-4111-89af-53e1f26eb62f" />
<img width="200" height="200" alt="image" src="https://github.com/user-attachments/assets/2a4d4d94-a799-4837-ad60-8db4c3c3d2c1" />
<img width="200" height="200" alt="image" src="https://github.com/user-attachments/assets/42fdc294-7247-4e2d-af2b-ce15ad744da0" />
<img width="200" height="200" alt="image" src="https://github.com/user-attachments/assets/658c52c7-c9c3-4635-a055-e6c514f9fac6" />
<img width="200" height="200" alt="image" src="https://github.com/user-attachments/assets/304838d9-b1d5-41cb-a37a-2c31675ede07" />
<img width="200" height="200" alt="image" src="https://github.com/user-attachments/assets/5a6d742b-6666-4042-919f-5944c8c754af" />







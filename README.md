# gleam_wheel


1. excel을 json으로 변환
https://products.aspose.app/cells/ko/conversion/excel-to-json

2. 데이터를 arr로 import

3. arr을 arr1에 대입

4. arr1에서 Valid, 지갑주소를 검증한 데이터에서 이름(key값으로 사용)과 지갑 주소를 arr2로 추출

5. arr2에 이름이 있고, 디스코드에 입장한 유저 데이터를 arr3으로 추출

6. selectedIndex에 arr3.length를 범위로 넣고, range를 갯수로 넣어서 selected 배열을 생성
  (arr3.length개 중에서 range개 고르기)

7. selected 배열에 들어있는 숫자를 인덱스로 활용하여 arr3의 데이터를 arr4로 추출

8. fs를 활용하여 arr4를 json으로 

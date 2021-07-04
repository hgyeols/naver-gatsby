export function getTheme(_Prism) {
  /**
   * code highlighting theme을 바꾸고 싶을 경우
   * 가능한 theme: https://github.com/FormidableLabs/prism-react-renderer/tree/master/src/themes 참고
   * 아래의 vsDark 부분을 원하는 theme로 바꾸시면 됩니다.
   */
  return require('prism-react-renderer/themes/vsDark').default;
}

export function applyLanguages(_Prism) {
  /*
    만약 지원 language를 추가하고 싶은 경우
  */

}



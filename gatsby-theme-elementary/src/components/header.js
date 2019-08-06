/** @jsx jsx */
import { jsx, Header, useColorMode } from "theme-ui";

import { Styled } from "theme-ui";

const MoonIcon = ({ isDark, handleClick }) => (
  <Styled.div
    onClick={handleClick}
    css={{
      borderRadius: "50%",
      width: "24px",
      height: "24px",
      position: "relative",
      boxShadow: isDark
        ? "inset 9px -9px 0 0 #fff"
        : "inset 32px -32px 0 0 #fff",
      transform: isDark ? "scale(1) rotate(-2deg)" : "scale(.5) rotate(0deg)",
      transition: isDark
        ? "box-shadow 300ms ease 0s, transform 1000ms ease 300ms"
        : "transform 300ms ease 0s, box-shadow 300ms ease 300ms",
      "&:before": {
        content: '""',
        width: "inherit",
        height: "inherit",
        borderRadius: "inherit",
        position: "absolute",
        left: 0,
        top: 0,
        background: isDark ? "" : "#5628EE",
        transition: isDark ? "background 1s ease" : "background 1s ease 0s"
      },
      "&:after": {
        content: '""',
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        margin: "-4px 0 0 -4px",
        position: "absolute",
        top: "50%",
        left: "50%",
        boxShadow:
          "0 -23px 0 #5628EE, 0 23px 0 #5628EE, 23px 0 0 #5628EE, -23px 0 0 #5628EE, 15px 15px 0 #5628EE, -15px 15px 0 #5628EE, 15px -15px 0 #5628EE, -15px -15px 0 #5628EE",
        transform: isDark ? "scale(0)" : "transform: scale(1.5);",
        transition: isDark ? "all .3s ease" : "transform .5s ease .15s"
      }
    }}
  />
);

export default function header() {
  const [colorMode, setColorMode] = useColorMode();
  function hey() {
    setColorMode(colorMode === "light" ? "dark" : "light");
  }
  return (
    <Header>
      <div>Hello</div>
      <div>
        <MoonIcon isDark={colorMode === "dark"} handleClick={hey} />
      </div>
    </Header>
  );
}

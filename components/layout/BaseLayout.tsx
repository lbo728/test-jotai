import styled from "styled-components";

import ModalBox from "../ModalBox";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>{children}</div>
      <ModalBox />
    </>
  );
}

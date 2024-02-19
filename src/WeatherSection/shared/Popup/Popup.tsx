import s from "./Popup.module.scss";
import { ReactNode } from "react";
import GlobalSvgSelector from "../../assets/icons/svg_tags/global/GlobalSvgSelector";

interface Props {
  children: ReactNode;
}

function Popup({ children }: Props) {
  return (
    <div className={s.blur_bg}>
      <section className={s.popup}>
        {children}
        <div className={s.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </section>
    </div>
  );
}

export default Popup;

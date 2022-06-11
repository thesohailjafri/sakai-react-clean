import React from "react";
import { useRecoilValue } from "recoil";
import { layoutColorModeAtom } from "../recoil/atoms/layoutAtom";

export const AppFooter = (props) => {
    const layoutColorMode = useRecoilValue(layoutColorModeAtom);
    return (
        <div className="layout-footer">
            <img src={layoutColorMode === "light" ? "assets/layout/images/logo-dark.svg" : "assets/layout/images/logo-white.svg"} alt="Logo" height="20" className="mr-2" />
            by
            <span className="font-medium ml-2">PrimeReact</span>
        </div>
    );
};

import { atom } from "recoil";

export const layoutModeAtom = atom({
    key: "layoutMode",
    default: "static",
});

export const layoutColorModeAtom = atom({
    key: "layoutColorMode",
    default: "dark",
});

export const themeAtom = atom({
    key: "theme",
    default: "mdc-dark-indigo",
});

export const inputStyleAtom = atom({
    key: "inputStyle",
    default: "outlined",
});

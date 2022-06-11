import { atom } from "recoil";

export const staticMenuInactiveAtom = atom({
    key: "staticMenuInactive",
    default: false,
});

export const overlayMenuActiveAtom = atom({
    key: "overlayMenuActive",
    default: false,
});

export const mobileMenuActiveAtom = atom({
    key: "mobileMenuActive",
    default: false,
});

export const mobileTopbarMenuActiveAtom = atom({
    key: "mobileTopbarMenuActive",
    default: false,
});

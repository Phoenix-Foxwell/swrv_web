import { create } from "zustand";


enum AdminSideBarTabs {
    None,
    CITY,
    CATEGORY,
    COUNTRY,
    MARKET,
    STATE,
    LANGUAGES,
    CURRENCY,
    PLATFORMS,
    CAMPAIGNTYPE,
    TEAM,
    BLOGNEWS,
    BRAND,
    USER,
    CAMPAIGN
}


interface ASideBarState {
    isOpen: boolean
    change: (value: boolean) => void
    currentIndex: AdminSideBarTabs
    changeTab: (value: AdminSideBarTabs) => void
}

const AsideBarStore = create<ASideBarState>()((set) => ({
    isOpen: false,
    change: (value) => set((state) => ({ isOpen: value })),
    currentIndex: AdminSideBarTabs.None,
    changeTab: (value) => set((state) => ({ currentIndex: value })),
}));

export default AsideBarStore;

export { AdminSideBarTabs };


import Color from "color"
// const mainColor = Color("#16598C")
const mainColor = Color("#F63854")
// const accentColor = Color("#F03C30")
const accentColor = Color("#f44336")
// const mainColor = Color("#553344")

const white = Color("#FFFFFF")
const black = Color("#000000")

// Site Settings
export const siteContainerWidth = "lg"
export const siteHeadingsColor = `${accentColor}`
export const toolbarHeight = 56
export const toolbarHeightSmUp = 64

//  Main Layout
export const topbarHeadroomStyles = {
    backgroundColor: "transparent", // needs to be transparent for ReactHeadroom colors to work,
    borderBottom: "1px solid rgba(0,0,0, 0.001)",

    pinnedBackgroundColor: `${black.fade(0.25)}`,
    pinnedBorderBottom: "1px solid rgba(0,0,0, 0.001)",

    unpinnedBackgroundColor: `${black.fade(0.95)}`,
    unpinnedBorderBottom: "1px solid rgba(0,0,0, 0.001)",

    boxShadow: "none",

    // logoColor: `${mainColor}`,
    logoColor: mainColor.string(),

    mainNavigationLinkColor: `${black.fade(0.15)}`,
    mainNavigationLinkColorBgDark: `${white.fade(0.15)}`,
    mainNavigationLinkHoverColor: `${mainColor}`,
    mainNavigationLinkActiveColor: `${mainColor.lighten(0.2)}`,
    mainNavigationLinkActiveUnderlineColor: `${mainColor.lighten(0.2)}`,
    mainNavigationLinkActiveHoverColor: `${mainColor}`,

    mainNavigationDropdownBackgroundColor: `${mainColor}`,
    mainNavigationDropdownBackgroundHoverColor: `${mainColor.lighten(0.1)}`,
    mainNavigationDropdownLinkColor: `${mainColor.lighten(0.5)}`,
    mainNavigationDropdownLinkActiveColor: `${mainColor.lighten(0.5)}`,
    mainNavigationDropdownLinkHoverColor: `${white}`,
    mainNavigationDropdownLinkActiveHoverColor: `${mainColor}`,

    langSwitcherButtonColor: `${mainColor.fade(0.25)}`,
    langSwitcherButtonHoverColor: `${mainColor}`,
    langSwitcherButtonHoverBackgroundColor: `transparent`,
    langSwitcherButtonHoverOutline: `2px solid ${mainColor.fade(0.75)}`,
    burgerColor: `${white.fade(0.25)}`,

    langSwitcherButtonPinnedColor: "#777",
}

export const sidebarNavStyles = {
    sidebarNavWidth: "290px",
    sidebarNavBackgroundColor: "#fffefe",

    sidebarNavItemDivider: "1px solid rgba(0,0,0, 0.12)",

    sidebarNavListHeaderTextColor: "#eee",
    sidebarNavListHeaderBackgroundColor: "#333",

    sidebarNavItemTextColor: "#333",
    sidebarNavItemTextHoverColor: "#fff",
    sidebarNavItemTextActiveColor: "#fff",
    sidebarNavItemBackgroundHoverColor: "rgba(255, 0,0,0.5)",
    sidebarNavItemBackgroundActiveColor: "rgba(255, 0,0,0.3)",
}

export const sidebarNavStylesDark = {
    sidebarNavWidth: "290px",
    sidebarNavBackgroundColor: "#232323",
    sidebarNavBackgroundHoverColor: "rgba(255, 0,0,0.5)",
    sidebarNavBackgroundActiveColor: "rgba(255, 0,0,0.3)",

    sidebarNavItemDivider: "1px solid rgba(255,255, 255, 0.12)",

    sidebarNavItemTextColor: "#eee",
    sidebarNavItemTextHoverColor: "#fff",
    sidebarNavItemTextActiveColor: "#fff",
}

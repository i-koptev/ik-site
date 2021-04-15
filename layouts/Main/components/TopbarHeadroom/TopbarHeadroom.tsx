import React, { useState } from "react"
import { useRouter } from "next/router"
import useTranslation from "next-translate/useTranslation"
import Headroom from "react-headroom"
import clsx from "clsx"

import {
    Theme,
    makeStyles,
    createStyles,
    useTheme,
} from "@material-ui/core/styles"
import { AppBar, Toolbar, Badge, Hidden, IconButton } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import MenuIcon from "@material-ui/icons/Menu"
import SvgIcon from "@material-ui/core/SvgIcon"
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined"
import InputIcon from "@material-ui/icons/Input"

import Link from "../../../../components/Link"
import TwoDimentionalMenu from "./components/TwoDimentionalMenu"
import DropdownMenu from "./components/DropdownMenu"
import { toolbarHeight } from "../../../../theme/sharedStyles"
import { toolbarHeightSmUp } from "../../../../theme/sharedStyles"

import {
    topbarHeadroomStyles as tbs,
    siteContainerWidth,
} from "../../../../theme/sharedStyles"

import cmsdata from "../../../../cms"

const { nodes: menuItems } = cmsdata.data.menus.topbarMenu.menuItems

function Logo(props) {
    return (
        <SvgIcon {...props} viewBox="0 0 100 100">
            {/* <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /> */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMin slice"
            >
                <path d="M50 8.5A41.5 41.5 0 118.5 50 41.55 41.55 0 0150 8.5M50 0a50 50 0 1050 50A50 50 0 0050 0z" />
                <path d="M70.5 29.5v41h-41v-41h41M79 21H21v58h58V21z" />
            </svg>
        </SvgIcon>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: tbs.backgroundColor,
            //backgroundColor: "transparent", // needs to be transparent for ReactHeadroom colors to work
            boxShadow: tbs.boxShadow,
            justifyContent: "center",
        },
        logo: {
            position: "absolute",
            color: tbs.logoColor,
            cursor: "pointer",
            // textDecoration: "none !important",
            // fontSize: "1rem",
            // fontWeight: 700,
            // textTransform: "uppercase",
            // letterSpacing: "0.1rem",
            // // marginBottom: "-5.818px",
            // padding: "0",

            width: `${toolbarHeight}px`,
            height: `${toolbarHeight}px`,
            marginLeft: "16px",
            [theme.breakpoints.up("sm")]: {
                width: `${toolbarHeightSmUp}px`,
                height: `${toolbarHeightSmUp}px`,
            },
            [theme.breakpoints.up("lg")]: {
                marginLeft: 0,
            },
            transition: "all 300ms ease-in-out",
        },
        flexGrow: {
            flexGrow: 1,
        },
        signOutButton: {
            marginLeft: theme.spacing(1),
            backgroundColor: "tomato",
        },
        notificationButton: {
            marginLeft: theme.spacing(1),
            backgroundColor: "tomato",
        },

        langSwitcherButton: {
            color: tbs.langSwitcherButtonColor,
            "&:hover": {
                backgroundColor: tbs.langSwitcherButtonHoverBackgroundColor,
                outline: tbs.langSwitcherButtonHoverOutline,
                color: tbs.langSwitcherButtonHoverColor,
            },
            "& .MuiButton-label": {
                letterSpacing: "0.02rem",
            },
            transition: "color 500ms linear",
        },
        langSwitcherButtonPinned: {
            color: tbs.langSwitcherButtonPinnedColor,
            transition: "color 100ms linear",
        },
        toolbar: {
            height: `${toolbarHeight}`,
            [theme.breakpoints.up("sm")]: {
                height: `${toolbarHeightSmUp}`,
            },
        },
        headroom: {
            "& .headroom": {
                transition:
                    "background-color 500ms linear, border-bottom 500ms linear",
                backgroundColor: tbs.backgroundColor,
                borderBottom: tbs.borderBottom,
                position: "fixed",
                width: "100%",
                zIndex: 15,
            },
            "& .headroom--pinned": {
                backgroundColor: tbs.pinnedBackgroundColor,
                borderBottom: tbs.pinnedBorderBottom,
            },
        },
        headroomResizeOnScroll: {
            "& .headroom": {
                top: 0,
                left: 0,
                right: 0,
                zIndex: 5,
                // zIndex: 1,
                transition:
                    "all 500ms linear,background-color 500ms linear, border-bottom 500ms linear",
                // backgroundColor: tbs.backgroundColor,
                backgroundColor: "#eee",
                borderBottom: tbs.borderBottom,
                position: "fixed",
                width: "100%",
                boxShadow: "0 0 3px 3px rgba(175, 175, 175, 0.5)",
            },

            "& .headroom--unfixed": {
                backgroundColor: "transparent",
                boxShadow: "none",
                // height: "80px",
                // position: "relative",
                // transform: "translateY(0)",
                transition: "all 300ms ease-in-out",
                "& $logo": {
                    color: "maroon",
                },
            },

            "& .headroom--scrolled": {
                // backgroundColor: "yellow",
                transition: "transform 200ms ease-in-out",
            },

            "& .headroom--unpinned": {
                position: "fixed",
                // transform: "translateY(-100%)",
            },

            "& .headroom--pinned": {
                // backgroundColor: tbs.pinnedBackgroundColor,
                // backgroundColor: "lime",
                borderBottom: tbs.pinnedBorderBottom,
            },
        },
        drawerIcon: {
            color: tbs.burgerColor,
            marginRight: "0.9rem",
            marginLeft: "0.9rem",
            height: "28px",
            width: "28px",
        },
        drawerIconContainer: {
            paddingRight: 0,
            "&:hover": {
                backgroundColor: "transparent",
            },
        },
    })
)

const TopbarHeadroom = (props) => {
    const {
        className,
        toggleSidebar,
        resizeOnScroll,
        backgroundIsDark,
        ...rest
    } = props

    const classes = useStyles()
    const theme = useTheme()
    const router = useRouter()

    const [notifications, setNotifications] = useState(23)

    const { t, lang } = useTranslation("common")

    const [isTop, setIsTop] = useState(true)

    const headroomStyles = clsx({
        [classes.headroom]: !resizeOnScroll,
        [classes.headroomResizeOnScroll]: resizeOnScroll,
    })

    const setTopFalse = () => {
        if (!top) return
        setIsTop(false)
    }

    return (
        <Headroom
            disableInlineStyles={resizeOnScroll}
            onPin={setTopFalse}
            onUnpin={setTopFalse}
            onUnfix={() => {
                setIsTop(true)
            }}
            variant="header"
            className={headroomStyles}
        >
            <AppBar
                {...rest}
                className={clsx(classes.root, className)}
                position="static"
            >
                <Container maxWidth={siteContainerWidth} disableGutters>
                    <Toolbar
                        component="nav"
                        disableGutters
                        classes={{ root: classes.toolbar }}
                    >
                        {/* <Link href="/" className={classes.logo}> */}

                        {/* <img
                            onClick={() => router.push(`/`)}
                            src="/logo-iks.svg"
                            alt=""
                            style={{
                                height: "64px",
                                width: "64px",
                                cursor: "pointer",
                            }}
                        /> */}
                        <Logo
                            focusable
                            className={classes.logo}
                            onClick={() => router.push(`/`)}
                        />
                        {/* IK-Base */}
                        {/* </Link> */}
                        <div className={classes.flexGrow} />
                        <Hidden smDown>
                            {/* <TwoDimentionalMenu
                                menuItems={menuItems}
                                backgroundIsDark={backgroundIsDark}
                                isTop={isTop}
                                resizeOnScroll={resizeOnScroll}
                            /> */}
                            <DropdownMenu
                                menuItems={menuItems}
                                backgroundIsDark={backgroundIsDark}
                                isTop={isTop}
                                resizeOnScroll={resizeOnScroll}
                            />
                        </Hidden>
                        {router.locales
                            .filter((locale) => locale !== lang)
                            .map((locale) => (
                                <Button
                                    key={locale}
                                    className={clsx(
                                        {
                                            [classes.langSwitcherButtonPinned]: isTop,
                                        },
                                        classes.langSwitcherButton
                                    )}
                                    href={router.asPath}
                                    locale={locale}
                                    component={Link}
                                >
                                    {locale.toUpperCase()}
                                </Button>
                            ))}
                        {/* <Hidden mdDown>
                            <IconButton
                                className={classes.notificationButton}
                                color="inherit"
                            >
                                <Badge
                                    // badgeContent={notifications.length}
                                    badgeContent={notifications}
                                    // color="primary"
                                    color="error"
                                    // variant="dot"
                                >
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                className={classes.signOutButton}
                                color="inherit"
                            >
                                <InputIcon />
                            </IconButton>
                        </Hidden> */}
                        <Hidden lgUp>
                            <IconButton
                                className={classes.drawerIconContainer}
                                color="inherit"
                                onClick={toggleSidebar(true)}
                                disableRipple
                            >
                                <MenuIcon className={classes.drawerIcon} />
                            </IconButton>
                        </Hidden>
                    </Toolbar>
                </Container>
            </AppBar>
        </Headroom>
    )
}

export default TopbarHeadroom

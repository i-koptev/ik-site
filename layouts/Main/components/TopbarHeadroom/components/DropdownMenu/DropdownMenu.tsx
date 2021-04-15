import React from "react"
import clsx from "clsx"
import useTranslation from "next-translate/useTranslation"

import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import Grow from "@material-ui/core/Grow"
import Paper from "@material-ui/core/Paper"
import Popper from "@material-ui/core/Popper"

import Button from "@material-ui/core/Button"
import Menu, { MenuProps } from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import MenuList from "@material-ui/core/MenuList"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import DraftsIcon from "@material-ui/icons/Drafts"
import SendIcon from "@material-ui/icons/Send"

import Link from "../../../../../../components/Link"

import { flatListToHierarchical } from "../../../../../../lib/functions"

import {
    topbarHeadroomStyles as tbs,
    siteContainerWidth,
} from "../../../../../../theme/sharedStyles"

const StyledMenu = withStyles({
    paper: {
        // border: "1px solid #d3d4d5",
        backgroundColor: tbs.mainNavigationDropdownBackgroundColor,
        borderRadius: 0,
    },
})((props: MenuProps) => (
    <Menu
        elevation={1}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center",
        }}
        {...props}
    />
))

const StyledMenuItem = withStyles((theme) => ({
    root: {
        "&:focus": {
            backgroundColor: theme.palette.primary.main,
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem)

const DropdownMenu = (props) => {
    const { menuItems, backgroundIsDark, isTop, resizeOnScroll } = props
    const theme = useTheme()

    const isDarkTheme = theme.palette.type === "dark"

    const linkColor =
        (resizeOnScroll && (backgroundIsDark || isDarkTheme) && isTop) ||
        (!resizeOnScroll && (backgroundIsDark || !isTop || isDarkTheme))
            ? tbs.mainNavigationLinkColorBgDark
            : tbs.mainNavigationLinkColor

    const useStyles = makeStyles((theme) => ({
        mainNavigationLink: {
            transition: "color 200ms linear",
            textDecoration: "none",
            // textTransform: "uppercase",
            textTransform: "capitalize",
            marginRight: "2.3rem",
            color: linkColor,
            fontWeight: 400,
            letterSpacing: "0.15em",
            "&:focus": {
                borderRadius: "10px",
                outline: "5px solid rgba(127,127,255,0.4)",
                outlineOffset: "7px",
                // boxShadow: "0 0 25px 5px rgba(255,255,255,0.7)",
            },
            "&::after": {
                content: '""',
                // width: "100%",
                height: "1px",
                margin: "0 auto",
                backgroundColor: tbs.mainNavigationLinkActiveUnderlineColor,
                display: "block",
                // margin-bottom: .3rem;
                opacity: "0",
                transitionDuration: "500ms",
                transitionProperty: "opacity",
            },
            "&:hover": {
                // color: theme.layouts.Main.Topbar.mainNavigationLinkHoverColor,
                color: tbs.mainNavigationLinkActiveColor,
                "&::after": {
                    opacity: "0.5",
                },
            },
            "&$active": {
                color: tbs.mainNavigationLinkActiveHoverColor,
                "&:hover": {
                    cursor: "default",
                    "&::after": {
                        opacity: "1",
                    },
                },
                "&::after": {
                    content: '""',
                    width: "100%",
                    height: "1px",
                    margin: "0 auto",
                    backgroundColor: tbs.mainNavigationLinkActiveUnderlineColor,
                    display: "block",
                    // margin-bottom: .3rem;
                    opacity: "1",
                    transitionDuration: "500ms",
                    transitionProperty: "opacity",
                },
            },
            ////////////////////////////////////////////////

            "& .MuiButton-label": {
                display: "inline-block",
                "&::after": {
                    content: '""',
                    width: "auto",
                    height: "1px",
                    margin: "0 auto",
                    backgroundColor: tbs.mainNavigationLinkActiveUnderlineColor,
                    display: "block",
                    // margin-bottom: .3rem;
                    opacity: "0",
                    transitionDuration: "500ms",
                    transitionProperty: "opacity",
                },
                "&:hover": {
                    // color: theme.layouts.Main.Topbar.mainNavigationLinkHoverColor,
                    color: tbs.mainNavigationLinkActiveColor,
                    "&::after": {
                        opacity: "0.5",
                    },
                },
                "&$active": {
                    color: tbs.mainNavigationLinkActiveHoverColor,
                    "&:hover": {
                        cursor: "default",
                        "&::after": {
                            opacity: "1",
                        },
                    },
                    "&::after": {
                        content: '""',
                        width: "100%",
                        height: "1px",
                        margin: "0 auto",
                        backgroundColor:
                            tbs.mainNavigationLinkActiveUnderlineColor,
                        display: "block",
                        // margin-bottom: .3rem;
                        opacity: "1",
                        transitionDuration: "500ms",
                        transitionProperty: "opacity",
                    },
                },
            },
            "& .MuiButton-endIcon": {
                marginLeft: 0,
            },
        },

        //.MuiButton-label
        menu: {
            textAlign: "center",
            marginTop: "2px",
            backgroundColor: tbs.mainNavigationDropdownBackgroundColor,
            borderRadius: 0,
        },
        menuItem: {
            paddingLeft: "2.5rem",
            paddingRight: "2.5rem",
            color: tbs.mainNavigationDropdownLinkColor,
            // color: tbs.mainNavigationDropdownLinkColor,
            "&:hover": {
                // "&:hover,&:focus": {
                backgroundColor: tbs.mainNavigationDropdownBackgroundHoverColor,
                color: tbs.mainNavigationDropdownLinkHoverColor,
                // ...theme.typography.tab
            },
            "&$active": {
                backgroundColor: "maroon",
                color: "white",
            },
        },
        active: { color: "lime " },
        expandIcon: {
            position: "absolute",
            top: "2px",
            // left: "1px",
            fontSize: "20px",
        },
        hasIcon: {
            marginRight: "52px",
            padding: 0,
            textAlign: "left",
        },
    }))

    const classes = useStyles()

    const { t, lang } = useTranslation("common")

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    const myRefs = React.useRef([])

    const [open, setOpen] = React.useState<boolean>(false)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
        setOpen(true)
    }

    const handleClose = () => {
        setAnchorEl(null)
        setOpen(false)
    }
    console.log(anchorEl)
    return (
        <>
            {flatListToHierarchical(menuItems).map((menuItem, i) =>
                !menuItem.children.length ? ( //no childern
                    <Link
                        key={`key-${menuItem.key}`}
                        naked
                        className={classes.mainNavigationLink}
                        activeClassName={classes.active}
                        href={
                            menuItem.url === "/"
                                ? menuItem.url
                                : `/${menuItem.url.replace(/\//g, "")}/`
                        }
                    >
                        {menuItem.title
                            ? menuItem.title[lang]
                                ? menuItem.title[lang]
                                : menuItem.url
                            : menuItem.url}
                    </Link>
                ) : (
                    <React.Fragment key={`key-${menuItem.key}`}>
                        <Button
                            ref={(el) => (myRefs.current[i] = el)}
                            key={`key-${menuItem.key}`}
                            aria-controls="customized-menu"
                            aria-haspopup="true"
                            disableRipple
                            // variant="contained"
                            // color="primary"
                            className={clsx(
                                classes.mainNavigationLink,
                                classes.hasIcon
                            )}
                            //activeClassName={classes.active}
                            // onClick={handleClick}
                            onClick={(e) => handleClick(e)}

                            // endIcon={<ExpandMoreIcon />}
                        >
                            {menuItem.title
                                ? menuItem.title[lang]
                                    ? menuItem.title[lang]
                                    : menuItem.url
                                : menuItem.url}
                            {open &&
                            (anchorEl === myRefs.current[i] ||
                                anchorEl === myRefs.current[i + 1024]) ? (
                                <ExpandLessIcon
                                    // fontSize="small"
                                    className={classes.expandIcon}
                                />
                            ) : (
                                <ExpandMoreIcon
                                    // fontSize="small"
                                    className={classes.expandIcon}
                                />
                            )}
                        </Button>
                        <StyledMenu
                            id="customized-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            // open={Boolean(anchorEl)}
                            open={
                                open &&
                                (anchorEl === myRefs.current[i] ||
                                    anchorEl === myRefs.current[i + 1024])
                            }
                            onClose={handleClose}
                        >
                            {menuItem.children.map((child) => (
                                <MenuItem
                                    key={`key-${child.key}`}
                                    // onClick={handleClose}
                                    component={Link}
                                    naked
                                    href={child.url}
                                    activeClassName={classes.active}
                                    classes={{
                                        root: classes.menuItem,
                                    }}
                                >
                                    {/* <ListItemIcon>
                                        <SendIcon fontSize="small" />
                                    </ListItemIcon> */}
                                    <ListItemText
                                        primary={
                                            child.title
                                                ? child.title[lang]
                                                    ? child.title[lang]
                                                    : child.url
                                                : child.url
                                        }
                                    />
                                </MenuItem>
                            ))}
                        </StyledMenu>
                    </React.Fragment>
                )
            )}
        </>
    )
}

export default DropdownMenu

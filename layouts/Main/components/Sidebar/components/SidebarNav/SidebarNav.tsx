import React from "react"
import Link from "../../../../../../components/Link"
import clsx from "clsx"
import useTranslation from "next-translate/useTranslation"

import { Theme, createStyles, makeStyles } from "@material-ui/core/styles"

import List from "@material-ui/core/List"
import ListSubheader from "@material-ui/core/ListSubheader"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { MenuItem } from "@material-ui/core"

import Collapse from "@material-ui/core/Collapse"
import Divider from "@material-ui/core/Divider"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import DraftsIcon from "@material-ui/icons/Drafts"
import CloseIcon from "@material-ui/icons/Close"
import SendIcon from "@material-ui/icons/Send"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import StarBorder from "@material-ui/icons/StarBorder"

import { flatListToHierarchical } from "../../../../../../lib/functions"
import { sidebarNavStyles as snb } from "../../../../../../theme/sharedStyles"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // backgroundColor: theme.layouts.Main.Sidebar.backgroundColor,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            // padding: theme.spacing(2),
        },
        listHeader: {
            // color: snb.sidebarNavListHeaderTextColor,
            color: "black",
            textAlign: "right",
            letterSpacing: "0.2em",
            paddingTop: "0.7em",
            paddingRight: "1em",
            fontSize: "1.2rem",
            textTransform: "uppercase",
            // backgroundColor: snb.sidebarNavListHeaderBackgroundColor,
            backgroundColor: "white",
            borderBottom: "3px solid #eee",
            "& svg": {
                fontSize: "36px",
            },
        },
        divider: {
            // margin: theme.spacing(2, 0),
            height: "5px",
            // backgroundColor: "red",
        },
        nav: {
            marginBottom: theme.spacing(2),
        },

        drawerItem: {
            // ...theme.typography.tab
            color: "inherit",
            "&:hover": {
                backgroundColor: snb.sidebarNavItemBackgroundHoverColor,
                color: snb.sidebarNavItemTextHoverColor,
            },
            "&.active": {
                backgroundColor: snb.sidebarNavItemBackgroundActiveColor,
                color: snb.sidebarNavItemTextActiveColor,
            },

            // fontFamily: "Arial",
        },

        drawerIcon: {
            color: "inherit",
            minWidth: "35px",
        },
        drawerDivider: {
            // borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
            borderBottom: snb.sidebarNavItemDivider,
            backgroundClip: "padding-box",
        },
    })
)

import cmsdata from "../../../../../../cms"

const SidebarNav = (props) => {
    const { toggleSidebar } = props
    const { nodes: menuItems } = cmsdata.data.menus.sidebarMenu.menuItems
    const classes = useStyles()
    const { t, lang } = useTranslation("common")

    const renderMenuItem = (menuItem, index, level = 0) => {
        if (menuItem.children && menuItem.children.length) {
            return renderSubMenu(menuItem, index, level, true)
        } else {
            return (
                <ListItem
                    component={Link}
                    href={menuItem.url}
                    naked
                    button
                    divider
                    key={menuItem.key}
                    // classes={{ divider: classes.drawerDivider }}
                    className={clsx(classes.drawerItem, classes.drawerDivider)}
                    style={{ paddingLeft: `${level * 35 + 15}px` }}
                >
                    {level === 0 ? (
                        <ListItemIcon className={classes.drawerIcon}>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                    ) : null}
                    <ListItemText disableTypography>
                        {index + 1}.{level} -{" "}
                        {/* {/^common/.test(
                            t(`menuItem-${menuItem.url.replace(/\//g, "")}`)
                        )
                            ? menuItem.url === "/"
                                ? t(`menuItem-home`)
                                : menuItem.url
                            : t(`menuItem-${menuItem.url.replace(/\//g, "")}`)} */}
                        {menuItem.title
                            ? menuItem.title[lang]
                                ? menuItem.title[lang]
                                : menuItem.url
                            : menuItem.url}
                    </ListItemText>
                </ListItem>
            )
        }
    }
    const renderSubMenu = (menuItem, index, level, hasSubMenu) => {
        return (
            <React.Fragment key={menuItem.key}>
                <ListItem
                    component={Link}
                    href={menuItem.url}
                    naked
                    button
                    divider
                    // classes={{ divider: classes.drawerDivider }}
                    className={clsx(classes.drawerItem, classes.drawerDivider)}
                    style={{ paddingLeft: `${level * 35 + 15}px` }}
                >
                    {level === 0 ? (
                        <ListItemIcon className={classes.drawerIcon}>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                    ) : null}
                    <ListItemText disableTypography>
                        {index + 1}.{level} -{" "}
                        {/* {/^common/.test(
                            t(`menuItem-${menuItem.url.replace(/\//g, "")}`)
                        )
                            ? menuItem.url === "/"
                                ? t(`menuItem-home`)
                                : menuItem.url
                            : t(`menuItem-${menuItem.url.replace(/\//g, "")}`)} */}
                        {menuItem.title
                            ? menuItem.title[lang]
                                ? menuItem.title[lang]
                                : menuItem.url
                            : menuItem.url}
                    </ListItemText>
                    {hasSubMenu ? (
                        <ListItemIcon className={classes.drawerIcon}>
                            <ExpandMore />
                        </ListItemIcon>
                    ) : null}
                </ListItem>
                {
                    ((level += 1),
                    menuItem.children.map((item, index) => {
                        return renderMenuItem(item, index, level)
                    }))
                }
            </React.Fragment>
        )
    }

    return (
        <div
            role="presentation"
            onClick={toggleSidebar(false)}
            onKeyDown={toggleSidebar(false)}
        >
            <List
                disablePadding
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader
                        component="div"
                        id="nested-list-subheader"
                        className={classes.listHeader}
                    >
                        {/* {t(`sidebarMenuTitle`)} */}
                        <CloseIcon />
                    </ListSubheader>
                }
            >
                {flatListToHierarchical(menuItems).map((menuItem, index) => {
                    return renderMenuItem(menuItem, index)

                    // if (menuItem.children.length) {
                    //     return renderSubMenu(menuItem, index, 0, true)
                    // } else {
                    //     return renderMenuItem(menuItem, index, 0)
                    // }
                })}
            </List>
            <Divider className={classes.divider} />
            <pre>
                {/* {JSON.stringify(flatListToHierarchical(menuItems), null, 2)} */}
            </pre>
        </div>
    )
}

export default SidebarNav

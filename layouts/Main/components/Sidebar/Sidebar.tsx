import { makeStyles } from "@material-ui/core/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"

import SidebarNav from "./components/SidebarNav"
import { sidebarNavStyles as snb } from "../../../../theme/sharedStyles"

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: snb.sidebarNavWidth,
        color: snb.sidebarNavItemTextColor,
        backgroundColor: snb.sidebarNavBackgroundColor,
        [theme.breakpoints.up("lg")]: {
            // marginTop: 64,
            // height: "calc(100% - 64px)", // needed only if drawer is seen on >lg screens
            height: "100%",
        },
    },
}))

const Sidebar = (props) => {
    const classes = useStyles()

    const { open, variant, toggleSidebar } = props

    return (
        <div>
            <SwipeableDrawer
                variant={variant}
                anchor="right"
                open={open}
                onClose={toggleSidebar(false)}
                onOpen={toggleSidebar(true)}
                classes={{ paper: classes.drawer }}
            >
                <SidebarNav toggleSidebar={toggleSidebar} />
            </SwipeableDrawer>
        </div>
    )
}

export default Sidebar

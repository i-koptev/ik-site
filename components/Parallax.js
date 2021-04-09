import React from "react"
// nodejs library that concatenates classes
import clsx from "clsx"
// nodejs library to set properties for components
// import PropTypes from "prop-types"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    parallax: {
        // marginTop: "-65px",
        height: "90vh",
        maxHeight: "1000px",
        overflow: "hidden",
        position: "relative",
        backgroundPosition: "center top",
        backgroundSize: "cover",
        margin: "0",
        padding: "0",
        border: "0",
        display: "flex",
        alignItems: "center",
    },
    filter: {
        "&:before": {
            background: "rgba(0, 0, 0, 0.5)",
        },
        "&:after,&:before": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: "''",
        },
    },
    small: {
        height: "380px",
    },
    parallaxResponsive: {
        [theme.breakpoints.down("md")]: {
            minHeight: "660px",
        },
    },
}))

export default function Parallax(props) {
    let windowScrollTop
    // if (window.innerWidth >= 768) {
    //   windowScrollTop = window.pageYOffset / 3;
    // } else {
    //   windowScrollTop = 0;
    // }
    const [transform, setTransform] = React.useState("translate3d(0,0px,0)")
    React.useEffect(() => {
        if (window.innerWidth >= 768) {
            window.addEventListener("scroll", resetTransform)
        }
        return function cleanup() {
            if (window.innerWidth >= 768) {
                window.removeEventListener("scroll", resetTransform)
            }
        }
    })
    const resetTransform = () => {
        var windowScrollTop = window.pageYOffset / 3
        setTransform("translate3d(0," + windowScrollTop + "px,0)")
    }
    const {
        filter,
        className,
        children,
        style,
        image,
        small,
        responsive,
    } = props
    const classes = useStyles()
    const parallaxClasses = clsx({
        [classes.parallax]: true,
        [classes.filter]: filter,
        [classes.small]: small,
        [classes.parallaxResponsive]: responsive,
        [className]: className !== undefined,
    })
    return (
        <div
            className={parallaxClasses}
            style={{
                ...style,
                backgroundImage: "url(" + image + ")",
                backgroundPosition: "center",
                transform: transform,
            }}
        >
            {children}
        </div>
    )
}

// Parallax.propTypes = {
//     className: PropTypes.string,
//     filter: PropTypes.bool,
//     children: PropTypes.node,
//     style: PropTypes.string,
//     image: PropTypes.string,
//     small: PropTypes.bool,
//     // this will add a min-height of 660px on small screens
//     responsive: PropTypes.bool,
// }

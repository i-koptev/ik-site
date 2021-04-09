import Color from "color"
import clsx from "clsx"

import { makeStyles, useTheme } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import SvgIcon from "@material-ui/core/SvgIcon"
import Typography from "@material-ui/core/Typography"
import LocalOffer from "@material-ui/icons/LocalOffer"

const whiteColor = "#ffffff"
const blackColor = "#000000"
const gray = "rgba(65, 70, 75, 1)"

const textColor = `${Color(blackColor).fade(0.25)}`

const iconColor = "#"

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    )
}

const IconCard = (props) => {
    const cardAccentColor = "#23f37f"
    const cardActualAccentColor = props.color ? props.color : cardAccentColor
    const category = props.category ? props.category : "No category supplied."
    const title = props.title ? props.title : null
    const message = props.message ? props.message : null
    const icon = props.icon ? props.icon : null

    const colors = {
        lightPalette: {
            cardHeaderColor: cardActualAccentColor,
            cardTextColor: `${Color(blackColor).fade(0.25)}`,
            cardBackgroundColor: `${Color(whiteColor).fade(0.25)}`,
            cardShadowColor: `${Color(blackColor).fade(0.86)}`,
            cardIconColorArray: [
                `${Color(cardActualAccentColor)}`,
                `${Color(cardActualAccentColor).fade(0.3)}`,
                `${Color(cardActualAccentColor).darken(0.2)}`,
            ],
            cardFooterColor: `${Color(blackColor).fade(0.4)}`,
        },
        darkPalette: {
            cardHeaderColor: "tomato",
            cardTextColor: `${Color(whiteColor).fade(0.25)}`,
            cardBackgroundColor: `${Color(gray).fade(0.5)}`,
            cardShadowColor: `${Color(blackColor).fade(0.56)}`,
            cardIconColorArray: [
                `${Color(cardActualAccentColor).fade(0.5)}`,
                `${Color(cardActualAccentColor).fade(0.3)}`,
                `${Color(cardActualAccentColor).darken(0.3)}`,
            ],
            cardFooterColor: `${Color(whiteColor).fade(0.5)}`,
        },
    }

    const theme = useTheme()
    const isDarkTheme = theme.palette.type === "dark"
    const {
        cardHeaderColor,
        cardTextColor,
        cardBackgroundColor,
        cardShadowColor,
        cardIconColorArray,
        cardFooterColor,
    } = isDarkTheme ? colors.darkPalette : colors.lightPalette
    const useStyles = makeStyles((theme) => ({
        root: {
            padding: "1rem",
            overflow: "visible",
            marginTop: "20px", //компенсирует вынос иконки
            border: 0,
            borderRadius: "6px",
            fontSize: ".875rem",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            wordWrap: "break-word",
            color: cardTextColor,
            backgroundColor: cardBackgroundColor,
            boxShadow: `0 1px 4px 0 ` + cardShadowColor,
            "&:hover": {
                boxShadow: "5px 3px 20px 0 " + cardShadowColor,
                "& $iconContainer": {
                    boxShadow:
                        "5px 7px 10px -5px " +
                        cardIconColorArray[0] +
                        ", 1px 1px 2px 0 #777",
                },
            },
        },
        cardHeader: {
            // backgroundColor: "tomato",
            // color: "white",
            // padding: "1rem",
            // borderRadius: "4px",
            // marginTop: "-30px",
            // justifyContent: "center",

            fontWeight: 300,
            letterSpacing: "0.05em",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1rem",
        },
        cardBody: {
            marginBottom: "1.25rem",
        },
        cardFooter: {
            color: cardFooterColor,
            display: "inline-flex",
            fontSize: "12px",
            lineHeight: "22px",
            "& svg": {
                top: "3px",
                width: "16px",
                height: "16px",
                position: "relative",
                marginRight: "5px",
                marginLeft: "3px",
                color: cardIconColorArray[0],
            },
            // "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            //     top: "4px",
            //     fontSize: "16px",
            //     position: "relative",
            //     marginRight: "3px",
            //     marginLeft: "3px",
            // },
        },
        iconContainer: {
            padding: "24px 25px 19px",

            background:
                "linear-gradient(60deg, " +
                cardIconColorArray[1] +
                ", " +
                cardIconColorArray[2] +
                ")",

            borderRadius: "3px",
            // marginLeft: "1rem",
            marginTop: "calc(-20px - 1rem)",
            boxShadow:
                "10px 10px 20px -5px " +
                cardIconColorArray[0] +
                ", 1px 1px 2px 0 #777",
            transition: "box-shadow 300ms",
            "& svg": {
                width: "36px",
                height: "36px",
                color: "white",
                lineHeight: "56px",
            },
        },
        icon: {
            width: "36px",
            height: "36px",
            color: "white",
            lineHeight: "56px",
        },
        accentColor: {
            color: isDarkTheme
                ? `${Color(cardActualAccentColor).lighten(0.5)}`
                : `${Color(cardActualAccentColor).darken(0.25)}`,
        },
    }))
    const classes = useStyles()

    return (
        <Card className={classes.root}>
            <div className={classes.cardHeader}>
                <div className={classes.iconContainer}>
                    {icon ? icon : <HomeIcon className={classes.icon} />}
                </div>
                <Typography variant="body2">{category}</Typography>
            </div>
            <div className={classes.cardBody}>
                <Typography
                    variant="subtitle2"
                    className={clsx(classes.accentColor, classes.cardBody)}
                >
                    {title ? title.toUpperCase() : null}
                </Typography>
                <Typography variant="body2">{message}</Typography>
            </div>
            <div className={classes.cardFooter}>
                <LocalOffer />
                Tracked from Github
            </div>
        </Card>
    )
}

export default IconCard

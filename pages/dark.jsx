import Head from "next/head"
import Link from "next/link"
import clsx from "clsx"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { green } from "@material-ui/core/colors"

import {
    makeStyles,
    createStyles,
    Theme,
    useTheme,
} from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Switch from "@material-ui/core/Switch"
import SvgIcon from "@material-ui/core/SvgIcon"

import Icon from "@material-ui/core/Icon"

import IconCard from "../components/IconCard/IconCard"

import SettingsIcon from "@material-ui/icons/Settings"
import BackupIcon from "@material-ui/icons/Backup"
import Brightness4Icon from "@material-ui/icons/Brightness4"
import Brightness5Icon from "@material-ui/icons/Brightness5"
import DescriptionIcon from "@material-ui/icons/Description"
import EmailIcon from "@material-ui/icons/Email"
import ErrorIcon from "@material-ui/icons/Error"
import LanguageIcon from "@material-ui/icons/Language"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"

import Store from "@material-ui/icons/Store"
import Warning from "@material-ui/icons/Warning"
import DateRange from "@material-ui/icons/DateRange"
import LocalOffer from "@material-ui/icons/LocalOffer"
import Update from "@material-ui/icons/Update"
import ArrowUpward from "@material-ui/icons/ArrowUpward"
import AccessTime from "@material-ui/icons/AccessTime"
import Accessibility from "@material-ui/icons/Accessibility"
import BugReport from "@material-ui/icons/BugReport"
import Code from "@material-ui/icons/Code"
import Cloud from "@material-ui/icons/Cloud"

import MainLayout from "../layouts/Main"

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    )
}

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            height: "100%",
            minHeight: "100vh",
            // paddingBottom: "2rem",
            [theme.breakpoints.up("xs")]: {
                paddingTop: theme.spacing(2),
            },
            [theme.breakpoints.up("sm")]: {
                paddingTop: theme.spacing(4),
            },
            [theme.breakpoints.up("md")]: {
                paddingTop: theme.spacing(6),
            },
        },
        ex: {
            "& > *": {
                // margin: theme.spacing(1),
            },
        },
        button: {
            margin: theme.spacing(1),
        },
        l: {
            color: "tomato",
            backgroundColor: "maroon",
            "&:hover": {
                backgroundColor: "tomato",
                color: "maroon",
            },
        },
        d: {
            color: "maroon",
            backgroundColor: "tomato",
            "&:hover": {
                backgroundColor: "maroon",
                color: "tomato",
            },
        },
    })
)

// "mixins": {
//     "toolbar": {
//         "minHeight": 56,
//         "@media (min-width:0px) and (orientation: landscape)": {
//             "minHeight": 48
//         },
//         "@media (min-width:600px)": {
//             "minHeight": 64
//         }
//     }
// },

export default function IndexPage(props) {
    const classes = useStyles()
    const theme = useTheme()
    const isDarkTheme = theme.palette.type === "dark"
    const { handleThemeChange } = props
    const matches = useMediaQuery("(min-width:1280px)")
    const matches2 = useMediaQuery(theme.breakpoints.up("sm"))

    const iconArr = [
        <SettingsIcon />,
        <BackupIcon />,
        <Brightness4Icon />,
        <Brightness5Icon />,
        <DescriptionIcon />,
        <EmailIcon />,
        <ErrorIcon />,
        <LanguageIcon />,
        <LocalOfferIcon />,
    ]

    return (
        <MainLayout>
            {/* <MainLayout backgroundIsDark> */}
            <Head>
                <title>Koptef | Всегда...</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth="lg" className={classes.root}>
                <Grid container justify="center" spacing={4}>
                    <Grid item xs={6}>
                        <Typography variant="h3" component="h1" gutterBottom>
                            IconCard component
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Link href="/">Back</Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Switch
                            checked={isDarkTheme}
                            onChange={handleThemeChange}
                        />
                    </Grid>
                </Grid>

                <Grid
                    container
                    justify={matches ? "flex-start" : "center"}
                    alignItems={matches ? "flex-start" : "center"}
                    spacing={4}
                >
                    {[
                        "#23f37f",
                        "#b446e7",
                        "#F7E368",
                        "#f84e3f",
                        "#473AF2",
                        "#f656c6",
                        "",
                    ].map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <IconCard
                                color={item}
                                icon={iconArr[index]}
                                category={`Category No.${index + 1}`}
                                title="Card body title"
                                message="Card body message. Something very important! Hello Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Soluta aut nisi quasi
                                corporis, distinctio perspiciatis. Non, impedit
                                expedita praesentium, ratione quidem incidunt
                                sed ullam, asperiores veniam ab nam ipsum iure a
                                officia provident odit nostrum."
                            />
                        </Grid>
                    ))}

                    <Box my={10}>
                        <HomeIcon fontSize="small" />
                        <HomeIcon color="primary" />
                        <HomeIcon color="secondary" fontSize="large" />
                        <HomeIcon style={{ fontSize: 40, color: green[500] }} />

                        {/* <pre>{JSON.stringify(theme, null, 4)}</pre> */}
                        <span>{`Matches min-width:600px: ${matches}`}</span>
                        <br />
                        <span>{`Matches sm: ${matches2}`}</span>
                        <br />

                        <main>
                            <Typography variant="h4">
                                Какую выберешь?
                            </Typography>
                            <Typography>
                                Hello Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Soluta aut nisi quasi
                                corporis, distinctio perspiciatis. Non, impedit
                                expedita praesentium, ratione quidem incidunt
                                sed ullam, asperiores veniam ab nam ipsum iure a
                                officia provident odit nostrum. Similique
                                excepturi nisi voluptates. Vitae odio, in beatae
                                quia pariatur nulla illo reprehenderit nam iste
                                corrupti fuga suscipit, sunt velit! Vero velit
                                dolore eius, harum possimus amet quibusdam autem
                                commodi atque molestiae sequi ab earum ea
                                dolorum, corporis numquam labore veritatis enim
                                eligendi ut illum consectetur. Vitae, velit
                                ratione! Dolorem facere adipisci, assumenda,
                                dolore exercitationem delectus ad, eaque
                                praesentium quidem natus eligendi temporibus
                                perspiciatis quos! Lorem ipsum dolor sit, amet
                                consectetur adipisicing elit. Vel ullam fugit,
                                laborum vitae error natus sapiente iste!
                                Doloremque dolor quibusdam voluptas eveniet
                                corporis veritatis, laudantium repellendus quod
                                ullam hic voluptatibus odio suscipit mollitia?
                                Illum, tenetur. Perspiciatis error excepturi
                                autem laborum veniam assumenda ut voluptatibus
                                fugit optio rerum, blanditiis natus fuga dolores
                                molestiae inventore. Velit odio aperiam
                                consectetur? Neque voluptate dolorem facilis
                                earum fugit veritatis deserunt dolores
                                voluptatum blanditiis, iste rerum vitae maxime
                                iusto, aliquid modi atque sed suscipit
                                laudantium. Iste neque consequatur quos. Illo
                                eligendi adipisci ut quo ratione blanditiis
                                architecto earum sed ipsa, sit quis dolores?
                                Veniam delectus libero ab, ipsum dicta ex.
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                            >
                                Primary
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                            >
                                Secondary
                            </Button>
                            <Button
                                variant="contained"
                                color="default"
                                className={clsx(
                                    // !darkState && classes.l,
                                    // darkState && classes.d,
                                    {
                                        [classes.l]: !isDarkTheme,
                                        [classes.d]: isDarkTheme,
                                        [classes.button]: true,
                                    }
                                )}
                            >
                                {isDarkTheme ? "dark" : "light"}
                            </Button>
                            <pre>
                                {JSON.stringify(theme.breakpoints, null, 4)}
                            </pre>
                        </main>
                    </Box>
                </Grid>
            </Container>
        </MainLayout>
    )
}

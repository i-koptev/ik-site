import clsx from "clsx"
import {
    Theme,
    makeStyles,
    createStyles,
    useTheme,
} from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import MainLayout from "../layouts/Main"

import { siteContainerWidth } from "../theme/sharedStyles"

const pageSpacing = 4 // used as a grid container spacing and as a ratio to compensate first child section padding? overlapping

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        heroSectionWrapper: {
            // backgroundColor: "rgba(255,0,0,0.3)",
            backgroundImage: "url(/bg_blue.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            marginBottom: `${pageSpacing * 4}px`, // compensate following section Grid item paddings determined by Grid container spacing {amount}
        },
        heroSection: {
            // minHeight: "30vh",
            [theme.breakpoints.up("sm")]: {
                // minHeight: "50vh",
            },
            alignContent: " center",
            textAlign: "center",
        },
        heroSectionSlogan: {
            fontFamily:
                "Oswald, Roboto, 'Open Sans','Playfair Display', Times, serif",
            fontWeight: 500,
            fontSize: "6rem",
            [theme.breakpoints.up("xs")]: {
                fontSize: "5rem",
            },
            [theme.breakpoints.up("sm")]: {
                fontSize: "7rem",
            },
            [theme.breakpoints.up("md")]: {
                fontSize: "8rem",
            },
            marginBottom: "0.35em",
            lineHeight: 1.167,
            letterSpacing: "-0.01562em",
            color: "white",
            textShadow: "0px 0px 70px rgba(255,255,255,0.7)",
        },
        sectionWrapper: {
            marginBottom: `${pageSpacing * 4}px`, // compensate following section Grid item paddings - comment to decrease spacing between sections
            backgroundColor: "teal",
        },
        sectionContent: {
            paddingTop: "1em",
            paddingBottom: "1em",
        },
    })
)

const Contacts = () => {
    const classes = useStyles()
    return (
        <MainLayout backgroundIsDark pageSpacing={pageSpacing}>
            <section
                className={clsx(
                    "mainLayoutFirstChild",
                    classes.heroSectionWrapper
                )}
            >
                <Container maxWidth={siteContainerWidth}>
                    <Grid
                        container
                        spacing={pageSpacing}
                        className={classes.heroSection}
                    >
                        <Grid item xs={12}>
                            <div className={classes.heroSectionSlogan}>
                                The Slogan
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section className={classes.sectionWrapper}>
                {/* <section
                className={clsx("mainLayoutFirstChild", classes.sectionWrapper)}
            > */}
                <Container
                    maxWidth={siteContainerWidth}
                    style={{ backgroundColor: "#123", color: "#eee" }}
                >
                    <Grid
                        container
                        spacing={pageSpacing}
                        className={classes.sectionContent}
                    >
                        <Grid item sm={6}>
                            Contacts Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Officiis animi, eligendi aliquam
                            cupiditate error nostrum beatae! Hic pariatur
                            tempora voluptatem ea, recusandae nemo cumque optio,
                            dolores omnis laboriosam repellat cupiditate veniam,
                            ipsam maiores temporibus. Velit magni porro fuga
                            esse eos quos repudiandae eligendi vel molestias,
                            quia neque ratione consequuntur. Mollitia error
                            magnam aperiam saepe sapiente exercitationem
                            adipisci excepturi necessitatibus. Odio harum, ea
                            sequi laboriosam molestiae voluptatibus, eius
                            possimus itaque quaerat obcaecati libero
                            reprehenderit. Quam doloribus, reiciendis iusto
                            consequatur libero deleniti, numquam eum enim
                            commodi possimus suscipit laudantium aliquam quo
                            ducimus odio at magnam accusamus eveniet laborum.
                            Eligendi eius soluta ab.
                        </Grid>{" "}
                        <Grid item sm={6}>
                            Contacts Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Officiis animi, eligendi aliquam
                            cupiditate error nostrum beatae! Hic pariatur
                            tempora voluptatem ea, recusandae nemo cumque optio,
                            dolores omnis laboriosam repellat cupiditate veniam,
                            ipsam maiores temporibus. Velit magni porro fuga
                            esse eos quos repudiandae eligendi vel molestias,
                            quia neque ratione consequuntur. Mollitia error
                            magnam aperiam saepe sapiente exercitationem
                            adipisci excepturi necessitatibus. Odio harum, ea
                            sequi laboriosam molestiae voluptatibus, eius
                            possimus itaque quaerat obcaecati libero
                            reprehenderit. Quam doloribus, reiciendis iusto
                            consequatur libero deleniti, numquam eum enim
                            commodi possimus suscipit laudantium aliquam quo
                            ducimus odio at magnam accusamus eveniet laborum.
                            Eligendi eius soluta ab.
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <section
                className={classes.sectionWrapper}
                style={{ backgroundColor: "maroon" }}
            >
                <Container
                    maxWidth={siteContainerWidth}
                    style={{ backgroundColor: "tomato" }}
                >
                    <Grid
                        container
                        spacing={pageSpacing}
                        className={classes.sectionContent}
                    >
                        <Grid item sm={12}>
                            Contacts Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Officiis animi, eligendi aliquam
                            cupiditate error nostrum beatae! Hic pariatur
                            tempora voluptatem ea, recusandae nemo cumque optio,
                            dolores omnis laboriosam repellat cupiditate veniam,
                            ipsam maiores temporibus. Velit magni porro fuga
                            esse eos quos repudiandae eligendi vel molestias,
                            quia neque ratione consequuntur. Mollitia error
                            magnam aperiam saepe sapiente exercitationem
                            adipisci excepturi necessitatibus. Odio harum, ea
                            sequi laboriosam molestiae voluptatibus, eius
                            possimus itaque quaerat obcaecati libero
                            reprehenderit. Quam doloribus, reiciendis iusto
                            consequatur libero deleniti, numquam eum enim
                            commodi possimus suscipit laudantium aliquam quo
                            ducimus odio at magnam accusamus eveniet laborum.
                            Eligendi eius soluta ab.
                        </Grid>{" "}
                        <Grid item sm={6}>
                            Contacts Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Officiis animi, eligendi aliquam
                            cupiditate error nostrum beatae! Hic pariatur
                            tempora voluptatem ea, recusandae nemo cumque optio,
                            dolores omnis laboriosam repellat cupiditate veniam,
                            ipsam maiores temporibus. Velit magni porro fuga
                            esse eos quos repudiandae eligendi vel molestias,
                            quia neque ratione consequuntur. Mollitia error
                            magnam aperiam saepe sapiente exercitationem
                            adipisci excepturi necessitatibus. Odio harum, ea
                            sequi laboriosam molestiae voluptatibus, eius
                            possimus itaque quaerat obcaecati libero
                            reprehenderit. Quam doloribus, reiciendis iusto
                            consequatur libero deleniti, numquam eum enim
                            commodi possimus suscipit laudantium aliquam quo
                            ducimus odio at magnam accusamus eveniet laborum.
                            Eligendi eius soluta ab.
                        </Grid>{" "}
                        <Grid item sm={6}>
                            Contacts Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Officiis animi, eligendi aliquam
                            cupiditate error nostrum beatae! Hic pariatur
                            tempora voluptatem ea, recusandae nemo cumque optio,
                            dolores omnis laboriosam repellat cupiditate veniam,
                            ipsam maiores temporibus. Velit magni porro fuga
                            esse eos quos repudiandae eligendi vel molestias,
                            quia neque ratione consequuntur. Mollitia error
                            magnam aperiam saepe sapiente exercitationem
                            adipisci excepturi necessitatibus. Odio harum, ea
                            sequi laboriosam molestiae voluptatibus, eius
                            possimus itaque quaerat lorem500 obcaecati libero
                            reprehenderit. Quam doloribus, reiciendis iusto
                            consequatur libero deleniti, numquam eum enim
                            commodi possimus suscipit laudantium aliquam quo
                            ducimus odio at magnam accusamus eveniet laborum.
                            Eligendi eius soluta ab.
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </MainLayout>
    )
}

export default Contacts

import MainLayout from "../layouts/Main"

import Link from "next/link"
import Head from "next/head"

import useTranslation from "next-translate/useTranslation"

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"

import { siteContainerWidth } from "../theme/sharedStyles"
import Parallax from "../components/Parallax"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& > *": {
                margin: theme.spacing(1),
            },
        },
        button: {
            margin: theme.spacing(1),
        },
        container: {
            paddingRight: "15px",
            paddingLeft: "15px",
            marginRight: "auto",
            marginLeft: "auto",
            width: "100%",
            "@media (min-width: 576px)": {
                maxWidth: "540px",
            },
            "@media (min-width: 768px)": {
                maxWidth: "720px",
            },
            "@media (min-width: 992px)": {
                maxWidth: "960px",
            },
            "@media (min-width: 1200px)": {
                maxWidth: "1140px",
            },
        },
        brand: {
            color: "#FFFFFF",
            textAlign: "left",
        },
        title: {
            fontSize: "4.2rem",
            fontWeight: 600,
            display: "inline-block",
            position: "relative",
            color: "rgba(255,255,255,0.9)",
        },
        subtitle: {
            fontSize: "1.313rem",
            maxWidth: "510px",
            margin: "10px 0 0",
            fontWeight: "normal", //ik
            color: "rgba(255,255,255,0.8)",
        },
    })
)

export default function IndexPage() {
    const { t, lang } = useTranslation("common")
    const classes = useStyles()

    return (
        <MainLayout backgroundIsDark>
            <Parallax image={"/bg_blue.jpg"}>
                <div className={classes.container}>
                    <div className={classes.brand}>
                        <Typography
                            variant="h3"
                            component="h1"
                            className={classes.title}
                        >
                            NextJS & <br />
                            Material&nbsp;UI
                        </Typography>
                        <h3 className={classes.subtitle}>
                            Реактивные сайты на NextJS и Material-UI.
                        </h3>
                    </div>
                </div>
            </Parallax>
            <Container
                maxWidth={siteContainerWidth}
                style={{
                    marginTop: "-120px",
                    background: "#FFFFFF",
                    position: "relative",
                    zIndex: 0,
                    borderRadius: "6px",
                    boxShadow:
                        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
                }}
            >
                <Box my={4}>
                    <Head>
                        <title>Koptef | Всегда...</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <main>
                        <Typography variant="h6" component="h1" gutterBottom>
                            {t("frontPage-heading")}
                        </Typography>
                        <Typography
                            variant="h2"
                            component="h2"
                            align="center"
                            paragraph
                        >
                            Heading 1
                        </Typography>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Iure, perspiciatis! Cum ut voluptate quae quas
                            aperiam ipsa facilis ipsum soluta temporibus?
                            Repellendus quisquam soluta, vitae voluptatibus
                            rerum exercitationem illum dolorum delectus natus.
                            Incidunt quae itaque beatae recusandae harum,
                            provident nam quasi asperiores! Porro qui dicta, cum
                            sed voluptas consectetur quidem hic expedita,
                            distinctio, dolores aut aliquam assumenda? Totam
                            ratione voluptatibus perspiciatis, eius consequatur
                            facilis odit dicta ipsam consectetur quidem
                            voluptatum neque nihil incidunt architecto
                            voluptatem adipisci quisquam sequi, eum illo quod
                            accusamus aut aliquam expedita! Eaque excepturi quam
                            minima odio fuga aliquid, itaque maxime? Distinctio
                            est facere esse voluptatem cum.
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Iure, perspiciatis! Cum ut voluptate quae quas
                            aperiam ipsa facilis ipsum soluta temporibus?
                            Repellendus quisquam soluta, vitae voluptatibus
                            rerum exercitationem illum dolorum delectus natus.
                            Incidunt quae itaque beatae recusandae harum,
                            provident nam quasi asperiores! Porro qui dicta, cum
                            sed voluptas consectetur quidem hic expedita,
                            distinctio, dolores aut aliquam assumenda? Totam
                            ratione voluptatibus perspiciatis, eius consequatur
                            facilis odit dicta ipsam consectetur quidem
                            voluptatum neque nihil incidunt architecto
                            voluptatem adipisci quisquam sequi, eum illo quod
                            accusamus aut aliquam expedita! Eaque excepturi quam
                            minima odio fuga aliquid, itaque maxime? Distinctio
                            est facere esse voluptatem cum.
                        </p>{" "}
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Iure, perspiciatis! Cum ut voluptate quae quas
                            aperiam ipsa facilis ipsum soluta temporibus?
                            Repellendus quisquam soluta, vitae voluptatibus
                            rerum exercitationem illum dolorum delectus natus.
                            Incidunt quae itaque beatae recusandae harum,
                            provident nam quasi asperiores! Porro qui dicta, cum
                            sed voluptas consectetur quidem hic expedita,
                            distinctio, dolores aut aliquam assumenda? Totam
                            ratione voluptatibus perspiciatis, eius consequatur
                            facilis odit dicta ipsam consectetur quidem
                            voluptatum neque nihil incidunt architecto
                            voluptatem adipisci quisquam sequi, eum illo quod
                            accusamus aut aliquam expedita! Eaque excepturi quam
                            minima odio fuga aliquid, itaque maxime? Distinctio
                            est facere esse voluptatem cum.
                        </p>{" "}
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Iure, perspiciatis! Cum ut voluptate quae quas
                            aperiam ipsa facilis ipsum soluta temporibus?
                            Repellendus quisquam soluta, vitae voluptatibus
                            rerum exercitationem illum dolorum delectus natus.
                            Incidunt quae itaque beatae recusandae harum,
                            provident nam quasi asperiores! Porro qui dicta, cum
                            sed voluptas consectetur quidem hic expedita,
                            distinctio, dolores aut aliquam assumenda? Totam
                            ratione voluptatibus perspiciatis, eius consequatur
                            facilis odit dicta ipsam consectetur quidem
                            voluptatum neque nihil incidunt architecto
                            voluptatem adipisci quisquam sequi, eum illo quod
                            accusamus aut aliquam expedita! Eaque excepturi quam
                            minima odio fuga aliquid, itaque maxime? Distinctio
                            est facere esse voluptatem cum.
                        </p>
                        <Typography variant="h2" align="center" paragraph>
                            Heading 2
                        </Typography>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Iure, perspiciatis! Cum ut voluptate quae quas
                            aperiam ipsa facilis ipsum soluta temporibus?
                            Repellendus quisquam soluta, vitae voluptatibus
                            rerum exercitationem illum dolorum delectus natus.
                            Incidunt quae itaque beatae recusandae harum,
                            provident nam quasi asperiores! Porro qui dicta, cum
                            sed voluptas consectetur quidem hic expedita,
                            distinctio, dolores aut aliquam assumenda? Totam
                            ratione voluptatibus perspiciatis, eius consequatur
                            facilis odit dicta ipsam consectetur quidem
                            voluptatum neque nihil incidunt architecto
                            voluptatem adipisci quisquam sequi, eum illo quod
                            accusamus aut aliquam expedita! Eaque excepturi quam
                            minima odio fuga aliquid, itaque maxime? Distinctio
                            est facere esse voluptatem cum.
                        </p>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Iure, perspiciatis! Cum ut voluptate quae quas
                            aperiam ipsa facilis ipsum soluta temporibus?
                            Repellendus quisquam soluta, vitae voluptatibus
                            rerum exercitationem illum dolorum delectus natus.
                            Incidunt quae itaque beatae recusandae harum,
                            provident nam quasi asperiores! Porro qui dicta, cum
                            sed voluptas consectetur quidem hic expedita,
                            distinctio, dolores aut aliquam assumenda? Totam
                            ratione voluptatibus perspiciatis, eius consequatur
                            facilis odit dicta ipsam consectetur quidem
                            voluptatum neque nihil incidunt architecto
                            voluptatem adipisci quisquam sequi, eum illo quod
                            accusamus aut aliquam expedita! Eaque excepturi quam
                            minima odio fuga aliquid, itaque maxime? Distinctio
                            est facere esse voluptatem cum.
                        </p>{" "}
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Iure, perspiciatis! Cum ut voluptate quae quas
                            aperiam ipsa facilis ipsum soluta temporibus?
                            Repellendus quisquam soluta, vitae voluptatibus
                            rerum exercitationem illum dolorum delectus natus.
                            Incidunt quae itaque beatae recusandae harum,
                            provident nam quasi asperiores! Porro qui dicta, cum
                            sed voluptas consectetur quidem hic expedita,
                            distinctio, dolores aut aliquam assumenda? Totam
                            ratione voluptatibus perspiciatis, eius consequatur
                            facilis odit dicta ipsam consectetur quidem
                            voluptatum neque nihil incidunt architecto
                            voluptatem adipisci quisquam sequi, eum illo quod
                            accusamus aut aliquam expedita! Eaque excepturi quam
                            minima odio fuga aliquid, itaque maxime? Distinctio
                            est facere esse voluptatem cum.
                        </p>{" "}
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Iure, perspiciatis! Cum ut voluptate quae quas
                            aperiam ipsa facilis ipsum soluta temporibus?
                            Repellendus quisquam soluta, vitae voluptatibus
                            rerum exercitationem illum dolorum delectus natus.
                            Incidunt quae itaque beatae recusandae harum,
                            provident nam quasi asperiores! Porro qui dicta, cum
                            sed voluptas consectetur quidem hic expedita,
                            distinctio, dolores aut aliquam assumenda? Totam
                            ratione voluptatibus perspiciatis, eius consequatur
                            facilis odit dicta ipsam consectetur quidem
                            voluptatum neque nihil incidunt architecto
                            voluptatem adipisci quisquam sequi, eum illo quod
                            accusamus aut aliquam expedita! Eaque excepturi quam
                            minima odio fuga aliquid, itaque maxime? Distinctio
                            est facere esse voluptatem cum.
                        </p>
                    </main>
                </Box>
            </Container>
        </MainLayout>
    )
}

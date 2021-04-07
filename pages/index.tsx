import Link from "next/link"
import Head from "next/head"

import useTranslation from "next-translate/useTranslation"

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"

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
    })
)

export default function IndexPage() {
    const { t, lang } = useTranslation("common")
    const classes = useStyles()

    return (
        <Container maxWidth="md">
            <Box my={4}>
                <Head>
                    <title>Koptef | Всегда...</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main>
                    <Typography variant="h3" component="h1" gutterBottom>
                        {t("title")}
                    </Typography>
                    <Typography variant="h3" component="h1" gutterBottom>
                        Да пребудет с вами сила...
                    </Typography>
                    <Typography variant="h4">Какую выберешь?</Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                    >
                        Синяя
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                    >
                        Красная
                    </Button>
                </main>
            </Box>
        </Container>
    )
}

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            backgroundColor: "inherit",
            // textAlign: "center",
            color: "#eee",
            boxShadow: "none",
        },
        header: {
            color: "#eee",
        },
    })
)

const Footer = () => {
    const classes = useStyles()
    return (
        <div
            style={{
                // height: "300px",
                backgroundColor: "#333",
                color: "#eee",
            }}
            className={classes.root}
        >
            <Container maxWidth={"lg"} component="footer">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper className={classes.paper}>
                            <Typography
                                variant="h6"
                                align="center"
                                gutterBottom
                                className={classes.header}
                            >
                                Header
                            </Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Autem voluptate aspernatur nam earum quaerat
                            qui voluptatem quisquam magni et rem voluptatibus
                            nisi molestias enim beatae odit at modi ea corporis
                            repellat numquam accusantium, itaque iusto. Odit
                            omnis quam unde maxime dolore rerum autem veniam in?
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper className={classes.paper}>
                            <Typography
                                variant="h6"
                                align="center"
                                gutterBottom
                                className={classes.header}
                            >
                                Header
                            </Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Autem voluptate at modi ea corporis repellat
                            numquam accusantium, itaque iusto. Odit omnis quam
                            unde maxime dolore rerum autem veniam in, numquam
                            nulla cupiditate illum minima?
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper className={classes.paper}>
                            <Typography
                                variant="h6"
                                align="center"
                                gutterBottom
                                className={classes.header}
                            >
                                Header
                            </Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Autem voluptate aspernatur nam earum quaerat
                            qui voluptatem quisquam magni et rem voluptatibus
                            nisi molestias enim beatae odit at modi ea corporis
                            repellat numquam accusantium, itaque iusto. Odit
                            omnis quam unde maxime dolore rerum .
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper className={classes.paper}>
                            <Typography
                                variant="h6"
                                align="center"
                                gutterBottom
                                className={classes.header}
                            >
                                Header
                            </Typography>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Autem voluptate aspernatur nam earum quaerat
                            qui voluptatem quisquam magni et rem voluptatibus
                            nisi molestias enim beatae odit at modi ea corporis
                            repellat numquam accusantium, itaque iusto. Odit
                            omnis quam unde maxime dolore rerum autem veniam in,
                            numquam nulla cupiditate illum minima?
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Footer

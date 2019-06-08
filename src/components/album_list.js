import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import axios from 'axios';


function MadeWithLove() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Built with love by the '}
            <Link color="inherit" href="https://material-ui.com/">
                Material-UI
            </Link>
            {' team.'}
        </Typography>
    );
}
const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

function getAlbums() {
    axios.get(`https://my.api.mockaroo.com/album.json?key=0d16dbe0`)
        .then(res => {
            console.log(res);
            return res.data;
        });
}


// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const cards = [
//     { "albumTitle": "Inverse client-server encoding", "artist": "posuere nonummy integer", "releaseYear": "1900", "genre": "R&B", "digitized": false, "linerNotes": "Secured system-worthy throughput", "thumbnail": "http://dummyimage.com/150x150.jpg/5fa2dd/ffffff", "detailImage": "http://dummyimage.com/300x300.jpg/cc0000/ffffff", "tracks": [ { "id": 1, "title": "etiam justo etiam pretium iaculis justo", "length": "1746" }, { "id": 2, "title": "a libero nam dui proin leo odio porttitor id", "length": "8076" }, { "id": 3, "title": "mauris viverra diam vitae", "length": "7519" }, { "id": 4, "title": "suscipit a feugiat et eros", "length": "4366" } ], "musicians": [ { "id": 1, "name": "Nicoline Le Grove", "instrument": "Cello" }, { "id": 2, "name": "Judah Gabbatiss", "instrument": "Trombone" }, { "id": 3, "name": "Margaretha Growy", "instrument": "Electric Bass" }, { "id": 4, "name": "Evaleen McGloin", "instrument": "Viola" }, { "id": 5, "name": "Stanislas Redholes", "instrument": "Lead Guitar" }, { "id": 6, "name": "Sheffie Traves", "instrument": "Saxophone" }, { "id": 7, "name": "Benson Grafom", "instrument": "Upright Bass" }, { "id": 8, "name": "Fredek Cosker", "instrument": "Saxophone" }, { "id": 9, "name": "Aimee Hamlyn", "instrument": "Upright Bass" } ], "dateEntered": "2018-04-10T07:34:06Z" }, { "albumTitle": "Front-line asymmetric interface", "artist": "magnis dis", "releaseYear": "1929", "genre": "Alternative", "digitized": true, "linerNotes": "De-engineered composite hierarchy", "thumbnail": "http://dummyimage.com/150x150.jpg/ff4444/ffffff", "detailImage": "http://dummyimage.com/300x300.jpg/5fa2dd/ffffff", "tracks": [ { "id": 1, "title": "ipsum integer a nibh in quis justo maecenas rhoncus aliquam", "length": "0267" }, { "id": 2, "title": "in est risus auctor sed tristique in tempus sit", "length": "8878" }, { "id": 3, "title": "eu mi nulla ac enim in tempor turpis nec", "length": "5004" }, { "id": 4, "title": "ultrices posuere cubilia curae mauris", "length": "3532" }, { "id": 5, "title": "duis bibendum morbi non quam nec dui", "length": "4666" }, { "id": 6, "title": "sit amet erat nulla tempus", "length": "1493" }, { "id": 7, "title": "justo in blandit ultrices enim", "length": "3117" }, { "id": 8, "title": "vestibulum sed magna at nunc commodo placerat", "length": "7371" }, { "id": 9, "title": "magna at nunc commodo placerat", "length": "6560" }, { "id": 10, "title": "pede posuere nonummy integer non", "length": "8228" }, { "id": 11, "title": "orci luctus et ultrices posuere cubilia curae mauris viverra", "length": "0534" }, { "id": 12, "title": "aenean sit amet justo morbi ut", "length": "3257" }, { "id": 13, "title": "vulputate elementum nullam varius nulla facilisi", "length": "0934" }, { "id": 14, "title": "velit vivamus vel nulla eget eros elementum pellentesque", "length": "0806" } ], "musicians": [ { "id": 1, "name": "Aurora Torald", "instrument": "Rhythm Guitar" }, { "id": 2, "name": "Rossie Ambrozewicz", "instrument": "Lead Vocal" }, { "id": 3, "name": "Shannon Domsalla", "instrument": "Percussion" }, { "id": 4, "name": "Wenonah Dugan", "instrument": "Drums" }, { "id": 5, "name": "Zoe Mayho", "instrument": "Trumpet" } ], "dateEntered": "2018-10-02T16:14:00Z" }, { "albumTitle": "Ameliorated 3rd generation task-force", "artist": "lobortis sapien", "releaseYear": "1922", "genre": "Grunge", "digitized": false, "linerNotes": "Optimized client-server concept", "thumbnail": "http://dummyimage.com/150x150.jpg/cc0000/ffffff", "detailImage": "http://dummyimage.com/300x300.jpg/dddddd/000000", "tracks": [ { "id": 1, "title": "nulla elit ac nulla sed vel enim sit amet", "length": "9034" }, { "id": 2, "title": "non pretium quis lectus suspendisse potenti in eleifend quam a", "length": "2084" }, { "id": 3, "title": "mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor", "length": "3622" }, { "id": 4, "title": "neque duis bibendum morbi non quam nec dui luctus rutrum", "length": "5520" }, { "id": 5, "title": "sapien arcu sed augue aliquam erat", "length": "7768" }, { "id": 6, "title": "quis justo maecenas rhoncus aliquam lacus morbi quis tortor", "length": "0512" }, { "id": 7, "title": "orci vehicula condimentum curabitur in libero ut massa volutpat", "length": "9528" }, { "id": 8, "title": "cubilia curae mauris viverra diam vitae", "length": "8570" }, { "id": 9, "title": "lorem ipsum dolor sit amet consectetuer", "length": "8823" }, { "id": 10, "title": "nisl duis ac nibh", "length": "5532" }, { "id": 11, "title": "non ligula pellentesque ultrices phasellus id sapien in sapien iaculis", "length": "5852" }, { "id": 12, "title": "quisque arcu libero rutrum", "length": "3291" }, { "id": 13, "title": "eleifend luctus ultricies eu", "length": "7260" } ], "musicians": [ { "id": 1, "name": "Filbert Vaissiere", "instrument": "Upright Bass" }, { "id": 2, "name": "Ash Greenroad", "instrument": "Trumpet" }, { "id": 3, "name": "Joete Gain", "instrument": "Trumpet" }, { "id": 4, "name": "Burlie Flux", "instrument": "Background Vocal" }, { "id": 5, "name": "Yvonne McClymont", "instrument": "Viola" }, { "id": 6, "name": "Dougy Dalyell", "instrument": "Violin" }, { "id": 7, "name": "Booth Renon", "instrument": "Lead Vocal" }, { "id": 8, "name": "Catherina Sproule", "instrument": "Electric Bass" } ], "dateEntered": "2018-03-04T08:22:53Z" }, { "albumTitle": "User-friendly composite matrices", "artist": "porta volutpat", "releaseYear": "1967", "genre": "Contemporary Jazz", "digitized": false, "linerNotes": "De-engineered scalable firmware", "thumbnail": "http://dummyimage.com/150x150.jpg/5fa2dd/ffffff", "detailImage": "http://dummyimage.com/300x300.jpg/5fa2dd/ffffff", "tracks": [ { "id": 1, "title": "ipsum dolor sit amet consectetuer adipiscing", "length": "0521" }, { "id": 2, "title": "platea dictumst morbi vestibulum velit id pretium iaculis", "length": "7631" }, { "id": 3, "title": "nisl venenatis lacinia aenean sit amet justo morbi ut", "length": "9208" }, { "id": 4, "title": "vestibulum proin eu mi nulla ac enim in tempor", "length": "0654" } ], "musicians": [ { "id": 1, "name": "Olvan Applewhite", "instrument": "Upright Bass" } ], "dateEntered": "2018-11-14T08:37:18Z" }, { "albumTitle": "Operative encompassing toolset", "artist": "rutrum nulla nunc purus", "releaseYear": "1989", "genre": "Jazz", "digitized": false, "linerNotes": "Configurable tangible methodology", "thumbnail": "http://dummyimage.com/150x150.jpg/dddddd/000000", "detailImage": "http://dummyimage.com/300x300.jpg/5fa2dd/ffffff", "tracks": [ { "id": 1, "title": "morbi non quam nec dui luctus rutrum", "length": "8670" }, { "id": 2, "title": "lobortis est phasellus sit amet erat", "length": "4409" }, { "id": 3, "title": "id consequat in consequat ut", "length": "7740" }, { "id": 4, "title": "consequat dui nec nisi volutpat eleifend donec ut dolor", "length": "6631" }, { "id": 5, "title": "vestibulum aliquet ultrices erat tortor sollicitudin mi sit", "length": "2557" }, { "id": 6, "title": "magnis dis parturient montes nascetur ridiculus", "length": "2606" }, { "id": 7, "title": "ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris", "length": "2767" }, { "id": 8, "title": "mauris morbi non lectus aliquam sit", "length": "8324" }, { "id": 9, "title": "eget eleifend luctus ultricies eu nibh quisque", "length": "7708" }, { "id": 10, "title": "eget rutrum at lorem integer tincidunt ante vel ipsum", "length": "1587" } ], "musicians": [ { "id": 1, "name": "Catrina Gilardengo", "instrument": "Trumpet" }, { "id": 2, "name": "Connie Lemonnier", "instrument": "Flute" }, { "id": 3, "name": "Andee Gillibrand", "instrument": "Rhythm Guitar" } ], "dateEntered": "2018-03-11T08:12:36Z" }, { "albumTitle": "Devolved solution-oriented info-mediaries", "artist": "orci vehicula", "releaseYear": "1912", "genre": "New Age", "digitized": true, "linerNotes": "Right-sized global customer loyalty", "thumbnail": "http://dummyimage.com/150x150.jpg/5fa2dd/ffffff", "detailImage": "http://dummyimage.com/300x300.jpg/ff4444/ffffff", "tracks": [ { "id": 1, "title": "amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam", "length": "1755" }, { "id": 2, "title": "interdum mauris ullamcorper purus sit", "length": "1606" }, { "id": 3, "title": "phasellus id sapien in", "length": "8880" }, { "id": 4, "title": "suspendisse ornare consequat lectus in est risus auctor sed", "length": "3562" }, { "id": 5, "title": "commodo placerat praesent blandit", "length": "6326" }, { "id": 6, "title": "diam in magna bibendum imperdiet nullam", "length": "7895" }, { "id": 7, "title": "integer ac leo pellentesque", "length": "8072" }, { "id": 8, "title": "felis eu sapien cursus vestibulum proin eu mi nulla ac", "length": "9773" } ], "musicians": [ { "id": 1, "name": "Franklin Tomowicz", "instrument": "Percussion" }, { "id": 2, "name": "Rochette Courtois", "instrument": "Rhythm Guitar" }, { "id": 3, "name": "Tessa Wallworth", "instrument": "Rhythm Guitar" }, { "id": 4, "name": "Harwilll Maylor", "instrument": "Viola" }, { "id": 5, "name": "Mortimer Creenan", "instrument": "Violin" }, { "id": 6, "name": "Joe Lembke", "instrument": "Lead Guitar" } ], "dateEntered": "2018-03-30T21:28:56Z" }, { "albumTitle": "Inverse zero administration internet solution", "artist": "suscipit ligula in lacus curabitur", "releaseYear": "1955", "genre": "New Age", "digitized": false, "linerNotes": "Distributed full-range capability", "thumbnail": "http://dummyimage.com/150x150.jpg/cc0000/ffffff", "detailImage": "http://dummyimage.com/300x300.jpg/dddddd/000000", "tracks": [ { "id": 1, "title": "et tempus semper est quam", "length": "8423" }, { "id": 2, "title": "quam pede lobortis ligula", "length": "8492" } ], "musicians": [ { "id": 1, "name": "Gae Webermann", "instrument": "Cello" }, { "id": 2, "name": "Jenifer Menel", "instrument": "Lead Guitar" }, { "id": 3, "name": "Griffy Gudge", "instrument": "Keyboards" }, { "id": 4, "name": "Salomo Spreckley", "instrument": "Viola" }, { "id": 5, "name": "Marja Kitchingman", "instrument": "Background Vocal" }, { "id": 6, "name": "Vanya Wykey", "instrument": "Keyboards" }, { "id": 7, "name": "Alena Puig", "instrument": "Upright Bass" }, { "id": 8, "name": "Bruno Batrim", "instrument": "Flute" }, { "id": 9, "name": "Falkner Georghiou", "instrument": "Percussion" }, { "id": 10, "name": "Haily Ravelus", "instrument": "Violin" } ], "dateEntered": "2018-10-14T05:32:02Z" }, { "albumTitle": "Expanded well-modulated core", "artist": "morbi vel", "releaseYear": "1925", "genre": "R&B", "digitized": false, "linerNotes": "Multi-layered responsive task-force", "thumbnail": "http://dummyimage.com/150x150.jpg/cc0000/ffffff", "detailImage": "http://dummyimage.com/300x300.jpg/dddddd/000000", "tracks": [ { "id": 1, "title": "sit amet justo morbi ut odio cras", "length": "4851" }, { "id": 2, "title": "nibh in quis justo maecenas rhoncus aliquam lacus morbi", "length": "2988" }, { "id": 3, "title": "sapien a libero nam dui proin", "length": "9799" }, { "id": 4, "title": "ut dolor morbi vel lectus in quam fringilla rhoncus mauris", "length": "5929" }, { "id": 5, "title": "adipiscing elit proin risus praesent lectus vestibulum quam sapien", "length": "1331" } ], "musicians": [ { "id": 1, "name": "Terrye Clooney", "instrument": "Trumpet" } ], "dateEntered": "2019-01-07T17:42:21Z" }, { "albumTitle": "Polarised incremental analyzer", "artist": "blandit ultrices enim", "releaseYear": "1964", "genre": "Rock", "digitized": true, "linerNotes": "User-friendly stable archive", "thumbnail": "http://dummyimage.com/150x150.jpg/dddddd/000000", "detailImage": "http://dummyimage.com/300x300.jpg/ff4444/ffffff", "tracks": [ { "id": 1, "title": "et magnis dis parturient montes nascetur ridiculus mus", "length": "9276" }, { "id": 2, "title": "vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis", "length": "5294" }, { "id": 3, "title": "lorem ipsum dolor sit amet consectetuer adipiscing elit proin", "length": "9972" }, { "id": 4, "title": "tincidunt eget tempus vel pede", "length": "4140" }, { "id": 5, "title": "sollicitudin mi sit amet lobortis sapien sapien non", "length": "6494" }, { "id": 6, "title": "penatibus et magnis dis parturient montes", "length": "9746" }, { "id": 7, "title": "suspendisse potenti cras in purus eu", "length": "8932" }, { "id": 8, "title": "vivamus metus arcu adipiscing molestie hendrerit", "length": "1412" }, { "id": 9, "title": "placerat ante nulla justo aliquam quis turpis eget elit", "length": "4296" } ], "musicians": [ { "id": 1, "name": "Patrizio Lorrain", "instrument": "Keyboards" }, { "id": 2, "name": "Town Normand", "instrument": "Flute" }, { "id": 3, "name": "Ivett Gaylard", "instrument": "Percussion" }, { "id": 4, "name": "Thaine Sertin", "instrument": "Lead Vocal" }, { "id": 5, "name": "Marlo Horbart", "instrument": "Flute" }, { "id": 6, "name": "Even Dietmar", "instrument": "Drums" }, { "id": 7, "name": "Curcio Elstub", "instrument": "Saxophone" }, { "id": 8, "name": "Barnabas Glossup", "instrument": "Saxophone" }, { "id": 9, "name": "Filberte Farrey", "instrument": "Trumpet" } ], "dateEntered": "2018-10-31T17:23:36Z" }
// ]
// const cards = getAlbums();

export default function Album() {
    const classes = useStyles();
    const [cards, setCards] = useState(
        axios.get(`https://my.api.mockaroo.com/album.json?key=0d16dbe0`)
        .then(res => {
            console.log(res);
            return setCards(res.data);
        })
            .catch((err) => {
                console.log(err);
            })
);

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <CameraIcon className={classes.icon} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Album layout
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Album List
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Welcome to the list of Simuel Studios Vinyl. I am digitizing all of my
                            vinyl albums and offering them here for sale. Genre range is all over
                            the spectrum from country to jazz. Take a peek and see if you find anything
                            interesting.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Main call to action
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map(card => (
                            <Grid item key={card.albumTitle} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={card.thumbnail}
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.albumTitle}
                                        </Typography>
                                        <Typography>
                                            Artist: {card.artist}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
                </Typography>
                <MadeWithLove />
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}
import React from "react";
import { Typography, AppBar, Card, CardActions, CardContent, Button, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";
import  PhotoCameraIcon  from "@mui/icons-material/PhotoCamera";
import { Padding } from "@mui/icons-material";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const App = () => {
    
    return(
        <>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
                <PhotoCameraIcon style={{marginRight: '20px'}}/>
                    <Typography variant="h6">
                        Photo Album 
                    </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div style={{backgroundColor: 'lightgrey'}}>
            <Container maxWidth="sm" style={{marginTop: '100px'}}>
                    <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                        Photo Album
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur iste libero voluptates odio cupiditate quaerat eveniet est rem nobis molestiae quae iure sint inventore, ratione voluptate quam ea magnam vero ex possimus non. Expedita?
                    </Typography>
                    <div>
                        <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                            <Button variant="contained" color="primary" style={{marginTop: '40px'}}>
                                see my photos
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary" style={{marginTop: '40px'}}>
                                Secondary action 
                            </Button>
                        </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <Container maxWidth="md"style={{padding: '20px 0'}}>
                <Grid container spacing={4}>
                    {cards.map((card)=>{
                        return(
                         <Grid item key={card} xs={12} sm={6} md={4}>
                         <Card style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
                             <CardMedia style={{paddingTop: '56.25%'}}
                             image="https://source.unsplash.com/random" 
                             title="Image title"
                             />
                             <CardContent style={{flexGrow: 1}}>
                                 <Typography gutterBottom variant="h5">
                                     Heading
                                 </Typography>
                                 <Typography>
                                     This is a media card. You can use this section to describe the content.
                                 </Typography>
                             </CardContent>
                             <CardActions>
                                 <Button size="small" color="primary">View</Button>
                                 <Button size="small" color="primary">Edit</Button>
                             </CardActions>
                         </Card>
                     </Grid>)
                    })}
                </Grid>
            </Container>
        </main>
        <footer style={{backgroundColor: 'greenyellow',
    padding: '50px 0'}}>
        <Typography variant="h6" align="center" gutterBottom>
            Footer
        </Typography>
        <Padding></Padding>
        <Typography variant="subtittle1" align="center" color='textSecondary'style={{display: "center"}}>
            someting to type here in the footer.
        </Typography>
        </footer>
        </>
    )
}

export default App;
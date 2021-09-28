import app from './app.js';
import {PlayerInfo} from '../app/Entities/PlayerInfo.js'

const port = 3000;
app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port}`);
});

const player = new PlayerInfo('Edek')
console.log(player.nameGenerator());


  


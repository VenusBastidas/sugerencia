//~ Declaración de función iife Reproductor

const player = (
    ()=>{
        const privatePlayer = (url, id)=>{
            const destino = document.getElementById(id);
            destino.setAttribute('src', url);
        };
        return {
            publicPlayer: (url, id) => {
                privatePlayer(url, id);
            }
        };
    }
)(); 


// ~ Declaración de clases
class Multimedia{
    constructor (url){
        const _url = url;     //~ closure para proteger atributos
        this.getUrl = ()=> _url;  
    };

    get url(){
        return this.getUrl();
    };

    setInicio(){
        return 'Este método es para realizar un cambio en la URL del video';
    };
    
};

class Reproductor extends Multimedia{
    constructor (url, id){
        super(url)
        this._id = id
    };
    
    /*get id(){
        return this._id
    };
    
    set id (new_id){
        return this._id = new_id
    };*/
    
    playMultimedia(){
        player.publicPlayer(this.url, this._id);
    };

    setInicio(inicio){
        player.publicPlayer(`${this.url}?start=${inicio}`, this._id)
    };
};

const musica =  new Reproductor('https://www.youtube.com/embed/uKqI0FWb1Rw', 'musica');
const peliculas =  new Reproductor('https://www.youtube.com/embed/TcPk2p0Zaw4', 'peliculas');
const series =  new Reproductor('https://www.youtube.com/embed/YtJ9uwqY1M4', 'series');

musica.playMultimedia();
peliculas.playMultimedia();
series.playMultimedia();

musica.setInicio('45');




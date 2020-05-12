// class for youtub 
class YoutubHomePage {
    constructor(public Home:string  , public Subscription:Array<string>, public trending:string, public  History:string, public YourVideo?:string,public LikeVido?:Array<string> ){
        this.Home=Home;
        this.Subscription=Subscription;
        this.trending=trending;
        this.History=History;
        this.YourVideo=YourVideo  //options
        this.LikeVido=LikeVido // options
    }
}
//myhome page wthiout my channel && no like any videpo 
let MyHomePage1 = new YoutubHomePage("allVideo",["channel1","channel2","channel3","channel4","channel5" ],"MostWatchVideoOnYouTube","LastWatchVideo")
console.log(MyHomePage1.Home);
console.log(MyHomePage1.Subscription);
console.log(MyHomePage1.trending);
console.log(MyHomePage1.History);

//myhome page wthiout my channel && like video 
let MyHomePage2 = new YoutubHomePage("AllVideo",["channel1","channel2","channel3","channel4","channel5"],"MostWatchVideoOnYouTube","LastWatchVideo","NameOfChannel" ,["Likevideo1","Likevideo2","Likevideo3","Likevideo4"])
console.log(MyHomePage2.Home);
console.log(MyHomePage2.Subscription);
console.log(MyHomePage2.trending);
console.log(MyHomePage2.History);
console.log(MyHomePage2.YourVideo);
console.log(MyHomePage2.LikeVido);

// class Subscriptie  channelOne extede 
class channelOne  extends YoutubHomePage {
    constructor(public ChannelNmae:string , public UploadVideo:Array<string> ,public subscribers:string , public PlayList:string){
        super(ChannelNmae,UploadVideo,subscribers,PlayList);
    
  }
}

let Channel = new channelOne ("xyzNmae",["video1","vidoe2","..."],"16000","PlayListNmae")
console.log(Channel.ChannelNmae);
console.log(Channel.UploadVideo);
console.log(Channel.subscribers);
console.log(Channel.PlayList);

//my cerated channel 
class Mychannel {
    constructor(private MychanellName:string, public Myupload1:Array<string> ){
        this.MychanellName=MychanellName;
        this.Myupload1=Myupload1;
    }
    SetNmae = (name:string)=>{
        this.MychanellName=name;

    }
    GetNmae = () =>{
    return this.MychanellName;
    }
}

// social is my channel name
let social = new Mychannel("social",["vide1","video2"]);
console.log(social.Myupload1);
social.SetNmae("social1");
console.log(social.GetNmae());
 class MyuploadVideo extends Mychannel {
     constructor(public nameOfMychannel:string, public MyvideoComment:Array<string> , public Like:number){
         super(nameOfMychannel,MyvideoComment)
    }
 }
let MychanellDetalis = new MyuploadVideo ("social",["commet1","commet2","commet3","commet4","commet5"],12500)
console.log(MychanellDetalis.nameOfMychannel);
console.log(MychanellDetalis.MyvideoComment);
console.log(MychanellDetalis.Like);

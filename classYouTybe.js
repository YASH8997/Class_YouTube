var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class for youtub 
var YoutubHomePage = /** @class */ (function () {
    function YoutubHomePage(Home, Subscription, trending, History, YourVideo, LikeVido) {
        this.Home = Home;
        this.Subscription = Subscription;
        this.trending = trending;
        this.History = History;
        this.YourVideo = YourVideo;
        this.LikeVido = LikeVido;
        this.Home = Home;
        this.Subscription = Subscription;
        this.trending = trending;
        this.History = History;
        this.YourVideo = YourVideo; //options
        this.LikeVido = LikeVido; // options
    }
    return YoutubHomePage;
}());
//myhome page wthiout my channel && no like any videpo 
var MyHomePage1 = new YoutubHomePage("allVideo", ["channel1", "channel2", "channel3", "channel4", "channel5"], "MostWatchVideoOnYouTube", "LastWatchVideo");
console.log(MyHomePage1.Home);
console.log(MyHomePage1.Subscription);
console.log(MyHomePage1.trending);
console.log(MyHomePage1.History);
//myhome page wthiout my channel && like video 
var MyHomePage2 = new YoutubHomePage("AllVideo", ["channel1", "channel2", "channel3", "channel4", "channel5"], "MostWatchVideoOnYouTube", "LastWatchVideo", "NameOfChannel", ["Likevideo1", "Likevideo2", "Likevideo3", "Likevideo4"]);
console.log(MyHomePage2.Home);
console.log(MyHomePage2.Subscription);
console.log(MyHomePage2.trending);
console.log(MyHomePage2.History);
console.log(MyHomePage2.YourVideo);
console.log(MyHomePage2.LikeVido);
// class Subscriptie  channelOne extede 
var channelOne = /** @class */ (function (_super) {
    __extends(channelOne, _super);
    function channelOne(ChannelNmae, UploadVideo, subscribers, PlayList) {
        var _this = _super.call(this, ChannelNmae, UploadVideo, subscribers, PlayList) || this;
        _this.ChannelNmae = ChannelNmae;
        _this.UploadVideo = UploadVideo;
        _this.subscribers = subscribers;
        _this.PlayList = PlayList;
        return _this;
    }
    return channelOne;
}(YoutubHomePage));
var Channel = new channelOne("xyzNmae", ["video1", "vidoe2", "..."], "16000", "PlayListNmae");
console.log(Channel.ChannelNmae);
console.log(Channel.UploadVideo);
console.log(Channel.subscribers);
console.log(Channel.PlayList);
//my cerated channel 
var Mychannel = /** @class */ (function () {
    function Mychannel(MychanellName, Myupload1) {
        var _this = this;
        this.MychanellName = MychanellName;
        this.Myupload1 = Myupload1;
        this.SetNmae = function (name) {
            _this.MychanellName = name;
        };
        this.GetNmae = function () {
            return _this.MychanellName;
        };
        this.MychanellName = MychanellName;
        this.Myupload1 = Myupload1;
    }
    return Mychannel;
}());
// social is my channel name
var social = new Mychannel("social", ["vide1", "video2"]);
console.log(social.Myupload1);
social.SetNmae("social1");
console.log(social.GetNmae());
var MyuploadVideo = /** @class */ (function (_super) {
    __extends(MyuploadVideo, _super);
    function MyuploadVideo(nameOfMychannel, MyvideoComment, Like) {
        var _this = _super.call(this, nameOfMychannel, MyvideoComment) || this;
        _this.nameOfMychannel = nameOfMychannel;
        _this.MyvideoComment = MyvideoComment;
        _this.Like = Like;
        return _this;
    }
    return MyuploadVideo;
}(Mychannel));
var MychanellDetalis = new MyuploadVideo("social", ["commet1", "commet2", "commet3", "commet4", "commet5"], 12500);
console.log(MychanellDetalis.nameOfMychannel);
console.log(MychanellDetalis.MyvideoComment);
console.log(MychanellDetalis.Like);

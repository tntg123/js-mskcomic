var timeString=function(t){if(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(t)){var e=t,i=e.substring(0,4),n=e.substring(5,7),r=e.substring(8,10),o=new Array;return o[1]="Jan",o[2]="Feb",o[3]="Mar",o[4]="Apr",o[5]="May",o[6]="Jun",o[7]="Jul",o[8]="Aug",o[9]="Sep",o[10]="Oct",o[11]="Nov",o[12]="Dec",r+" "+o[parseInt(n,10)]+" "+i}
return!1},imageString=function(t){var e=t.indexOf("<img"),i=t.indexOf('src="',e),n=t.indexOf('"',i+5),r=t.substr(i+5,n-i-5);return-1!=e&&-1!=i&&-1!=n&&""!=r?r:"https://1.bp.blogspot.com/-BYDJ1dpFEhE/X9QnAUfeORI/AAAAAAAAHxw/OjfaqiPHjhAmCgJts39XIg7o4KR-8YtdACNcBGAsYHQ/w300-h225-p-k-no-nu/dagruel-no-image.png"},update={mainItemArr:new Array,subItemArr:new Array,compile:function(t){var e=t.feed.entry;if(!e)return!1;var i=document.getElementById("Update");if(!i)return!1;if(i.dataset.created="Dagruel",e.forEach(function({category:t,content:e,link:i,title:n,published:r,media$thumbnail:o}){var a=n.$t,s=t.map(function(t){return t.term}),u=i.find(function(t){if("alternate"===t.rel)return t}).href,c="function"==typeof timeAgo?timeAgo(new Date(r.$t)):timeString(r.$t),l=e.$t&&e.$t.length>0?e.$t:"Nothing",m=o?o.url.replace("s72","w175-h235"):imageString(l);s=s.filter(function(t){if("Project"!==t)return t}),update.mainItem.filter(function(t){s.join(", ").includes(t)&&update.mainItemArr.push({title:a,link:u,image:m,category:s})}),update.subItem.filter(function(t){s.join(", ").includes(t)&&update.subItemArr.push({titleSub:a,linkSub:u,publishedSub:c,categorySub:s})})}),update.mainItemArr.length>0){var n="";update.mainItemArr.forEach(function({title:t,link:e,image:i,category:r}){var o="";var lang="";var label=r.find(i=>"Hot, New".includes(i));if("Hot"==label){lang="<strong class='hot absolute r-5 t-3'></strong>"}else if("New"==label){lang="<strong class='new absolute r-5 t-3'></strong>"}else lang="";var typ="";var label2=r.find(i=>"Manga, Manhua, Manhwa, Light Novel".includes(i));if("Manga"==label2){typ="<span class='manga-post'>Manga</span>"}else if("Manhua"==label2){typ="<span class='manhua-post'>Manhua</span>"}else if("Manhwa"==label2){typ="<span class='manhwa-post'>Manhwa</span>"}else if("Light Novel"==label2){typ="<span class='lightnovel-post'>Light novel</span>"}else typ="";console.log(`${label} & ${lang}`);update.subItemArr.length>0&&update.subItemArr.forEach(function({titleSub:t,linkSub:e,publishedSub:i,categorySub:n}){var a=t;update.settingTitle.forEach(function({name:e,news:i}){a.includes(e)&&(a=i+" "+t.split(e)[1].replace(/[^0-9\.-]+/g,""))}),n.filter(function(n){r.join(", ").includes(n)&&(o+='<li class="char"><div class="chpName"><a href="'+e+'" title="'+t+'">'+a+'<span class="new-tag">new</span></a></div><time class="chpDate">'+i+"</time></li>")})}),n+='<div class="bookItem bb-1pxsf"><a href="'+e+'" title="'+t+'"><div class="snippet-thumbnail"><img class="lazyload" loading="lazy" data-src="'+i+'"/>'+lang+typ+'</div></a><div class="data"><div class="tieude" style="padding: 10px 0px 10px 0px"><a class="oh" style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical" href="'+e+'" title="'+t+'">'+t+'</a></div><ul class="subItem">'+o+"</ul></div></div></div>"}),i.innerHTML=n}},run:function(t,e){var i=document.createElement("script");i.src="/feeds/posts/default/-/"+t+"?orderby=published&alt=json-in-script&max-results="+e+"&callback=update.compile",document.body.appendChild(i)}};update.mainItem=['Series'];update.subItem=['Chapter'];update.settingTitle=[{name:'Chapter',news:'Chapter'},{name:'Volume',news:'Volume'}]
function getRandomInt(s,e){return Math.floor(Math.random()*(e-s+1))+s}function shuffleArray(s){var e,a,t=s.length;if(0===t)return!1;for(;--t;)e=Math.floor(Math.random()*(t+1)),a=s[t],s[t]=s[e],s[e]=a;return s}function postarea4(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array,postnum4<=e.feed.entry.length?maxpost=postnum5:maxpost=e.feed.entry.length,document.write('<div class="ct-wrapper"><div class="owl_carouselle owl-carousel">');for(var t=shuffleArray(e.feed.entry),i=0;i<maxpost;i++){for(var r,n=t[i],l=n.title.$t,o=[],c=0;c<1;c++)o='<div class="site-ret"><span class="fa fa-star" aria-hidden="true"><span>'+e.feed.entry[i].category[0].term+"</div>";for(p=[],sx=0;sx<n.category.length;sx++)if("Manga"==n.category[sx].term)var p='<span class="type-poss">Manga</span>';else"Manhua"==n.category[sx].term?p='<span class="type-poss">Manhua</span>':"Komik"==n.category[sx].term?p='<span class="type-poss">Komik</span>':"Manhwa"==n.category[sx].term?p='<span class="type-poss">Manhwa</span>':"Webtoon"==n.category[sx].term?p='<span class="type-poss">Webtoon</span>':"Light Novel"==n.category[sx].term&&(p='<span class="type-poss">Light novel</span>');for(m=[],stt=0;stt<n.category.length;stt++)if("Hoàn thành"==n.category[stt].term)var m='<span class="stts-poss">Tình trạng: Hoàn thành</span>';else"Đang tiến hành"==n.category[stt].term?m='<span class="stts-poss">Tình trạng: Đang tiến hành</span>':"Hiatus"==n.category[stt].term&&(m='<span class="stts-poss">Status: Hiatus</span>');for(var g="",f=0;f<n.category.length;f++)g+='<a class="label label-slider" href="/search/label/'+n.category[f].term+'">'+n.category[f].term+"</a>";if(i==e.feed.entry.length)break;for(var v=0;v<n.link.length;v++)if("alternate"==n.link[v].rel){r=n.link[v].href;break}for(v=0;v<n.link.length;v++)if("replies"==n.link[v].rel&&"text/html"==n.link[v].type){n.link[v].title.split(" ")[0];break}if("content"in n)var u=n.content.$t;else u="summary"in n?n.summary.$t:"";if((u=u.replace(/<\S[^>]*>/g,"")).length<200)break;var h=(u=u.substring(0,200)).lastIndexOf(" ");u=u.substring(0,h),postdate=n.published.$t,j>imgr.length-1&&(j=0),img[i]="",s=u,a=s.indexOf("<img"),b=s.indexOf('src="',a),x=s.indexOf('"',b+5),d=s.substr(b+5,x-b-5),-1!=a&&-1!=b&&-1!=x&&""!=d&&(img[i]=0==i?'<img min-width="620" min-height="240" class="odd-img owl-lazy lazyload" data-src="'+d+'"/>':'<img class="lazyload alignright" min-height="100" data-src="'+d+'" width="150"/>');for(var y=[1,2,3,4,5,6,7,8,9,10,11,12],k=["January","February","March","April","May","June","July","August","September","October","November","December"],w=(postdate.split("-")[2].substring(0,2),postdate.split("-")[1]),A=(postdate.split("-")[0],0);A<y.length;A++)if(parseInt(w)==y[A]){w=k[A];break}var x=n.content.$t,M=$(x).find("p").html();M="undefined"!=$(x).find("p").html()&&null!=$(x).find("p").html()?$(x).find("p").html():"undefined"!=$(x).find(".descManga").html()&&null!=$(x).find(".descManga").html()?$(x).find(".descManga").html():"Không có mô tả...";var S=(A=$("<div>").html(x)).find("img:first").attr("src"),z=e.feed.entry[i].media$thumbnail.url;if(-1!=z.indexOf("img.youtube.com")&&(z=e.feed.entry[i].media$thumbnail.url.replace("default","maxresdefault")),z=z.replace("/s72-c/","/s720/"),x="http://1.bp.blogspot.com/-S5pmP6Y0KUs/V6CsQEqKNGI/AAAAAAAAEFY/LZigJ20wKVkpzFLJSuzvjJDkC9z9IFy5wCK4B/s1600/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png",void 0===S)if(e.feed.entry[i].media$thumbnail)var I='<a href="'+r+'" class="slider-image" style="background:url('+z+') no-repeat center center;background-size: cover;width: 100%;height: 420px;display:block;image-rendering: -webkit-optimize-contrast;"/>';else I='<a href="'+r+'" class="noimg slider-image" style="background:url('+x+') no-repeat center center; display:block;"/>';else I='<a href="'+r+'" class="slider-image" style="background:url('+z+') no-repeat center center;background-size: cover; display:block;"/>';var C='<div class="slider-item"><div class="slider-wrapp"><div class="thumb overlay">'+I+'</div><div class="owl-controls"><div class="owl-page active"></div><div class="owl-page"></div><div class="owl-page"></div><div class="owl-page"></div></div><div class="covert">'+I+'</div><div class="post-descript"><div class="post-title"><div class="right-title"><div class="post-titlenya"><a href="'+r+'">'+l+'</a></div><div class="post-tag"><span style="color:white">Dạng truyện </span>'+p+'</div></div><div class="post-meta"><div class="post-tr">'+o+'</div></div></div><div class="post-genre"><div class="genre-slide">'+g+'</div></div><div class="post-sinop"> <strong>Nội dung</strong><p>'+M+'</p></div><div class="stats-poss">'+m+'</div></div><div class="clear"></div></div></div>';document.write(C),j++}document.write("</div></div>")}cat1="Featured",imgr=new Array,imgr[0]="http://3.bp.blogspot.com/-zP87C2q9yog/UVopoHY30SI/AAAAAAAAE5k/AIyPvrpGLn8/s1600/picture_not_available.png",showRandomImg=!0,aBold=!0,summaryPost=150,summaryTitle=50,postnum1=1,postnum4=8,postnum5=8,$(document).ready(function(){$(".owl_carouselle").owlCarousel({autoplay:!0,loop:!0,lazyLoad:!0,nav:!1,dots:!0,video:!0,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],smartSpeed:1200,responsiveClass:!0,responsive:{0:{items:1},600:{items:1},1000:{items:1}}})});
function timeAgo(o){var t=(new Date).getTime()-o.getTime(),e=Math.floor(t/1e3),r=Math.floor(e/60),a=Math.floor(r/60),g=Math.floor(a/24),h=Math.floor(g/30),n=Math.floor(h/12);return 0===t?"Vừa đăng lên":e<60?e+" giây trước":r<60?r+" phút trước":a<24?a+" giờ trước":g<30?g+" ngày trước":h<12?h+" tháng trước":n+" năm trước"}

var x,is_safari=-1!=navigator.userAgent.indexOf("Safari"),players=document.getElementsByClassName("tyfy-audio-player");for(x=0;x<players.length;x++){var player=players.item(x),player_audio=player.getElementsByTagName("audio").item(0);player_audio.load();var player_ui=document.createElement("form");player_ui.setAttribute("class","player-ui"),player_audio.classList.add("hidden"),player.appendChild(player_ui),player_audio.addEventListener("loadstart",(function(e){var t=document.createElement("span");t.setAttribute("class","loading"),t.innerText="Loading",this.parentElement.getElementsByClassName("player-ui").item(0).appendChild(t)})),player_audio.addEventListener("canplaythrough",(function(e){if(!this.classList.contains("ui-processed")){this.classList.add("ui-processed");var t=this,a=this.parentElement.getElementsByClassName("player-ui").item(0),s=document.createElement("span");s.setAttribute("class","duration"),s.innerText=FormatDuration(t.duration);var i=document.createElement("input");i.setAttribute("type","range"),i.setAttribute("class","timeline"),i.setAttribute("min","0"),i.setAttribute("max","1000"),i.setAttribute("step","1"),i.setAttribute("value","0");var n=document.createElement("span");n.setAttribute("class","current"),n.innerText=FormatDuration(t.currentTime);var r=document.createElement("button");if(r.setAttribute("class","play-pause paused"),r.innerText="Play / Pause",t.parentElement.getElementsByClassName("loading").item(0).remove(),a.appendChild(r),a.appendChild(n),a.appendChild(i),a.appendChild(s),r.addEventListener("click",(function(e){e.preventDefault(),t.paused?(t.play(),this.classList.add("playing"),this.classList.remove("paused")):(t.pause(),this.classList.add("paused"),this.classList.remove("playing"))})),i.addEventListener("input",(function(e){v=this.value,t.currentTime=v/1e3*t.duration})),!is_safari){var l=document.createElement("button");l.setAttribute("class","audio sound"),l.innerText="Sound / Mute";var u=document.createElement("input");u.setAttribute("type","range"),u.setAttribute("class","volume"),u.setAttribute("min","0"),u.setAttribute("max","100"),u.setAttribute("step","1"),u.setAttribute("value","100"),a.appendChild(l),a.appendChild(u),t.volume=1,u.addEventListener("input",(function(e){v=this.value,t.volume=v/100;var a=this.parentElement.getElementsByClassName("audio").item(0);v<.001&&a.classList.contains("sound")?(a.classList.add("muted"),a.classList.remove("sound")):v>.001&&a.classList.contains("muted")&&(a.classList.add("sound"),a.classList.remove("muted"))})),l.addEventListener("click",(function(e){e.preventDefault(),t.muted||0===t.volume?(t.volume=.5,this.classList.add("sound"),this.classList.remove("muted"),this.nextElementSibling.value=50):(t.volume=0,this.classList.add("muted"),this.classList.remove("sound"),this.nextElementSibling.value=0)}))}}})),player_audio.addEventListener("ended",(function(e){this.parentElement.getElementsByClassName("play-pause").item(0).classList.add("paused"),this.parentElement.getElementsByClassName("play-pause").item(0).classList.remove("playing")})),player_audio.addEventListener("timeupdate",(function(e){this.parentElement.getElementsByClassName("current").item(0).innerText=FormatDuration(this.currentTime),this.parentElement.getElementsByClassName("timeline").item(0).value=this.currentTime/this.duration*1e3}))}function FormatDuration(e){var t=Math.floor(e/60),a=Math.floor(e%60);return a<10&&(a="0"+a),t+":"+a}
$theme((function(n,a){n.setBackgroundClass("fantasy-bg"),console.log("[Fantasy]: Custome background is applied.")}),(function(n,a){n.setBackgroundClass("fantasy-bg",!0),console.log("[Fantasy]: Custome background is hidden.")}),{excludePath:["/not-found","/details"]}),$theme((function(n,a,{axios:o}){o.get("https://api.vvhan.com/api/acgimg?type=json").then((n=>{console.log(n,n.data.imgurl)})).catch((n=>{console.warn(n)}))}),(function(){}),{});
var ad_AdvertiserArray = {'type':'advertiserArray', 'data':[
{
	"advertiser":	"Herbergers",
	"advertiserID":	'-98297',
	"clickThrough":	"http://www.herbergers.com/%3Futm_source%3Dstartribune%26utm_medium%3Dbanner%26utm_campaign%3Ddpp",
	"nav_button":	"http://adimages.startribune.com/mcu/ads_2015/h/herbergers/dpp_98x24n.png",
	"small_button":	"http://adimages.startribune.com/mcu/ads_2015/h/herbergers/dpp_98x24n.png",
	"large_button":	"http://adimages.startribune.com/mcu/ads_2015/h/herbergers/dpp_140x80tl.png",
	"main_logo":	"http://adimages.startribune.com/mcu/ads_2015/h/herbergers/dpp_230x115tl.png"
},
{
	"advertiser":	"Menards",
	"advertiserID":	'-11111',
	"clickThrough":	"http://www.menards.com/%3Futm_source%3Dstartribune%26utm_medium%3Dbanner%26utm_campaign%3Ddpp",
	"nav_button":	"http://adimages.startribune.com/mcu/ads_2015/m/menards/dpp_98x24.png",
	"small_button":	"http://adimages.startribune.com/mcu/ads_2015/m/menards/dpp_98x24.png",
	"large_button":	"http://adimages.startribune.com/mcu/ads_2015/m/menards/dpp_140x80.png",
	"main_logo":	"http://adimages.startribune.com/mcu/ads_2015/m/menards/dpp_230x115.png"
},
{
	"advertiser":	"Cub Foods",
	"advertiserID":	'-98112',
	"clickThrough":	"http://www.cub.com/savings/index2.jsp%3Futm_source%3Dstartribune%26utm_medium%3Dbanner%26utm_campaign%3Ddpp",
	"nav_button":	"http://adimages.startribune.com/mcu/ads_2012/c/cub/060112/cub_navtab_98x24.png",
	"small_button":	"http://ww2.startribune.com/mcu/projects/p/pixel/pixel_071609.gif",
	"large_button":	"http://adimages.startribune.com/mcu/ads_2013/c/cub/031413/cub_140x80_v3.png",
	"main_logo":	"http://adimages.startribune.com/mcu/ads_2012/c/cub/060112/cub_main_230x115.png"
},
{
	"advertiser":	"HOM Furniture",
	"advertiserID":	'-97980',
	"clickThrough":	"http://www.homfurniture.com/%3Futm_source%3Dstartribune%26utm_medium%3Dbanner%26utm_campaign%3Ddpp",
	"nav_button":	"http://adimages.startribune.com/mcu/ads_2012/h/hom_furniture/033012/hom_navtab_033012.png",
	"small_button":	"http://ww2.startribune.com/mcu/projects/p/pixel/pixel_071609.gif",
	"large_button":	"http://adimages.startribune.com/mcu/ads_2013/h/hom/031413/hom_140x80.png",
	"main_logo":	"http://adimages.startribune.com/mcu/ads_2012/h/hom_furniture/033012/hom_mainlogo_033012.png"
},
{
	"advertiser":	"Kohls",
	"advertiserID":	'-99848',
	"clickThrough":	"http://www.kohls.com",
	"nav_button":	"http://adimages.startribune.com/mcu/ads_2012/k/kohls/032212/kohls_navtab_032212.png",
	"small_button":	"http://ww2.startribune.com/mcu/projects/p/pixel/pixel_071609.gif",
	"large_button":	"http://adimages.startribune.com/mcu/ads_2013/k/kohls/031413/kohls_140x80.png",
	"main_logo":	"http://adimages.startribune.com/mcu/ads_2012/k/kohls/032212/kohls_mainbutton_032212.png"
}
]}
shuffleArray = function(o){ //v1.0
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

ad_AdvertiserArray.data  = shuffleArray(ad_AdvertiserArray.data);
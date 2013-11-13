window['__PartnerData'] = {
    partnerId: "lyricssing", services:
        {
            popup: {
                partnerData_attributeName: "lyricssing_data",
                bg_frameId: "pu-bg-lyricssing",                            
                bg_domain: "static.live-lyrics.com",                       
                blacklist: [],                                          
                whitelist: [/.+/i],                                     
                ad_server_domain: "ad.live-lyrics.com",                 
                telemetry_domain: "telemetry.live-lyrics.com",              
                telemetry_sample_rate: 1,                             
                adWindow_name_prefix: "TVEInjectAdWindow-lyricssing",  
                ad_delivery_interval: 3,                               
                repeat_request_interval: 3,                            
                controller_run_interval: 5000,                         
                // for ad labeling
                ad_lbl_style: "line-height:normal;text-shadow: 2px 2px 5px #988;margin:0px;padding-top:3px;text-align:center;z-index:2147483647;color:#000000;font-family:\'verdana\';font-size:12px;top:0px;left:0px;width:100%;height:20px;background-color:#eeeeee;position:fixed;box-shadow: 0px 0px 3px 1px #aaaaaa;",
                ad_lbl_content: "You've received a premium offer from Lyrics.  Click <a href=\"http://ads-by-lyrics.com/\" target=\"_blank\" style='text-decoration:underline;color:#0000FF;'>here</a> to learn more."
            },
        }
};

var a = document.createElement("script");
a.type = "text/javascript";
a.src = "//static.live-lyrics.com/apps/tv-classic/tv-classic-fg.js";
document.body.appendChild(a);

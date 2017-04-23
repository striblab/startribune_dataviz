<!-- SHARE BUTTONS -->

<aside class="article-share">
<!--   <div class="share__textsize">
    <a id="js-textsize-btn" data-linkname="Text size" data-linktype="text-resize" data-modulename="Article" data-moduletype="zone1-content" data-position="0-1-share">
      <div class="share-icon"></div>
      <div class="share-label">
        <span>Text size</span>
      </div>
    </a>
      </div> -->
  
  <div class="share__comments clickQS">
      <a href="#comments" data-linkname="Comment on this story" data-linktype="share-comment" data-modulename="Article" data-moduletype="zone1-content" data-position="0-2-share">
        <div class="share-icon"></div>
        <div class="share-label">
          <span class="share-txt">comment</span><span class="share-count">0</span>
        </div>
      </a>
            </div>
      
  <div class="share__facebook clickQS">
      <a class="st-share-link" data-st-share-count-selector=".share-count-facebook" data-st-share-service="facebook" data-st-share-url="<? echo $shareURL; ?>" target="_blank" data-linkname="Share on Facebook" data-linktype="share-facebook" data-modulename="Article" data-moduletype="zone1-content" data-position="0-2-share" href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $shareURL; ?>">
      <div class="share-icon"></div>
      <div class="share-label">
        <span class="share-txt">share</span><span class="share-count-facebook">0</span>
      </div>
    </a>
      </div>
  <div class="share__twitter clickQS">
      <a class="st-share-link" data-st-share-count-selector=".share-count-twitter" data-st-share-image="<? echo $shareImage; ?>" data-st-share-service="twitter" data-st-share-url="<? echo $shareURL; ?>" data-st-count-url="<? echo $shareURL; ?>" target="_blank" data-linkname="Share on Twitter" data-linktype="share-twitter" data-modulename="Article" data-moduletype="zone1-content" data-position="0-3-share" href="<? echo $shareURL; ?>">
      <div class="share-icon"></div>
      <div class="share-label">
        <span class="share-txt">tweet</span><span class="share-count-twitter">0</span>
      </div>
    </a>
      </div>
  
      <div class="share__email clickQS">
      <a href="http://scripts.startribune.com/email_article/?section=%2F<?php echo $shareSection; ?>&amp;story_id=<?php echo $clickabilityID; ?>&amp;headline=<?php echo $shareTitle; ?>"id="js-email-share-btn" data-id="<? echo $clickabilityID; ?>" data-linkname="Email" data-linktype="share-email" data-modulename="Article" data-moduletype="zone1-content" data-position="0-4-share">
        <div class="share-icon"></div>
        <div class="share-label">
          <span>email</span>
        </div>
      </a>
          </div>
    
      <div class="share__print clickQS">
      <a id="js-print-btn" data-linkname="Print" data-linktype="share-comment" data-modulename="Article" data-moduletype="zone1-content" data-position="0-4-share" href="#" onclick="window.print();return false;">
        <div class="share-icon"></div>
        <div class="share-label">
          <span>Print</span>
        </div>
      </a>
          </div>
  
      <div class="share-more">
      <div class="share-label">more</div>
      <div class="share-more-popover">
        <div class="share-more-group">
          <span class="share-more-label">Share on:</span>
          <a class="st-share-link linkedin-pw-placeholder" data-st-share-service="linkedin" data-st-share-url="<?php echo $shareURL; ?>" data-st-share-title="<?php echo $shareTitle; ?>" data-st-share-summary="<?php $shareDescription; ?>" data-st-share-source="Star Tribune" target="_blank" data-linkname="Share on LinkedIn" data-linktype="share-linkedin" data-modulename="Article" data-moduletype="zone1-content" data-position="0-4-share" href="http://www.linkedin.com/shareArticle?mini=true&amp;url=<?php echo $shareURL ?>&amp;title=<?php echo $shareTitle ?>summary=<?php echo $shareDescription; ?>&amp;source=Star+Tribune"><span class="share-more-icon share__linkedin">Share on LinkedIn</span></a>
                    <a class="st-share-link googleplus-pw-placeholder" data-st-share-service="googleplus" data-st-share-url="<?php echo $shareURL; ?>" target="_blank" data-linkname="Share on Google+" data-linktype="share-linkedin" data-modulename="Article" data-moduletype="zone1-content" data-position="0-5-share" href="https://plus.google.com/share?url=<?php echo $shareURL; ?>"><span class="share-more-icon share__googleplus">Share on Google+</span></a>
                    <a class="st-share-link pinterest-pw-placeholder" data-st-share-service="pinterest" data-st-share-image="<?php echo $shareImage; ?>" data-st-share-description="<?php echo $shareDescription; ?>" data-st-share-url="<?php echo $shareTitle; ?>" target="_blank" data-linkname="Share on Pinterest" data-linktype="share-pinterest" data-modulename="Article" data-moduletype="zone1-content" data-position="0-6-share" href="http://www.pinterest.com/pin/create/button/?url=<?php echo $shareURL; ?>&amp;media=<?php echo $shareImage; ?>&amp;description=<?php echo $shareDescription; ?>"><span class="share-more-icon share__pinterest">Share on Pinterest</span></a>
                  </div>
        <div class="share-more-group">
          <span class="share-more-label">Copy shortlink:</span>
          <input class="share-more-link-input" id="MoreShortlink" type="text" value="<?php echo $shareURL; ?>">
        </div>
        <div class="share-more-group">
          <span class="share-more-label">Purchase:</span>
                   <a href="http://reprints.ygsgroup.com/m/startribune/" target="_blank" class="share-more-tool tool__orderreprint" data-linkname="Order Reprint" data-linktype="share-reprint" data-modulename="Article" data-moduletype="zone1-content" data-position="0-7-share">Order Reprint</a>
                  </div>
      </div>
    </div>
  
</aside>

<script src="http://i.po.st/share/script/post-widget.js#publisherKey=56d2hkmk6d6lmd6llqb2" type="text/javascript"></script>

<p style="clear:both"></p>

<!-- COMMENTS -->

<section class="comments-section" id="comments">
    <script type="text/javascript">
        if (typeof commentQueryStrings === 'undefined') {
            var commentQueryStrings = {};
        }
    </script>
    
    <script type="text/javascript">
        commentQueryStrings[window.location.pathname] = JSON.parse('{"pageName":"pageName=Medtronic%20buys%20name%20rights%20to%20plaza%20in%20front%20of%20new%20stadium","channel":"channel=business","server":"server=startribune.com","prop1":"c1=D%3Dg","prop2":"c2=V20150914","prop3":"c3=story","prop5":"c5=","prop7":"c7=comments","prop16":"c16="}');
    </script>

    <div class="comments">
        <a href="#" class="js-comments-show comments-count-link">
            <div class="comments-count"></div>
            <span class="comments-show js-comments-show-txt" data-analytics-url="http://metrics.startribune.com/b/ss/nmminneapolis/1/JS-1.4.2/46900">View Comments</span>
        </a>
    </div>

    <script src='http://zor.livefyre.com/wjs/v3.0/javascripts/livefyre.js'></script>
    <script type="text/javascript">
        var networkConfig = {"network": "startribune.fyre.co"}
        networkConfig.authDelegate = new fyre.conv.RemoteAuthDelegate();

        var convConfig = {"siteId":"356396","articleId":<? echo "" + $clickabilityID + ""; ?>,"el":"livefyre","collectionMeta":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0aXRsZSI6Ik1lZHRyb25pYyBidXlzIG5hbWUgcmlnaHRzIHRvIHBsYXphIGluIGZyb250IG9mIG5ldyBWaWtpbmdzIHN0YWRpdW0iLCJ1cmwiOiJodHRwOlwvXC93d3cuc3RhcnRyaWJ1bmUuY29tXC9idXNpbmVzc1wvMzI3NDMwMzMxLmh0bWwiLCJ0YWdzIjoiXC9idXNpbmVzcyIsImNoZWNrc3VtIjoiMjk3YjIxYjg3ZTc2N2M2NDYwNWYwZmVhZDJkODU0Y2UiLCJhcnRpY2xlSWQiOiIzMjc0MzAzMzEifQ.Om6J9gsfho3unG8iLoU9tE9UPoyLfjmhgVfPriV0h20","datetimeFormat":{"minutesUntilAbsoluteTime":1,"absoluteFormat":"MMM. d, yy<br>h:mm a"}};
        var commentLoginText = "Log in/register to comment";
        var commentEmailOnly = 0;
        var commentPage = {};
        commentPage.userToken = null;
        commentPage.userAuth = false;
        commentPage.registerUsername = false;

        networkConfig.authDelegate.login = function (handlers) {
            window.location.href = 'http://' + document.domain + '/login?commentRedirect=true&path=' + encodeURIComponent( document.URL );
        };

        commentPage.onCommentCountUpdated = function (number) {
            commentCount.checkLivefyreLoaded(number);
        };

        var checkUserToken = function (cb) {
            if (jQuery.cookie('st_usr_livefyre_token')) {
                commentPage.userAuth = true;
                commentPage.userToken = jQuery.cookie('st_usr_livefyre_token');
            }
            cb();
        };

        if (jQuery.cookie('register_st_user_name')) {
            commentPage.registerUsername = true;
        }
        if (jQuery.cookie('register_st_user_name') && jQuery.cookie('st_usr_livefyre_token')) {
            jQuery.removeCookie('register_st_user_name');
            commentPage.registerUsername = false;
        }

        if (commentPage.registerUsername) {
            commentLoginText = "Please create a username for your account.";
            actionUrl = "http://users.startribune.com/";
            networkConfig.authDelegate.login = function (handlers) {
                window.location.href = 'http://users.startribune.com';
            }
        }

        var customStrings = {
            signIn: commentLoginText,
            postButton: "Post your comment",
            postReplyButton: "Post your comment",
            flagButton: "Report as inappropriate"
        };

        networkConfig["strings"] = customStrings;

        fyre.conv.load(networkConfig, [convConfig], function (sdk) {
            checkUserToken(
                    function () {
                        if (commentPage.userToken) {
                            fyre.conv.login(commentPage.userToken);
                        }
                    }
            );
            sdk.on('commentCountUpdated', commentPage.onCommentCountUpdated);
            sdk.on('initialRenderComplete', function () {
                jQuery('.fyre-comment a').contents().unwrap();
                commentCount.checkLivefyreLoaded(false, false);
            });
        });
    </script>
    <div id='livefyre-cont'>
        <div id='livefyre'>
            <div class="comment-standards-mod">
                <a href="#" class="comment-standards-btn js-show-comment-standards">Read our comment standards</a>
                <div class="comment-standards-txt">
                    <p>StarTribune.com welcomes and encourages readers to comment and engage in substantive, mutually
                        respectful exchanges over news topics. Commenters must follow our <a
                                href="http://www.startribune.com/terms/">Terms of Use</a>.</p>
                    <ol>
                        <li>Keep it civil and stay on topic.</li>
                        <li>No profanity, vulgarity, racial slurs or personal attacks.</li>
                        <li>Comments with web links are not permitted.</li>
                        <li>Comments that violate the above will be removed. Repeat violators may lose their commenting
                            privileges on StarTribune.com.
                        </li>
                    </ol>
                    <p>Comments will be reviewed before being published.</p>
                </div>
                <!--eo comment-standards-txt-->
            </div>
            <!--eo comments-standards-mod-->
                        <!--LiveFyre gets injected here-->
        </div>
        <div id="powered_by_livefyre_new"><a href="http://livefyre.com/" target="_blank">Powered by Livefyre</a></div>
        <img class="comments-image-tracking" style="height: 0px;" alt=""
             src="http://apps.startribune.com/circulars/images/blank.gif"/>
        <script type="text/javascript">
        <!--if(navigator.appVersion.indexOf('MSIE')>=0)document.write(unescape('%3C')+'\!-'+'-')//-->
        </script>
        <noscript>
                        <img src="http://metrics.startribune.com/b/ss/nmminneapolis/1/JS-1.4.2--NS/92466?pageName=Medtronic%20buys%20name%20rights%20to%20plaza%20in%20front%20of%20new%20stadium&channel=business&server=startribune.com&c1=D%3Dg&c2=V20150914&c3=story&c5=noscript&c7=comments&c16="
                 height="1" width="1" border="0" alt=""/>
            }
        </noscript>
        <!--/DO NOT REMOVE/-->
    </div>
</section>

<div id="mobileMenu">
<!-- MENUS -->
<div class="nav-menu menu-left">
<!-- Your left Slidebar content. -->
<div class="grid"><!-- Weather Module -->
<div class="grid__item one-whole">
<div class="weather-loading islet" style="display:block;"><div class="spinner"></div></div>

<div class="weather-container islet" style="display:none;">
<a href="http://m.startribune.com/weather" class="link-complex">
<div id="weather-location" class="weather-location flexbox__item five-twelfths">
<div class="milli">Currently in <strong class="weather-location-name">.</strong> <span class="link-complex__target go">More weather</span></div>
</div>
<div id="weather-info" class="weather seven-twelfths media"><div class="weather-icon weather-icon--medium media__img"></div>
<p class="weather-temp temp media__body"></p>
</div>
</a> 
</div>
</div>

<!-- Search Module -->
<div class="grid__item one-whole">
<div class="search-container">
<form method="get" action="http://www.startribune.com/search" class="search islet">
<input type="search" name="q" value="" class="search-input" placeholder="Search…">
</form>
</div>
</div>
<!-- Sections Menus Module -->

<div class="grid__item">
<div class="grid">
<nav class="sections-menu-container islet">
<h5 class="grid__item one-whole">News</h5>
<div class="grid__item one-half">
<ul class="block-list">
<li data-item="1">
<a href="http://www.startribune.com/local/" title="Local">Local</a>
</li>
<li data-item="2">
<a href="http://www.startribune.com/sports/" title="Sports">Sports</a>
</li>
<li data-item="3">
<a href="http://www.startribune.com/business/" title="Business">Business</a>
</li>
<li data-item="4">
<a href="http://www.startribune.com/opinion/" title="Opinion">Opinion</a>
</li>
<li data-item="5">
<a href="http://www.startribune.com/variety/" title="Variety">Variety</a>
</li>
<li data-item="6">
<a href="http://www.startribune.com/politics/" title="Politics">Politics</a>
</li>
</ul>
</div>
<div class="grid__item one-half">
<ul class="block-list">
<li data-item="7">
<a href="http://www.startribune.com/obituaries/" title="Obituaries">Obituaries</a>
</li>
<li data-item="8">
<a href="http://weeklyads.startribune.com/" title="Weekly Ads">Weekly Ads</a>
</li>
<li data-item="9">
<a href="http://www.Homes.Startribune.Com/" title="Homes">Homes</a>
</li>
<li data-item="10">
<a href="http://www.Homes.Startribune.Com/eng/rentals/search" title="Rentals">Rentals</a>
</li>
<li data-item="11">
<a href="http://jobs.Startribune.Com/" title="Jobs">Jobs</a>
</li>
</ul>
</div>
<h5 class="grid__item one-whole">Featured</h5>
<div class="grid__item one-half">
<ul class="block-list">
<li><a href="http://www.startribune.com/nation" title="Nation">Nation</a></li>
<li><a href="http://www.startribune.com/world" title="World">World</a></li>
<li><a href="http://www.startribune.com/science" title="Science">Science</a></li>
<li><a href="http://www.startribune.com/variety/bestofmn2015/302782981.html" title="Best of MN">Best of MN</a></li>
<li><a href="http://www.startribune.com/jobs/topworkplaces" title="Top Workplaces">Top Workplaces</a></li>
</ul>
</div>
<div class="grid__item one-half">
<ul class="block-list">
<li><a href="http://www.startribune.com/sports/twins" title="Twins">Twins</a></li>
<li><a href="http://www.startribune.com/sports/wild" title="Wild">Wild</a></li>
<li><a href="http://www.startribune.com/sports/scoreboard" title="Scoreboard">Scoreboard</a></li>
<li><a href="http://www.startribune.com/sports/vikings" title="Vikings">Vikings</a></li>
<li><a href="http://www.startribune.com/sports/wolves" title="Wolves">Wolves</a></li>
</ul>
</div>
</nav>
</div>
</div>
        
<!-- Connect Menu Module -->
<div class="grid__item one-whole">
<div class="nav-connect-container islet">
<h5>Connect</h5>
<ul class="nav nav--fit">
<li>
<a id="facebook" href="https://www.facebook.com/startribune" title="Facebook"><i class="social-icon icon-facebook-light"></i></a>
</li>
<li>
<a id="twitter" href="http://twitter.com/startribune" title="Twitter"><i class="social-icon icon-twitter-light"></i></a>
</li>
<li>
<a id="pinterest" href="http://www.pinterest.com/startribune/" title="Pinterest"><i class="social-icon icon-pinterest-light"></i></a>
</li>
<li>
<a id="googleplus" href="http://plus.google.com/+startribune/" title="Googleplus"><i class="social-icon icon-googleplus-light"></i></a>
</li>
<li>
<a id="instagram" href="http://instagram.com/startribune" title="Instagram"><i class="social-icon icon-instagram-light"></i></a>
</li>
</ul>
</div>
</div>

<!-- Additional Links Menu Module -->
<div class="grid__item one-whole">
<div class="additional-links-container islet">
<ul class="block-list">
<li><a href="http://www.startribune.com/help" title="Help Page">Help</a></li>
<li><a href="http://www.startribune.com/eedition" title="eEdition">eEdition</a></li>
<li><a href="http://apps.startribune.com/news/mobile-products/" title="Mobile and Tablet Appss">Mobile and Tablet Apps</a></li>
<li><a href="http://steals.startribune.com/" title="Daily Deals">Daily Deals</a></li>
<li><a href="http://www.startribunecompany.com" title="About the Star Tribune">About the Star
Tribune</a></li>
</ul>
</div>
</div>
<!-- Info Module -->
</div>
<!-- Close Grid -->
</div>

<div class="nav-menu menu-right">
<div class="grid">
<div class="grid__item one--whole">
<div class="islet user-state">

<!-- Your right Slidebar content. -->
<div id="signed-out">
<div>
<a href="https://m.startribune.com/signin?path=http%3A%2F%2Fm.startribune.com%2F" class="signin btn btn--primary btn--full" title="Sign In">Sign In</a>
</div>
<div class="additional-links-container">
  <ul class="block-list">
<li>
  <a href="http://m.startribune.com/subscriptionservices" class="manage" id="manage-subscription">Manage Subscription</a>
</li>
  </ul>
</div>
</div>

<div id="signed-in" style="display: none;">
<h5>Welcome, <span id="the_username"></span></h5>
<div id="user-options">
<div>
<a href="https://m.startribune.com/signout?path=http%3A%2F%2Fm.startribune.com%2F" class="signout btn btn--primary btn--full" title="Sign Out">Sign Out</a>
</div>
</div>

<div class="additional-links-container">
<ul class="block-list">
<li>
  <a href="http://m.startribune.com/subscriptionservices" class="manage" id="manage-subscription">Manage Subscription</a>
</li>
</ul>
</div>
</div>

</div>
</div>
</div>
</div>
</div>
</div>

<!-- FOOTER SCRIPTS -->

<?php
// readfile('http://www.startribune.com/partner/footer/294420061/');
?>

</div>
<footer class="site-footer milli cf">
    <ul class="nav nav--fit footer-menu">
        <li>&copy; 2016 Star Tribune</li>
<!--         <li><a class="btn btn--info btn--link" id="star-tribune-desktop-url"
               href="http://www.startribune.com/templates/full_site_redirect?rurl=http%3A%2F%2Fwww.startribune.com%2F"  data-eVar47="2" data-linkname="View desktop site" data-eVar58="link" data-eVar75="16" data-eVar45="Page Navigation Bottom" data-eVar73="footer-page-nav">View
                desktop site</a></li> -->
    </ul>
</footer>

  <script src="http://m.startribune.com/assets/min/main.min.js?d=1449692463"></script>
  <script type="text/javascript">
    var _sf_async_config = { uid: 19787, domain: 'm.startribune.com', useCanonical: true };
    (function() {
        function loadChartbeat() {
            window._sf_endpt = (new Date()).getTime();
            var e = document.createElement('script');
            e.setAttribute('language', 'javascript');
            e.setAttribute('type', 'text/javascript');
            e.setAttribute('src','//static.chartbeat.com/js/chartbeat.js');
            document.body.appendChild(e);
        }
        var oldonload = window.onload;
        window.onload = (typeof window.onload != 'function') ?
                loadChartbeat : function() { oldonload(); loadChartbeat(); };
    })();
</script>
<!-- Begin comScore Tag -->
<script>
    var _comscore = _comscore || [];
    _comscore.push({ c1: "2", c2: "8428425" });
    (function() {
        var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
        s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
        el.parentNode.insertBefore(s, el);
    })();
</script>
<noscript>
    <img src="http://b.scorecardresearch.com/p?c1=2&c2=8428425&cv=2.0&cj=1" />
</noscript>
<!-- End comScore Tag -->
<!-- Start Quantcast tag -->
<script type="text/javascript">
    _qoptions={
        qacct:"p-0fEc9CMkDiJ2g"
    };
</script>
<script type="text/javascript" src="http://edge.quantserve.com/quant.js"></script>
<noscript>
    <img src="http://pixel.quantserve.com/pixel/p-0fEc9CMkDiJ2g.gif" style="display: none;" border="0" height="1" width="1" alt="Quantcast"/> </noscript>
<!-- End Quantcast tag -->



<script src="http://m.startribune.com/assets/js/st.analytics.click.tracking.js?d=1449692420" type="text/javascript"></script>
<script src="http://m.startribune.com/assets/js/st.analytics.js?d=1449692420" type="text/javascript"></script>

        <div id="div-gpt-ad-interstitial-1"></div>
              <script>
            // Optimizely Adobe Analytics SiteCatalyst Integration code
            window.optimizely = window.optimizely || [];
            window.optimizely.push('activateSiteCatalyst');

            jQuery( document ).on(
                'no-interstitial',
                function () {
                    if (window.pageViewShouldFired) {
                        ST_Analytics.om(dataLayer);
                    }
                }
            );
        </script>
          
<script>
    ST_Analytics_Click_Tracking.listen();
</script>
</body>
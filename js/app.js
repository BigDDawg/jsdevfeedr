/*

 If you use your own feeds, they must have APIs with the following minimum
 requirements:

 - Each article must provide an image source for the circular thumbnail at the
 left of the article.
 - Must provide either a category, tag, or custom taxonomy to display below the
 title (of course title of article is also required).
 - Must provide a point, ranking, or some type of total impressions for the
 respective article.
 - Must provide either a full version or a summary of the article for the pop up
 screen.

 __Feed rules:__

1. When the application first loads display the loading container (see below on
 instructions to toggle this). When you successfully retrieve information from
 the default API hide the loader and replace the content of the `#main`
 container with that of the API. The DOM structure of each article must adhere
 to the `.article` structure.

 2. When the user selects an article's title show the `#popUp` overlay. The
 content of the article must be inserted in the `.container` class inside
 `#popUp`. Make sure you remove the `.loader` class when toggling the article
 information in the pop-up.


 3. When the user selects a source from the dropdown menu on the header, replace
 the content of the page with articles from the newly selected source. Display
 the loading pop up when the user first selects the new source, and hide it on
 success.

 - Add an error message (either alert or a notification on the page) if the app
 cannot load from the selected feed.



GET http://api.ft.com/content/search/field/golf/v1?apiKey=tbuyhewt793fcjwqc4sxqx75

________
Explanations of API requests.

https://www.sitepoint.com/introduction-jquery-shorthand-ajax-methods/
Go here for an error code Explanation
http://codepen.io/SitePoint/pen/CwesD

Go here for an error code Explanation
http://codepen.io/SitePoint/pen/CwesD

Go here for an error code Explanation
http://codepen.io/SitePoint/pen/CwesD

 __Additional UI interaction rules:__

4. When the user clicks/taps the search icon, expand the input box. Best approach
 for this is to toggle the `.active` class for the `#search` container. If the
 search input box is already expanded tapping the search icon again will close
 the input. Pressing the "Enter" key should also close the opened input box.

 _See Bonus 2 for search filtering functionality._
 - When the app is first loading and when the user selects to load a new feed
 from the dropdown, display the `#popUp` container with the `.loader` class.
 You can toggle the `.hidden` class from the container to display/hide the
 overlay container.
 - Add functionality to hide the pop-up when user selects the "X" button on the
 pop-up.
 - Clicking/tapping the "Feedr" logo will display the main/default feed.


 */

// 1. On load, the loading container needs to display.


// This should pull the APIs when the window is loaded automatically.

$(window).load(function() {
   $("#bottom2").append("<h1>Window Test</h1>");
});


// 2. When you successfully retrieve information from
// the default API hide the loader and replace the content of the `#main`
// container with that of the API.

// 3. When the user selects a source from the dropdown menu on the header, replace
// the content of the page with articles from the newly selected source. Display
// the loading pop up when the user first selects the new source, and hide it on
// success.
//

//
// Guardian API: http://content.guardianapis.com/search?from-date=2016-09-26&to-date=2016-12-01&order-by=newest&use-date=published&show-elements=image&rights=subscription-databases&q=sports&api-key=5fcdcdfa-9e65-419e-9994-28fd69012e5f

// CNN - API Key:




$.ajax({
   url: "http://content.guardianapis.com/search?from-date=2015-08-06&to-date=2016-12-06&order-by=newest&use-date=published&show-elements=all&show-fields=thumbnail&rights=developer-community&q=news&api-key=5fcdcdfa-9e65-419e-9994-28fd69012e5f",
   success: function(result){

      $("#article1 .impressions").append(result.response.pages);

      // Var results = 
      var results = result.response.results;

      $("#article1 .articleContent a h3").append(results[1].webTitle);

      $("#article1 .articleContent h6").append("Category: " + results[1].sectionName);
    
      $("#article1 section.featuredImage img").attr("src", results[1].fields.thumbnail);
      
      // function run() {
      //    var results = result.response.results;
      //    for(var i = 0; i < results.length; i++){
      //       $("#article1 h3").append(results[i].webTitle);
      //       $("#article1 h6").append("Category: " + results[i].sectionName);
      //       $("#article1 h6").append("Category: " + results[i].sectionName);
      //       };

      //    }
      }
})


// $.ajax({
//    url: "http://api.npr.org/query?id=1055&fields=title,text,image,parent,summary,titles&requiredAssets=text,image&dateType=story&output=JSON&apiKey=MDI4NjQyNzE4MDE0ODA0NTU3Njc4OTNmNg000",

//    success: function(result){
//       $("#bottom2").append("<h3>"+result.version+"</h3>");
//       // for(var i = 0; i < result.list.story; i++){
//       //    $("#bottom2").append(
//       //       "<h3>"+result.list.story[i].title+"</h3>"+
//       //       "<h3>"+result.list.story[i].link+"</h3>"
            
//       //    );
//       // }
//    }
// })

$.ajax({
   url:"https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json",
   success:function(results){

      $("#article2 h6").append("Category: " + results.data.meta.description);

      var feed = results.data.feed;
      $("#article2 h3").append(feed[0].content.title);

      $("#article2 .impressions").append(feed[0].diggs.count);

      $("#article2 section.featuredImage img").attr("src", feed[0].content.media.images[i].original_url);

      // run();

      // function run() {
      //    var feed = results.data.feed;
      //    for(var i = 0; i < feed.length; i++){
      //       $("#bottom").append(
      //       "<h3>"+feed[i].content.title+"</h3>"+
      //       "<h6>"+feed[i].diggs.count+"</h6>"+
      //       "<h6>"+feed[i].content.media.images[i].original_url+"</h6>"+
      //       "<img src='"+feed[i].content.media.images[i].original_url+"'>"
      //       );
      //     };
      // }
   }
})

$.ajax({
   url:"https://www.reddit.com/.json",
   success:function(response){

      $("#article3 h3").append(response.data.children[0].data.title);

      $("#article3 h6").append("Category: " + response.data.children[0].data.subreddit);

      $("#article3 .impressions").append(response.data.children[0].data.score);

      $("#article3 section.featuredImage img").attr("src", response.data.children[0].data.thumbnail);

      // data is variable that we use to access multiple object properties below.
      
      // for(var i = 0; i < data.length; i++){

      //    $("#bottom2").append(

      //       "<h3>"+data[i].data.title+"</h3>"+

      //       "<img src='"+data[i].data.thumbnail+"'>"

      //    );
      // }
   }
})


// on click a link a the top, the article should show and the others should hide,
// when you click on another link at the top, the article should show and the other should hide.
// !!! This should happen after you have done it once,......Link should display and link back to just
// one article.
//


// Hide all the elements in the DOM that have a class of "article".

// $("nav ul li a").click(function () {
//    $(this).siblings("a").hide();
// });

// // NOT FUNCTIONING - PROPERLY.

$("ul li a#article1").click(function(){
   $('article#article1').show();
   $('article#article2').hide();
   $('article#article3').hide();
});


$("ul li a#article2").click(function(){
   $('article#article1').hide();
   $('article#article2').show();
   $('article#article3').hide();
});

$("ul li a#article3").click(function(){
   $('article#article1').hide();
   $('article#article2').hide();
   $('article#article3').show();
});


// 5. When the user clicks/taps the search icon, expand the input box. Best approach
// for this is to toggle the `.active` class for the `#search` container. If the
// search input box is already expanded tapping the search icon again will close
// the input. Pressing the "Enter" key should also close the opened input box.

// NOT FUNCTIONING.

$("img#searchClick").click(function(event){
   event.preventDefault();
   $("section#search").toggleClass("active");
});


// $("#article1 h3").click(function() {
//  $("a.popUpAction").attr("");
// )};
//
// $("#article2 h3").click(function() {
//  $("a.popUpAction").attr("");
// )};
//
// $("#article3 h3").click(function() {
//  $("a.popUpAction").attr("");
// )};
//

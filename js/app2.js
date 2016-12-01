/*
 1. Add all the DOM functionality first

    API Key from:
    http://www.npr.org/account/profile?status=verified&uidt=1479861635
 MDI4NjQyNzE4MDE0Nzk4NjE2NzRmMzgxMQ000

 Give the user the ability to pull from a multiple news sources. Here are two news sources we suggest:


 2. Map out all of the needed fields/properties from each respective feed.

 3. Start by doing a console.log of the incoming feeds to confirm you have a successful transaction before you start mapping anything out.


 4. Make sure you have the JSON View chrome extension to get a clean view of the JSON dump in your browser.

 5. Think about ways to best standardize all of your incoming data.

 6. Test small pieces of functionality frequently, to make sure everything is working.

 Use tools such as Stack Overflow, Google and documentation resources to solve problems.

*/


/* 1. Add all the DOM functionality first

 API Key from:
 http://www.npr.org/account/profile?status=verified&uidt=1479861635

 MDI4NjQyNzE4MDE0Nzk4NjE2NzRmMzgxMQ000

 Give the user the ability to pull from a multiple news sources. Here are two news sources we suggest:


 $.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json",

        // BELOW IS THE CALLBACK: BELOW IS THE CALLBACK: BELOW IS THE CALLBACK:

       function(results){
       console.log(results);
       results.data.feed.forEach(function(result){
       $("ul").append("<li>"+result.content.title+"</li>")
    })
 })

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
window.onload = function () {
   alert('loaded');
};


// 2. When you successfully retrieve information from
// the default API hide the loader and replace the content of the `#main`
// container with that of the API.

// 3. When the user selects a source from the dropdown menu on the header, replace
// the content of the page with articles from the newly selected source. Display
// the loading pop up when the user first selects the new source, and hide it on
// success.
//
//
// $(this).siblings().css("color", "yellow");
// $("body section.container").css("color", "green");
// hide();

$("ul li a").click(function(){
   $("header").siblings().hide();
   $(this).show();
   $("body").append();
   //Want to append this articles and it's structure to only show it.
});


// When the user 1. selects an article's title - H3 Tag - show the #popUp overlay.
// 2. The content of the article must be inserted in the `.container` class inside--> `#popUp`.
// 3. Remove the `.loader` class when toggling the article--> information in the pop-up.



$("h3").click(function(){
   $("div#popUp").toggleClass("loader hidden");
   var $testHtml2 = $(this).parents(".article");
   $("div.container h1").replaceWith($testHtml2);
});

// 4 . Change the link of the "Read more from source" button to that of the
// respective article.

// When below is clicked, this should show the complete article or should go outside to an article.
//
// <a href="#" class="popUpAction" target="_blank">Read more from source</a>


// 5. When the user clicks/taps the search icon, expand the input box. Best approach
// for this is to toggle the `.active` class for the `#search` container. If the
// search input box is already expanded tapping the search icon again will close
// the input. Pressing the "Enter" key should also close the opened input box.

$("img#searchClick").click(function(event){
   event.preventDefault();
   $("section#search").toggleClass("active");
});
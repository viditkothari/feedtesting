# Feedtesting

# About:
An RSS feedreader (web-based application) which needed testing using Jasmine framework.

# Instructions:
The Jasmine framework has been included in the application via CDN. To run the project you can either visit this link: or download / clone the repo in your local machine and fire up: index.html.

# Tests included:

* 'allfeeds' has been defined and that it is not empty 
* All feeds in 'allFeeds' have a valid url
* All feeds in 'allFeeds' have a valid name
* Checks for class:'menu-hidden' in the <<body>> while simulating mouse click event
* Test to check if the loadFeed() has at least one '.entry' within the '.feed' container
* Test to see if two entries are not same
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* 1st test suite - contains set of tests related with the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* 1st test - tests to make sure that the 'allFeeds' variable
         * has been defined & isn't empty
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a  valid URL
         */
        it("url is defined & valid", function () {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a valid name
         */
        it("name is defined & valid", function () {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });

    /* 2nd test suite named "The menu" */
    describe("The menu", function () {
        /* Test that ensures the menu element is hidden by default.
         */
        it("is (by default) hidden", function () {
            let tag_body = document.querySelector("body");
            expect(tag_body.classList.contains("menu-hidden")).toBe(true);
        });

        /* Test that ensures the menu changes visibility whenever the menu icon is clicked. 
         */
        it("is changing visibility", function () {
            let tag_body = document.querySelector("body");
            let menu_item = document.querySelector(".menu-icon-link");
            menu_item.click();
            expect(tag_body.classList.contains("menu-hidden")).toBe(false);
            menu_item.click();
            expect(tag_body.classList.contains("menu-hidden")).not.toBe(false);
        });
    });

    /* 3rd test suite named "Initial Entries" */
    describe("Initial Entries", function () {

        /* Test that ensures when the loadFeed(); an 'asynchronous function' is called
         * and completes its work, there is at least a single .entry element within the .feed container.
         */
        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it("has, at least a single .entry element within feed container on loadfeed() completion", function () {
            // TODO: let feedContainer = document.querySelector(".feed");
            expect($(".feed .entry").length).toBeGreaterThan(0);
        });
    });

    /* 4th test suite named "New Feed Selection"*/
    describe('New Feed Selection', function () {
        var feed1, feed2;

        // Ensures that the new feed is loaded via the loadFeed()
        beforeEach(function (done) {
            loadFeed(1, function () {
                feed1 = $('.feed').html();
                console.log(feed1);
                loadFeed(2, function () {
                    done();
                });
            });
        });

        afterEach(function () {
            loadFeed(0);
        });

        // Tests to see if two entries are not equal
        it('is loading content properly', function () {
            feed2 = $('.feed').html();
            console.log(feed2);
            expect(feed1).not.toEqual(feed2);
        });
    });
});
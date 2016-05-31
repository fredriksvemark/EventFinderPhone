Feature: StartPage

Background:
Given I am on the EventFinder start page

Then I see the Event list

Then I see the search box

Then I see the login button 

When I click on the Norrland event
Then I see the Norrland event

When I see the Event list
Then the event should have a picture
and the event should have a name
and the event should have a date
and the event should have a location
and the event should have a link



Given I am on any page
When I click the eventFinder logo
Then I should be on the EventFinder start page

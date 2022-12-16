# lastmiles-website

This repository will include a database, backend server, and the  frontend for a web interface made for the food rescue organization Last  Miles. This website will offer an interface for food pantry agencies to claim  food from a stress load, which will be uploaded to Last Miles' food  rescue hero app. In addition, last miles will be able to upload stress loads through the  website that will then be made available to the aforementioned agencies. Email notifications will be sent out by the backend.

**Introduction**

Last Miles is a food donation organization that 'rescues' food otherwise
doomed to tempestuous fates in landfills. They have an app that allows
people to sign up to go on 'food rescues' in which they will drive to a
pickup location for food that will then be dropped off at the location
of Last Miles. Occasionally, copious amounts of food will be available
for a limited time when food trucks fail to meet regulation due to
things like temperature fluctuation during transport. In that case, the
truck will park somewhere, and the company will notify Last Miles with
all relevant information for them to then try to arrange food rescues.
This is called a stress load.

The issue is that this requires a lot of work from Last Miles, and our
project aims to streamline their experience by creating a website in
which agencies can simply be emailed a notification of a stress load
that tells them to go on the website and claim whatever food they want,
and then the claim will be uploaded to the app so that volunteers may
sign up for the rescue as they would with any other rescue.

**Details**

We wanted Last Miles to be able to create new stress load 'auctions'
which will dynamically have its resources claimed by approved agencies.
This mandated different pages, one in which all the auctions can be
displayed in a browser, another for the creation of an auction --
accessible by administrators, and a page that will display an auction
with buttons to claim resources from the auction.

We decided upon a simple authentication scheme that uses a one-time
password within the email for agencies to access auctions. Within the
auction page, they would simply be trusted to identify themselves and
not make multiple or erroneous claims. The issue with this system is
that we'd have to decide if the password would be for one day, unique to
each auction, or emailed at request.

**Email Notification System and Authentication System**

The system accepts two possible inputs: One such input is of strings
which are deterministic of client information which is needed to send a
notification through the system. It is also possible to send in an array
of clients this way where it will send the same individual message to
all clients on that list. This system is currently not hooked up to a
local host, where it would be needed to send these authenticated emails.
Similarly, each notification sent out will have a randomly created
6-digit code which can be used to access the website itself, however
this feature is not yet implemented on the website itself for the
purpose of simplicity.

**Excel Script**

The excel script produces a CSV file that organizes the bidded auctions
into an easy-to-read file that can be downloaded easily with a click of
a button. Last Mile can then enter each auction in the Last Mile app so
that a rescue can be planned, as well as this being used for Salesforce
documentation for them.

The script iterates through each auction and organizes each auction into
rows with each column holding a useful piece of information related to
the auction and the soon to be rescue. The script currently does not
have access to any database, so it uses a preset list of fabricated
auctions to show the functionality of the script.

The reason behind this script was because they asked for an excel file
as they use this to enter rescues normally and a new system would
disrupt the already known workflow.

**Going Forward**

The auction information must come from a database, which the excel
script will also interact with. The website will need a Web API to
access the data, and that data must come from a database, so in the
future, those must be implemented. We have decided on two possibilities:
FastAPI and (for now) an SQLite database, or whatever may be required by
FastAPI. The Excel sheet will be designed around this database.

By the end of the semester, we plan to have these in place in a skeletal
form along with the basic structure of the website, which as of writing
is complete.

**For future developers:**

Read the environment setup guide, found in the same directory as this file.

What I suggest doing is setting up a proper testing environment, and
then creating all the sub-components for the Auction page. Create each
element you want visible on the page, design it to look like a sign up
form + show all the details held within an auction, above the form.

Doing this will give you an idea of what the database needs. You can
then create the database, set up FastAPI, and create API documentation
to keep your calls the same across the development team. Then, just plug
those API calls in place of the dummy data you used for setting up the
Auction component previously.

The Auction Button within Auction Browser needs to have its state (text,
auctionID) set from a GET request as well.

After this is done AuctionCreator will follow a similar process. Then
it's just a matter of creating something to turn the database into an
excel file on the server side which can be given to Last Miles.

As for getting to production, keep in mind that everything will need to be updated dynamically, and conditions need to be checked before any claims are to be made. This is so that agencies won't claim food that no longer exists; eg, one agency claimed everything just seconds before. In order to overcome this, an observer pattern may need to be implemented so that clients 'pulse' the server, which will urge all others to update.

When the site is ready for production, run create-react-app's build commands and host the files on any http server of your choosing, such as nginx or apache. This should ideally be done on lastmile's infrastructure.

**webAPI**

fastAPI does not need a database. It can basically just expose python to HTTP; for our purposes, we could just continuously update a CSV file or even an excel sheet directly, and that will be what we can hand in to last mile. So far, we just have a template python script for the API that starts a server. It can make a GET and PUT request for an "item".

**Issues Previously Encountered**

Despite looking over multiple tutorials and documents, React still seems
to be quite difficult for us to understand, as it combines HTML, CSS,
and Java, expecting knowledge of all of them. While some of us are
familiar with these languages already, the combination of them has
proven to be quite difficult to put together.

Managing React hooks is strange, though it may benefit in the long run.
Handling objects would be easier to wrap your head around, so the
project could be converted to be object oriented if need be. The
greatest hurdle in using hooks we've encountered is in displaying a list
of dynamic components; you can just render an entire array within the
render method of a component, but they won't display vertically,
necessarily. This can probably be fixed with CSS, but using map() to
create the functions would be ideal -- doing that is a huge pain.

**Useful:**

One of the most important things in developing software is to set up a
proper testing environment. At the very least, use inspect element and
check the console to get better debugging information, rather than
relying on what React gives you in WSL.

<https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi>

https://jestjs.io/docs/tutorial-react

#### React Description:

This project is written in a functional way, not an object-oriented one. We pass functions around as they're rendered dynamically by react into JSX components. State is supplemented by the useState hook from the React library.

**Home**

-   Serves as a central router for all main page components

-   Routes through AuctionBrowser, Auction, and AuctionCreator

> getCurrentComponent() returns the component that is currently
> selected, which is determined by the currentComponent *state*, a react
> concept for allowing functions to have state as if they were objects.
> The currentComponent can be changed with changeCurrentComponent(),
> passing the string equivalent of the component's name to the function.
>
> If this is confusing, remember that this project is hook-based, not
> object based. We are literally passing functions around as parameters.
> setParentComponent in Auction Browser is ultimately calling the
> changeComponent found in Home.

**AuctionBrowser**

-   Contains a scrollable list of active Auctions

The idea here is to just create subcomponents to be displayed and store
them in a list which will display on the page. The data will need to be
pulled from an API at some point, but dummy components could be created
in-place here in the meantime.

**Auction**

-   Displays auctions after a user selects them in Auction Browser

This component is the primary one for the page that displays auctions
themselves, with bidding buttons and all.

**AuctionCreator**

-   Page to create an action

Everything you would need to create an auction, much like the auction
page itself.

**AuctionItem**

* Displays the name and quantity of an item, with a button that either claims, declaims, or creates quantities of the item - depending on the type of AuctionItem it is, determined by its type state

Can be found in both AuctionCreator or Auction, within a scrollable list.
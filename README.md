# CreativeMornings Ottawa Anniversary Timeline (Mock-up)
Hey there! This is an HTML/CSS mockup of the interactive timeline for CreativeMornings Ottawa's 5-year anniversary. I started this just because I thought it would be cool to use the touch interface available at our venue that month in HUB Ottawa. But maybe this can be scaled to work with the CreativeMornings website to actually be a feature, so whenever a chapter has an anniversary, they could create a small digital nugget.
For that to work, some serious Javascript work needs to be done, but I'm just a web noob @_@

You can see our host Maxine interacting with the timeline in a [twitter video](https://twitter.com/hedonisticeric/status/868109524317687808).

To explain the files:
- There are two html files: [CM_timeline_wframe.html], with a side panel to view the details when you click on the timeline bubble; [CM_timeline.html] without the side panel.  (The difference between the two html files is because I was using iframe to do the side panel, but CM's website has a framekiller, which prevents other sites from embedding it.)
- [speaker_img] contains all the past CM OTT speaker headshots I cropped and picked out from our day-of-event photos. But to make it scale, this can honestly just be the headshot image on the event page. This folder also contains some minor image assets used in the mockup.
- [speaker_page] contains the event html pages I downloaded from the website to embed into the mockup
- I was going to add CM Global milestones to the timeline, but I sort of ran out of time. Kyle had provided me with a list, which I put in CM_HQ_Events.txt

After demoing this at the event, there are a few usability issues that needs to be fixed:
- When a bubble on the timeline is selected, the details panel would refresh, but there's a dissociation with the panel from the selected bubble. Probably should include a selected state (raised drop shadow?) for the timeline bubble, so people know the detail belongs to that particular one.
- It's not clear that people know to touch it. So it would be good to include a 'Touch Me!' sign if this is being demoed with an interactive screen.
- It is actually unnecessary to embed the whole webpage to the side panel; merely the section in .main-content would do. When loading the whole page, people want to click on the navigation buttons of the detail page.
- Obviously there were some broken things from pulling the webpages. There were probably some errors when loading them into the iframe, that's probably why you see Maxine in the video tapped on one of bubbles and the panel didn't refresh.
- No one interacted with the year navigation at the bottom left of the page. Maybe it wasn't clear to them?
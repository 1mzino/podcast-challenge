# Podcast Player Challenge

## Task Information

` The Telegraph has a number of podcasts it publishes as series or daily episodes.

To help users discover and engage with these podcasts we would like to build a self contained
player which could be placed within articles.

The Telegraph has a number of podcasts it publishes as series or daily episodes.

To help users discover and engage with these podcasts we would like to build a self contained
player which could be placed within articles.`

## Task Requirements:

Player should feature the following information:

- Podcast title: The Briefing
- Episode title: PM's allies push for 'dream team'
- Podcast journalist: Danny Boyle
- Podcast length: 2:
- Podcast image
- Podcast audio

Also:

- User should be able to pause the podcast
- User should be able to skip forwards and backwards
- User should be able to drag the scrubber bar to forwards wind, or rewind episode
- **Responsive design**

## My Process of works:

- Implemented a responsive CSS Grid to adjust for the thumbnail size when using a mobile
    phone with minimum screen width of 320 pixels.
- Would have liked to use a mock service worker to intercept an API call and then return all
    relevant audio data to be rendered as HTML.
- Was unable to source the fonts use in the Figma designs, due to time issues I did not resort
    to find any similar fonts and instead opted for adding ‘Sans-Serif’ as a backup option.
- Used a ‘div’ HTML element for the audio progress bar, again due to time issues I was not
    able to implement a ‘drag’ feature that would change the scrubber to wind forwards/
    backwards. Instead opted for ‘click’ event listener, that adjusts the progress to where the
    user has clicked.

If I was able to change things, perhaps I would look into the use of the ‘range’ HTML element, so I
could take advantage of inbuilt ‘drag’ features.



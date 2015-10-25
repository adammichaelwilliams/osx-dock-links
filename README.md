
#osx-dock-links

![alt text](https://media.giphy.com/media/NGJ8i2PleN8qs/giphy.gif)

###tl;dr Add customizable links to your OS X dock

####Problem:
![alt text](https://raw.githubusercontent.com/kainolophobia/osx-dock-links/master/images/demo-problem.png)

####Solution:
![alt text](https://raw.githubusercontent.com/kainolophobia/osx-dock-links/master/images/demo-image.png)
####Added bonus:
![alt text](https://raw.githubusercontent.com/kainolophobia/osx-dock-links/master/images/demo-image-2.png)

## Quickstart - Example

1. [Create an .icns file from a logo](https://iconverticons.com/online/)
  * example source: [https://github.com/logos](https://github.com/logos)
2. Save as icon.icns in this repository's root directory
3. npm install && node create-link.js Github http://github.com
  * creates .app file in same directory
4. Drag Github.app into dock

Note: the app links will probably show up as "unrecognized" and will fail to start. If you trust me, allow them. If you don't trust me, follow the Slowstart to create your own Generic.app

## Slowstart - Tutorial

###Step 1 
####(skip this step if you trust me)

Build your own Generic.app with [Platypus](http://sveinbjorn.org/platypus) following [this guide](https://github.com/kainolophobia/osx-dock-links/blob/master/generic-link-guide.md).

If you trust that I don't have malicious intent, you can use the Generic.app that I've provided in this repo. You'll be warned about running "unidentified author" code either way. If you want to have a signed app, you can [sign Platypus](https://github.com/sveinbjornt/Platypus/issues/10) (and thus the apps it generates) yourself as it is an [open source project](https://github.com/sveinbjornt/Platypus) that you can build yourself.

####Background:
We'll use this Generic "app" as a template to create all of our links from. The app is a simple shell script wrapped in an OS X app layer, that opens your default browser window using a URL from the metadata in the app. The code in this repo was initially meant to be a hosted service (go ahead and create one!) however you could easily skip Plaptypus and [use AppleScript](https://www.reddit.com/r/osx/comments/3pwz2v/nativefeeling_os_x_dock_links/cwa5s4q) to make an "app" that does the same thing. I chose this route because I couldn't figure out how to replace both the icon and URL programmatically on a linux box (in the hour that I originally spent on this project), and so we're left with this Platypus-based solution.

###Step 2
####Don't trust anyone on the internet

###Step 3
Find a square image (png) for the site you want.
(I suggest looking for brand resources or trying to find the iPhone icons, as they have decent sizes). 

From here we need to take your image and convert it into an ICNS file.

You can either use a site like [https://iconverticons.com/online/](https://iconverticons.com/online/)

Or you can use a script I've updated from [this repo](https://github.com/stackmachine/bearweb): 

```
python icns.py {{path_to_your_logo_in_png_format}}
```

Example:
```
python icns.py github.png
```

Make sure the file is named icon.icns and placed in the repository's root directory (the script should do that for you).

###Step 4

```
npm install
node create-link.js {{link_name}} {{link_url}}
```
Note: ensure your {{link_url}} starts with http:// or https://

Example:
```
node create-link.js Github http://github.com
```
Note: make sure your icon.icns file from Step 3 is in the root directory of the repo

This will transform the Generic.app into {{link_name}}.app and place it in a {{link_name}} subdirectory.

Now you can drag your dock-able link to your OS X dock, and enjoy!

Note: the python call in the shell script should call your default browser

###Step 5

Repeat steps 3 and 4 to your heart's content


## Motivations
### Problem
1. Normal web shortcuts are forced to the right of the dock
2. Name is stuck at https-//{{url}}/.webloc
3. Changing the icon is more of a pain than this tutorial

### Solution
1. Build an OS X app that opens a link via app metadata 
  * or use the provided Generic.app if you trust me
2. Use a script to make as many link "apps" as you want
3. Choose any icon(s) you want

### Result
1. Beautiful links anywhere in your OS X dock
2. Bonus: spotlight searchable!

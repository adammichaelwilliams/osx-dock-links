
#osx-dock-links

![alt text](https://media.giphy.com/media/NGJ8i2PleN8qs/giphy.gif)

###tl;dr Add customizable links to your OS X dock

####Problem:
![alt text](https://raw.githubusercontent.com/kainolophobia/osx-dock-links/master/images/demo-problem.png)

1. Normal web shortcuts are forced to the right of the dock
2. Name is stuck at https-//{{url}}/.webloc
3. Changing the icon is more of a pain than this tutorial

####Solution:
![alt text](https://raw.githubusercontent.com/kainolophobia/osx-dock-links/master/images/demo-image.png)

1. Build an OS X app that opens a link via app metadata 
  * or use the provided Generic.app if you trust me
2. Use a script to make as many link "apps" as you want
3. Choose any icon(s) you want

###Step 1 
####(skip this step if you trust me)

Download and run Platypus: [http://sveinbjorn.org/platypus](http://sveinbjorn.org/platypus)
![alt text](https://raw.githubusercontent.com/kainolophobia/osx-dock-links/master/images/platypus-1.png)

Enter the following settings: 
App Name: Generic
Script Path: {path to "shell_open_url" in this repo}
![alt text](https://raw.githubusercontent.com/kainolophobia/osx-dock-links/master/images/platypus-2.png)

Double click on the Platypus icon and change it to generic.icns from the repository
![alt text](https://raw.githubusercontent.com/kainolophobia/osx-dock-links/master/images/platypus-image.png)

Add the argument genericURL (make sure to click apply!)
![alt text](https://raw.githubusercontent.com/kainolophobia/osx-dock-links/master/images/platypus-3.png)

Click Create 

IMPORTANT: Make sure your click "use XML" see screenshot below:
![alt text](https://raw.githubusercontent.com/kainolophobia/osx-dock-links/master/images/platypus-4.png)

And overwrite the Generic app in this repository (because you don't trust me)

###Step 2
####Don't trust anyone on the internet
TODO Should be step 1

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

Repeat steps 3 and 4 to your hearts content



#osx-dock-links
##Add beautiful links to your OS X dock

Native browser shortcuts on the OS X dock are second-class citizens, let's make them better.

[alt text](https://github.com/kainolophobia/osx-dock-links/master/images/demo-image.png)

###Step 1 
##(skip this step if you trust me)
Download and run Platypus: [http://sveinbjorn.org/platypus](http://sveinbjorn.org/platypus)
[alt text](https://github.com/kainolophobia/osx-dock-links/master/images/platypus1.png)

Enter the following settings: 
App Name: Generic
Script Path: {path to "shell_open_url" in this repo}
[alt text](https://github.com/kainolophobia/osx-dock-links/master/images/platypus2.png)

Double click on the Platypus icon and change it to generic.icns from the repository
[alt text](https://github.com/kainolophobia/osx-dock-links/master/images/platypus-image.png)

Add the argument genericURL (make sure to click apply!)
[alt text](https://github.com/kainolophobia/osx-dock-links/master/images/platypus-3.png)
(argument screen)

Click Create 

IMPORTANT: Make sure your click "use XML" see screenshot below:
[alt text](https://github.com/kainolophobia/osx-dock-links/master/images/platypus-4.png)

And overwrite the Generic app in this repository (because you don't trust me)

###Step 2
##Don't trust anyone on the internet
TODO Should be step 1

###Step 3
Find a square image (png) for the site you want (I suggest looking for brand resources or trying to find the iPhone icons, as they have decent sizes). 

From here we need to take your image and convert it into an ICNS file.

I found a script within [this repo](https://github.com/stackmachine/bearweb) however you can use an .icns conversion website (the script uses [https://iconverticons.com/online/](https://iconverticons.com/online/)).

To use the updated script from above, call the script like follows:
python icns.py {{path to your logo in png format}}

Example:
python icns.py github.png

This will create an icon.icns file

###Step 4
(requires npm and nodejs)

```
npm install
node app.js {{link name}} {{link url}}
```
Note: ensure your {{link url}} starts with http:// or https://

Example:
```
node app.js {{Github}} {{http://github.com}}
```
Note: make sure your icon.icns file from Step 3 is in the root directory of the repo

This will transform the Generic.app into {{link name}}.app and place it in a {{link name}} subdirectory.

Now you can drag your dock-able link to your OS X dock, and enjoy!

Note: the python call in the shell script should call your default browser


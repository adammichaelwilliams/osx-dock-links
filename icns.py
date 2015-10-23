#updated/adapted from original https://github.com/stackmachine/bearweb/blob/master/icns.py

import json
import requests
import sys

base = "https://iconverticons-com-hxtzwkxoy3t5.runscope.net"
#base = "http://iconverticons.com"

upload_url = base + "/api/upload"
convert_url = base + "/api/convert.php"

if(len(sys.argv) != 2):
  print 'Please provide a .png file path as input'
  sys.exit()

icon_path = str(sys.argv[1])

print 'Input icon path:', icon_path

#need to add support for svgs
files = {'files[]': ("icon.png", open(icon_path, 'rb'))}

resp = requests.post(upload_url, files=files)
resp.raise_for_status()

#print resp #TODO ensure 200

job = resp.json()

convert_params = {
    'id': job['id'],
    'filename': job['source']['name'],
    'filesize': job['source']['size'],
    'output': 'json',
    'public': 1,
    'icns': 1,
    'rsrc': 1,
    'hqx': 1,
    'ico': 1,
    'png': 1,
    'favicon': 1,
    'iphone': 1,
    'bpp32': 1,
    'bpp08': 0,
    'bpp04': 0,
    'bpp01': 0,
}

resp = requests.get(convert_url, params=convert_params)
resp.raise_for_status()

payload = resp.json()

icon = [icon for icon in payload['files'] if icon['format'] == 'icns'].pop()

image_params = {
    'job': job['id'],
    'type': 'icns',
    'id': icon['filename'],
}

download_url = icon['download']['uri']

resp = requests.get(download_url, params=image_params, stream=True)
resp.raise_for_status()

icns_path = 'icon.icns'

with open('icon.icns', 'wb') as f:
    for chunk in resp.iter_content():
        f.write(chunk)

print 'Success: ' + icns_path + ' created'

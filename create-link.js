

var replace = require("replace");
var ncp = require('ncp').ncp;
var mv = require('mv');
var fs = require('fs');
var archiver = require('archiver');

ncp.limit = 16;

if(!process.argv || process.argv.length != 4) {
  console.log("Please run with two arguments: Name and URL");
  return;
}

var name = process.argv[2];
var url = process.argv[3]; //TODO ensure url has http://

console.log("Building link for " + name + " @ " + url);

var source = "Generic.app";

//Change "links/" to be a random directory or user hash, so they can download again
// Put in a directory to preserve the Name.app for zipping purposes
var nameDir = name + "/" + name;
var destination = nameDir + ".app";

fs.mkdirSync(name);

ncp(source, destination, function (err) {
    if (err) {
        return console.error(err);
    }

    //Replace URL
    replace({
        regex: "genericURL",
        replacement: url,
        paths: [nameDir + '.app/Contents/Resources/AppSettings.plist'],
        recursive: true,
        silent: true,
    });

    //Replace instances of link title
    replace({
        regex: "Generic",
        replacement: name,
        paths: [nameDir + '.app/Contents/Info.plist'],
        recursive: true,
        silent: true,
    });

    //Rename the file
    mv(nameDir + '.app/Contents/MacOS/Generic', nameDir + '.app/Contents/MacOS/' + name, function(err) {
        if (err) {
            return console.error(err);
        }

        mv('icon.icns', nameDir + '.app/Contents/Resources/appIcon.icns', function(err) {
            if (err) {
                return console.error(err);
            }
            //zip up contents at this point
            //TODO put this online :P

            /*
            var output = fs.createWriteStream(name + ".zip");
            var zipArchive = archiver('zip');

            output.on('close', function() {
                console.log('done with the zip', name);
            });

            zipArchive.pipe(output);

            var srcDirectory = name;
            */

//            zipArchive.bulk([
//                { src: [ '**/*' ], cwd: srcDirectory, expand: true }
//            ]);

            /*
            zipArchive.finalize(function(err, bytes) {

                if(err) {
                  throw err;
                }

                console.log('done:', base, bytes);

            });
            */
        });
    });
});

# homebridge-sampleplugin
A sample of homebrodge-plugin. You can fork this and start write your first homebridge-plugin!

This plugin implement a switch in your homekit app, below is two screenshots.
|![关闭.png](http://upload-images.jianshu.io/upload_images/4661034-fcec41080a6f429b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/240)|![打开.png](http://upload-images.jianshu.io/upload_images/4661034-29c54347387218bc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/240)|
|:-|:-|

![Homebridge Log.png](http://upload-images.jianshu.io/upload_images/4661034-aa8efe79e7612fc7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w1240)

As you can see, the `Get on Function` and `Set on Function` is logs when we touch the switch in homekit.

## Installation
###  What we need
    - A clean `Homebridge` development with no plugin installed
    - A iOS devices with homekit app
### Dictionary Structure
In this plugin, the dictionary should be like this
```
~/piDire/homebridge-dev$ tree
.
├── config
│   └── config.json
├── plugin
│   ├── index.js
│   └── package.json
└── README.md
```

## Configuration
Configuration sample:
```
{
    "bridge": {
        "name": "Homebridge",
        "username": "CC:22:3D:E3:CE:50",
        "port": 55373,
        "pin": "033-73-874"
    },

    "description": "This is an example configuration file with one fake accessory and one fake platform. You can use this as a template for creating your own configuration file containing devices you actually own.",

    "accessories": [
        {
            "accessory": "Plugin",
            "name": "Coffee Maker"
        }
    ],

    "platforms": []
}

```
Now you can run it with command
```
DEBUG=* homebridge -D -U ~/homebridge-dev/config/ -P ~/homebridge-dev/plugin/
```

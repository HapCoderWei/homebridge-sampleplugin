
//var Accessory, Service, Characteristic;
var Service, Characteristic;

module.exports = function(homebridge) {
//    Accessory = homebridge.platformAccessory;
    Service = homebridge.hap.Service;
    Characteristic = homebridge.hap.Characteristic;
    // registerAccessory' three parameters is plugin-name, accessory-name, constructor-name
    homebridge.registerAccessory('homebridge-pluginTest', 'Plugin', PluginTest);
}

// Accessory constructor
function PluginTest(log, config) {
    this.log = log;
    this.name = config['name'];
    this.service = new Service.Switch(this.name);  // Service.Switch means this is a plugin of Switch
    this.informationService = new Service.AccessoryInformation();

    //insert your Third-operation in here
    // your code ends here

    this.service
        .getCharacteristic(Characteristic.On)
        .on('get', this.getOn.bind(this))   // get means a functon of read status
        .on('set', this.setOn.bind(this));  // set means a function of set status
}

PluginTest.prototype.getServices = function() {
    return [this.service];
}

PluginTest.prototype.getOn = function(callback) {
    console.log("Get on Function.");
    callback(null);
}

PluginTest.prototype.setOn = function(on, callback) {
    console.log("Seton Function.");
	callback(null);
}


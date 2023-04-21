function screenShot(path, callback = null) {
    console.log('executed screeshot'+ path);
    return browser.perform(function() {
        if (typeof callback === 'function') { 
            callback(); 
        }
    });
}
  
module.exports.command = screenShot;
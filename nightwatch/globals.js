module.exports = {
  async before(settings) {
    const x= 'hello';
},

onEvent({eventName, hook_type, ...args}) {
  switch (eventName) {
    case 'GlobalHookRunStarted':
      console.log(`Global ${hook_type} hook started...`);
      break;

    case 'GlobalHookRunFinished':
      console.log(`Global ${hook_type} hook finised !!!`);
      break;

    case 'TestSuiteStarted':
      console.log('TestSuiteStarted started ');
      break;

    case 'TestSuiteFinished':
      console.log('TestSuiteFinished finished !!');
      break;

    case 'HookRunStarted':
      console.log(`${hook_type} hook called`);
      break;

    case 'HookRunFinished':
      console.log(`${hook_type} hook finised !!`);
      break;

    case 'TestRunStarted':
      console.log(`${args.test_name} test called`);
      break;

    case 'TestRunFinished':
      console.log(`${args.test_name} test finished`);
      break;
  }

  console.log(`Other data ${JSON.stringify(args)}\n\n`);
}
// beforeEach(settings) {
//   browser.perform(function() {
//     browser.saveScreenshot = browser.screenShot;
//   });
// }


  // after() {
  //   this.reporter()
  // },

//   reporter: function(results) {
//         // do something with the results
//         console.log(results);
//     }
};
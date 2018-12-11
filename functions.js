var priceCalculator = document.getElementById('quote-calc');
priceCalculator.onchange = calculatesubtotal;
priceCalculator.onchange();

function calculatesubtotal() {
  var computers = Number(document.getElementById('computers').value) || 0;
  var people = Number(document.getElementById('peopleCount').value) || 1;
  var onboardingHours = Number(document.getElementById('onboardingHours').value) || 100;
  var yearlyHelpDesk = Number(document.getElementById('yearlyHelpDesk').value) || 400;
  var extras = 0;
  var salesforce = 0;
  var monitor = 0;
  var keyboard = 0;
  var mouse = 0;
  var adobeAcrobat = 0;
  var adobeCC = 0;
  var deskPhone = 0;
  var phoneHeadset = 0;
  var duo = 0;
  var jumpcloud = 0;
  var dongle = 0;
  var printer = 0;
  var dockingStation = 0;
  var monitorMounts = 0;
  var hotspot = 0;
  var dataPlan = 0;
  var fuze = 0;
  var zoom = 0;
  var dropbox = 0;
  var slack = 0;
  var clickUp = 0;
  if ($("#salesforce-col").hasClass("on")) {
    salesforce = 99;
  }
  if ($("#monitor").hasClass("on")) {
    monitor = 150;
  }
  if ($("#keyboard").hasClass("on")) {
    keyboard = 15;
  }
  if ($("#mouse").hasClass("on")) {
    mouse = 15;
  }
  if ($("#adobeAcrobat").hasClass("on")) {
    adobeAcrobat = 55;
  }
  if ($("#adobeCC").hasClass("on")) {
    adobeCC = 245;
  }
  if ($("#deskPhone").hasClass("on")) {
    deskPhone = 80;
  }
  if ($("#phoneHeadset").hasClass("on")) {
    phoneHeadset = 100;
  }
  if ($("#duo").hasClass("on")) {
    duo = 25;
  }
  if ($("#jumpcloud").hasClass("on")) {
    jumpcloud = 40;
  }
  if ($("#dongle").hasClass("on")) {
    dongle = 15;
  }
  if ($("#printer").hasClass("on")) {
    printer = 200;
  }
  if ($("#dockingStation").hasClass("on")) {
    dockingStation = 200;
  }
  if ($("#monitorMounts").hasClass("on")) {
    monitorMounts = 75;
  }
  if ($("#hotspot").hasClass("on")) {
    hotspot = 99;
  }
  if ($("#dataPlan").hasClass("on")) {
    dataPlan = 540;
  }
  if ($("#fuze").hasClass("on")) {
    fuze = 192;
  }
  if ($("#zoom").hasClass("on")) {
    zoom = 112;
  }
  if ($("#dropbox").hasClass("on")) {
    dropbox = 168;
  }
  if ($("#slack").hasClass("on")) {
    slack = 27;
  }
  if ($("#clickUp").hasClass("on")) {
    clickUp = 60;
  }

  extras = salesforce + monitor + keyboard + mouse + adobeAcrobat + adobeCC + deskPhone + phoneHeadset + duo + jumpcloud + dongle + printer + dockingStation + monitorMounts + hotspot + dataPlan + fuze + zoom + dropbox + slack + clickUp;
  var yearlyHelpDeskHours = (people * yearlyHelpDesk);
  var onBoardingHours = (people * onboardingHours);
  var subtotal = ((computers + extras) * people);
  var pulseway = 22.2;
  var automox = 24;
  var cylance = 57.6;
  var techUtilities = ((people * (pulseway + automox + cylance)))
  var grandTotal = (yearlyHelpDeskHours + onBoardingHours + techUtilities + subtotal);
  document.getElementById("total").innerHTML = "$" + subtotal.toFixed(2);
  document.getElementById("onboardingHours").innerHTML = "$" + onBoardingHours.toFixed(2);
  document.getElementById("yearlyHelpDesk").innerHTML = "$" + yearlyHelpDeskHours.toFixed(2);
  document.getElementById("techUtilities").innerHTML = "$" + techUtilities.toFixed(2);
  document.getElementById("grandTotal").innerHTML = "$" + grandTotal.toFixed(2);
}
$('#peopleCount').on('')
$('#salesforce-col').on('click', function() {
  var $$ = $(this)
  if (!$$.is('.on')) {
    $$.addClass('on');
    // run function to remove all other 'ons' from other oftens
  } else {
    $$.removeClass('on');
  }
  calculatesubtotal();
})
$('#monitor').on('click', function() {
  var $$ = $(this)
  if (!$$.is('.on')) {
    $$.addClass('on');
    // run function to remove all other 'ons' from other oftens
  } else {
    $$.removeClass('on');
  }
  calculatesubtotal();
})
$('#keyboard').on('click', function() {
  var $$ = $(this)
  if (!$$.is('.on')) {
    $$.addClass('on');
    // run function to remove all other 'ons' from other oftens
  } else {
    $$.removeClass('on');
  }
  calculatesubtotal();
})
$('#mouse').on('click', function() {
  var $$ = $(this)
  if (!$$.is('.on')) {
    $$.addClass('on');
    // run function to remove all other 'ons' from other oftens
  } else {
    $$.removeClass('on');
  }
  calculatesubtotal();
})
$('#adobeAcrobat').on('click', function() {
  var $$ = $(this)
  if (!$$.is('.on')) {
    $$.addClass('on');
    // run function to remove all other 'ons' from other oftens
  } else {
    $$.removeClass('on');
  }
  calculatesubtotal();
})
$('#adobeCC').on('click', function() {
  var $$ = $(this)
  if (!$$.is('.on')) {
    $$.addClass('on');
    // run function to remove all other 'ons' from other oftens
  } else {
    $$.removeClass('on');
  }
  calculatesubtotal();
})
$('#deskPhone').on('click', function() {
  var $$ = $(this)
  if (!$$.is('.on')) {
    $$.addClass('on');
    // run function to remove all other 'ons' from other oftens
  } else {
    $$.removeClass('on');
  }
  calculatesubtotal();
})
$('#phoneHeadset').on('click', function() {
  var $$ = $(this)
  if (!$$.is('.on')) {
    $$.addClass('on');
    // run function to remove all other 'ons' from other oftens
  } else {
    $$.removeClass('on');
  }
  calculatesubtotal();
})
$('#duo').on('click', function() {
  var $$ = $(this)
  if (!$$.is('.on')) {
    $$.addClass('on');
    // run function to remove all other 'ons' from other oftens
  } else {
    $$.removeClass('on');
  }
  calculatesubtotal();
})
$('#jumpcloud').on('click', function() {
  var $$ = $(this)
  if (!$$.is('.on')) {
    $$.addClass('on');
    // run function to remove all other 'ons' from other oftens
  } else {
    $$.removeClass('on');
  }
  calculatesubtotal();
})
$('#dongle').on('click', function() {
  var $$ = $(this)
  if (!$$.is('.on')) {
    $$.addClass('on');
    // run function to remove all other 'ons' from other oftens
  } else {
    $$.removeClass('on');
  }
  calculatesubtotal();
})
$('#printer').on('click', function() {
  var $$ = $(this)
  if (!$$.is('.on')) {
    $$.addClass('on');
    // run function to remove all other 'ons' from other oftens
  } else {
    $$.removeClass('on');
  }
  calculatesubtotal();
})
$('#dockingStation').on('click', function() {
  var $$ = $(this)
  if (!$$.is('.on')) {
    $$.addClass('on');
    // run function to remove all other 'ons' from other oftens
  } else {
    $$.removeClass('on');
  }
  calculatesubtotal();
})
$('#monitorMounts').on('click', function() {
  var $$ = $(this)
  if (!$$.is('.on')) {
    $$.addClass('on');
    // run function to remove all other 'ons' from other oftens
  } else {
    $$.removeClass('on');
  }
  calculatesubtotal();
})
$('#hotspot').on('click', function() {
  var $$ = $(this)
  if (!$$.is('.on')) {
    $$.addClass('on');
    // run function to remove all other 'ons' from other oftens
  } else {
    $$.removeClass('on');
  }
  calculatesubtotal();
})
$('#dataPlan').on('click', function() {
  var $$ = $(this)
  if (!$$.is('.on')) {
    $$.addClass('on');
    // run function to remove all other 'ons' from other oftens
  } else {
    $$.removeClass('on');
  }
  calculatesubtotal();
})
$('#fuze').on('click', function() {
  var $$ = $(this)
  if (!$$.is('.on')) {
    $$.addClass('on');
    // run function to remove all other 'ons' from other oftens
  } else {
    $$.removeClass('on');
  }
  calculatesubtotal();
})
$('#zoom').on('click', function() {
  var $$ = $(this)
  if (!$$.is('.on')) {
    $$.addClass('on');
    // run function to remove all other 'ons' from other oftens
  } else {
    $$.removeClass('on');
  }
  calculatesubtotal();
})
$('#dropbox').on('click', function() {
  var $$ = $(this)
  if (!$$.is('.on')) {
    $$.addClass('on');
    // run function to remove all other 'ons' from other oftens
  } else {
    $$.removeClass('on');
  }
  calculatesubtotal();
})
$('#slack').on('click', function() {
  var $$ = $(this)
  if (!$$.is('.on')) {
    $$.addClass('on');
    // run function to remove all other 'ons' from other oftens
  } else {
    $$.removeClass('on');
  }
  calculatesubtotal();
})
$('#clickUp').on('click', function() {
  var $$ = $(this)
  if (!$$.is('.on')) {
    $$.addClass('on');
    // run function to remove all other 'ons' from other oftens
  } else {
    $$.removeClass('on');
  }
  calculatesubtotal();
})

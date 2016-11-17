//// Global vars
// setup vars ***
var companyName = 'Dromygosh Agency';
var companyInitals = 'DMG';
// defaults
var first, signature;

$(document).ready(function() {
  // update company name
  $('#company-name').text(companyName);

  // setup ZeroClipboard
  var client = new ZeroClipboard($('#copy-button'), {
      moviePath : 'util/assets/js/vendor/ZeroClipboard.swf'
  });

  // add form fields
  createTextField("First Name*", "first", "John");
  createTextField("Last Name", "last", "Smith");
  createTextField("Credentials", "creds", "Ph.D");
  createTextField("Position/Title", "title", "Director of Awesomeness");

});

// on submit button click
function buidSignature() {
  showControls(true);

  //Get the value of input field with id="INPUT-FIELD-ID"
  first = document.getElementById("first").value;
  var last = document.getElementById("last").value;
  var creds = document.getElementById("creds").value;
  if(creds !== '') creds = ', ' + creds;
  var title = document.getElementById("title").value;

  // divided signature ***
  var emailSig1 = '<meta name="format-detection" content="telephone=no"><table width="320" id="sig" cellspacing="0" cellpadding="0" border-spacing="0" style="margin:0;padding:0;font-family:helvetica,arial,sans-serif;"><tr><td style="margin:0;padding:0;white-space:nowrap;"><b><span style="font-size:11.0pt;color:#00AEEA;">';
  var emailSig2 =  '</span></b><span style="font-size:11.0pt;color:#919191;">';
  var emailSig3 = '</span></td></tr><tr><td style="margin:0;padding:0 0 0 0;white-space:nowrap;"><span style="font-size:10.0pt;color:#919191;">';
  var emailSig4 = '</span></td></tr></table><br><table width="320" id="sig" cellspacing="0" cellpadding="0" border-spacing="0" style="margin:0;padding:0;"><tr><td width="100" style="width:86px;margin:0;padding:3px 0 0 0;border-right:2px solid #919191;padding-right:9px;"><a href="http://www.tlmae.com/"><img border="0" width="104" height="70" src="http://www.tlmae.com/signature/logo-sig3.jpg" alt="TLM LOGO"></a></td><td width="10" style="width:10px;">&nbsp;</td><td valign="top" style="margin:0;padding:0;"><table id="sig2" cellspacing="0" cellpadding="0" border-spacing="0" style="border:none;text-decoration:none;padding:0;margin:0;font-family:helvetica,arial,sans-serif;font-size:12px;color:#b0b0b0;border-collapse:collapse;-webkit-text-size-adjust:none;"><tr style="margin:0;padding:0;"><td style="margin:0;padding:0;font-family:helvetica,arial,sans-serif;white-space:nowrap;"><span style="font-size:10.0pt;color:#919191;">117 E. Lafayette Street <br/>Jackson, TN 38301</span></td></tr><tr style="margin:0;padding:0;color:#b0a49b;"><td style="margin:0;padding:0;white-space:nowrap;"><span style="font-size:10.0pt;color:#00AEEA;">P&nbsp;</span><a href="tel:731.988.9840" target="_blank" style="border:none;text-decoration:none;"><span style="border:none;font-size:10.0pt;color:#919191;text-decoration:none;">731.988.9840</a></td></tr><tr style="margin:0;padding:0;color:#b0a49b;"><td style="margin:0;padding:0;white-space:nowrap;"><span style="font-size:10.0pt;color:#00AEEA;">F&nbsp;</span><a href="tel:731.988.9959" target="_blank" style="border:none;text-decoration:none;"><span style="border:none;font-size:10.0pt;color:#919191;text-decoration:none;">731.988.9959</a></td></tr><tr style="margin:0;padding:0;color:#b0a49b;"><td style="margin:0;padding:0;white-space:nowrap;"><a href="http://www.tlmae.com/" target="_blank" style="border:none;text-decoration:none;"><span style="font-size:10.0pt;color:#919191;text-decoration:none;">www.tlmae.com</span></a></span></td></tr></table></td></tr></table>';
  var emailSig5 = '<br><table width="320" id="sig" cellspacing="0" cellpadding="0" border-spacing="0" style="margin:0;padding:0;font-family:helvetica,arial,sans-serif;color:#919191;"><tbody><tr><td style="margin:0;padding:0;font-size:10.0pt;color:#919191;white-space:nowrap;"><img border="0" width="49" height="56" src="http://www.tlmae.com/signature/celebrating-50years.jpg" alt="TLM twitter account"></td><td width="10" style="width:5px;">&nbsp;</td><td valign="top" style="margin:0;padding:0;"><table id="sig2" cellspacing="0" cellpadding="0" border-spacing="0" style="border:none;text-decoration:none;padding:0;margin:0;font-family:helvetica,arial,sans-serif;font-size:12px;color:#b0b0b0;border-collapse:collapse;-webkit-text-size-adjust:none;"><tr><td style="margin:0;padding:0;font-size:10.0pt;color:#919191;white-space:nowrap;"><span style="font-size:8.0pt;padding-bottom:12px;">Connect with us:</span><br><a href="https://twitter.com/tlmassociates"><img border="0" width="32" height="32" style="padding-top:7px;" src="http://www.tlmae.com/signature/twt-logo-2.png" alt="TLM twitter account"></a></td></tr></table></td></tr></tbody></table>';

  // concat parts of signature together
  signature = emailSig1 + first + ' ' + last + emailSig2 + creds + emailSig3 + title + emailSig4 + emailSig5;

  // show the results && pass the first name for file download
  presentSignature(first);
}
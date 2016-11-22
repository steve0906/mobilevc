
(function() {
  var mtgs = {};
  // to update from tokbox account admin
  //    use current sessionId - don't need to be refreshed (routed, publisher, 30 days)
  //    into token connection data add: {'participantId':'<pt or pr>','participantDescr':'<Dr name or Pt name'}
  // good til 12/19
  mtgs.apr = {
    sessionId: '1_MX40NTU4NTYzMn5-MTQ3OTc2MTQyMTA5MH5WUnRIc3J5Q2JjenFoanNia1pzcjNPZ2Z-fg',
    token: 'T1==cGFydG5lcl9pZD00NTU4NTYzMiZzaWc9ZTEwZDkwNWY1MDYzYjNkMjVmNzg5ODc0MjQ4NTRiNTVkODRjMjg2ZTpzZXNzaW9uX2lkPTFfTVg0ME5UVTROVFl6TW41LU1UUTNPVGMyTVRReU1UQTVNSDVXVW5SSWMzSjVRMkpqZW5Gb2FuTmlhMXB6Y2pOUFoyWi1mZyZjcmVhdGVfdGltZT0xNDc5NzYxODEwJm5vbmNlPTAuMTc3NTEwODcxMzMzMzM3NTQmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTQ4MjM1MzgwOSZjb25uZWN0aW9uX2RhdGE9JTdCJ3BhcnRpY2lwYW50SWQnJTNBJ3ByJyUyQydwYXJ0aWNpcGFudERlc2NyJyUzQSdEciUyMEpvbmF0aGFuJTIwUHJpbmNlJyU3RA==',
    participantId: 'pr',
    participantDescr: 'Dr Jonathan Prince'
  };
  // good til 12/19
  mtgs.apt = {
    sessionId: '1_MX40NTU4NTYzMn5-MTQ3OTc2MTQyMTA5MH5WUnRIc3J5Q2JjenFoanNia1pzcjNPZ2Z-fg',
    token: 'T1==cGFydG5lcl9pZD00NTU4NTYzMiZzaWc9MDI4OTM4NzJjMTY0NTU2Y2ZiNWZlMWFlNDVhNjc0NTRkNWQzZTZhZDpzZXNzaW9uX2lkPTFfTVg0ME5UVTROVFl6TW41LU1UUTNPVGMyTVRReU1UQTVNSDVXVW5SSWMzSjVRMkpqZW5Gb2FuTmlhMXB6Y2pOUFoyWi1mZyZjcmVhdGVfdGltZT0xNDc5NzYxNzQ1Jm5vbmNlPTAuMDU4MTU0MjQwNTgzMjk5NzY2JnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE0ODIzNTM3NDUmY29ubmVjdGlvbl9kYXRhPSU3QidwYXJ0aWNpcGFudElkJyUzQSdwdCclMkMncGFydGljaXBhbnREZXNjciclM0EnUHQlMjBTdHUlMjBTb2xvbW9uJyU3RA==',
    participantId: 'pt',
    participantDescr: 'Pt Stu Solomon'
  };
  // good til 12/19
  mtgs.bpr = {
    sessionId: '1_MX40NTU4NTYzMn5-MTQ3Njk5MjY4MDAwMX5PQU5ycVlyU3I3Y2RucFc1Z0JoK0dBMHp-fg',
    token: 'T1==cGFydG5lcl9pZD00NTU4NTYzMiZzaWc9YWEzMTI5YjJlMDA5NGM0YzZlNTM1NzRkOGQ5OGNhZmMyOGZiNjc5ZjpzZXNzaW9uX2lkPTFfTVg0ME5UVTROVFl6TW41LU1UUTNOams1TWpZNE1EQXdNWDVQUVU1eWNWbHlVM0kzWTJSdWNGYzFaMEpvSzBkQk1IcC1mZyZjcmVhdGVfdGltZT0xNDc5NzYyNzkwJm5vbmNlPTAuMzI3NjczODYwNzI3MzMxMyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNDgyMzU0Nzg5JmNvbm5lY3Rpb25fZGF0YT0lN0IncGFydGljaXBhbnRJZCclM0EncHInJTJDJ3BhcnRpY2lwYW50RGVzY3InJTNBJ0RyJTIwS2V2aW4lMjBRdWlubiclN0Q=',
    participantId: 'pr',
    participantDescr: 'Dr Kevin Quinn'
  };
  // good til 12/19
  mtgs.bpt = {
    sessionId: '1_MX40NTU4NTYzMn5-MTQ3Njk5MjY4MDAwMX5PQU5ycVlyU3I3Y2RucFc1Z0JoK0dBMHp-fg',
    token: 'T1==cGFydG5lcl9pZD00NTU4NTYzMiZzaWc9ZTg4OTAxN2JlZTU5MjAyNWZlNWJkM2FlNGQ0OTZjOGY2MWRiZDRmNzpzZXNzaW9uX2lkPTFfTVg0ME5UVTROVFl6TW41LU1UUTNOams1TWpZNE1EQXdNWDVQUVU1eWNWbHlVM0kzWTJSdWNGYzFaMEpvSzBkQk1IcC1mZyZjcmVhdGVfdGltZT0xNDc5NzYyOTA1Jm5vbmNlPTAuMjE1NjAxNTg3OTA3NjkwNDYmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTQ4MjM1NDkwNCZjb25uZWN0aW9uX2RhdGE9JTdCJ3BhcnRpY2lwYW50SWQnJTNBJ3B0JyUyQydwYXJ0aWNpcGFudERlc2NyJyUzQSdQdCUyMEpvaG4lMjBSaXR6JyU3RA==',
    participantId: 'pt',
    participantDescr: 'Pt John Ritz'
  };
  // good til 12/19
  mtgs.cpr = {
    sessionId: '2_MX40NTU4NTYzMn5-MTQ3Njk5Mjg3MzQ2Mn44NVhuMjhGTkdaSXR6QU1WN2V3bFBlV0p-fg',
    token: 'T1==cGFydG5lcl9pZD00NTU4NTYzMiZzaWc9OGQ0MThkZGU1NzNmNTE2YWU4MGVhMmUyZGI1YzExYWQ1ZmUzNmRiODpzZXNzaW9uX2lkPTJfTVg0ME5UVTROVFl6TW41LU1UUTNOams1TWpnM016UTJNbjQ0TlZodU1qaEdUa2RhU1hSNlFVMVdOMlYzYkZCbFYwcC1mZyZjcmVhdGVfdGltZT0xNDc5NzYzMDEwJm5vbmNlPTAuMzY5NzY3NzUwMzQwNjg2JnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE0ODIzNTUwMDkmY29ubmVjdGlvbl9kYXRhPSU3QidwYXJ0aWNpcGFudElkJyUzQSdwciclMkMncGFydGljaXBhbnREZXNjciclM0EnRHIlMjBSdXNzJTIwTWVydWxsbyclN0Q=',
    participantId: 'pr',
    participantDescr: 'Dr Russ Merullo'
  };
  // good til 12/19
  mtgs.cpt = {
    sessionId: '2_MX40NTU4NTYzMn5-MTQ3Njk5Mjg3MzQ2Mn44NVhuMjhGTkdaSXR6QU1WN2V3bFBlV0p-fg',
    token: 'T1==cGFydG5lcl9pZD00NTU4NTYzMiZzaWc9NDI3Njk0M2Q0MzRmZmUzYTY4MTEzOWEzNGFlYWEwMzNhMzI5NDdkZTpzZXNzaW9uX2lkPTJfTVg0ME5UVTROVFl6TW41LU1UUTNOams1TWpnM016UTJNbjQ0TlZodU1qaEdUa2RhU1hSNlFVMVdOMlYzYkZCbFYwcC1mZyZjcmVhdGVfdGltZT0xNDc5NzYzMDcyJm5vbmNlPTAuOTE0NTU4ODE4NTg0OTM3OCZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNDgyMzU1MDcxJmNvbm5lY3Rpb25fZGF0YT0lN0IncGFydGljaXBhbnRJZCclM0EncHQnJTJDJ3BhcnRpY2lwYW50RGVzY3InJTNBJ1B0JTIwQW5kcmVzJTIwUml2ZXJhJyU3RA==',
    participantId: 'pt',
    participantDescr: 'Pt Andres Rivera'
  };

  function onButtonClick(event) {
    switch (event.target.id) {
      case 's':
        togglePageAndStyles();
        postEvent({msg: 'enterVC'}, 'navigation');
        break;
      // commands to vc: init, connect, disconnect
      case 'i':
        var params = {
          msg: 'init',
          apiKey: '45585632',
        };
        var m = mtgs[document.querySelector('input:checked').getAttribute('id')];
        for (var key in m) params[key] = m[key];
        postEvent(params);
        break;
      case 'c':
        postEvent({msg: 'connect'});
        break;
      case 'd':
        postEvent({msg: 'disconnect'});
        break;
      case 'x':
        togglePageAndStyles();
        postEvent({msg: 'exitVC'}, 'navigation');
        break;
      case 'e':
        postEvent({msg: 'echo', desc: 'simulated from mobile_in'}, 'test', 'mobile_in');
        break;
      case 'l':
        document.getElementById('log').className = '';
        scrollLogToBottom();
        break;
      case 'h':
        document.getElementById('log').className = 'hidden';
        break;
      case 'b':
        postEvent({msg: 'enterUrlSelector'}, 'navigation');
        break;
      default:
        console.log('unknown button: ', event.target.id);
    }
  }

  function togglePageAndStyles() {
    document.getElementById('startPg').classList.toggle('hidden');
    document.getElementById('vcPg').classList.toggle('hidden');
    document.getElementById('hdr').classList.toggle('vc');
  }

  function postEvent(detail, uberType, custEvent) {
    if (uberType === undefined) uberType = 'videochat';
    if (custEvent === undefined) custEvent = 'mobile_out';
    detail.type = uberType;
    detail.module = 'pweb';
    detail.procId = 'bogus-procId';

    appendToLog(detail, 'TO');

    var event = new CustomEvent(custEvent, {detail: JSON.stringify(detail)});
    window.dispatchEvent(event);
  }

  function appendToLog(object, direction) {
    // object - js object that is the message content
    // direction - 'to' or 'from' (mApp)
    var el = document.getElementById('msg');
    var newLog = '<hr>' + direction + ' mApp<br>' + JSON.stringify(object, null, 4);
    newLog = el.innerHTML + newLog;
    el.innerHTML = newLog;
    if(document.getElementById('log').className !== 'hidden') scrollLogToBottom();
  }

  function scrollLogToBottom() {
    var el = document.getElementById('msg');
    el.scrollTop = el.scrollHeight;
  }

  function onMobileIn(event) {
    // TODO: remove this console log
    console.log('onMobileIn: ', event);
    appendToLog(JSON.parse(event.detail), 'FROM');
  }

  window.onload = function() {
    // set up button handler
    var buttons = document.getElementsByClassName('button');
    for (var b = 0; b < buttons.length; b += 1) {
      buttons[b].addEventListener('click', onButtonClick);
    }
    // set up mobile_in message handler
    window.addEventListener('mobile_in', onMobileIn);
  };
})();

(function() {
  // tokens are routed, publisher, good til Aug 28
  var mtgs = {};
  mtgs.apr = {
    sessionId: '2_MX40NTU4NTYzMn5-MTQ2OTkyODk5NTIxOX5RZXNBOXpFbUhRY1o1VHI0SlhkNERFQUN-fg',
    token: 'T1==cGFydG5lcl9pZD00NTU4NTYzMiZzaWc9NTMyNTE4ZTMwMTA2ZTA0YTU4ZTY3Y2U2M2NkZjBiNGJkZDcyMTdiNTpzZXNzaW9uX2lkPTJfTVg0ME5UVTROVFl6TW41LU1UUTJPVGt5T0RrNU5USXhPWDVSWlhOQk9YcEZiVWhSWTFvMVZISTBTbGhrTkVSRlFVTi1mZyZjcmVhdGVfdGltZT0xNDY5OTI5MTU1Jm5vbmNlPTAuMTc1Mzc4ODI4MDc2NjQ1NzMmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTQ3MjUyMTE1NCZjb25uZWN0aW9uX2RhdGE9JTdCJTIycGFydGljaXBhbnRJZCUyMiUzQSUyMnByJTIyJTJDJTIycGFydGljaXBhbnREZXNjciUyMiUzQSUyMkRyJTIwSm9uYXRoYW4lMjBQcmluY2UlMjIlN0Q=',
    participantId: 'pr',
    participantDescr: 'Dr Jonathan Prince'
  };
  mtgs.apt = {
    sessionId: '2_MX40NTU4NTYzMn5-MTQ2OTkyODk5NTIxOX5RZXNBOXpFbUhRY1o1VHI0SlhkNERFQUN-fg',
    token: 'T1==cGFydG5lcl9pZD00NTU4NTYzMiZzaWc9MmNmMDExYWNlMDdhYTRjNWZiZjk1MzM5ZTYzNjJiNzAyOTcyZmRlNDpzZXNzaW9uX2lkPTJfTVg0ME5UVTROVFl6TW41LU1UUTJPVGt5T0RrNU5USXhPWDVSWlhOQk9YcEZiVWhSWTFvMVZISTBTbGhrTkVSRlFVTi1mZyZjcmVhdGVfdGltZT0xNDY5OTI5MjI0Jm5vbmNlPTAuMDk5MDQ3MDU4MDI5MTAwMyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNDcyNTIxMjI0JmNvbm5lY3Rpb25fZGF0YT0lN0IlMjJwYXJ0aWNpcGFudElkJTIyJTNBJTIycHQlMjIlMkMlMjJwYXJ0aWNpcGFudERlc2NyJTIyJTNBJTIyUHQlMjBTdHUlMjBTb2xvbW9uJTIyJTdE',
    participantId: 'pt',
    participantDescr: 'Pt Stu Solomon'
  };
  mtgs.bpr = {
    sessionId: '1_MX40NTU4NTYzMn5-MTQ2OTkyOTI4NDI5OH5HS1ZKbTkwd3kxTXIzdXprd1BUZXZBTGN-fg',
    token: 'T1==cGFydG5lcl9pZD00NTU4NTYzMiZzaWc9NmNkMTEwNjIyMzgwODRiYTk3MjRlMjI5NjQ1NTU2ZmQ1YzFlZDA1YTpzZXNzaW9uX2lkPTFfTVg0ME5UVTROVFl6TW41LU1UUTJPVGt5T1RJNE5ESTVPSDVIUzFaS2JUa3dkM2t4VFhJemRYcHJkMUJVWlhaQlRHTi1mZyZjcmVhdGVfdGltZT0xNDY5OTI5MzU3Jm5vbmNlPTAuMTIyNTEwOTg1NzA0MTM4ODgmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTQ3MjUyMTM1NyZjb25uZWN0aW9uX2RhdGE9JTdCJTIycGFydGljaXBhbnRJZCUyMiUzQSUyMnByJTIyJTJDJTIycGFydGljaXBhbnREZXNjciUyMiUzQSUyMkRyJTIwS2V2aW4lMjBRdWlubiUyMiU3RA==',
    participantId: 'pr',
    participantDescr: 'Dr Kevin Quinn'
  };
  mtgs.bpt = {
    sessionId: '1_MX40NTU4NTYzMn5-MTQ2OTkyOTI4NDI5OH5HS1ZKbTkwd3kxTXIzdXprd1BUZXZBTGN-fg',
    token: 'T1==cGFydG5lcl9pZD00NTU4NTYzMiZzaWc9OGExNzYzODFmZTIwOTk3YzU1MWRlMmUxNzA3ZjBkOGY2ZjI2ODBlNTpzZXNzaW9uX2lkPTFfTVg0ME5UVTROVFl6TW41LU1UUTJPVGt5T1RJNE5ESTVPSDVIUzFaS2JUa3dkM2t4VFhJemRYcHJkMUJVWlhaQlRHTi1mZyZjcmVhdGVfdGltZT0xNDY5OTI5NDM4Jm5vbmNlPTAuMDE0NjkyNzAyMzMwNjQ4ODk5JnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE0NzI1MjE0MzcmY29ubmVjdGlvbl9kYXRhPSU3QiUyMnBhcnRpY2lwYW50SWQlMjIlM0ElMjJwdCUyMiUyQyUyMnBhcnRpY2lwYW50RGVzY3IlMjIlM0ElMjJQdCUyMEpvaG4lMjBSaXR6JTIyJTdE',
    participantId: 'pt',
    participantDescr: 'Pt John Ritz'
  };
  mtgs.cpr = {
    sessionId: '1_MX40NTU4NTYzMn5-MTQ2OTkyOTQ5MTg5OX51aVozaXZuVm8zYmlZSmFNQy9vMVZ6SVV-fg',
    token: 'T1==cGFydG5lcl9pZD00NTU4NTYzMiZzaWc9ZmEyZWJkNjhiMzJkODFlZjE5YjMwZTcwOTA0ZDZmNmVjY2JhZWI4YTpzZXNzaW9uX2lkPTFfTVg0ME5UVTROVFl6TW41LU1UUTJPVGt5T1RRNU1UZzVPWDUxYVZvemFYWnVWbTh6WW1sWlNtRk5ReTl2TVZaNlNWVi1mZyZjcmVhdGVfdGltZT0xNDY5OTI5NTc2Jm5vbmNlPTAuOTk3Njg2NDIxMjY1ODI1NiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNDcyNTIxNTc1JmNvbm5lY3Rpb25fZGF0YT0lN0IlMjJwYXJ0aWNpcGFudElkJTIyJTNBJTIycHIlMjIlMkMlMjJwYXJ0aWNpcGFudERlc2NyJTIyJTNBJTIyRHIlMjBSdXNzJTIwTWVydWxsbyUyMiU3RA==',
    participantId: 'pr',
    participantDescr: 'Dr Russ Merullo'
  };
  mtgs.cpt = {
    sessionId: '1_MX40NTU4NTYzMn5-MTQ2OTkyOTQ5MTg5OX51aVozaXZuVm8zYmlZSmFNQy9vMVZ6SVV-fg',
    token: 'T1==cGFydG5lcl9pZD00NTU4NTYzMiZzaWc9YjQ4MGNhMzViYjExNDFkZmM3ZTczOTAzMzUyOTFjY2FmY2E5N2RkYjpzZXNzaW9uX2lkPTFfTVg0ME5UVTROVFl6TW41LU1UUTJPVGt5T1RRNU1UZzVPWDUxYVZvemFYWnVWbTh6WW1sWlNtRk5ReTl2TVZaNlNWVi1mZyZjcmVhdGVfdGltZT0xNDY5OTI5NjI5Jm5vbmNlPTAuMjMwNjE5OTM0ODUzMTY2MzQmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTQ3MjUyMTYyOSZjb25uZWN0aW9uX2RhdGE9JTdCJTIycGFydGljaXBhbnRJZCUyMiUzQSUyMnB0JTIyJTJDJTIycGFydGljaXBhbnREZXNjciUyMiUzQSUyMlB0JTIwQW5kcmVzJTIwUml2ZXJhJTIyJTdE',
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

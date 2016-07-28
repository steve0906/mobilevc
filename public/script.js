(function() {

  function onButtonClick(event) {
    switch (event.target.id) {
      case 's':
        postEvent({msg: 'enterVC'}, 'navigation');
        break;
      // commands to vc: init, connect, disconnect
      case 'i':
        postEvent({
          msg: 'init',
          apiKey: '45585632',
          sessionId: '2_MX40NTU4NTYzMn5-MTQ2OTQ4MzkzNTQ4MX5XVWwxV3owaEpzNTBRSVZFcVc4QjRTdE9-fg',
          // token good til 8/23, data = {"id": "pr"}
          token: 'T1==cGFydG5lcl9pZD00NTU4NTYzMiZzaWc9MmVjMmI4Y2M0YTI0ODgwMTA5MDgxMjJjNzdiZTIzYWEyMDk3Nzk5OTpzZXNzaW9uX2lkPTJfTVg0ME5UVTROVFl6TW41LU1UUTJPVFE0TXprek5UUTRNWDVYVld3eFYzb3dhRXB6TlRCUlNWWkZjVmM0UWpSVGRFOS1mZyZjcmVhdGVfdGltZT0xNDY5NDg0MjIwJm5vbmNlPTAuNjI0MzI5ODYxOTUxOTkxOSZyb2xlPW1vZGVyYXRvciZleHBpcmVfdGltZT0xNDcyMDc2MjE5JmNvbm5lY3Rpb25fZGF0YT0lN0IlMjJpZCUyMiUzQSUyMCUyMnByJTIyJTdE',
          // prior token/sessionId
          //token: 'T1==cGFydG5lcl9pZD00NTU4NTYzMiZzaWc9NGI1ZGM0YzllOTA4MTNlYTE0OGYyMTMzYTAxYWVkZWI1OTY0ODNmNzpzZXNzaW9uX2lkPTFfTVg0ME5UVTROVFl6TW41LU1UUTJOalExT1RjMk1USXlNbjV6VDFOb05HVXhXWFJHYlROYVpYQndWbVZDWVdsSllYcC1VSDQmY3JlYXRlX3RpbWU9MTQ2NjQ1OTc5MyZub25jZT0wLjMyMTk1NDkyNzE3NDM3NDQ2JnJvbGU9bW9kZXJhdG9yJmV4cGlyZV90aW1lPTE0NjkwNTE3OTU=',
          //sessionId: '1_MX40NTU4NTYzMn5-MTQ2NjQ1OTc2MTIyMn5zT1NoNGUxWXRGbTNaZXBwVmVCYWlJYXp-UH4'
          participantId: 'pr',
          participantDescr: 'Dr Strangelove'
        });
        break;
      case 'c':
        postEvent({msg: 'connect'});
        break;
      case 'd':
        postEvent({msg: 'disconnect'});
        break;
      case 'x':
        postEvent({msg: 'exitVC'}, 'navigation');
        // TODO transition back to start page
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
      default:
      // no-op
    }
  }

  function postEvent(data, uberType, custEvent) {
    if (uberType === undefined) uberType = 'videochat';
    if (custEvent === undefined) custEvent = 'mobile_out';
    var detail = Object.assign({
      type: uberType,
      module: 'pweb',
      procId: 'bogus-procId'
    }, data);

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

import { useState } from 'react'
import './App.css'
import AcrossTabs from "across-tabs"
import { useRef } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';

var config = {
  onHandshakeCallback: function () { console.log('onHandshakeCallback :>> ', "onHandshakeCallback"); },
  // onPollingCallback: function () { console.log("onPollingCallback"); },
  onReady: function () { console.log("onReady"); },
}

// var parent = new AcrossTabs.Parent(config);


function App() {

  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [tabId, setTabId] = useState("");
  const [clientMessages, setClientMessages] = useState([]);

  const onChildCommunication = useCallback(function (data) {
    console.log("onChildCommunication");
    console.log('data :>> ', data);
    setClientMessages(m => [...m, data])
  }, [])

  config.onChildCommunication = onChildCommunication

  const [parent, setParent] = useState(() => new AcrossTabs.Parent(config));

  // const parent = useRef(new AcrossTabs.Parent(config));
  // const parent = parentRef.current

  let id = useRef();

  function openClient() {
    id.current = parent.openNewTab({ url: url || 'http://localhost:3000/', windowName: 'client' });
    setTabId(id)
  }


  function sendMessageToClient() {
    console.log(' parent.getAllTabs() :>> ', parent.getAllTabs());
    console.log('tabId :>> ', tabId);
    parent.broadCastTo(tabId.current.id, message);
  }


  useEffect(() => {

    const queryString = window.location.search;
    // console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const addEditor = urlParams.get("moe-editor")

    if (addEditor) {
      const script = document.createElement('script');
      script.src = "http://localhost:3000/test.js";
      (document.head || document.documentElement).appendChild(script);
    }

  }, []);


  return (
    <div className="App">
      <input value={url} onChange={e => setUrl(e.target.value)} />

      <button onClick={openClient}>Open Client site</button>

      <br />
      <br />
      <textarea value={message} onChange={e => setMessage(e.target.value)} />

      <br />
      <button onClick={sendMessageToClient}>Send Message To Client</button>

      <br />

      {JSON.stringify(clientMessages)}
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import AcrossTabs from "across-tabs"
import { useRef } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import { Divider } from 'antd';
import { List } from 'antd';
import { message } from 'antd';
import { Typography } from 'antd';
import Title from 'antd/lib/skeleton/Title';

const { TextArea } = Input;
// const { Title } = Typography;

var config = {
  onHandshakeCallback: function () { console.log('onHandshakeCallback :>> ', "onHandshakeCallback"); },
  // onPollingCallback: function () { console.log("onPollingCallback"); },
  onReady: function () { console.log("onReady"); },
}

// var parent = new AcrossTabs.Parent(config);


function App() {

  const [url, setUrl] = useState("");
  const [messageData, setMessage] = useState("");
  const [tabId, setTabId] = useState("");
  const [clientMessages, setClientMessages] = useState([]);

  const onChildCommunication = useCallback(function (data) {
    console.log("onChildCommunication");
    console.log('data :>> ', data);
    message.info(data);
    setClientMessages(m => [...m, data])
  }, [])

  config.onChildCommunication = onChildCommunication

  const [parent, setParent] = useState(() => new AcrossTabs.Parent(config));



  let id = useRef();

  function openClient() {
    id.current = parent.openNewTab({ url: url || 'http://localhost:3000/', windowName: 'client' });
    setTabId(id)
  }


  function sendMessageToClient() {
    console.log(' parent.getAllTabs() :>> ', parent.getAllTabs());
    console.log('tabId :>> ', tabId);
    parent.broadCastTo(tabId.current.id, messageData);
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


      <Typography.Title>Parent web application</Typography.Title>

      <Input value={url} onChange={e => setUrl(e.target.value)} placeholder="Enter client url" />
      <br />
      <br />
      <Button type="primary" onClick={openClient}>Open Client site</Button>

      <br />
      <br />
      <TextArea value={messageData} onChange={e => setMessage(e.target.value)} />
      <br />
      <br />
      <Button type="primary" onClick={sendMessageToClient}>Send Message To Client</Button>

      <br />
      <br />
      <Divider orientation="left">Messages from client</Divider>
      <div style={{ "background": "#fff" }}>



        <List
          bordered
          dataSource={clientMessages}
          renderItem={item => (
            <List.Item>
              <Typography.Text mark>[{url}]</Typography.Text> {item}
            </List.Item>
          )}
        />

      </div>

    </div>
  )
}

export default App

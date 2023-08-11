"use client";

import { Button, Modal } from "antd";

export default function Home() {
  function handleButtonClick() {
    Modal.confirm({
      title: "Modal opened with 'confirm' method",
      footer: (
        <Button
          onClick={() => {
            console.log("Closing all modals");
            Modal.destroyAll();
          }}
        >
          Close all
        </Button>
      ),
    });
  }

  return (
    <main>
      <Button onClick={handleButtonClick}>Open confirm modal</Button>
    </main>
  );
}

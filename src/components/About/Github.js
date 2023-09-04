import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import config from '../../config.js';
function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      
      <GitHubCalendar
        username={config.username}
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;

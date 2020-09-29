import React from "react";

import Row from "../atoms/Row";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Column from "../atoms/Column";
import Spacing from "../atoms/Spacing";
import Typography from "../atoms/Typography";

import { MAILCHIMP_URL } from "../utilities/const";

function Subscribe() {
  return (
    <Column>
      <Spacing bottom="lg">
        <Typography variant="title">Stand out on Facebook and Instagram. Make your posts shine!</Typography>
      </Spacing>
      <Spacing bottom="xs">
        <Typography variant="label">Get notified when we launch</Typography>
      </Spacing>

      <form method="post" target="_blank" action={MAILCHIMP_URL}>
        <Row>
          <Input type="email" name="EMAIL" placeholder="E-mail address" />
          <Button type="submit">Subscribe</Button>
        </Row>
      </form>
    </Column>
  );
}

export default Subscribe;

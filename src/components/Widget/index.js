import React from "react";
import styled from "styled-components";

import Bar from "./Bar";
import Text from "./Text";
import Price from "./Price";
import GiveNowButton from "./GiveNowButton";
import LowerButton from "./LowerButton";
import Tooltip from "./Tooltip";

const WidgetWrapper = styled.div`
  width: 320px;
`;

const BoxWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-bottom: 28px;
`;

const CustomText = styled(Text)`
  color: #56ccf2;
  font-size: 14px;
`;

const Widget = () => (
  <WidgetWrapper className="mx-auto max-w-full">
    <Tooltip>
      <span className="font-bold">$168</span> still needed for this project
    </Tooltip>
    <BoxWrapper className="py-4 px-6">
      <div className="mb-4">
        <Bar percent={69} className="relative" />
      </div>

      <Text className="mb-4">
        <Text as="span" colorType="primary" className="font-bold">
          Only 3 days left
        </Text>{" "}
        to fund this project
      </Text>

      <Text className="mb-4">
        Join the 42 other donors who have already supported this project. Every
        dollar helps.
      </Text>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <Price>
          <Text colorType="light" as="span" className="mr-2">
            $
          </Text>
          <Text as="span" className="font-bold">
            50
          </Text>
        </Price>

        <GiveNowButton className="font-bold">Give Now</GiveNowButton>
      </div>

      <CustomText className="italic">Why give $50?</CustomText>
    </BoxWrapper>

    <div className="flex justify-center">
      <LowerButton className="flex-1 mr-4">Save for later</LowerButton>
      <LowerButton className="flex-1">Tell Your Friends</LowerButton>
    </div>
  </WidgetWrapper>
);

export default Widget;

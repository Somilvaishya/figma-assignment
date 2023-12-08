import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const SettingsSubscriptionSettingPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins gap-5 items-center justify-start mx-auto pb-[60px] w-full">
        <header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
          <Img
            className="h-10 ml-8 md:ml-[0] md:mt-0 my-6"
            src="images/img_group889.svg"
            alt="group889"
          />
          <div className="bg-gray-50 flex md:flex-1 flex-row gap-[105px] items-center justify-center md:ml-[0] ml-[315px] md:mt-0 my-4 p-[11px] rounded-[20px] w-[30%] md:w-full">
            <Img
              className="h-6 ml-2 w-6"
              src="images/img_navigation.svg"
              alt="navigation"
            />
            <Text
              className="mr-[136px] mt-1 text-black-900 text-xl"
              size="txtPoppinsBold20"
            >
              Settings
            </Text>
          </div>
          <div className="flex md:flex-1 flex-row gap-3 items-center justify-center md:ml-[0] ml-[139px] md:mt-0 my-[21px] w-[9%] md:w-full">
            <Img
              className="h-[46px] w-[46px]"
              src="images/img_play.svg"
              alt="play"
            />
            <Text className="text-base text-black-900" size="txtPoppinsBold16">
              Yondu
            </Text>
          </div>
          <Button
            className="flex h-[57px] items-center justify-center ml-10 md:ml-[0] md:mt-0 my-4 w-[57px]"
            shape="round"
          >
            <Img className="h-6" src="images/img_social.svg" alt="social" />
          </Button>
          <Button
            className="flex h-[57px] items-center justify-center ml-3 md:ml-[0] mr-8 md:mt-0 my-4 w-[57px]"
            shape="round"
          >
            <Img
              className="h-6"
              src="images/img_navigation_gray_500.svg"
              alt="navigation_One"
            />
          </Button>
        </header>
        <div className="bg-white-A700 flex flex-col items-center justify-start max-w-[880px] mx-auto px-5 rounded-tl-[20px] rounded-tr-[20px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[99%] md:w-full">
            <div className="flex flex-col items-center justify-start">
              <Img
                className="h-[9px] rounded-bl rounded-br"
                src="images/img_frame35.svg"
                alt="frameThirtyFive"
              />
              <div className="bg-white-A700 flex flex-col items-center justify-end p-[15px] rounded-[12px] w-full">
                <div className="flex flex-row items-center justify-between mt-0.5 w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_television.svg"
                    alt="television"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtPoppinsMedium16"
                    >
                      My Appointment
                    </Text>
                    <Text
                      className="mt-[3px] text-gray-500 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      Show your saved appointment.
                    </Text>
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-end p-[15px] rounded-[12px] w-full">
                <div className="flex flex-row items-center justify-start mt-0.5 w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_action.svg"
                    alt="action"
                  />
                  <div className="flex flex-col items-start justify-start ml-4">
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtPoppinsMedium16"
                    >
                      My Clients
                    </Text>
                    <Text
                      className="mt-[3px] text-gray-500 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      Show your clients.
                    </Text>
                  </div>
                  <Img
                    className="h-6 ml-[117px] w-6"
                    src="images/img_arrowright.svg"
                    alt="arrowright_One"
                  />
                </div>
              </div>
              <div className="bg-gray-50 flex flex-col items-center justify-end p-3.5 rounded-[12px] w-full">
                <div className="flex flex-row items-start justify-start mt-[3px] w-[99%] md:w-full">
                  <Img
                    className="h-6 mt-2.5 w-6"
                    src="images/img_audiovideo.svg"
                    alt="audiovideo"
                  />
                  <div className="flex flex-col items-start justify-start ml-4">
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtPoppinsMedium16"
                    >
                      Subscription Setting
                    </Text>
                    <Text
                      className="mt-[3px] text-gray-500 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      Manage your price.
                    </Text>
                  </div>
                  <Img
                    className="h-6 ml-[82px] mt-2.5 w-6"
                    src="images/img_arrowright.svg"
                    alt="arrowright_Two"
                  />
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-end p-[15px] rounded-[12px] w-full">
                <div className="flex flex-row items-center justify-between mt-0.5 w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_action_blue_a700.svg"
                    alt="action_One"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtPoppinsMedium16"
                    >
                      Security Access
                    </Text>
                    <Text
                      className="mt-[3px] text-gray-500 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      Show your saved appointment.
                    </Text>
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowright.svg"
                    alt="arrowright_Three"
                  />
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-end p-[15px] rounded-[12px] w-full">
                <div className="flex flex-row items-start justify-between mt-[3px] w-full">
                  <Img
                    className="h-6 mt-[11px] w-6"
                    src="images/img_social_blue_a700.svg"
                    alt="social_One"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtPoppinsMedium16"
                    >
                      Notification Settings
                    </Text>
                    <Text
                      className="mt-[3px] text-gray-500 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      Change yout notification settings.
                    </Text>
                  </div>
                  <Img
                    className="h-6 mt-[11px] w-6"
                    src="images/img_arrowright.svg"
                    alt="arrowright_Four"
                  />
                </div>
              </div>
              <div className="bg-white-A700 flex flex-col items-center justify-end p-3.5 rounded-[12px] w-full">
                <div className="flex flex-row items-start justify-between mt-[3px] w-[99%] md:w-full">
                  <Img
                    className="h-6 mt-2.5 w-6"
                    src="images/img_action_blue_a700_24x24.svg"
                    alt="action_Two"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-base text-blue_gray-900"
                      size="txtPoppinsMedium16"
                    >
                      Payment Settings
                    </Text>
                    <Text
                      className="mt-[3px] text-gray-500 text-sm"
                      size="txtPoppinsMedium14"
                    >
                      Change your payment settings.
                    </Text>
                  </div>
                  <Img
                    className="h-6 mt-2.5 w-6"
                    src="images/img_arrowright.svg"
                    alt="arrowright_Five"
                  />
                </div>
              </div>
              <Input
                name="frameThirtyTwo"
                placeholder="Logout"
                className="font-medium leading-[normal] p-0 placeholder:text-red-500 text-base text-left w-full"
                wrapClassName="w-full"
              ></Input>
            </div>
            <Line className="bg-gray-300 h-[551px] md:h-px md:w-full w-px" />
            <div className="flex flex-col gap-[31px] items-center justify-start">
              <Text
                className="text-black-900 text-center text-lg"
                size="txtPoppinsBold18"
              >
                Subscription Setting
              </Text>
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start pb-32 md:px-10 px-32 sm:px-5 w-full">
                  <Text
                    className="sm:text-[34px] md:text-[40px] text-[44px] text-blue-A700 text-center"
                    size="txtPoppinsMedium44"
                  >
                    $25
                  </Text>
                  <div className="flex flex-row gap-1 items-center justify-start mb-[154px] mt-1 w-auto">
                    <Text
                      className="text-black-900 text-sm w-auto"
                      size="txtPoppinsMedium14Black900"
                    >
                      Weekly
                    </Text>
                    <Text
                      className="text-gray-500 text-sm w-auto"
                      size="txtPoppinsMedium14"
                    >
                      •
                    </Text>
                    <Text
                      className="text-gray-500 text-sm w-auto"
                      size="txtPoppinsMedium14"
                    >
                      2 Appointments
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[436px] sm:min-w-full rounded-lg text-center text-sm"
                  color="blue_A700"
                  size="xs"
                >
                  Edit Price
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsSubscriptionSettingPage;

import React, { FormEvent, useEffect, useState } from "react";
import { Flex, Span, Text } from "../common";
import { Option } from "@/interface/auth";
import { Input, PasswordInput } from "@/assets/ezzyly/inputs/Input";
import { Checkbox } from "@/assets/ezzyly/inputs/Checkbox";
import { Buttons } from "@/assets/ezzyly/Buttons";
import { ToastComponent } from "@/assets/ezzyly/specials/Toast";
import { City, Country, State } from "country-state-city";

import {
  ProfileIcon,
  ActiveProfileIcon,
  // BriefCase,
  // ActiveBriefCase,
  Phone,
  ActivePhone,
  SmsIcon,
  ActiveSmsIcon,
  LockIcon,
  ActiveLockIcon,
  ActiveMapIcon,
  Map,
} from "@/assets/inputs";
import { useRegister } from "@/helpers/api/useAuth";
import toast from "react-hot-toast";
import { PAGES } from "@/utils/pages";
import { Dropdown } from "@/assets/ezzyly/dropdown/Dropdown";

function RegisterComponent() {
  const [selectedCountry, setSelectedCountry] = useState<Option>()
  const [selectedState, setSelectedState] = useState<Option>()
  const [selectedCity, setSelectedCity] = useState<Option>()
  const { formik, isLoading, isSuccess, isError, error } = useRegister();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.custom((t) => (
        <ToastComponent t={t} status="success" title="Account Created" />
      ));
    } else if (isError) {
      toast.custom((t) => (
        <ToastComponent
          t={t}
          status="error"
          title="Signup Failed"
          description={error}
        />
      ));
    }
  }, [isSuccess, isError]);
  useEffect(() => {
    formik.validateForm();
  }, []);

  return (
    <Flex
      className={
        "w-full lg:w-[494px] lg:mt-4 mt-2 flex-col rounded-2xl md:text-center lg:py-10 px-6 bg-white mx-8 py-6"
      }
    >
      <Flex className="flex-col justify-center text-center items-center gap-2">
        <Text className="text-neutral_white_l11 justify-start text-start items-start font-bold leading-[31.05px] text-[23px]">
          Let’s get you started
        </Text>
        <Text className="font-normal text-mixed_m5 text-md">
          We just need a few details to sign you up
        </Text>
      </Flex>
      {/* form fields */}
      <form
        autoComplete="false"
        onSubmit={handleSubmit}
        className="flex flex-col mt-2 space-y-4"
      >
        {/* to falsify auto complete */}
        <Input
          variant="primary"
          autoComplete="false"
          containerClassName="hidden"
        />
        <Input
          lefticon={ProfileIcon}
          variant="primary"
          activelefticon={ActiveProfileIcon}
          aria-autocomplete="none"
          autoComplete="new-password"
          placeholder="First Name"
          name="firstName"
          disabled={isLoading}
          value={formik.values.firstName}
          error={
            formik.errors.firstName && formik.touched.firstName ? true : false
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Input
          lefticon={ProfileIcon}
          variant="primary"
          activelefticon={ActiveProfileIcon}
          aria-autocomplete="none"
          autoComplete="new-password"
          placeholder="Last Name"
          name="lastName"
          disabled={isLoading}
          value={formik.values.lastName}
          error={
            formik.errors.lastName && formik.touched.lastName ? true : false
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Input
          lefticon={Phone}
          variant="primary"
          activelefticon={ActivePhone}
          aria-autocomplete="none"
          autoComplete="new-password"
          placeholder="Phone Number"
          name="phoneNumber"
          disabled={isLoading}
          value={formik.values.phoneNumber}
          error={
            formik.errors.phoneNumber && formik.touched.phoneNumber
              ? true
              : false
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Input
          lefticon={SmsIcon}
          variant="primary"
          activelefticon={ActiveSmsIcon}
          aria-autocomplete="none"
          placeholder="Email Address"
          name="email"
          disabled={isLoading}
          value={formik.values.email}
          error={formik.errors.email && formik.touched.email ? true : false}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {/* <Dropdown
          placeholder="Primary role"
          name="role"
          isDisabled={isLoading}
          value={selectedRole ?? ""}
          error={formik.errors.role && formik.touched.role ? true : false}
          onChange={(value) => {
            if (value) {
              const selectedOption = value as Option;
              setSelectedRole(selectedOption);
              formik.setFieldValue("role", selectedOption.value);
            } else {
              setSelectedRole(null); // Handle the case when null is passed
              formik.setFieldValue("role", null);
            }
          }}
          onBlur={() => {
            formik.setFieldTouched("role", true);
          }}
          options={[
            { label: "School owner", value: "school_owner" },
            { label: "School admin", value: "school_admin" },
            { label: "School staff", value: "school_staff" },
            { label: "School accountant", value: "school_accountant" },
          ]}
          className="items-start text-start justify-start"
          Icon={SmsIcon}
          ActiveIcon={ActiveSmsIcon}
        /> */}
        <Input
          lefticon={SmsIcon}
          variant="primary"
          activelefticon={ActiveSmsIcon}
          aria-autocomplete="none"
          placeholder="Username"
          name="username"
          disabled={isLoading}
          value={formik.values.username}
          error={
            formik.errors.username && formik.touched.username ? true : false
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Input
          lefticon={SmsIcon}
          variant="primary"
          activelefticon={ActiveSmsIcon}
          aria-autocomplete="none"
          placeholder="AddressLine1"
          name="addressLine1"
          disabled={isLoading}
          value={formik.values.addressLine1}
          error={
            formik.errors.addressLine1 && formik.touched.addressLine1
              ? true
              : false
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Input
          lefticon={SmsIcon}
          variant="primary"
          activelefticon={ActiveSmsIcon}
          aria-autocomplete="none"
          placeholder="AddressLine2"
          name="addressLine2"
          disabled={isLoading}
          value={formik.values.addressLine2}
          error={
            formik.errors.addressLine2 && formik.touched.addressLine2
              ? true
              : false
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
      />
        <Dropdown
          placeholder="Country"
          name="country"
          isDisabled={isLoading}
          value={selectedCountry || ""}
          error={formik.errors.country && formik.touched.country ? true : false}
          onChange={(value) => {
            if (value) {
              const selectedOption = value as Option;
              setSelectedCountry(selectedOption);
              formik.setFieldValue("country", selectedOption.value);
            } else {
              formik.setFieldValue("country", null);
            }
          }}
          onBlur={() => {
            formik.setFieldTouched("country", true);
          }}
          options={Country.getAllCountries().map((item: any) => ({
            label: item.name,
            value: item.name,
            name: item.isoCode,
          }))}
          className="items-start text-start justify-start rounded-lg border border-[#CFD9DE] "
          Icon={Map}
          ActiveIcon={ActiveMapIcon}
        />
        <Dropdown
          placeholder="State"
          name="state"
          isDisabled={isLoading}
          value={selectedState || ""}
          error={formik.errors.state && formik.touched.state ? true : false}
          onChange={(value) => {
            if (value) {
              const selectedOption = value as Option;
              setSelectedState(selectedOption);
              formik.setFieldValue("state", selectedOption.value);
            } else {
              formik.setFieldValue("state", null);
            }
          }}
          onBlur={() => {
            formik.setFieldTouched("state", true);
          }}
          options={State.getStatesOfCountry(selectedCountry?.name).map(
            (item: any) => ({
              label: item.name,
              value: item.name,
              name: item.isoCode,
            })
          )}
          className="items-start text-start justify-start rounded-lg border border-[#CFD9DE] "
          Icon={Map}
          ActiveIcon={ActiveMapIcon}
        />
        <Dropdown
          placeholder="City"
          name="city"
          isDisabled={isLoading}
          value={selectedCity || ""}
          error={formik.errors.city && formik.touched.city ? true : false}
          onChange={(value) => {
            if (value) {
              const selectedOption = value as Option;
              setSelectedCity(selectedOption);
              formik.setFieldValue("city", selectedOption.value);
            } else {
              formik.setFieldValue("city", null);
            }
          }}
          onBlur={() => {
            formik.setFieldTouched("city", true);
          }}
          options={City.getCitiesOfState(
            !selectedCountry?.name ? "" : selectedCountry.name,
            !selectedState?.name ? "" : selectedState.name
          ).map((item: any) => ({ label: item.name, value: item.name }))}
          className="items-start text-start justify-start rounded-lg border border-[#CFD9DE] "
          Icon={Map}
          ActiveIcon={ActiveMapIcon}
        />
        <Input
          lefticon={Map}
          variant="primary"
          type={"number"}
          activelefticon={ActiveMapIcon}
          aria-autocomplete="none"
          placeholder="zipcode"
          name="zipcode"
          disabled={isLoading}
          value={formik.values.zipcode}
          error={formik.errors.zipcode && formik.touched.zipcode ? true : false}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <PasswordInput
          lefticon={LockIcon}
          activelefticon={ActiveLockIcon}
          placeholder="Create password"
          autoComplete="false"
          className="text-mixed_m5"
          name="password"
          disabled={isLoading}
          value={formik.values.password}
          error={
            formik.errors.password && formik.touched.password ? true : false
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <PasswordInput
          lefticon={LockIcon}
          activelefticon={ActiveLockIcon}
          placeholder="Confirm Password"
          autoComplete="false"
          className="text-mixed_m5"
          name="confirmPassword"
          disabled={isLoading}
          value={formik.values.confirmPassword}
          error={
            formik.errors.confirmPassword && formik.touched.confirmPassword
              ? true
              : false
          }
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Flex className="relative mt-5 flex-col justify-center bg-white">
          <Flex className="w-full px-3 items-center text-start gap-2 mx-auto mt-2 ">
            <Flex>
              <Checkbox
                name="terms"
                disabled={isLoading}
                checked={formik.values.terms}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Flex>
            <Text className="text-brown_m2 text-sm ">
              By ticking this box, you affirm that you fully agree with our
              <Span className="text-vibing_blue_x mr-1 ml-1">Terms of Use</Span>
              and
              <Span className="text-vibing_blue_x mr-1 ml-1">
                Privacy Policy.
              </Span>
            </Text>
          </Flex>
        </Flex>
        <Flex>
          <Buttons
            variant="primary"
            type="submit"
            isLoading={isLoading}
            disabled={!formik.isValid || isLoading}
            className="text-[15px] font-bold px-[20px] mb-4 mt-4 lg:py-[18px] py-[16px]"
            size="full"
          >
            Setup Account
          </Buttons>
        </Flex>
      </form>
      <Flex className="w-full justify-center relative px-1 text-sm md:text-base mb-3 mt-2">
        <Text className="text-center text-mixed_m5 ">
          Already have an account?
          <a href={PAGES.LOGIN} className="cursor-pointer">
            <span className="text-vibing_blue_x ml-2 font-medium">Login</span>
          </a>
        </Text>
      </Flex>
    </Flex>
  );
}

export default RegisterComponent;

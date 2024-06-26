import React, { FormEvent, useEffect, useState } from "react";
import { Text, Flex } from "../common";

import { CatOption, Option } from "@/interface/auth";
import { Buttons } from "@/assets/ezzyly/Buttons";
import {
  RegistrationNumber,
  ActiveRegistrationNumber,
  Map,
  ActiveMapIcon,
  Calendar,
  ActiveCalendar,
  SmsIcon,
  ActiveSmsIcon,
  BriefCase,
  ActiveBriefCase,
  Gps,
  ActivePhone,
  Phone,
} from "@/assets/inputs";
import { useOnboard } from "@/helpers/api/useAuth";
import toast from "react-hot-toast";
import { Category } from "@/json/categories";
import { ToastComponent } from "@/assets/ezzyly/specials/Toast";
import { Input } from "@/assets/ezzyly/inputs/Input";
import { Dropdown } from "@/assets/ezzyly/dropdown/Dropdown";
import { City, Country, State } from "country-state-city";
import ActiveGps from "@/assets/inputs/ActiveGps";

function ServiceProviderComponent() {
  const { formik, isLoading, error, isError, isSuccess } = useOnboard();
  const [selectedCountry, setSelectedCountry] = useState<Option>();
  const [selectedState, setSelectedState] = useState<Option>();
  const [selectedCity, setSelectedCity] = useState<Option>();
  // const [selectedState, setSelectedState] = useState<Option | null>(null);
  // const [selectedCity, setSelectedCity] = useState<Option | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CatOption | null>(
    null
  );
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
  useEffect(() => {
    console.log(formik.values);
  }, [selectedCategory]);

  return (
    <Flex
      className={
        "lg:justify-end lg:w-[29rem] sm:w-[28rem] mx-4 flex-col rounded-2xl md:text-center md:px-2 bg-white"
      }
    >
      <Flex className={"flex-col justify-start items-start pl-3 lg:gap-2"}>
        <Text className="text-mixed_m6 mb-2 mt-10 lg:mt-3 font-bold leading-[31.05px] text-[22px] md:text-[23px]">
          Create your Business Profile
        </Text>
        <Text className="text-brown mt-3 lg:mt-0 text-[15px] md:text-base leading-[24px]">
          Potential customers are looking to hire you.
        </Text>
      </Flex>

      {/* form fields */}
      <form
        autoComplete="false"
        className=" w-full flex flex-col mt-2 space-y-4"
        onSubmit={handleSubmit}
      >
        <Flex className="flex-col overflow-scrol px-3 space-y-4 ">
          {/* to falsify auto complete */}
          <Input
            variant="primary"
            autoComplete="false"
            containerClassName="hidden"
          />
          <Input
            lefticon={BriefCase}
            variant="primary"
            name="name"
            value={formik.values.name}
            disabled={isLoading}
            error={formik.errors.name && formik.touched.name ? true : false}
            activelefticon={ActiveBriefCase}
            aria-autocomplete="none"
            autoComplete="new-password"
            placeholder="Business Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            lefticon={SmsIcon}
            variant="primary"
            name="description"
            value={formik.values.description}
            disabled={isLoading}
            error={
              formik.errors.description && formik.touched.description
                ? true
                : false
            }
            activelefticon={ActiveSmsIcon}
            aria-autocomplete="none"
            autoComplete="new-password"
            placeholder="Business Description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            lefticon={Calendar}
            variant="primary"
            name="dateOfInc"
            value={formik.values.dateOfInc}
            disabled={isLoading}
            type={"date"}
            error={
              formik.errors.dateOfInc && formik.touched.dateOfInc ? true : false
            }
            activelefticon={ActiveCalendar}
            aria-autocomplete="none"
            autoComplete="none"
            placeholder="Date of Incorporation"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            lefticon={RegistrationNumber}
            variant="primary"
            name="licenseNo"
            value={formik.values.licenseNo}
            disabled={isLoading}
            error={
              formik.errors.licenseNo && formik.touched.licenseNo ? true : false
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            activelefticon={ActiveRegistrationNumber}
            aria-autocomplete="none"
            autoComplete="none"
            placeholder="License Number"
          />
          <Input
            lefticon={RegistrationNumber}
            variant="primary"
            name="einTinNo"
            value={formik.values.einTinNo}
            disabled={isLoading}
            error={
              formik.errors.einTinNo && formik.touched.einTinNo ? true : false
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            activelefticon={ActiveRegistrationNumber}
            aria-autocomplete="none"
            autoComplete="none"
            placeholder="Ein / Tax No"
          />
          <Input
            lefticon={Phone}
            variant="primary"
            name="phone"
            value={formik.values.phone}
            disabled={isLoading}
            error={formik.errors.phone && formik.touched.phone ? true : false}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            activelefticon={ActivePhone}
            aria-autocomplete="none"
            autoComplete="none"
            placeholder="Phone Number"
          />

          <Dropdown
            placeholder="Select Category"
            name="category"
            isDisabled={isLoading}
            value={selectedCategory ?? ""}
            error={
              formik.errors.categoryId && formik.touched.categoryId
                ? true
                : false
            }
            onChange={(value) => {
              if (value) {
                const selectedCategory = value as unknown as CatOption;
                setSelectedCategory(selectedCategory);
                formik.setFieldValue("categoryId", selectedCategory.value);
              } else {
                setSelectedCategory(null);
                formik.setFieldValue("categoryId", null);
              }
            }}
            onBlur={() => {
              formik.setFieldTouched("categoryId", true);
            }}
            options={Category.map((cat) => ({
              label: cat.name,
              value: cat.id,
            }))}
            className="text-start w-full justify-start mr-4 items-start"
            Icon={Map}
            ActiveIcon={ActiveMapIcon}
          />

          <Input
            lefticon={Map}
            variant="primary"
            name="address"
            value={formik.values.address}
            disabled={isLoading}
            error={
              formik.errors.address && formik.touched.address ? true : false
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            activelefticon={ActiveMapIcon}
            aria-autocomplete="none"
            autoComplete="none"
            placeholder="Address"
          />
          <Dropdown
            placeholder="Country"
            name="country"
            isDisabled={isLoading}
            value={selectedCountry || ""}
            error={
              formik.errors.country && formik.touched.country ? true : false
            }
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
            Icon={Gps}
            ActiveIcon={ActiveGps}
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
            Icon={Gps}
            ActiveIcon={ActiveGps}
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
            Icon={Gps}
            ActiveIcon={ActiveGps}
          />
          <Input
            lefticon={Map}
            variant="primary"
            activelefticon={ActiveMapIcon}
            aria-autocomplete="none"
            placeholder="zipcode"
            name="zipcode"
            disabled={isLoading}
            value={formik.values.zipcode}
            error={
              formik.errors.zipcode && formik.touched.zipcode ? true : false
            }
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {/*    <Dropdown
            placeholder="Select state"
            name="state"
            isDisabled={isLoading}
            value={selectedState ?? ""}
            error={formik.errors.state && formik.touched.state ? true : false}
            onChange={(value) => {
              if (value) {
                const selectedOption = value as Option;
                setSelectedState(selectedOption);
                formik.setFieldValue("state", selectedOption.value);
              } else {
                setSelectedState(null);
                formik.setFieldValue("state", null);
              }
            }}
            onBlur={() => {
              formik.setFieldTouched("state", true);
            }}
            options={State.map((item) => ({
              label: item.name,
              value: item.value,
            }))}
            className="text-start w-full justify-start mr-4 items-start"
            Icon={Map}
            ActiveIcon={ActiveMapIcon}
          />
           <Dropdown
            placeholder="Select City"
            name="city"
            isDisabled={isLoading}
            value={selectedCity ?? ""}
            error={formik.errors.city && formik.touched.city ? true : false}
            onChange={(value) => {
              if (value) {
                const selectedOption = value as Option;
                setSelectedCity(selectedOption);
                formik.setFieldValue("city", selectedOption.value);
              } else {
                setSelectedCity(null);
                formik.setFieldValue("city", null);
              }
              console.log(selectedCity);
            }}
            onBlur={() => {
              formik.setFieldTouched("city", true);
            }}
            options={
              selectedState
                ? State.filter(
                    (item) => item.value === selectedState.value
                  )[0]?.cities.map((city) => ({
                    label: city,
                    value: city,
                  }))
                : []
            }
            className="text-start w-full justify-start mr-3 items-start"
            Icon={Gps}
            ActiveIcon={ActiveGps}
          /> */}
        </Flex>
        <Flex className="relative flex-col justify-start items-start">
          {/* <Flex className="w-full px-3 items-center text-start gap-2 mx-auto ">
            <Flex className={" "}>
              <SecuritySafe />
            </Flex>
            <Text className="text-brown_m2 text-sm mt-2">
              We ensure your safety with state-of-the-art encryption. See our
              <Span className="text-vibing_blue_x mr-1 ml-1">
                Privacy Policy
              </Span>
              for more info.
            </Text>
          </Flex> */}
          {/* <Input
            lefticon={SmsIcon}
            variant="primary"
            name="email"
            value={formik.values.email}
            disabled={isLoading}
            error={formik.errors.email && formik.touched.email ? true : false}
            activelefticon={ActiveSmsIcon}
            placeholder="Email address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          /> */}
          <Flex className="px-3 w-full">
            <Buttons
              variant="primary"
              className="text-[15px] font-bold px-[20px] mt-3 py-[14px] lg:py-[14px]"
              size="full"
              isLoading={isLoading}
              disabled={!formik.isValid || isLoading}
              type="submit"
            >
              Create Profile
            </Buttons>
          </Flex>
        </Flex>
      </form>
      {/* create new account */}
    </Flex>
  );
}

export default ServiceProviderComponent;

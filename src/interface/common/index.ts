import { HtmlHTMLAttributes } from "react";
import { NextPage } from "next";

export interface TextProperty extends HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export interface Layouts extends HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export interface Table {
  thead?: string[];
  content?: React.ReactNode;
  setopenViewClassModal?: () => void;
}

export interface modalProps {
  open?: boolean;
  close?: () => void;
}

export interface Deletemodalprops {
  handleDelete: () => void;
  open: boolean | undefined;
  closeDeleteModal: () => void;
}
// interface ClassData {
//   class: string;
//   level: string;
//   classSize: number;
//   fees: number;
//   paymentSchedule: string;
//   paymentSession: string;
// }
export interface ClassDataProps {
  _id: string;
  schoolPartner: string;
  class: string;
  level: string;
  paymentSchedule: string;
  paymentSession: string;
  classSize: string;
  fee: string;
}
export interface Createclassmodalprops {
  open: boolean;
  close?: () => void;
  classData?: ClassDataProps;
  onSuccess?: () => void;
}
export interface TableRowProps {
  setopenViewClassModal: (arg1: boolean) => void;
  // setopenViewClassModal?: () => void;
}
type GetLayoutFunc = (page: React.ReactElement) => React.ReactElement;

export type NextPageWithLayout = NextPage & {
  getLayout?: GetLayoutFunc;
  requireAuth?: boolean;
};

export interface Layouts extends HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  title?: string;
  childClassName?: string;
  feeAdvance?: boolean;
  getLayout?: GetLayoutFunc;
  requireAuth?: boolean;
}

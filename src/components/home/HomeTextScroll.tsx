"use client"

import { TextScroll } from "../skiperui/text-scroll"
import { FaArrowTrendUp } from "react-icons/fa6";


export function HomeTextScroll() {
  return (
    <TextScroll
      className="font-display text-center text-4xl font-semibold tracking-tighter text-black dark:text-white md:text-7xl md:leading-[5rem]"
      text={
        <>
          <FaArrowTrendUp className="inline-block mr-3 text-[#046381]" />{" "}
          <span className="text-gray-800 font-semibold">The Best</span>{" "}
          <span className="text-[#046381] font-bold">Transportation</span>{" "}
          <span className="italic text-gray-800 font-semibold">Services</span>
        </>
      }
      default_velocity={1}
    />
  )
}

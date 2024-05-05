"use client";
import { useEffect, useState } from "react";
import {
  Button,
  Input,
  Tooltip,
  ConfigProvider,
  Popover,
  Segmented,
} from "antd";
import Image from "next/image";
import Link from "next/link";
import { SearchOutlined } from "@ant-design/icons";
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { PiBagSimpleFill } from "react-icons/pi";
import { MdOutlineFavorite } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { AllImages } from "@/assets/AllImages";
// import NotificationContent from "../NotificationContent/NotificationContent";

const Navbar = () => {
  const path = usePathname();
  // console.log(path);
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Add useEffect hook to update screen size state on mount
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set breakpoint as per your design
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize on mount to set initial screen size
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  };

  const handleMobileMenuClick = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseEnter2 = () => {
    setHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setHovered2(false);
  };

  const select = (index) => {
    setSelected(index);
    setMobileMenuVisible(false); // Close mobile menu when an item is selected
  };

  const menu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About us",
      link: "/about-us",
    },
    {
      name: "Courses",
      link: "/courses",
    },
    {
      name: "Contact us",
      link: "/contact-us",
    },
  ];

  return (
    <div className=" container mx-auto relative z-30">
      <div className=" flex items-center justify-between py-4 gap-16">
        <div className="flex items-center ">
          <Link href="/">
            <Image
              src={AllImages.logo}
              alt="logo"
              className="lg:h-20 h-16 w-auto"
            />
          </Link>
          <div className="ml-4 hidden lg:flex">
            {menu.map((item, index) => (
              <Link href={item.link} key={index}>
                <Button
                  className={`px-4 cursor-pointer font-medium text-lg duration-200 hover:scale-105 border-none ml-3 shadow-none hover:text-white ${
                    path.startsWith("/") ||
                    path.startsWith("/profile") ||
                    path.startsWith("/about-us") ||
                    path.startsWith("/payment-method") ||
                    path.startsWith("/contact-us") ||
                    path.startsWith("/courses")
                      ? "text-black"
                      : "text-white"
                  }`}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: path.startsWith(item.link) && "#0A6847",
                  }}
                  onClick={() => select(index)}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:flex items-center hidden -mr-48">
          {searchVisible ? (
            <Input
              placeholder="Search"
              prefix={<SearchOutlined />}
              className="w-48"
              onBlur={() => setSearchVisible(false)}
            />
          ) : (
            <Tooltip title="search">
              <Button
                onClick={handleSearchClick}
                shape="circle"
                icon={
                  <SearchOutlined className="h-7 w-7 items-center justify-center -mt-1  hover:text-site-color" />
                }
              />
            </Tooltip>
          )}

          <Popover
            placement="leftTop"
            content="notification"
            // content={NotificationContent}
            // arrow={mergedArrow}
          >
            <Tooltip title="notification" className="ml-3 hover:bg-transparent">
              <Button
                shape="circle"
                icon={
                  <IoIosNotificationsOutline className="h-7 w-7 items-center justify-center -mt-1  hover:text-site-color" />
                }
              />
            </Tooltip>
          </Popover>

          {path === "/" ? (
            <>
              <Link href="/login">
                <Button
                  className="border-none text-white border-site-color  mx-3 hover:rounded-tl-xl hover:rounded-br-xl hover:rounded-tr-none hover:rounded-bl-none"
                  style={{
                    color: hovered ? "black" : "white",
                    backgroundColor: hovered ? "#0A6847" : "transparent",
                    border: "1px solid #0A6847",
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Sign In
                </Button>
              </Link>

              <Link href="/signup">
                <Button
                  className="border-none text-white border-site-color hover:rounded-tl-xl hover:rounded-br-xl hover:rounded-tr-none hover:rounded-bl-none"
                  style={{
                    color: hovered2 ? "black" : "white",
                    backgroundColor: hovered2 ? "#0A6847" : "transparent",
                    border: "1px solid #0A6847",
                  }}
                  onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}
                >
                  Sign Up
                </Button>
              </Link>
            </>
          ) : (
            <Link href="/login">
              <Button
                className="border-none  border-site-color hover:rounded-tl-xl hover:rounded-br-xl hover:rounded-tr-none hover:rounded-bl-none ml-5 "
                style={{
                  backgroundColor: hovered2 ? "#0A6847" : "transparent",
                  border: "1px solid #0A6847",
                  color:
                    hovered2 &&
                    (path !== "/profile" ||
                      path.startsWith(!"/details") ||
                      path.startsWith(!"/membership-plan") ||
                      path.startsWith(!"/message"))
                      ? "white"
                      : "black",
                }}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                <span
                  className={`hover:text-white ${
                    path.startsWith("/profile") ||
                    path.startsWith("/about-us") ||
                    path.startsWith("/payment-method") ||
                    path.startsWith("/contact-us") ||
                    path.startsWith("/courses")
                      ? "text-black"
                      : "text-white"
                  }`}
                >
                  Log Out
                </span>
              </Button>
            </Link>
          )}

          {path !== "/" && (
            <Link href="/profile">
              <button>
                <CgProfile
                  className={`h-7 w-7 items-center ml-3 hover:text-site-color ${
                    path.startsWith("/profile") ||
                    path.startsWith("/about-us") ||
                    path.startsWith("/payment-method") ||
                    path.startsWith("/contact-us") ||
                    path.startsWith("/courses")
                      ? "text-black"
                      : "text-white"
                  }`}
                />
              </button>
            </Link>
          )}
        </div>

        <div className="flex items-center">
          <div className="flex lg:hidden mr-2">
            <Tooltip title="Search">
              <Button
                onClick={handleSearchClick}
                shape="circle"
                icon={
                  <SearchOutlined className="h-7 w-7 items-center justify-center -mt-1  hover:text-orange-600" />
                }
              />
            </Tooltip>
          </div>

          <div className="mr-2 lg:hidden">
            <Popover
              placement="bottom"
              content="notification"
              // content={NotificationContent}
              // arrow={mergedArrow}
            >
              <Tooltip title="Notification">
                <Button
                  shape="circle"
                  icon={
                    <IoIosNotificationsOutline className="h-7 w-7 items-center justify-center -mt-1  hover:text-orange-600" />
                  }
                />
              </Tooltip>
            </Popover>
          </div>

          <div className="mr-2 lg:hidden">
            {path !== "/" && (
              <Link href="/profile">
                <Button
                  shape="circle"
                  icon={
                    <CgProfile className="h-7 w-7 items-center justify-center -mt-1  hover:text-orange-600" />
                  }
                />
              </Link>
            )}
          </div>

          <div className="lg:hidden">
            <Button
              shape="circle"
              icon={
                <IoMenu className="h-7 w-7 items-center justify-center -mt-1  hover:text-orange-600" />
              }
              onClick={handleMobileMenuClick}
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuVisible && (
        <div className="container mx-auto py-2 lg:hidden">
          <div className="flex flex-col items-center">
            {menu.map((item, index) => (
              <Link href={item.link} key={index}>
                <Button
                  className={`px-4 cursor-pointer capitalize font-medium duration-200 hover:scale-105 border-none mb-2 ${
                    selected === index ? "text-black" : "text-gray-900"
                  }`}
                  style={{
                    backgroundColor: "transparent",
                    color: selected === index ? "#0A6847" : "black",
                  }}
                  onClick={() => select(index)}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
            {path === "/" ? (
              <>
                <Link href="/login">
                  <Button
                    className="border-none text-black border-site-color  mx-3 hover:rounded-tl-xl hover:rounded-br-xl hover:rounded-tr-none hover:rounded-bl-none"
                    style={{
                      color: "white",
                      backgroundColor: hovered ? "#0A6847" : "transparent",
                      border: "1px solid #0A6847",
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    Sign In
                  </Button>
                </Link>

                <Link href="/signup">
                  <Button
                    className="border-none text-black border-site-color hover:rounded-tl-xl hover:rounded-br-xl hover:rounded-tr-none hover:rounded-bl-none"
                    style={{
                      color: "white",
                      backgroundColor: hovered2 ? "#0A6847" : "transparent",
                      border: "1px solid #0A6847",
                    }}
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            ) : (
              <Button
                className="border-none text-white border-site-color hover:rounded-tl-xl hover:rounded-br-xl hover:rounded-tr-none hover:rounded-bl-none"
                style={{
                  color: "black",
                  backgroundColor: hovered2 ? "#0A6847" : "transparent",
                  border: "1px solid #0A6847",
                }}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                Log Out
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Search input for mobile */}
      {searchVisible && (
        <div className="container mx-auto my-4 lg:hidden">
          <Input
            placeholder="Search"
            prefix={<SearchOutlined className="text-gray-400" />}
            className="w-full"
            onBlur={() => setSearchVisible(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;

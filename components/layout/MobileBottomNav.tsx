import Link from "next/link";

const MobileBottomNav = () => {
  return (
    <div className="fixed w-full z-39 shadow-lg text-xs leading-3 bottom-0 bg-linear-to-t from-[#f2f2f2] to-[#ececec] block sm:hidden">
      <ul className="list-none text-center m-0 pl-0 py-3 flex justify-between flex-wrap font-bold space-x-2">
        <li className="px-1 border-solid border-r-0 border-y-0 border-l-2 border-gray-300 first:border-none ml-0">
          <Link
            className="flex flex-row items-center gap-1 no-underline text-[#21303A]"
            href=""
          >
            <img
              alt="Doctor Consultation"
              loading="lazy"
              width={20}
              height={20}
              decoding="async"
              src="/images/mobile-bottom-nav/ic_doctor_consultation.svg"
            />
            <span className="text-[10px] leading-[1.1]">
              Doctor
              <br />
              Consultation
            </span>
          </Link>
        </li>
        <li className="px-1 border-solid border-r-0 border-y-0 border-l-2 border-gray-300 ml-1">
          <Link
            className="flex flex-row items-center gap-1 no-underline text-[#21303A]"
            href=""
          >
            <img
              alt="Health Package"
              loading="lazy"
              width={20}
              height={20}
              decoding="async"
              src="/images/mobile-bottom-nav/ic_health_package.svg"
            />
            <span className="text-[10px] leading-[1.1]">
              Health
              <br />
              Package
            </span>
          </Link>
        </li>
        <li className="px-1 border-solid border-r-0 border-y-0 border-l-2 border-gray-300 ml-1">
          <Link
            className="flex flex-row items-center gap-1 no-underline text-[#21303A]"
            href=""
          >
            <img
              alt="Laboratory Test"
              loading="lazy"
              width={20}
              height={20}
              decoding="async"
              src="/images/mobile-bottom-nav/ic_laboratory_test.svg"
            />
            <span className="text-[10px] leading-[1.1]">
              Laboratory
              <br />
              Test
            </span>
          </Link>
        </li>
        <li className="px-1 border-solid border-r-0 border-y-0 border-l-2 border-gray-300 ml-1">
          <Link
            className="flex flex-row items-center gap-1 no-underline text-[#21303A]"
            href=""
          >
            <img
              alt="Pharmacy"
              loading="lazy"
              width={20}
              height={20}
              decoding="async"
              src="/images/mobile-bottom-nav/ic_pharmacy.svg"
            />
            <span className="text-[10px] leading-[1.1]">Pharmacy</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileBottomNav;

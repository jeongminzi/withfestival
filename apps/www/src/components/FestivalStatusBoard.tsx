import FestivalCarousel from "./FestivalCarousel";

const FESTIVALS = {
  ongoing: [
    {
      id: 1,
      univ: "광운대",
      name: "대동제: 비상",
      dates: "04.15 - 04.17",
      imgUrl: "/images/festival_1.webp",
    },
    {
      id: 2,
      univ: "국민대",
      name: "북악축전",
      dates: "04.14 - 04.16",
      imgUrl: "/images/festival_2.webp",
    },
    {
      id: 3,
      univ: "세종대",
      name: "대동제: 군자",
      dates: "04.16 - 04.18",
      imgUrl: "/images/festival_3.jpeg",
    },
    {
      id: 4,
      univ: "세종대",
      name: "대동제: 군자",
      dates: "04.16 - 04.18",
      imgUrl: "/images/festival_1.webp",
    },
    {
      id: 5,
      univ: "세종대",
      name: "대동제: 군자",
      dates: "04.16 - 04.18",
      imgUrl: "/images/festival_3.jpeg",
    },
  ],
  upcoming: [
    {
      id: 6,
      univ: "고려대",
      name: "석탑대동제",
      dates: "05.20 - 05.23",
      imgUrl: "/images/festival_1.webp",
    },
    {
      id: 7,
      univ: "연세대",
      name: "무악대동제",
      dates: "05.21 - 05.24",
      imgUrl: "/images/festival_2.webp",
    },
    {
      id: 8,
      univ: "한양대",
      name: "라치오스",
      dates: "05.22 - 05.24",
      imgUrl: "/images/festival_3.jpeg",
    },
    {
      id: 9,
      univ: "한양대",
      name: "라치오스",
      dates: "05.22 - 05.24",
      imgUrl: "/images/festival_1.webp",
    },
    {
      id: 10,
      univ: "한양대",
      name: "라치오스",
      dates: "05.22 - 05.24",
      imgUrl: "/images/festival_3.jpeg",
    },
  ],
  ended: [
    {
      id: 11,
      univ: "서울대",
      name: "관악모꼬지",
      dates: "03.20 - 03.22",
      imgUrl: "/images/festival_2.webp",
    },
    {
      id: 12,
      univ: "서강대",
      name: "새내기맞이",
      dates: "03.15 - 03.17",
      imgUrl: "/images/festival_3.jpeg",
    },
    {
      id: 13,
      univ: "서강대",
      name: "새내기맞이",
      dates: "03.15 - 03.17",
      imgUrl: "/images/festival_1.webp",
    },
  ],
};

export default function FestivalStatusBoard() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="firsty-container relative px-5 md:px-8">
        <div className="mb-14 flex flex-col items-center text-center md:mb-20">
          <span className="firsty-eyebrow mb-5">
            <span className="firsty-eyebrow-dot" />
            2026 Festival Calendar
          </span>
          <h1 className="firsty-display max-w-3xl">
            지금 이 순간,
            <br />
            <span className="text-[#FFBF0B]">전국 대학 축제</span>가 열리고
            있어요
          </h1>
          <p className="firsty-lead mt-5 max-w-xl">
            축제랑과 함께 진행 중이거나 앞으로 만나볼 캠퍼스 축제를 한 눈에
            확인해 보세요.
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-20">
          <FestivalCarousel
            title="진행 중인 축제"
            badge="LIVE"
            badgeTone="live"
            data={FESTIVALS.ongoing}
          />
          <FestivalCarousel
            title="진행 예정인 축제"
            badge="UPCOMING"
            badgeTone="upcoming"
            data={FESTIVALS.upcoming}
          />
          <FestivalCarousel
            title="끝난 축제"
            badge="CLOSED"
            badgeTone="closed"
            data={FESTIVALS.ended}
          />
        </div>
      </div>

      <div className="pointer-events-none absolute -left-24 top-1/4 -z-0 h-[440px] w-[440px] rounded-full bg-[#FFD43A]/12 blur-[140px]" />
    </section>
  );
}
